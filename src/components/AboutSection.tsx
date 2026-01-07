import { motion } from "framer-motion";
import { Smartphone, Tv, Shield, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native Android apps with Kotlin & Jetpack Compose",
    },
    {
      icon: Tv,
      title: "TV & Large Screen",
      description: "Android TV, Fire TV & Set-Top Box development",
    },
    {
      icon: Shield,
      title: "Secure Development",
      description: "Root detection, network restrictions & secure architecture",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized apps serving 4M+ daily active users",
    },
  ];

  return (
    <section id="about" className="py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="terminal-text mb-4 block">// about_me.kt</span>
          <h2 className="section-heading">
            <span className="text-muted-foreground">fun</span>{" "}
            <span className="android-gradient-text">getAboutMe()</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-elevated rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-android-red" />
                <span className="w-3 h-3 rounded-full bg-android-yellow" />
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground text-sm font-mono ml-2">AboutMe.kt</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <p>
                  <span className="text-android-purple">class</span>{" "}
                  <span className="text-android-yellow">AndroidDeveloper</span> {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-android-blue">val</span> experience = <span className="text-primary">"2.5+ years"</span>
                </p>
                <p className="pl-4">
                  <span className="text-android-blue">val</span> company = <span className="text-primary">"Reliance Jio"</span>
                </p>
                <p className="pl-4">
                  <span className="text-android-blue">val</span> education = <span className="text-primary">"IIIT Bhagalpur"</span>
                </p>
                <p>{"}"}</p>
              </div>

              <div className="mt-6 text-muted-foreground leading-relaxed">
                <p>
                  Android Developer with <span className="text-foreground">2.5+ years</span> of experience 
                  designing and building scalable, high-performance mobile applications for 
                  <span className="text-primary"> Android phones</span> and 
                  <span className="text-android-blue"> large-screen Android TV</span> platforms.
                </p>
                <p className="mt-4">
                  Strong expertise in <span className="text-foreground">Kotlin, Java, Jetpack Compose, 
                  MVVM, Coroutines, RoomDb, Retrofit, Hilt</span> and <span className="text-foreground">Media3</span>. 
                  Proven ability to deliver secure, maintainable, and user-focused applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="card-elevated rounded-xl p-6 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
