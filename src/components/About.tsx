import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-gradient-primary">Me</span>
          </h2>

          <div className="glass-card p-8 md:p-12 rounded-2xl space-y-6">
            {/* Profile Image in About Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold via-primary to-accent opacity-50 blur-lg" />
                <div className="relative w-full h-full rounded-full border-2 border-gold overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Balakrishna Maloth"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <motion.p
              className="text-lg text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I'm a passionate Full Stack Java Developer with a strong foundation in building
              modern, scalable web applications. My journey in software development is driven
              by curiosity and a constant desire to learn and implement cutting-edge technologies.
            </motion.p>

            <motion.p
              className="text-lg text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              With expertise in Java, Spring Boot, and React, I specialize in creating robust
              backend services and intuitive frontend interfaces. I believe in writing clean,
              maintainable code and following best practices to deliver high-quality solutions.
            </motion.p>

            <motion.p
              className="text-lg text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Currently, I'm focused on enhancing my skills in microservices architecture,
              cloud technologies, and modern DevOps practices. I'm always excited to take on
              new challenges and contribute to innovative projects.
            </motion.p>

            <motion.div
              className="pt-6 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="glass-card px-6 py-3 rounded-full border border-primary/30">
                <span className="text-primary font-semibold">Problem Solver</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full border border-gold/30">
                <span className="text-gradient-gold font-semibold">Quick Learner</span>
              </div>
              <div className="glass-card px-6 py-3 rounded-full border border-accent/30">
                <span className="text-accent font-semibold">Team Player</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
