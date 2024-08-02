import { FlareCursor, Footer, Header, Providers, TopButton } from "@/components";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import Head from "./head";

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn(
            'antialiased min-h-screen transition !bg-[#080809] text-neutral-50 aeonikFont',
            font.className,
        )}>

            <head>
                <ColorSchemeScript />
                <Head />
            </head>

            <body className="h-full bg-[#080809] text-neutral-50">

                <Providers>
                    <MantineProvider>
                        <Header />
                        <FlareCursor />
                        {children}
                        <TopButton />
                        <Footer />
                    </MantineProvider>
                </Providers>

            </body>
        </html>
    );
};
