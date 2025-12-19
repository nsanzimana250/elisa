import { MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/250791899865" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/ni.elisa.10" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/_real_t.elisa_?igsh=ZXRzZGVucnZoZG9t" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/twizerimana-elisa" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
