/// <reference types="vite/client" />

import type { ICONS } from "$src/types/icons";

export const icons = import.meta.glob("./*.png", {
  query: "?url",
  eager: true,
  import: "default",
}) as Record<ICONS, string>;

