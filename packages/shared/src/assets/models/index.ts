/// <reference types="vite/client" />

import type { MODELS } from "$src/types";

export const models = import.meta.glob("./*.glb", {
  query: "?url",
  eager: true,
import: "default",
}) as Record<MODELS, string>;
/*
import KnightModel from "./Knight-transformed.glb?url";
import MageModel from "./Knight-transformed.glb?url";
import SkeletonModel from "./Knight-transformed.glb?url";

export const models = {
  knight: KnightModel,
  mage: MageModel,
  skeleton: SkeletonModel,
}*/