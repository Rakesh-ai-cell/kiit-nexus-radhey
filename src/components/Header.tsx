import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    {
      name: "Academics",
      href: "#academics",
      submenu: ["Schools & Programs", "Faculty", "Research", "Centers of Excellence"]
    },
    {
      name: "Admissions",
      href: "#admissions",
      submenu: ["KIITEE 2026", "Programs", "Scholarships", "How to Apply"]
    },
    {
      name: "Campus Life",
      href: "#campus-life",
      submenu: ["Student Life", "Sports", "Clubs & Societies", "Campus Tour"]
    },
    {
      name: "Placements",
      href: "#placements",
      submenu: ["Career Services", "Top Recruiters", "Success Stories", "Internships"]
    },
    {
      name: "Research",
      href: "#research",
      submenu: ["Innovation", "Publications", "Collaborations", "Grants"]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">KIIT</h1>
              <p className="text-xs text-muted-foreground -mt-1">University</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300 py-2"
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </a>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Student Portal
            </Button>
            <Button variant="cta" size="sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background">
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-foreground hover:text-primary transition-colors duration-300 py-2 font-medium"
                  >
                    {item.name}
                  </a>
                  <div className="ml-4 space-y-2">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  Student Portal
                </Button>
                <Button variant="cta" size="sm" className="w-full">
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;