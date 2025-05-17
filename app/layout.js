import { Red_Hat_Display, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./styles/globals.css";
import { NavigationProvider } from "./_context/NavigationContext";
import { BodyScrollManager } from "./_components";

const redHat = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
});

const nippoExtraLight = localFont({
  src: "../public/assets/fonts/Nippo-Extralight.otf",
  variable: "--font-nippo-extraLight",
});
const nippoLight = localFont({
  src: "../public/assets/fonts/Nippo-Light.otf",
  variable: "--font-nippo-light",
});
const nippoRegular = localFont({
  src: "../public/assets/fonts/Nippo-Regular.otf",
  variable: "--font-nippo-regular",
});
const nippoMedium = localFont({
  src: "../public/assets/fonts/Nippo-Medium.otf",
  variable: "--font-nippo-medium",
});
const nippoBold = localFont({
  src: "../public/assets/fonts/Nippo-Bold.otf",
  variable: "--font-nippo-bold",
});
const clashBold = localFont({
  src: "../public/assets/fonts/ClashDisplay-Bold.otf",
  variable: "--font-clash-bold",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/svg/tab-icon.svg" sizes="any" />
        <title>Jordan's Portfolio</title>
      </head>
      <body
        className={`${redHat.variable} ${nippoExtraLight.variable} ${nippoLight.variable} ${nippoRegular.variable}  ${nippoMedium.variable} ${nippoBold.variable} ${clashBold.variable}`}
      >
        <NavigationProvider>
          <BodyScrollManager />
          {children}
        </NavigationProvider>
      </body>
    </html>
  );
}
