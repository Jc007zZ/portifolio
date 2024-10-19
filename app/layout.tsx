import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import NavBar  from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: 'Jc007zZ',
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
    <html suppressHydrationWarning lang="en" className="overflow-x-hidden">
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
            <main className="flex mb-32 min-h-screen w-[100vw] flex-col items-center pt-16 flex-grow overflow-x-hidden">
              {children}
            </main>
            <footer className="w-full h-[5rem] flex items-center justify-center p-4">
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Jc007zZ</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
