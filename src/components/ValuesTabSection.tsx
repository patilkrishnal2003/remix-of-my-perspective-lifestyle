import { Target, Award, Users, Heart } from "lucide-react";
import { GlareCard } from "@/components/ui/glare-card";

const valuesData = [
  {
    id: "client-focused",
    icon: Target,
    title: "Client-Focused",
    description: "Your success is our priority. We work closely with you to understand your goals and deliver solutions that exceed expectations.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "excellence",
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards, ensuring every line of code meets our quality benchmarks.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Collaboration",
    description: "Great products are built together. We believe in transparent communication and partnership throughout the development process.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: "passion",
    icon: Heart,
    title: "Passion",
    description: "We love what we do. Our enthusiasm for technology drives us to create exceptional digital experiences.",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  }
];

const ValuesTabSection = () => {
  return (
    <section className="section-divider py-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/50 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valuesData.map((value) => (
              <GlareCard key={value.id} className="p-8 md:p-10 flex flex-col justify-center min-h-[280px]">
                <div className={`w-14 h-14 rounded-xl ${value.iconBg} flex items-center justify-center mb-5`}>
                  <value.icon className={`w-7 h-7 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {value.description}
                </p>
              </GlareCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesTabSection;
