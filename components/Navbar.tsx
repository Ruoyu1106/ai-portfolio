import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-900 transition hover:opacity-80"
        >
          Ruoyu Zhang
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/about" className="transition hover:text-gray-900">
            About
          </Link>
          <Link href="/projects" className="transition hover:text-gray-900">
            Projects
          </Link>
          <Link href="/contact" className="transition hover:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}