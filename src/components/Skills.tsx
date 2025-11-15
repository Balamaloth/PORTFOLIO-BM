import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, Globe, GitBranch, Container, TestTube } from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: Code,
      name: "Java & Spring Boot",
      description: "Building robust backend services with Spring ecosystem",
      color: "primary",
    },
    {
      icon: Globe,
      name: "REST APIs",
      description: "Designing and implementing RESTful web services",
      color: "gold",
    },
    {
      icon: Code,
      name: "React & Tailwind",
      description: "Creating responsive and modern user interfaces",
      color: "accent",
    },
    {
      icon: Database,
      name: "SQL Databases",
      description: "Database design and optimization with MySQL/PostgreSQL",
      color: "primary",
    },
    {
      icon: GitBranch,
      name: "Git & GitHub",
      description: "Version control and collaborative development",
      color: "gold",
    },
    {
      icon: Container,
      name: "Docker Basics",
      description: "Containerization and deployment fundamentals",
      color: "accent",
    },
    {
      icon: TestTube,
      name: "JUnit Testing",
      description: "Unit testing and test-driven development",
      color: "primary",
    },
    {
      icon: GitBranch,
      name: "GitHub Actions",
      description: "CI/CD pipelines and automation workflows",
      color: "gold",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="text-gradient-gold">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group"
              >
                <div
                  className={`glass-card p-6 rounded-xl h-full border-2 transition-all duration-300 ${
                    skill.color === "primary"
                      ? "border-primary/30 hover:border-primary"
                      : skill.color === "gold"
                      ? "border-gold/30 hover:border-gold"
                      : "border-accent/30 hover:border-accent"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${
                      skill.color === "primary"
                        ? "bg-primary/10"
                        : skill.color === "gold"
                        ? "bg-gold/10"
                        : "bg-accent/10"
                    }`}
                  >
                    <skill.icon
                      className={`w-8 h-8 ${
                        skill.color === "primary"
                          ? "text-primary"
                          : skill.color === "gold"
                          ? "text-gold"
                          : "text-accent"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
