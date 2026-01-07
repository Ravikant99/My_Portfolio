import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="terminal-text mb-4 block">// education.kt</span>
          <h2 className="section-heading">
            <span className="text-muted-foreground">data class</span>{" "}
            <span className="android-gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-elevated rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-android-blue/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-7 w-7 text-android-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold">B.Tech in Computer Science</h3>
                <p className="text-primary font-medium">IIIT Bhagalpur</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Institution</span>
                <span className="font-medium">Indian Institute of Information Technology</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Duration</span>
                <span className="font-mono">2019 – 2023</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-muted-foreground">CGPA</span>
                <span className="text-primary font-bold text-lg">7.86 / 10</span>
              </div>
            </div>
          </motion.div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Professional Certificate</h3>
                <p className="text-primary font-medium">Meta</p>
              </div>
            </div>

            <div className="card-elevated rounded-xl p-6 bg-gradient-to-br from-primary/5 to-android-blue/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-android-blue/20 flex items-center justify-center">
                  <span className="text-android-blue font-bold">M</span>
                </div>
                <div>
                  <p className="font-semibold">Meta Android Developer</p>
                  <p className="text-sm text-muted-foreground">Professional Certificate</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Platform: Coursera</span>
                <a
                  href="#"
                  className="flex items-center gap-1 text-primary text-sm hover:underline"
                >
                  View Credential
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Comprehensive training in Android development best practices,
                covering modern architecture patterns and industry standards.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
