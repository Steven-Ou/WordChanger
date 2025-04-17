import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-auto flex items-center rounded 3xl bg-green-500 ">
        {children}
      </body>
    </html>
  );
}
