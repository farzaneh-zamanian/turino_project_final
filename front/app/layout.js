import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head"; // Import Head from next/head
import Layout from "@/components/templates/Layout";



// FONT CONFIG
const yekanFont = localFont({
  src: "../public/fonts/Yekan.woff2",
});

export const metadata = {
  title: {
    absolute:"",
    default:"Turino App",
    template:"Turino App | %s ",
  },
  description: "Tourism tour booking",
  keywords: "tour, offroad,travel",

};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <Head>
        {/* Add the viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${yekanFont.className} text-textColor overflow-x-hidden antialiased`}>

        <Layout children={children} />
      </body>
    </html >
  );
}
