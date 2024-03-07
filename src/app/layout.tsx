import { Footer, Header, Providers, TopButton } from "@/components";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "./head";


const font = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//     title: "Shreyas Sihasane 👋",
//     description: "Shreyas is a Full Stack Developer and Android Developer",
//     icons: {
//         icon: [
//             "/favicon.ico",
//         ]
//     }
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn(
            'antialiased min-h-screen transition !bg-[#080809] text-neutral-50 aeonikFont',
            font.className,
            // fontBold.className,
            // fontLight.className,
            // Aeonik.variable,
        )}>

            <head>
                <ColorSchemeScript />
                <Head />
            </head>

            <body className="h-full bg-[#080809] text-neutral-50">

                <Providers>
                    <MantineProvider>
                        <Header />
                        {/* <FlareCursor /> */}
                        {children}
                        <TopButton />
                        <Footer />
                    </MantineProvider>
                </Providers>

            </body>
        </html>
    );
};
