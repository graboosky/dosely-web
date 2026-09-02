import type { Metadata } from "next";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Dosely",
  description:
    "A calm place for the things you take every day. Dosely rings a real alarm for every dose, and everything stays on your iPhone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          <header className="site">
            <a href={`${base}/`}>Dosely</a>
            <nav>
              <a href={`${base}/privacy/`}>Privacy</a>
              <a href={`${base}/terms/`}>Terms</a>
              <a href={`${base}/support/`}>Support</a>
            </nav>
          </header>
          {children}
          <footer className="site">
            <span>Dosely does not provide medical advice.</span>
            <a href={`${base}/privacy/`}>Privacy Policy</a>
            <a href={`${base}/terms/`}>Terms of Use</a>
          </footer>
        </div>
      </body>
    </html>
  );
}
