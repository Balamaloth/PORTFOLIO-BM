import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "balasainik3@gmail.com",
      href: "mailto:balasainik3@gmail.com",
      color: "primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "bala-maloth",
      href: "https://www.linkedin.com/in/bala-maloth",
      color: "gold",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Balamaloth",
      href: "https://github.com/Balamaloth",
      color: "accent",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@bala_maloth_",
      href: "https://www.instagram.com/bala_maloth_/",
      color: "primary",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-card p-8 md:p-12 rounded-2xl text-center mb-12"
            >
              <p className="text-xl text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, interesting projects,
                or potential collaborations. Feel free to reach out!
              </p>

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block mb-8"
              >
                <Mail className="w-20 h-20 text-primary" />
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div
                      className={`glass-card p-6 rounded-xl border-2 transition-all duration-300 ${
                        contact.color === "primary"
                          ? "border-primary/30 hover:border-primary"
                          : contact.color === "gold"
                          ? "border-gold/30 hover:border-gold"
                          : "border-accent/30 hover:border-accent"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                            contact.color === "primary"
                              ? "bg-primary/10"
                              : contact.color === "gold"
                              ? "bg-gold/10"
                              : "bg-accent/10"
                          }`}
                        >
                          <contact.icon
                            className={`w-7 h-7 ${
                              contact.color === "primary"
                                ? "text-primary"
                                : contact.color === "gold"
                                ? "text-gold"
                                : "text-accent"
                            }`}
                          />
                        </div>
                        <div className="text-left">
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className="text-lg font-semibold text-foreground">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center mt-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow text-lg px-8 py-6"
              >
                <a href="mailto:balasainik3@gmail.com">Send Me an Email</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center mt-20 pb-8"
      >
        <p className="text-muted-foreground">
          © 2024 Balakrishna Maloth. Built with{" "}
          <span className="text-gradient-primary">passion</span> and{" "}
          <span className="text-gradient-gold">dedication</span>.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
