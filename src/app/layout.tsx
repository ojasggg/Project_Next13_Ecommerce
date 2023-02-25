import "../styles/globals.css";
import { Poppins } from "@next/font/google";

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
      <body>{children}</body>
    </html>
  );
}
