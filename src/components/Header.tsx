import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FFFDF7]/95 backdrop-blur-sm border-b border-[#D4E8D4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🌿</span>
            <span className="text-lg font-bold text-[#3D3D3D] group-hover:text-[#84B88E] transition-colors">
              Utah Native Plants
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-[#5A5A5A] hover:text-[#84B88E] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[#5A5A5A] hover:text-[#84B88E] transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
