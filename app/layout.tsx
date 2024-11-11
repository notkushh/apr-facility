import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationBar } from "@/components/NavigationBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "APR Facilities Services",
  description: "APR Facilities Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased main-layout`}
      >
        <SidebarProvider defaultOpen={false}>
          <main className="pt-[60px] w-full pb-[100px] relative text-gray-500 text-justify">
            <NavigationBar />
            {children}
            <Footer />
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
