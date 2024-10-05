/** @format */

import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import "../node_modules/react-day-picker/style.css";
import { Assistant } from "next/font/google";
import { ReservationProvider } from "./_components/ResrvationContext";

const assistant = Assistant({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: " Welcome The Wild Oasis ",
  },
  description: "Luxurios cabin hotel,Located in Italian Dolomites",
};

function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${assistant.className}
        antialiased
        bg-primary-950
        text-primary-100
        min-h-screen
        flex
        flex-col
        relative`}>
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full h-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
