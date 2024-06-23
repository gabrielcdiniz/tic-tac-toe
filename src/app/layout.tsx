import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppProviders } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: "A simple tic tac toe game",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <AppProviders>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AppProviders>
  );
}
