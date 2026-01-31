import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface NodeData {
  id: string;
  label: string;
  x: number;
  y: number;
  type: "main" | "secondary" | "diagnostic";
}

interface ConnectionData {
  from: string;
  to: string;
  type: "straight" | "branch-left" | "branch-right" | "merge-left" | "merge-right";
}

const BookingFlowSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Responsive dimensions
  const canvasWidth = isMobile ? 320 : 800;
  const canvasHeight = isMobile ? 1400 : 1200;
  const centerX = canvasWidth / 2;
  const nodeWidth = isMobile ? 180 : 200;
  const smallNodeWidth = isMobile ? 140 : 160;
  const branchOffset = isMobile ? 100 : 180;

  // Define all nodes with positions
  const nodes: NodeData[] = useMemo(() => [
    // Step 1 - Start
    { id: "call-booked", label: "Call Booked", x: centerX, y: 60, type: "main" },
    
    // Step 2 - Context
    { id: "context", label: "Understanding Your Context", x: centerX, y: 160, type: "main" },
    
    // Diagnostic indicators
    { id: "diag-product", label: "Product", x: centerX - 90, y: 220, type: "diagnostic" },
    { id: "diag-growth", label: "Growth", x: centerX - 30, y: 220, type: "diagnostic" },
    { id: "diag-team", label: "Team", x: centerX + 30, y: 220, type: "diagnostic" },
    { id: "diag-priorities", label: "Priorities", x: centerX + 90, y: 220, type: "diagnostic" },
    
    // Step 3 - Primary Split
    { id: "product-tech", label: "Product / Technology", x: centerX - branchOffset, y: 300, type: "main" },
    { id: "growth-scale", label: "Growth / Scale", x: centerX + branchOffset, y: 300, type: "main" },
    
    // Step 4A - Product Path
    { id: "website", label: "Website / Platform", x: centerX - branchOffset, y: 380, type: "secondary" },
    { id: "mobile", label: "Mobile App", x: centerX - branchOffset, y: 440, type: "secondary" },
    { id: "custom", label: "Custom Software", x: centerX - branchOffset, y: 500, type: "secondary" },
    { id: "uiux", label: "UI / UX & Product Experience", x: centerX - branchOffset, y: 560, type: "secondary" },
    { id: "brand", label: "Brand & Product Positioning", x: centerX - branchOffset, y: 620, type: "secondary" },
    
    // Step 4B - Growth Path
    { id: "digital", label: "Digital Presence", x: centerX + branchOffset, y: 380, type: "secondary" },
    { id: "acquisition", label: "User / Lead Acquisition", x: centerX + branchOffset, y: 440, type: "secondary" },
    { id: "sales", label: "Sales & Revenue Systems", x: centerX + branchOffset, y: 500, type: "secondary" },
    { id: "analytics", label: "Growth Strategy & Analytics", x: centerX + branchOffset, y: 560, type: "secondary" },
    
    // Step 5 - Merge
    { id: "alignment", label: "System-Level Alignment", x: centerX, y: 720, type: "main" },
    
    // Step 6 - Direction
    { id: "next-steps", label: "Clear Next Steps", x: centerX, y: 820, type: "main" },
    
    // Step 7 - Final Split
    { id: "forward", label: "Move Forward Together", x: centerX - branchOffset + 20, y: 920, type: "main" },
    { id: "independent", label: "Independent Next Steps", x: centerX + branchOffset - 20, y: 920, type: "main" },
  ], [centerX, branchOffset, isMobile]);

  // Define connections between nodes
  const connections: ConnectionData[] = [
    { from: "call-booked", to: "context", type: "straight" },
    { from: "context", to: "product-tech", type: "branch-left" },
    { from: "context", to: "growth-scale", type: "branch-right" },
    { from: "product-tech", to: "website", type: "straight" },
    { from: "website", to: "mobile", type: "straight" },
    { from: "mobile", to: "custom", type: "straight" },
    { from: "custom", to: "uiux", type: "straight" },
    { from: "uiux", to: "brand", type: "straight" },
    { from: "growth-scale", to: "digital", type: "straight" },
    { from: "digital", to: "acquisition", type: "straight" },
    { from: "acquisition", to: "sales", type: "straight" },
    { from: "sales", to: "analytics", type: "straight" },
    { from: "brand", to: "alignment", type: "merge-left" },
    { from: "analytics", to: "alignment", type: "merge-right" },
    { from: "alignment", to: "next-steps", type: "straight" },
    { from: "next-steps", to: "forward", type: "branch-left" },
    { from: "next-steps", to: "independent", type: "branch-right" },
  ];

  // Step sequence for animation
  const stepSequence = [
    ["call-booked"],
    ["context"],
    ["diag-product", "diag-growth", "diag-team", "diag-priorities"],
    ["product-tech", "growth-scale"],
    ["website", "digital"],
    ["mobile", "acquisition"],
    ["custom", "sales"],
    ["uiux", "analytics"],
    ["brand"],
    ["alignment"],
    ["next-steps"],
    ["forward", "independent"],
  ];

  // Get visible nodes based on current step
  const visibleNodes = useMemo(() => {
    const visible = new Set<string>();
    for (let i = 0; i <= currentStep && i < stepSequence.length; i++) {
      stepSequence[i].forEach(id => visible.add(id));
    }
    return visible;
  }, [currentStep]);

  // Get active nodes (current step)
  const activeNodes = useMemo(() => {
    if (currentStep < stepSequence.length) {
      return new Set(stepSequence[currentStep]);
    }
    return new Set<string>();
  }, [currentStep]);

  // Check if connection should be visible
  const isConnectionVisible = (conn: ConnectionData) => {
    return visibleNodes.has(conn.from) && visibleNodes.has(conn.to);
  };

  // Get node by ID
  const getNode = (id: string) => nodes.find(n => n.id === id);

  // Generate bezier path
  const generatePath = (conn: ConnectionData) => {
    const fromNode = getNode(conn.from);
    const toNode = getNode(conn.to);
    if (!fromNode || !toNode) return "";

    const startY = fromNode.y + 20;
    const endY = toNode.y - 20;
    const midY = (startY + endY) / 2;

    if (conn.type === "straight") {
      return `M ${fromNode.x} ${startY} C ${fromNode.x} ${midY}, ${toNode.x} ${midY}, ${toNode.x} ${endY}`;
    }
    
    if (conn.type === "branch-left" || conn.type === "branch-right") {
      const controlOffset = conn.type === "branch-left" ? -30 : 30;
      return `M ${fromNode.x} ${startY} C ${fromNode.x} ${midY}, ${toNode.x + controlOffset} ${midY}, ${toNode.x} ${endY}`;
    }
    
    if (conn.type === "merge-left" || conn.type === "merge-right") {
      const controlOffset = conn.type === "merge-left" ? 30 : -30;
      return `M ${fromNode.x} ${startY} C ${fromNode.x - controlOffset} ${midY}, ${toNode.x} ${midY}, ${toNode.x} ${endY}`;
    }

    return "";
  };

  // Start animation when section is in view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Auto-run animation
  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) return;

    const stepDuration = isMobile ? 1200 : 1000;
    const totalSteps = stepSequence.length;

    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= totalSteps - 1) {
          // Start reset sequence
          setIsResetting(true);
          setTimeout(() => {
            setCurrentStep(0);
            setIsResetting(false);
          }, 1500);
          return prev;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [hasStarted, isMobile, prefersReducedMotion]);

  // Node component
  const FlowNode = ({ node, isActive, isVisible }: { node: NodeData; isActive: boolean; isVisible: boolean }) => {
    if (!isVisible) return null;

    const width = node.type === "secondary" ? smallNodeWidth : node.type === "diagnostic" ? 70 : nodeWidth;
    const height = node.type === "diagnostic" ? 24 : node.type === "secondary" ? 36 : 44;
    const fontSize = node.type === "diagnostic" ? "text-[10px]" : node.type === "secondary" ? "text-xs" : "text-sm";

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isResetting ? 0 : (isActive ? 1 : node.type === "diagnostic" ? 0.4 : 0.7),
          scale: isResetting ? 0.8 : 1
        }}
        transition={{ 
          duration: prefersReducedMotion ? 0 : 0.5,
          ease: "easeOut"
        }}
        className="absolute flex items-center justify-center text-center"
        style={{
          left: node.x - width / 2,
          top: node.y - height / 2,
          width,
          height,
        }}
      >
        <div
          className={`
            w-full h-full flex items-center justify-center px-3 rounded-full
            transition-all duration-500
            ${node.type === "diagnostic" 
              ? "bg-transparent border-0" 
              : isActive 
                ? "bg-white/10 border border-white/30" 
                : "bg-white/5 border border-white/10"
            }
          `}
        >
          <span className={`
            ${fontSize} font-medium tracking-wide
            ${node.type === "diagnostic" 
              ? "text-white/40" 
              : isActive 
                ? "text-white" 
                : "text-white/60"
            }
          `}>
            {node.label}
          </span>
        </div>
      </motion.div>
    );
  };

  // Connection line component
  const ConnectionLine = ({ conn }: { conn: ConnectionData }) => {
    const isVisible = isConnectionVisible(conn);
    if (!isVisible) return null;

    const path = generatePath(conn);
    const isActive = activeNodes.has(conn.to);

    return (
      <motion.path
        d={path}
        fill="none"
        stroke={isActive ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)"}
        strokeWidth={1.5}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: isResetting ? 0 : 1, 
          opacity: isResetting ? 0 : 1 
        }}
        transition={{ 
          duration: prefersReducedMotion ? 0 : 0.6,
          ease: "easeInOut"
        }}
      />
    );
  };

  return (
    <section
      ref={sectionRef}
      className="section-divider relative w-full overflow-hidden"
      style={{ backgroundColor: "hsl(0 0% 4%)" }}
    >
      {/* Dotted grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight"
          >
            What Happens After You Book Your First Call
          </motion.h2>
        </div>

        {/* Canvas container */}
        <div className="relative flex justify-center">
          <div 
            className="relative"
            style={{ 
              width: canvasWidth, 
              height: canvasHeight,
            }}
          >
            {/* SVG for connection lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
              preserveAspectRatio="xMidYMid meet"
            >
              {connections.map((conn, idx) => (
                <ConnectionLine key={idx} conn={conn} />
              ))}
            </svg>

            {/* Nodes */}
            {nodes.map(node => (
              <FlowNode
                key={node.id}
                node={node}
                isActive={activeNodes.has(node.id)}
                isVisible={visibleNodes.has(node.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingFlowSection;
