import "~/styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider";
import Navbar from "~/components/Navbar";
import { TRPCReactProvider } from "~/trpc/react";

import { Inter } from "next/font/google";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "ShortMe - Simple URL Shortener",
  description:
    "Fullstack NextJS T3 app using create-t3-stack. Typescript, tRPC,DrizzleORM,NeonDB, Shadcn/ui, Tailwind",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider headers={headers()}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="container">{children}</main>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
