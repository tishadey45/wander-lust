import Link from "next/link";
import { Search } from "lucide-react";

const leftLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/destinations", label: "Destinations", active: false },
  { href: "/my-bookings", label: "My Bookings", active: false },
  { href: "/admin", label: "Admin", active: false },
];

const rightLinks = [
  { href: "/profile", label: "Profile" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Sign Up" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#24A3C6] bg-white">
      <div className="relative mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 md:px-6">
        {/* Left navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {leftLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "rounded bg-[#24A3C6]/10 px-3 py-1.5 text-sm font-medium text-[#24A3C6]"
                  : "rounded px-3 py-1.5 text-sm text-gray-700 transition-colors hover:text-[#24A3C6]"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Centered logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-xl font-extrabold tracking-tight text-[#24A3C6] md:text-2xl"
        >
          Wanderlast
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-4 md:gap-5">
          <button
            type="button"
            aria-label="Search"
            className="text-gray-700 transition-colors hover:text-[#24A3C6]"
          >
            <Search className="size-4" />
          </button>
          {rightLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gray-700 transition-colors hover:text-[#24A3C6]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
