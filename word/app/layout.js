import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-auto flex items-center rounded 3xl bg-green-500 p-6 shadow-lg outline outline-black/5 dark:shadow-none dark:outline-white/10">
        {children}
      </body>
    </html>
  );
}
