import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">R</span>
            </div>
            <span className="font-semibold">
              Ravikant<span className="text-primary">.</span>dev
            </span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-android-red" /> using
            <span className="text-primary">React</span> &
            <span className="text-primary">Tailwind CSS</span>
          </p>

          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Ravikant Sharma
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
