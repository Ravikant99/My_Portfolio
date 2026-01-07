import { motion } from "framer-motion";
import { Github, Play, Download, Tv, Gamepad2, HelpCircle, Pill } from "lucide-react";
import { Button } from "./ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ExploreMovie",
      description: "A movie discovery application with modern Android architecture",
      features: [
        "Material Design with Jetpack Compose",
        "TMDB API integration",
        "Pagination & search optimization",
        "YouTube & ExoPlayer integration",
      ],
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines", "Flow", "Retrofit", "Hilt"],
      icon: Play,
      github: "https://github.com/Ravikant99/ExploreMovie",
      gradient: "from-android-red/20 to-android-yellow/20",
    },
    {
      title: "MyLiveTv",
      description: "Live TV streaming app for Android with channel management",
      features: [
        "M3U8 playlist parsing",
        "ExoPlayer for streaming",
        "EPG integration",
        "Channel favorites & categories",
      ],
      technologies: ["Kotlin", "ExoPlayer", "MVVM", "Coroutines", "Retrofit"],
      icon: Tv,
      github: "https://github.com/Ravikant99/MyLiveTv",
      gradient: "from-primary/20 to-android-blue/20",
    },
    {
      title: "SnakeGame-Android-Tv",
      description: "Classic snake game optimized for Android TV with D-pad controls",
      features: [
        "Android TV Leanback support",
        "D-pad navigation controls",
        "Score tracking & persistence",
        "Smooth animations",
      ],
      technologies: ["Kotlin", "Leanback", "Canvas", "Android TV"],
      icon: Gamepad2,
      github: "https://github.com/Ravikant99/SnakeGame-Android-Tv",
      gradient: "from-android-yellow/20 to-primary/20",
    },
    {
      title: "VideoBrowser-AndroidTv",
      description: "Video browser app for Android TV with local file browsing",
      features: [
        "Local media file scanning",
        "Media3 ExoPlayer integration",
        "Leanback browse interface",
        "File metadata extraction",
      ],
      technologies: ["Kotlin", "Media3", "Leanback", "MVVM"],
      icon: Tv,
      github: "https://github.com/Ravikant99/VideoBrowser-AndroidTv",
      gradient: "from-android-purple/20 to-android-blue/20",
    },
    {
      title: "QuizApp",
      description: "Interactive quiz application with multiple categories",
      features: [
        "Multiple quiz categories",
        "Score tracking system",
        "Timer-based questions",
        "Clean UI/UX design",
      ],
      technologies: ["Kotlin", "MVVM", "Coroutines", "Material Design"],
      icon: HelpCircle,
      github: "https://github.com/Ravikant99/QuizApp",
      gradient: "from-android-blue/20 to-android-red/20",
    },
    {
      title: "OneStop-Pharmacy",
      description: "E-commerce pharmacy app for medicine ordering",
      features: [
        "Product catalog browsing",
        "Shopping cart functionality",
        "Order management",
        "User authentication",
      ],
      technologies: ["Java", "Android SDK", "SQLite", "XML"],
      icon: Pill,
      github: "https://github.com/Ravikant99/OneStop-Pharmacy",
      gradient: "from-android-red/20 to-android-purple/20",
    },
    {
      title: "JioCineScape",
      description: "Large-screen video file management application",
      features: [
        "Offline-first caching with RoomDB",
        "Background sync with JioCloud APIs",
        "WorkManager for synchronization",
        "Optimized RecyclerView rendering",
      ],
      technologies: ["Kotlin", "RoomDB", "WorkManager", "Retrofit", "MVVM"],
      icon: Download,
      isWork: true,
      gradient: "from-android-blue/20 to-android-purple/20",
    },
  ];

  return (
    <section id="projects" className="py-12 relative bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="terminal-text mb-4 block">// projects.kt</span>
          <h2 className="section-heading">
            <span className="text-muted-foreground">sealed class</span>{" "}
            <span className="android-gradient-text neon-text">Projects</span>
          </h2>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="card-neon rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300">
                {/* Project header with gradient */}
                <div className={`relative p-6 bg-gradient-to-br ${project.gradient}`}>
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-xl bg-background/80 backdrop-blur flex items-center justify-center">
                      <project.icon className="h-7 w-7 text-primary" />
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-background/80 backdrop-blur hover:bg-background transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.isWork && (
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        Work Project
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                  <p className="text-muted-foreground mt-1">{project.description}</p>
                </div>

                {/* Features */}
                <div className="p-6 flex-grow">
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">→</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="neon-border hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/ravikant99" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
