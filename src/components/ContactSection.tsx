import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      username: "@ravikant",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      username: "Ravikant Sharma",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:ravikant@example.com",
      username: "ravikant@example.com",
    },
  ];

  return (
    <section id="contact" className="py-12 relative bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="terminal-text mb-4 block">// contact.kt</span>
          <h2 className="section-heading">
            <span className="text-muted-foreground">fun</span>{" "}
            <span className="android-gradient-text">getInTouch()</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Looking for new opportunities and collaborations. 
            Let's build something amazing together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <link.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">{link.label}</h3>
                <p className="text-sm text-muted-foreground">{link.username}</p>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="card-elevated rounded-2xl p-8 inline-block">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
              <Button
                size="lg"
                className="android-glow bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                asChild
              >
                <a href="mailto:ravikant@example.com">
                  <Send className="mr-2 h-5 w-5" />
                  Send me an Email
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
