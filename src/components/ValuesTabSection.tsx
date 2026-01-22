import { useState } from "react";
import { Target, Award, Users, Heart, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const valuesData = [
  {
    id: "client-focused",
    icon: Target,
    title: "Client-Focused",
    description: "Your success is our priority. We work closely with you to understand your goals and deliver solutions that exceed expectations. Every decision we make is guided by what's best for your business and your users.",
    bgColor: "bg-blue-600",
    hoverBg: "hover:bg-blue-700",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    id: "excellence",
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards, ensuring every line of code and every design element meets our quality benchmarks. Our commitment to excellence drives continuous improvement and innovation in everything we deliver.",
    bgColor: "bg-emerald-600",
    hoverBg: "hover:bg-emerald-700",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Collaboration",
    description: "Great products are built together. We believe in transparent communication and partnership throughout the development process. Your input shapes our work, and together we create solutions that truly meet your needs.",
    bgColor: "bg-purple-600",
    hoverBg: "hover:bg-purple-700",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    id: "passion",
    icon: Heart,
    title: "Passion",
    description: "We love what we do. Our enthusiasm for technology and innovation drives us to create exceptional digital experiences. This passion translates into dedication, creativity, and an unwavering commitment to your project's success.",
    bgColor: "bg-rose-600",
    hoverBg: "hover:bg-rose-700",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600"
  }
];

const ValuesTabSection = () => {
  const [activeValue, setActiveValue] = useState("client-focused");

  const activeData = valuesData.find(v => v.id === activeValue) || valuesData[0];

  return (
    <section className="section-divider py-20 pt-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:items-stretch">
          {/* Left Sidebar - Value Tabs */}
          <div className="lg:w-80 flex-shrink-0 flex flex-col justify-between gap-3">
            {valuesData.map((value) => (
              <button
                key={value.id}
                onClick={() => setActiveValue(value.id)}
                className={`flex-1 flex items-center justify-between px-5 py-4 rounded-lg transition-all duration-300 text-left ${
                  activeValue === value.id
                    ? "bg-background border-2 border-primary text-foreground shadow-md"
                    : `${value.bgColor} ${value.hoverBg} text-white`
                }`}
              >
                <div className="flex items-center gap-4">
                  <value.icon className={`w-5 h-5 ${activeValue === value.id ? value.iconColor : "text-white"}`} />
                  <span className="font-medium">{value.title}</span>
                </div>
                <ChevronRight className={`w-5 h-5 ${activeValue === value.id ? value.iconColor : "text-white"}`} />
              </button>
            ))}
          </div>

          {/* Right Content Panel */}
          <div className="flex-grow flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-muted/30 border border-border rounded-2xl p-8 md:p-12 w-full flex flex-col justify-center"
              >
                <div className={`w-16 h-16 rounded-xl ${activeData.iconBg} flex items-center justify-center mb-6`}>
                  <activeData.icon className={`w-8 h-8 ${activeData.iconColor}`} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeData.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {activeData.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesTabSection;
