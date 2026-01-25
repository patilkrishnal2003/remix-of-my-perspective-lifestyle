import { Target, Award, Users, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { GlareCard } from "@/components/ui/glare-card";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="section-divider py-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/50 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
          </div>

          {/* Desktop: 4-column grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {valuesData.map((value) => (
              <GlareCard key={value.id} className="p-6 xl:p-8 flex flex-col justify-start min-h-[280px]">
                <div className={`w-12 h-12 xl:w-14 xl:h-14 rounded-xl ${value.iconBg} flex items-center justify-center mb-5`}>
                  <value.icon className={`w-6 h-6 xl:w-7 xl:h-7 ${value.iconColor}`} />
                </div>
                <h3 className="text-lg xl:text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground text-sm xl:text-base leading-relaxed">
                  {value.description}
                </p>
              </GlareCard>
            ))}
          </div>

          {/* Mobile/Tablet: Carousel */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {valuesData.map((value) => (
                  <div key={value.id} className="flex-[0_0_85%] sm:flex-[0_0_45%] min-w-0">
                    <GlareCard className="p-6 sm:p-8 flex flex-col justify-start min-h-[280px]">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${value.iconBg} flex items-center justify-center mb-5`}>
                        <value.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${value.iconColor}`} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </GlareCard>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Navigation */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesTabSection;
