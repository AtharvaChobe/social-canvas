import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Canvas",
  description: "Generate images for you social profiles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        {children}
      </body>
    </html>
  );
}
