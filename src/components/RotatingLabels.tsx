import { useState, useEffect } from 'react';

const labels = [
  "Web Apps",
  "Mobile",
  "Custom Software",
  "APIs",
  "Cloud",
];

const RotatingLabels = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % labels.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {labels.map((label, index) => (
        <div
          key={label}
          className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-500 cursor-default ${
            index === activeIndex
              ? "bg-primary text-primary-foreground scale-110 shadow-lg"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default RotatingLabels;
