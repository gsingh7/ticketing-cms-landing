import React from "react";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const links = [
    { name: "Features", href: "#" },
    { name: "Docs", href: "#" },
    { name: "Contact", href: "https://toplevelview.com/contact-us" },
    { name: "Privacy", href: "#" },
  ];

  return (
    <footer className="bg-muted/30 py-12 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0">
            <p className="text-2xl font-bold text-primary">Wavebase</p>
            <p className="text-sm text-foreground/70 mt-1">
              A product of{" "}
              <a
                href="https://toplevelview.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Top Level View
              </a>
            </p>
          </div>

          <nav className="flex flex-wrap gap-8 justify-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4 mt-8 md:mt-0">
            <a
              href="#"
              className="bg-muted p-2 rounded-full hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground/70" />
            </a>
            <a
              href="#"
              className="bg-muted p-2 rounded-full hover:bg-primary/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-foreground/70" />
            </a>
          </div>
        </div>

        <Separator className="bg-foreground/10 my-6" />

        <div className="text-center text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} Toplevelview Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
