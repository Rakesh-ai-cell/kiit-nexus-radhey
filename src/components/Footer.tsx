import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About KIIT", href: "#about" },
    { name: "Admissions", href: "#admissions" },
    { name: "Academics", href: "#academics" },
    { name: "Research", href: "#research" },
    { name: "Campus Life", href: "#campus-life" },
    { name: "Placements", href: "#placements" }
  ];

  const resources = [
    { name: "Student Portal", href: "#portal" },
    { name: "Faculty Portal", href: "#faculty" },
    { name: "Library", href: "#library" },
    { name: "E-Learning", href: "#elearning" },
    { name: "Academic Calendar", href: "#calendar" },
    { name: "Examination", href: "#exam" }
  ];

  const support = [
    { name: "Contact Us", href: "#contact" },
    { name: "Help Desk", href: "#help" },
    { name: "Downloads", href: "#downloads" },
    { name: "FAQs", href: "#faqs" },
    { name: "Grievance", href: "#grievance" },
    { name: "Feedback", href: "#feedback" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* KIIT Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-xl">K</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">KIIT</h3>
                  <p className="text-primary-foreground/80 text-sm">University</p>
                </div>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Deemed to be University committed to excellence in education, research, and innovation. 
                Shaping leaders for tomorrow's world.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/90">
                      Campus 1: KIIT Road, Bhubaneswar, Odisha - 751024
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <p className="text-primary-foreground/90">+91-674-272-7777</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <p className="text-primary-foreground/90">info@kiit.ac.in</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 hover:underline"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3 mb-8">
                {support.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="bg-primary-light/20 rounded-lg p-6">
                <h5 className="font-semibold mb-3">Stay Updated</h5>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Subscribe to our newsletter for latest updates and news.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 rounded bg-background text-foreground text-sm"
                  />
                  <Button variant="secondary" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-light/20 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-primary-foreground/80 text-sm">
                © 2024 KIIT University. All rights reserved. | 
                <a href="#" className="hover:text-secondary transition-colors duration-300 ml-1">Privacy Policy</a> | 
                <a href="#" className="hover:text-secondary transition-colors duration-300 ml-1">Terms of Service</a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/80 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary-light/20 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 transform hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;