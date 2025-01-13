import "./globals.css";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthWrapper from "@/components/AuthWrapper";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Booking Bhai | A booking app for your spaces",
  description: "Booking Bhai | A booking app for your spaces",
};

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang="en">
        <body
          className={`${inter.className} ${poppins.className} bg-gradient-to-b from-[#f7f9fa] via-[#eaf2f7] to-[#f7f9fa] text-gray-800`}
        >
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white shadow-lg p-6">{children}</div>
          </main>

          {/* Footer */}
          <Footer />

          {/* Toast Notifications */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </body>
      </html>
    </AuthWrapper>
  );
}
