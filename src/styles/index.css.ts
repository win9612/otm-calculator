import { style } from "@vanilla-extract/css";

export const html = style({
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
  maxWidth: "100vw",
  height: "100%",
  overflowX: "hidden",
});

export const body = style({
  width: "100%",
  height: "100%",
  backgroundColor: "#FFE0B2",
});

export const main = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

export const container = style({
  width: "800px",
  height: "600px",
  backgroundColor: "#fff",
  borderRadius: "16px",
  boxSizing: "border-box",
  padding: "16px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.2) 0px 2px 4px;",
});
