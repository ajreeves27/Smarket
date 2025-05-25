import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl dark:text-gray-100">Smarket Logo Here</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-2 mr-2 items-center">
            <li>
              <Link
                href="/"
                className="text-sm text-gray-800 dark:text-white px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
                style={{ height: "40px" }} // Ensures same height as input
              >
                Home
              </Link>
            </li>
            <li>
              <input
                type="text"
                placeholder="Search stocks..."
                className="text-sm px-4 py-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                style={{ height: "40px" }} // Match Home link height
                disabled
              />
            </li>
          </ul>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
