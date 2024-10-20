import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "Jc007zZ",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="overflow-x-hidden" lang="en">
      <head />
      <body
        className={clsx(
          "flex flex-col items-center min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col ">
            <NavBar />
            <main className="flex min-h-screen w-[100vw] flex-col items-center pt-16 flex-grow ">
              {children}
            </main>
            <footer className="w-full h-[5rem] flex items-center justify-center p-4">
              <p className="text-default-600">
                Powered by{" "}
                <a
                  className="text-primary hover:underline hover:cursor-pointer"
                  href="https://discordapp.com/users/428365185246560258"
                  rel="noreferrer"
                  target="_blank"
                >
                  Jc007zZ
                </a>
              </p>
            </footer>
          </div>
        </Providers>
        <script
          crossOrigin="anonymous"
          src="https://kit.fontawesome.com/f7197b4219.js"
        />
      </body>
    </html>
  );
}
