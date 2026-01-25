import { useState } from "react";
import { Target, Award, Users, Heart, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const valuesData = [
  {
    id: "client-focused",
    icon: Target,
    title: "Client-Focused",
    description: "Your success is our priority. We work closely with you to understand your goals and deliver solutions that exceed expectations. Every decision we make is guided by what's best for your business and your users.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "excellence",
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards, ensuring every line of code and every design element meets our quality benchmarks. Our commitment to excellence drives continuous improvement and innovation in everything we deliver.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    bgImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Collaboration",
    description: "Great products are built together. We believe in transparent communication and partnership throughout the development process. Your input shapes our work, and together we create solutions that truly meet your needs.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: "passion",
    icon: Heart,
    title: "Passion",
    description: "We love what we do. Our enthusiasm for technology and innovation drives us to create exceptional digital experiences. This passion translates into dedication, creativity, and an unwavering commitment to your project's success.",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    bgImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60"
  }
];

const ValuesTabSection = () => {
  const [activeValue, setActiveValue] = useState("client-focused");

  const activeData = valuesData.find(v => v.id === activeValue) || valuesData[0];

  return (
    <section className="section-divider py-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/50 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
          {/* Left Sidebar - Value Tabs */}
          <div className="lg:w-80 flex-shrink-0 grid grid-cols-2 lg:grid-cols-1 lg:flex lg:flex-col lg:justify-between gap-3">
            {valuesData.map((value) => (
              <button
                key={value.id}
                onClick={() => setActiveValue(value.id)}
                className={`lg:flex-1 flex items-center justify-between px-4 py-3 lg:px-5 lg:py-4 rounded-lg transition-all duration-300 text-left ${
                  activeValue === value.id
                    ? "bg-gray-800 text-white shadow-md"
                    : "bg-white hover:bg-gray-100 text-foreground border border-border"
                }`}
              >
                <div className="flex items-center gap-2 lg:gap-4">
                  <value.icon className={`w-4 h-4 lg:w-5 lg:h-5 ${activeValue === value.id ? "text-white" : value.iconColor}`} />
                  <span className="font-medium text-sm lg:text-base">{value.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 lg:w-5 lg:h-5 hidden lg:block ${activeValue === value.id ? "text-white" : value.iconColor}`} />
              </button>
            ))}
          </div>

          <div className="flex-grow flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl p-8 md:p-12 w-full flex flex-col justify-center overflow-hidden"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${activeData.bgImage})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl ${activeData.iconBg} flex items-center justify-center mb-6`}>
                    <activeData.icon className={`w-8 h-8 ${activeData.iconColor}`} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{activeData.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {activeData.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesTabSection;
