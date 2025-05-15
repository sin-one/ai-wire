import './globals.css';

export const metadata = {
  title: "AI Wire — Trending AI News",
  description: "The most engaging AI stories from around the web, updated in real time.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gradient-to-b from-white to-gray-50 text-gray-900 font-sans antialiased">
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold tracking-tight text-blue-600">🤖 AI Wire</h1>
            <span className="text-sm text-gray-500">Real-Time AI Trends</span>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">{children}</main>

        <footer className="mt-16 border-t py-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AI Wire — Built by Haroon Anwar.
        </footer>
      </body>
    </html>
  );
}
