import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/diet-picnic-logo.png";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#why", label: "لماذا نحن؟" },
  { href: "#services", label: "الخدمات" },
  { href: "#packages", label: "الباقات" },
  { href: "#team", label: "فريقنا" },
  { href: "#contact", label: "التواصل" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Diet Picnic" className="h-10 md:h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/80 hover:text-coral font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/bmi"
            className="text-[#006b5b] border border-[#006b5b]/30 bg-[#006b5b]/5 hover:bg-[#006b5b]/10 font-semibold px-4 py-2 rounded-full text-sm transition-all"
          >
            حاسبة BMI
          </Link>
          <a
            href="#register"
            className="bg-coral text-white font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            ابدأ رحلتك
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-3 shadow-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-foreground/80 hover:text-coral font-medium py-2"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/bmi"
            onClick={() => setOpen(false)}
            className="text-[#006b5b] border border-[#006b5b]/30 bg-[#006b5b]/5 font-semibold py-2.5 px-4 rounded-full text-center text-sm"
          >
            حاسبة BMI
          </Link>
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="bg-coral text-white font-bold px-5 py-2.5 rounded-full text-center shadow-md"
          >
            ابدأ رحلتك
          </a>
        </div>
      )}
    </header>
  );
}
