import { motion } from "framer-motion";
import { Building2, Calendar, Users, TrendingUp, Shield, Smartphone, FileBadge } from "lucide-react";

const ExperienceSection = () => {
  const achievements = [
    {
      icon: FileBadge,
      metric: "10+",
      label: "Live Market Projects",
    },
    {
      icon: TrendingUp,
      metric: "99%",
      label: "Crash-Free Sessions",
    },
    {
      icon: Shield,
      metric: "25%",
      label: "Faster Load Times",
    },
    {
      icon: Smartphone,
      metric: "15%",
      label: "Engagement Boost",
    },
  ];

  const responsibilities = [
    "Designed and maintained features for JioTV+ Android applications for Android TV, Fire TV, JioTeleOS(AOSP) and Set-Top Boxes",
    "Developed core features including Search Page Revamp with voice search, In-App Notifications, Content Rail Refresh",
    "Optimized image loading using ThumbHash and caching strategies, reducing perceived load times by 25%",
    "Improved app reliability using Firebase Crashlytics, increasing crash-free sessions from 94% to 99%",
    "Implemented Network and Device Restriction and Root Detection mechanisms improving security by 10%",
    "Conducted Firebase A/B testing to evaluate UI feature experiments",
    "Contributed to JioCineScape with RoomDB for offline-first caching and background sync with WorkManager",
  ];

  return (
    <section id="experience" className="py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="terminal-text mb-4 block">// experience.kt</span>
          <h2 className="section-heading">
            <span className="text-muted-foreground">object</span>{" "}
            <span className="android-gradient-text">WorkExperience</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-elevated rounded-xl p-6 text-center group hover:border-primary/50 transition-all"
            >
              <achievement.icon className="h-6 w-6 text-primary mx-auto mb-3" />
              <div className="text-3xl font-black android-gradient-text mb-1">
                {achievement.metric}
              </div>
              <div className="text-sm text-muted-foreground">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-elevated rounded-2xl p-8 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Android Developer (SDE-1)</h3>
                  <p className="text-primary font-medium">Reliance Jio Platforms Limited</p>
                  <p className="text-muted-foreground text-sm">JioTV+ Team • Mumbai</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="font-mono text-sm">Oct 2023 – Present</span>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              {responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{responsibility}</p>
                </motion.div>
              ))}
            </div>

            {/* Technologies used */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "RoomDB", "WorkManager", "Media3", "Retrofit"].map((tech) => (
                  <span key={tech} className="skill-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
