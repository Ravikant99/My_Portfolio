import { motion } from "framer-motion";

const TvMockup = () => {
  return (
    <div className="relative scale-75 origin-center">
      {/* Glow effect */}
      <div className="absolute inset-0 blur-3xl bg-android-blue/20 rounded-full scale-90" />
      
      {/* TV frame */}
      <div className="device-frame relative w-[360px] h-[220px] p-2">
        {/* Screen */}
        <div className="relative w-full h-full bg-background rounded-xl overflow-hidden">
          {/* JioTV+ style interface */}
          <div className="p-3">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">J</span>
                </div>
                <span className="text-xs font-semibold">JioTV+</span>
              </div>
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded bg-muted" />
                <div className="w-5 h-5 rounded bg-muted" />
              </div>
            </div>
            
            {/* Content rails */}
            <div className="space-y-3">
              <div>
                <div className="text-[10px] text-muted-foreground mb-1">Trending Now</div>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2 + i * 0.1 }}
                      className={`w-16 h-10 rounded-lg ${
                        i === 0 ? 'bg-primary/30 ring-2 ring-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-[10px] text-muted-foreground mb-1">Live Channels</div>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.5 + i * 0.1 }}
                      className="w-16 h-10 rounded-lg bg-muted flex items-center justify-center"
                    >
                      {i === 0 && (
                        <div className="w-2 h-2 rounded-full bg-android-red animate-pulse" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* TV stand */}
      <div className="flex justify-center">
        <div className="w-20 h-2 bg-gradient-to-b from-muted to-muted/50 rounded-b-lg" />
      </div>
    </div>
  );
};

export default TvMockup;
