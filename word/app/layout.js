import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-auto flex items-center bg-green-500 p-6 shadow-lg outline
      animate-backgroundColor
      ">
        {children}
      </body>
    </html>
  );
}
