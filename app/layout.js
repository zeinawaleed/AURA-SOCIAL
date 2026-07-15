import "./globals.css";
import Splash from "./components/Splash";
import Nav from "./components/Nav";
import ContactModal from "./components/ContactModal";

export const metadata = {
  title: "Aura | Marketing Agency",
  description:
    "Branding, digital marketing, and media production. Add Aura to your Aura.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Splash />
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 px-6 md:px-10 py-8 text-xs text-sage flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Aura Agency. All rights reserved.</span>
          <span>Cairo &amp; Alexandria, Egypt</span>
        </footer>
        <ContactModal />
      </body>
    </html>
  );
}
