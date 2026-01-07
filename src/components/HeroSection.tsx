import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import PhoneMockup from "./PhoneMockup";
import TvMockup from "./TvMockup";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Terminal-style intro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-6"
            >
              <div className="card-neon rounded-lg px-4 py-2 inline-flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-android-red neon-pulse" />
                <span className="w-3 h-3 rounded-full bg-android-yellow" />
                <span className="w-3 h-3 rounded-full bg-primary neon-glow" />
                <code className="terminal-text ml-2">$ whoami</code>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-4"
            >
              Hi, I'm{" "}
              <span className="android-gradient-text neon-text">Ravikant</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-6"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                Android Developer{" "}
                <span className="text-primary">@</span> Reliance Jio
              </h2>
              <p className="text-muted-foreground mt-2 font-mono text-sm">
                // Building for 4M+ daily active users
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Crafting scalable, high-performance apps for Android phones, TV & large screens 
              with <span className="text-primary">Kotlin</span>, <span className="text-primary">Jetpack Compose</span> & <span className="text-primary">Clean Architecture</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="neon-glow neon-pulse bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="neon-border hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/ravikant99" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:ravikant@example.com"
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Device Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* TV Mockup - Background */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 z-0 opacity-90 hidden md:block"
              >
                <TvMockup />
              </motion.div>
              
              {/* Phone Mockup - Foreground */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="relative z-10"
              >
                <PhoneMockup />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className="h-8 w-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
