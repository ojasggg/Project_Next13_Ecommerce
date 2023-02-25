import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import { Footer, Navbar, Sidebar } from "../components";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.className}>
      <head />
      <body>
        <div className="flex flex-col">
          <Navbar />
          <div className="flex">
            <div className="flex-1">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
