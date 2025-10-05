"use client";
import { Global } from "@emotion/react";
import { globalStyles } from "./index";

export function GlobalStyles() {
  return <Global styles={globalStyles} />;
}