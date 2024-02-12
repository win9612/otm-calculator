import type { Metadata } from "next";
import "./globals.css";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { body, html } from "@/styles/index.css";

dayjs.extend(duration);

export const metadata: Metadata = {
  title: "오늘 퇴근 몇시",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={html}>
      <body className={body}>{children}</body>
    </html>
  );
}
