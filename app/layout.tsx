import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import NavBar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      className={`overflow-x-hidden ${inter.variable}`}
      lang={locale}
    >
      <head />
      <body
        className={clsx(
          "flex flex-col items-center min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="relative flex flex-col">
              <div className="absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
                <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="white"
                />
              </div>
              <NavBar />
              <main className="flex min-h-screen max-w-7xl flex-col items-center pt-16 flex-grow px-4 md:px-16 ">
                {children}
                <Analytics />
                <SpeedInsights />
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
        </NextIntlClientProvider>
        <script
          crossOrigin="anonymous"
          src="https://kit.fontawesome.com/f7197b4219.js"
        />
      </body>
    </html>
  );
}
