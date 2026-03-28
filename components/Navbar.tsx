import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-gray-900">
          Ruoyu Zhang
        </Link>

        <nav className="flex gap-6 text-sm text-gray-700">
          <Link href="/" className="hover:text-black">
            About
          </Link>
          <Link href="/projects" className="hover:text-black">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}