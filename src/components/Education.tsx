import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient-gold">Education</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8 rounded-xl border-2 border-gold/30 hover:border-gold transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-gold" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-gradient-gold">
                  Bachelor of Technology
                </h3>
                <p className="text-xl text-foreground/90 mb-2">
                  Sri Indu College of Engineering & Technology
                </p>
                <p className="text-muted-foreground mb-4">
                  Computer Science and Engineering
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full glass-card border border-gold/30 text-sm">
                    Java Programming
                  </span>
                  <span className="px-4 py-2 rounded-full glass-card border border-gold/30 text-sm">
                    Data Structures
                  </span>
                  <span className="px-4 py-2 rounded-full glass-card border border-gold/30 text-sm">
                    Web Development
                  </span>
                  <span className="px-4 py-2 rounded-full glass-card border border-gold/30 text-sm">
                    Database Systems
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
