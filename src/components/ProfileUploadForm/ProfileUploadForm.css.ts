import { style } from "@vanilla-extract/css";

export const fileContainer = style({
  display: "flex",
  alignItems: "center",
  width: "320px",
  height: "60px",
  borderRadius: "32px",
  boxSizing: "border-box",
  padding: "12px",
  boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
  gap: "12px",
});

export const fileLabel = style({
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
