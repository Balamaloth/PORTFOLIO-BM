import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "REST API Service",
      description:
        "A comprehensive RESTful API built with Django, featuring JWT authentication, role-based access control, and MySQL database integration. Includes complete CRUD operations and secure endpoints.",
      technologies: ["Django", "JWT", "MySQL", "REST API"],
      gradient: "from-primary to-accent",
    },
    {
      title: "React Dashboard",
      description:
        "Modern admin dashboard with interactive charts and data tables. Built with React and Tailwind CSS, featuring real-time data visualization, responsive design, and intuitive user interface.",
      technologies: ["React", "Tailwind CSS", "Charts", "TypeScript"],
      gradient: "from-gold to-gold-dark",
    },
    {
      title: "Fullstack Todo App",
      description:
        "Complete task management application with React frontend and Spring Boot backend. Features user authentication, task categorization, priority levels, and real-time updates.",
      technologies: ["React", "Django", "Auth", "PostgreSQL"],
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -15, rotateY: 5 }}
                className="group"
              >
                <div className="glass-card p-6 rounded-xl h-full border-2 border-primary/30 hover:border-primary transition-all duration-300">
                  <div
                    className={`h-40 rounded-lg mb-6 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                  />

                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full glass-card border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:border-primary"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gold/30 hover:border-gold"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
