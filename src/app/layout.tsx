import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import GlobalProvider from "@/context";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrybeTunes",
  description: "Listen the best musics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
