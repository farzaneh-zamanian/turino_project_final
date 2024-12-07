import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head"; // Import Head from next/head



// FONT CONFIG
const yekanFont = localFont({
  src: "../public/fonts/Yekan.woff2",
});
 
export const metadata = {
  title: "Turino app",
  description: "Tourism tour booking"

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
           <Head>
        {/* Add the viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body  className={`${yekanFont.className} text-textColor overflow-x-hidden antialiased`}>
      {children}
    </body>
    </html >
  );
}
