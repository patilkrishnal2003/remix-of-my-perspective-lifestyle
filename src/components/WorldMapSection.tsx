import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Locations with approximate positions on a world map (percentage-based)
const locations = [
  { id: "us", label: "United States", x: 22, y: 38, isHQ: false },
  { id: "uk", label: "United Kingdom", x: 47, y: 28, isHQ: false },
  { id: "dubai", label: "Dubai", x: 60, y: 42, isHQ: false },
  { id: "pune", label: "Pune, India", x: 65, y: 46, isHQ: true },
  { id: "australia", label: "Australia", x: 80, y: 72, isHQ: false },
];

// Connection pairs
const connections = [
  ["us", "uk"],
  ["uk", "dubai"],
  ["dubai", "pune"],
  ["pune", "australia"],
  ["us", "dubai"],
  ["uk", "pune"],
  ["pune", "us"],
  ["australia", "uk"],
];

// Simple dotted world map points (simplified continent outlines)
function DottedWorldMap() {
  const dots: { x: number; y: number }[] = [];
  
  // Generate continent-shaped dot clusters
  const continents = [
    // North America
    ...generateDots(12, 18, 30, 48, 0.6),
    // South America
    ...generateDots(24, 34, 55, 82, 0.5),
    // Europe
    ...generateDots(44, 56, 22, 42, 0.7),
    // Africa
    ...generateDots(44, 58, 40, 75, 0.5),
    // Asia
    ...generateDots(55, 82, 20, 55, 0.45),
    // Australia
    ...generateDots(75, 87, 65, 80, 0.55),
    // Russia / Northern Asia
    ...generateDots(56, 85, 15, 30, 0.35),
    // Middle East
    ...generateDots(56, 65, 35, 48, 0.5),
    // India
    ...generateDots(62, 72, 35, 55, 0.6),
    // Southeast Asia
    ...generateDots(72, 82, 45, 60, 0.4),
    // UK/Ireland
    ...generateDots(45, 49, 24, 34, 0.8),
    // Japan/Korea
    ...generateDots(80, 85, 28, 42, 0.5),
    // Canada
    ...generateDots(12, 30, 18, 32, 0.35),
    // Central America
    ...generateDots(16, 24, 45, 55, 0.45),
    // Greenland
    ...generateDots(34, 42, 12, 24, 0.3),
    // Scandinavia
    ...generateDots(48, 54, 16, 28, 0.45),
  ];

  return (
    <>
      {continents.map((dot, i) => (
        <circle
          key={i}
          cx={`${dot.x}%`}
          cy={`${dot.y}%`}
          r="1.2"
          className="fill-muted-foreground/20"
        />
      ))}
    </>
  );
}

function generateDots(
  xMin: number, xMax: number,
  yMin: number, yMax: number,
  density: number
): { x: number; y: number }[] {
  const dots: { x: number; y: number }[] = [];
  const step = 2.5;
  // Use seeded pseudo-random for consistency
  let seed = xMin * 100 + yMin;
  const seededRandom = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  for (let x = xMin; x <= xMax; x += step) {
    for (let y = yMin; y <= yMax; y += step) {
      if (seededRandom() < density) {
        dots.push({ x: x + (seededRandom() - 0.5) * 1.5, y: y + (seededRandom() - 0.5) * 1.5 });
      }
    }
  }
  return dots;
}

function ConnectionLine({ from, to, index }: { from: typeof locations[0]; to: typeof locations[0]; index: number }) {
  // Create a curved path between two points
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - 8 - (index % 3) * 3;

  const pathD = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;

  return (
    <g>
      {/* Base line (subtle) */}
      <path
        d={pathD}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="0.3"
        opacity="0.15"
        vectorEffect="non-scaling-stroke"
      />
      {/* Animated traveling dot */}
      <circle r="2" fill="hsl(var(--primary))" opacity="0.8">
        <animateMotion
          dur={`${3 + index * 0.7}s`}
          repeatCount="indefinite"
          begin={`${index * 0.5}s`}
        >
          <mpath href={`#conn-path-${index}`} />
        </animateMotion>
      </circle>
      <path
        id={`conn-path-${index}`}
        d={pathD}
        fill="none"
        stroke="none"
      />
    </g>
  );
}

export default function WorldMapSection() {
  const getLocation = (id: string) => locations.find((l) => l.id === id)!;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4">
            <span className="block font-serif italic font-normal">Our Global</span>
            <span className="block font-bold text-primary">Presence</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            With headquarters in Pune and offices across 5 countries, we deliver world-class solutions globally.
          </p>
        </div>

        <motion.div
          className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#0a0a0a] p-6 sm:p-10 md:p-12 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Grid bg */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glow accents */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            {/* SVG Map */}
            <div className="relative w-full aspect-[2/1]">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full"
              >
                {/* Dotted continents */}
                <DottedWorldMap />

                {/* Connection lines */}
                {connections.map(([fromId, toId], i) => {
                  const from = getLocation(fromId);
                  const to = getLocation(toId);
                  return (
                    <ConnectionLine
                      key={`${fromId}-${toId}`}
                      from={from}
                      to={to}
                      index={i}
                    />
                  );
                })}

                {/* Location pins */}
                {locations.map((loc) => (
                  <g key={loc.id}>
                    {/* Pulse ring */}
                    <circle
                      cx={`${loc.x}%`}
                      cy={`${loc.y}%`}
                      r="2.5"
                      fill="none"
                      stroke={loc.isHQ ? "hsl(var(--primary))" : "hsl(210, 90%, 60%)"}
                      strokeWidth="0.3"
                      opacity="0.4"
                    >
                      <animate
                        attributeName="r"
                        values="1.5;3.5;1.5"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.6;0;0.6"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Pin dot */}
                    <circle
                      cx={`${loc.x}%`}
                      cy={`${loc.y}%`}
                      r="1.5"
                      fill={loc.isHQ ? "hsl(var(--primary))" : "hsl(210, 90%, 60%)"}
                      stroke={loc.isHQ ? "hsl(var(--primary))" : "hsl(210, 90%, 60%)"}
                      strokeWidth="0.5"
                      opacity="0.9"
                    />

                    {/* Label */}
                    <text
                      x={`${loc.x}%`}
                      y={`${loc.y - 3}%`}
                      textAnchor="middle"
                      fill={loc.isHQ ? "hsl(var(--primary))" : "hsl(210, 90%, 70%)"}
                      fontSize="2.2"
                      fontWeight={loc.isHQ ? "700" : "500"}
                      className="select-none"
                    >
                      {loc.label}
                    </text>
                    {loc.isHQ && (
                      <text
                        x={`${loc.x}%`}
                        y={`${loc.y + 4}%`}
                        textAnchor="middle"
                        fill="hsl(var(--primary))"
                        fontSize="1.6"
                        fontWeight="600"
                        opacity="0.7"
                        className="select-none"
                      >
                        HQ
                      </text>
                    )}
                  </g>
                ))}
              </svg>
            </div>

            {/* Location legend cards */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-8">
              {locations.map((loc) => (
                <motion.div
                  key={loc.id}
                  className={`rounded-xl p-3 text-center border ${
                    loc.isHQ
                      ? "bg-primary/10 border-primary/30"
                      : "bg-white/[0.04] border-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin
                    className={`w-4 h-4 mx-auto mb-1 ${
                      loc.isHQ ? "text-primary" : "text-blue-400"
                    }`}
                  />
                  <div
                    className={`text-xs font-semibold ${
                      loc.isHQ ? "text-primary" : "text-white/80"
                    }`}
                  >
                    {loc.label}
                  </div>
                  {loc.isHQ && (
                    <div className="text-[10px] text-primary/70 font-medium mt-0.5">
                      Headquarters
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
