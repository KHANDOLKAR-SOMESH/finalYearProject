
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-black via-green-950 to-black bg-no-repeat overflow-x-hidden ">
        {children}
      </body>
    </html>
  );
}



