import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 bottom-0">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Project Suggester</h3>
            <p className="text-sm">
              Project Suggester helps developers analyze their GitHub profiles
              and discover personalized project ideas powered by AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="hover:text-gray-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-gray-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://github.com/varundeva/project-suggester" target="_blank">
                <svg
                  className="w-6 h-6 hover:text-gray-300"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2c-3.34.73-4-1.5-4-1.5-.55-1.4-1.34-1.78-1.34-1.78-1.1-.74.08-.72.08-.72 1.22.08 1.88 1.25 1.88 1.25 1.08 1.88 2.82 1.34 3.5 1.03.1-.8.4-1.34.7-1.65-2.67-.3-5.47-1.34-5.47-6A4.8 4.8 0 0 1 5 5.82a4.46 4.46 0 0 1 .12-3.24s1.01-.3 3.3 1.2a11.43 11.43 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 2.1.2 3.7.1 4.1.7.8 1.1 1.9 1.1 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        Copyright  &copy; {new Date().getFullYear()} Project Suggester. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
