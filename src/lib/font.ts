import localFont from "next/font/local";

const Aeonik = localFont({
    src: [
        {
            path: "../../public/fonts/AeonikPro-Thin.woff2",
            style: "thin",
            weight: "100",
        },
        {
            path: "../../public/fonts/AeonikPro-Light.woff2",
            style: "light",
            weight: "300",
        },
        {
            path: "../../public/fonts/AeonikPro-Regular.woff2",
            style: "normal",
            weight: "400",
        },
        {
            path: "../../public/fonts/AeonikPro-Medium.woff2",
            style: "medium",
            weight: "500",
        },
        {
            path: "../../public/fonts/AeonikPro-Bold.woff2",
            style: "bold",
            weight: "700",
        },
        {
            path: "../../public/fonts/AeonikPro-Black.woff2",
            style: "black",
            weight: "900",
        }
    ],
    variable: "--font-aeonik",
    display: "swap",
});

export default Aeonik;
