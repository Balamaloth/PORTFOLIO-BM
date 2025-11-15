import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, Target, TrendingUp } from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Rocket,
      title: "Ready to Launch",
      description: "Fresh graduate eager to apply skills in real-world projects",
    },
    {
      icon: Target,
      title: "Focused Learning",
      description: "Continuously improving through personal projects and courses",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Committed to learning and adapting to new technologies",
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient-primary">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-card p-8 md:p-12 rounded-2xl border-2 border-primary/30 mb-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gradient-gold mb-4">
                  Fresher Developer
                </h3>
                <p className="text-xl text-muted-foreground">
                  Actively seeking opportunities to contribute and grow
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline SVG */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="relative"
            >
              <svg className="w-full h-32" viewBox="0 0 800 100">
                <motion.path
                  d="M 50 50 Q 200 20, 400 50 T 750 50"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 1, duration: 2 }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="8"
                  fill="hsl(var(--gold))"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 1.5, duration: 0.3 }}
                />
                <motion.circle
                  cx="400"
                  cy="50"
                  r="8"
                  fill="hsl(var(--primary))"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 2, duration: 0.3 }}
                />
                <motion.circle
                  cx="750"
                  cy="50"
                  r="8"
                  fill="hsl(var(--accent))"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 2.5, duration: 0.3 }}
                />
              </svg>
              <div className="flex justify-between text-center mt-4">
                <div className="w-1/3">
                  <p className="text-sm text-muted-foreground">Education</p>
                </div>
                <div className="w-1/3">
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="w-1/3">
                  <p className="text-sm text-muted-foreground">Next Chapter</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
