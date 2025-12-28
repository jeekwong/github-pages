import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "wuhan.today",
    default: "wuhan.today",
  },
  description: "This site displays the progress of the year.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://www.bilibili.com/favicon.ico?v=1"
        ></link>
      </head>
      <body className={`${poppins.className} season6-theme`}>
        <NextTopLoader color="#175dee" showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
