import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="rounded 3xl bg-green-200">
        {children}
      </body>
    </html>
  );
}
