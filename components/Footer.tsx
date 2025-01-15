export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} GitHub Analyzer. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
