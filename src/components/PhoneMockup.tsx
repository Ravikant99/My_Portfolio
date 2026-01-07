import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const PhoneMockup = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const skills = [
    { name: "Kotlin", level: 90, color: "primary" },
    { name: "Jetpack Compose", level: 85, color: "android-blue" },
    { name: "MVVM", level: 88, color: "android-yellow" },
    { name: "Java", level: 82, color: "android-red" },
    { name: "Android SDK", level: 92, color: "primary" },
    { name: "Coroutines", level: 87, color: "android-purple" },
    { name: "RoomDB", level: 85, color: "android-blue" },
    { name: "Retrofit", level: 88, color: "android-yellow" },
    { name: "Hilt/Dagger", level: 80, color: "android-red" },
    { name: "Navigation", level: 85, color: "primary" },
    { name: "LiveData", level: 86, color: "android-blue" },
    { name: "WorkManager", level: 78, color: "android-purple" },
    { name: "ExoPlayer/Media3", level: 82, color: "android-yellow" },
    { name: "Leanback", level: 80, color: "primary" },
    { name: "Clean Architecture", level: 85, color: "android-red" },
    { name: "Design Patterns", level: 83, color: "android-blue" },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling) return;

    let animationId: number;
    let scrollPos = 0;
    const scrollSpeed = 0.5;

    const autoScroll = () => {
      scrollPos += scrollSpeed;
      if (scrollPos >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
        scrollPos = 0;
      }
      scrollContainer.scrollTop = scrollPos;
      animationId = requestAnimationFrame(autoScroll);
    };

    const startDelay = setTimeout(() => {
      animationId = requestAnimationFrame(autoScroll);
    }, 2500);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationId);
    };
  }, [isAutoScrolling]);

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-75" />
      
      {/* Phone frame */}
      <div className="device-frame relative w-[280px] h-[580px] p-3">
        {/* Notch */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-full z-20" />
        
        {/* Screen */}
        <div className="relative w-full h-full bg-background rounded-2xl overflow-hidden">
          {/* Status bar */}
          <div className="flex justify-between items-center px-4 py-2 text-xs">
            <span className="font-mono text-muted-foreground">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-3 rounded-sm bg-primary/50" />
              <div className="w-4 h-3 rounded-sm bg-primary" />
            </div>
          </div>
          
          {/* App content simulation */}
          <div className="p-4 space-y-3 h-[calc(100%-110px)]">
            {/* App header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">R</span>
              </div>
              <div>
                <div className="text-sm font-semibold">Skills</div>
                <div className="text-xs text-muted-foreground">{skills.length} technologies</div>
              </div>
            </div>
            
            {/* Scrollable skills list */}
            <div 
              ref={scrollRef}
              className="space-y-2 overflow-y-auto h-full pr-1 scrollbar-thin"
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
              style={{ scrollbarWidth: 'thin' }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.3 }}
                  className="bg-card rounded-xl p-2.5 border border-border/50"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: `hsl(var(--${skill.color}))` }}
                      />
                      <span className="text-xs font-medium">{skill.name}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div 
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ backgroundColor: `hsl(var(--${skill.color}) / 0.2)` }}
                  >
                    <motion.div 
                      className="h-full rounded-full"
                      style={{ backgroundColor: `hsl(var(--${skill.color}))` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 1.8 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Bottom nav simulation */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-around bg-card rounded-2xl p-3 border border-border/50">
              <div className="w-6 h-6 rounded-lg bg-primary/20" />
              <div className="w-6 h-6 rounded-lg bg-muted" />
              <div className="w-6 h-6 rounded-lg bg-muted" />
              <div className="w-6 h-6 rounded-lg bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
