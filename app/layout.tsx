import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: "AI Wire — Trending AI News",
  description: "The most engaging AI stories from around the web, updated in real time.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 font-sans antialiased">
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l.707.707m13.556 13.556l.707.707M3 12h1m16 0h1m-8.485 8.485l.707-.707M4.222 19.778l.707-.707"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white hover:underline hover:decoration-blue-400/70 transition duration-200">
                NewsWhip <span className="text-blue-400">AI Wire</span>
              </h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">{children}</main>

        <footer className="mt-16 border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} AI Wire — Built by Haroon Anwar.
        </footer>
      </body>
    </html>
  );
}
