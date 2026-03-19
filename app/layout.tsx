'use client'



import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import '@/css/homeView.css'
import '@/css/animations.css'
import '@/css/fieldSelect.css'
import "@/css/topicSelect.css"



const metadata: Metadata = {
  title: "Later",
  description: "Just do it,don't say later",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          {children}
        </body>
      </Provider>
    </html>
  );
}
