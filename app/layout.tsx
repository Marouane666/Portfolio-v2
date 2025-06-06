import type { Metadata } from "next";
import "./globals.css";
import { TailwindSize } from "@/components/TailwindSize";
import { Space_Grotesk } from "next/font/google";
import { MusicProvider } from "@/components/context/MusicContext";

//import { Scroll } from "@react-three/drei";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choose the weights you need
  variable: "--font-space-grotesk",
  //display: "swap", // ensures text is displayed immediately using fallback, then swapped
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Marouane's Portfolio",
  description: "Welcome To My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <MusicProvider>
          {children}
        <TailwindSize />
        </MusicProvider>
        
      </body>
    </html>
  );
}
