import Inter from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Wellness Wins</title>
        <meta
          name="description"
          content="Wellness Wins is a micro-SaaS product designed to help health and wellness businesses create and manage effective wellness programs for their clients."
        />
        <meta name="keywords" content="health and wellness, wellness programs, micro-SaaS" />
      </head>
      <body className={inter.className + ' bg-white'}>
        <main>
          <nav className="fixed top-0 z-10 w-full bg-white py-2 lg:py-4 border-b border-gray-200">
            <div className="container mx-auto flex justify-between items-center">
              <a href="#" className="text-lg font-bold text-gray-800">
                Wellness Wins
              </a>
              <button className="lg:hidden bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-0 active:bg-gray-400 transition duration-150 ease-in-out">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <ul className="flex lg:flex lg:items-center lg:space-x-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out">
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container mx-auto py-6 lg:py-12">
            <div className="lg:flex">
              <aside className="lg:w-64 lg:py-6">
                <div className="bg-gray-200">
                  <div className="container mx-auto py-6 lg:py-12">
                    <h3 className="text-lg font-bold text-gray-800 uppercase lg:text-lg">
                      Business Menu
                    </h3>
                    <ul className="list-none">
                      <li className="py-2">
                        <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out">
                          Business Profile
                        </a>
                      </li>
                      <li className="py-2">
                        <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out">
                          Settings
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
              <main className="lg:w-full">
                <div className="container mx-auto py-6 lg:py-12">
                  <h3 className="text-lg font-bold text-gray-800 uppercase lg:text-lg">
                    Your Business
                  </h3>
                  <ul>
                    {children}
                  </ul>
                </div>
              </main>
            </div>
          </div>
        </main>
        <footer className="bg-gray-200">
          <div className="container mx-auto py-4">
            <ul className="list-none">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out">
                  Contact
                </a>
              </li>
            </ul>
            <p className="text-gray-600 text-center pt-4">
              &copy; 2023 Wellness Wins
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}