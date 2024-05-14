import "dotenv/config";

import { Context, NarrowedContext, Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";
import { Update, Message } from "telegraf/typings/core/types/typegram";
import { GAME_URL } from "./constants";

import { createClient } from "@supabase/supabase-js";
import { type Database } from "./types/supabase";

const supabase = createClient<Database>(
  process.env.PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

async function main() {
  // TODO: switch between dev and prod token
  const bot = new Telegraf(process.env.TELEGRAM_DEV_HTTP_TOKEN!);

  bot.action("delete", async (ctx) => {
    ctx.deleteMessage();
  });

  bot.command("start", async (ctx) => {
    const chat = await ctx.telegram.getChat(ctx.chat.id);
    await supabase.from("player").insert({ id: chat.id.toString() });

    return ctx.replyWithMarkdownV2(
      `🎮 Get Ready For Adventure\\! 🚀

💀 Build a team, Fight monsters\\! 💀
    
Eternal Quest is inspired by old\\-school turn\\-based JRPGs, now on Telegram\\!`,
      {
        ...Markup.inlineKeyboard([
          Markup.button.url("Start Playing 🕹️", GAME_URL),
        ]),
      }
    );
  });

  bot.command("hey", async (ctx) => {
    ctx.sendMessage("Hello friend");
  });

  bot.command("top_players", async (ctx) => {
    const { data: players, count } = await supabase
      .from("playerpower")
      .select("*", { count: "planned" })
      .order("playerpower", { ascending: false })
      .limit(10);
    console.dir(count);

    return ctx.replyWithMarkdownV2(`\\# Top 10 Players\n
${players
  ?.map((p, i) => {
    return `${i + 1}\\. ${p.playerid} \\- ${p.playerpower} power`;
  })
  .join("\n")}`);
  });

  bot.command("top_clans", async (ctx) => {
    const { data: clans, count } = await supabase
      .from("clanpowerlevel")
      .select("*", { count: "planned" })
      .order("clanpower", { ascending: false })
      .limit(10);
    console.dir(count);

    return ctx.replyWithMarkdownV2(`\\# Top 10 Clans\n
${clans
  ?.map((c, i) => {
    return `${i + 1}\\. ${c.clanname} \\- ${c.clanpower} power`;
  })
  .join("\n")}`);
  });

  bot.on(message("text"), async (ctx) => {
    // FIXME: we need to check for the actual message sent by the user
    // Explicit usage
    //ctx.sendMessage(`Hello friend`);

    const messageAction = ctx.message.text.split(" ")[0];

    const action = actions[messageAction];
    if (action) {
      await action(ctx);
    }
  });

  console.log("STARTING BOT");

  await bot.launch();
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
}

main()
  .catch(console.error)
  .finally(() => process.exit(0));
