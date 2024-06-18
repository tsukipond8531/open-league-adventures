/// <reference types="vite/client" />

import type { PORTRAITS } from "$src/types/portraits";

export const portraits = import.meta.glob("./*.png", {
  query: "?url",
  eager: true,
  import: "default",
}) as Record<PORTRAITS, string>;
