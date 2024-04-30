import 'dotenv/config'

import { Context, NarrowedContext, Telegraf, Markup } from "telegraf";
import { message } from "telegraf/filters";
import { Update, Message } from "telegraf/typings/core/types/typegram";

const chat_id = 1614290577;

type BotContext = NarrowedContext<
  Context<Update>,
  Update.MessageUpdate<Record<"text", {}> & Message.TextMessage>
>;

const actions: Record<string, (ctx: BotContext) => Promise<unknown>> = {
  "/hello": async (ctx: BotContext) => {
    await ctx.telegram.sendMessage(
      ctx.message.chat.id,
      `Hello ${ctx.message.chat.id}`
    );
  },
  "/start": async (ctx: BotContext) => {
    /*
    await ctx.reply("Choose one of the following actions"),
      {
        reply_markup: {
          inline_keyboard: [
            [
              Markup.button.callback("Option 1", "1"),
              { text: "Option 1", callback_data: "1" },
              { text: "Option 2", callback_data: "2" },
            ],
          ],
        },
      };
      */

    return ctx.reply("Choose one of the following actions", {
      ...Markup.inlineKeyboard([
        Markup.button.callback("Option 1", "1"),
        Markup.button.url("Start Playing 🕹️", "https://t.me/Azoya_test_bot/app_entry"),
      ]),
    });
  },
};

async function main() {
  const bot = new Telegraf(process.env.TELEGRAM_HTTP_TOKEN);

  bot.action("delete", async (ctx) => {
    ctx.deleteMessage();
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

  //bot.telegram.sendMessage(chad_id, "Hello Is this the right chat? poggies");

  console.log("it lives");

  await bot.launch();
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
}

main()
  .catch(console.error)
  .finally(() => process.exit(0));
