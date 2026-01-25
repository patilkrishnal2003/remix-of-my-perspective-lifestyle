import { motion } from "framer-motion";
import { MessageSquare, Target, Code2, Rocket, ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation & Discovery",
    description: "We discuss your vision, goals, and requirements in detail to understand your needs.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "We create a comprehensive plan and technical roadmap tailored to your project.",
    icon: Target,
  },
  {
    number: "03",
    title: "Design & Development",
    description: "Our team builds your solution with regular updates and collaborative feedback.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support for continued success.",
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function HowWeWorkSection() {
  return (
    <section className="section-divider py-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Container */}
        <div className="bg-muted/50 rounded-[3rem] p-8 sm:p-12 lg:p-16">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A transparent, collaborative process designed for your success
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative h-full bg-card border border-border rounded-[2rem] p-6 sm:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  {/* Large Number Background */}
                  <div className="absolute top-4 right-4 text-[4rem] sm:text-[5rem] font-bold text-muted-foreground/10 leading-none select-none transition-colors duration-300 group-hover:text-primary/10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Animated Connector - Desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 w-4 items-center justify-center z-30 -translate-y-1/2">
                    {/* Animated flowing dots */}
                    <div className="relative flex items-center gap-0.5">
                      <motion.div
                        className="w-1 h-1 rounded-full bg-primary"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="w-1 h-1 rounded-full bg-primary"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="w-1 h-1 rounded-full bg-primary"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      />
                    </div>
                    {/* Animated chevron */}
                    <motion.div
                      animate={{
                        x: [0, 3, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut" as const,
                      }}
                    >
                      <ChevronRight className="w-3 h-3 text-primary" />
                    </motion.div>
                  </div>
                )}

                {/* Animated Connector - Mobile/Tablet vertical */}
                {index < steps.length - 1 && (
                  <div className="flex lg:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 h-6 items-center justify-center z-30">
                    <div className="relative flex flex-col items-center gap-0.5">
                      <motion.div
                        className="w-1 h-1 rounded-full bg-primary"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0,
                        }}
                      />
                      <motion.div
                        className="w-1 h-1 rounded-full bg-primary"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="w-1 h-1 rounded-full bg-primary"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
