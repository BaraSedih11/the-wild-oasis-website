import { Josefin_Sans } from "next/font/google";

import Header from "./_components/Header";
import "@/app/_styles/globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of Italian Dolomites, surrounded by beautiful mountains and dark forests",
  favicon: "/icon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 flex flex-col relative antialiased text-primary-100 min-h-screen`}
      >
        <Header />
        <div className="flex-1 grid px-8 py-12">
          <main className="max-w-7xl w-full mx-auto">{children}</main>
        </div>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
