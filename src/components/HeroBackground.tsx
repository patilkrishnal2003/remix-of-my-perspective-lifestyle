import { useEffect, useRef } from 'react';

const FloatingCodeBlock = ({ 
  code, 
  className,
  style 
}: { 
  code: string[]; 
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div 
    className={`absolute font-mono text-xs bg-slate-900/80 backdrop-blur-sm rounded-lg border border-slate-700/50 p-3 shadow-2xl pointer-events-none ${className}`}
    style={style}
  >
    {code.map((line, i) => (
      <div key={i} className="flex gap-2">
        <span className="text-slate-600 select-none w-4">{i + 1}</span>
        <span dangerouslySetInnerHTML={{ __html: line }} />
      </div>
    ))}
  </div>
);

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      hue: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.hue = Math.random() * 60 + 200;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvasWidth) this.x = 0;
        if (this.x < 0) this.x = canvasWidth;
        if (this.y > canvasHeight) this.y = 0;
        if (this.y < 0) this.y = canvasHeight;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(50, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 15000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.offsetWidth, canvas.offsetHeight));
      }
    };

    const connectParticles = (ctx: CanvasRenderingContext2D) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `hsla(220, 70%, 60%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach(particle => {
        particle.update(canvas.offsetWidth, canvas.offsetHeight);
        particle.draw(ctx);
      });

      connectParticles(ctx);
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const codeSnippets = [
    {
      code: [
        '<span class="text-purple-400">const</span> <span class="text-blue-300">app</span> <span class="text-slate-400">=</span> <span class="text-amber-300">createApp</span><span class="text-slate-400">()</span>',
        '<span class="text-purple-400">await</span> <span class="text-blue-300">app</span><span class="text-slate-400">.</span><span class="text-amber-300">deploy</span><span class="text-slate-400">()</span>',
      ],
      className: 'top-[15%] left-[5%] opacity-40 animate-[float_8s_ease-in-out_infinite] hidden lg:block',
    },
    {
      code: [
        '<span class="text-purple-400">import</span> <span class="text-slate-300">{</span> <span class="text-blue-300">motion</span> <span class="text-slate-300">}</span>',
        '<span class="text-purple-400">from</span> <span class="text-green-400">\'framer-motion\'</span>',
      ],
      className: 'top-[25%] right-[8%] opacity-30 animate-[float_10s_ease-in-out_infinite_1s] hidden lg:block',
    },
    {
      code: [
        '<span class="text-slate-500">&lt;</span><span class="text-blue-400">Button</span>',
        '  <span class="text-cyan-300">variant</span><span class="text-slate-400">=</span><span class="text-green-400">"primary"</span>',
        '<span class="text-slate-500">&gt;</span>',
      ],
      className: 'bottom-[20%] left-[8%] opacity-35 animate-[float_9s_ease-in-out_infinite_0.5s] hidden lg:block',
    },
    {
      code: [
        '<span class="text-purple-400">async</span> <span class="text-amber-300">fetchData</span><span class="text-slate-400">() {</span>',
        '  <span class="text-purple-400">return</span> <span class="text-blue-300">api</span><span class="text-slate-400">.</span><span class="text-amber-300">get</span><span class="text-slate-400">(</span><span class="text-green-400">\'/data\'</span><span class="text-slate-400">)</span>',
        '<span class="text-slate-400">}</span>',
      ],
      className: 'bottom-[25%] right-[5%] opacity-40 animate-[float_7s_ease-in-out_infinite_2s] hidden lg:block',
    },
    {
      code: [
        '<span class="text-purple-400">type</span> <span class="text-blue-300">User</span> <span class="text-slate-400">=</span> <span class="text-slate-400">{</span>',
        '  <span class="text-cyan-300">id</span><span class="text-slate-400">:</span> <span class="text-amber-300">string</span>',
        '<span class="text-slate-400">}</span>',
      ],
      className: 'top-[60%] left-[3%] opacity-25 animate-[float_11s_ease-in-out_infinite_3s] hidden xl:block',
    },
  ];

  return (
    <>
      {/* Animated particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
      
      {/* Floating code blocks */}
      {codeSnippets.map((snippet, index) => (
        <FloatingCodeBlock
          key={index}
          code={snippet.code}
          className={snippet.className}
        />
      ))}
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </>
  );
};

export default HeroBackground;
