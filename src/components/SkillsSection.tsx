import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Kotlin", "Java", "C/C++", "SQLite"],
      color: "primary",
    },
    {
      title: "Android Core",
      skills: ["Android SDK", "Jetpack Compose", "XML", "Navigation Component", "Live Data", "Kotlin Flows"],
      color: "android-blue",
    },
    {
      title: "Architecture",
      skills: ["MVVM", "Clean Architecture", "Design Patterns", "OOP", "Offline-First"],
      color: "android-purple",
    },
    {
      title: "Libraries & Tools",
      skills: ["Hilt/Dagger", "Retrofit/OkHttp", "Coroutines", "RoomDB", "WorkManager", "ExoPlayer/Media3"],
      color: "android-yellow",
    },
    {
      title: "DevOps & Analytics",
      skills: ["Git", "Azure DevOps", "Firebase", "Crashlytics", "Kibana", "GCP Cloud"],
      color: "android-red",
    },
  ];

  return (
    <section id="skills" className="py-12 relative bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="terminal-text mb-4 block">// skills.kt</span>
          <h2 className="section-heading">
            <span className="text-muted-foreground">val</span>{" "}
            <span className="android-gradient-text neon-text">technicalSkills</span>
          </h2>
          <div className="neon-line max-w-xs mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="card-neon rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className={`w-3 h-3 rounded-full`}
                  style={{ backgroundColor: `hsl(var(--${category.color}))` }}
                />
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + skillIndex * 0.05 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="card-neon rounded-2xl p-8">
            <h3 className="font-semibold text-lg mb-6 text-center">
              <span className="text-primary">#</span> Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Data Structures & Algorithms",
                "Agile Methodology",
                "Secure App Development",
                "Performance Optimization",
                "Firebase A/B Testing",
                "RESTful APIs",
              ].map((competency, index) => (
                <motion.span
                  key={competency}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/30 hover:shadow-[0_0_15px_hsl(145_100%_50%/0.3)] transition-shadow duration-300"
                >
                  {competency}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
