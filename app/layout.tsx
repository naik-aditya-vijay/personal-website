import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Aditya Naik",
  description: "Personal website of Aditya Naik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}