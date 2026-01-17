import { useState, useEffect } from 'react';

interface CodeLine {
  content: JSX.Element;
  delay: number;
}

const CodeTypingAnimation = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const codeLines: CodeLine[] = [
    {
      content: <><span className="text-purple-600">import</span> <span className="text-slate-700">{'{'} useState {'}'}</span> <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span></>,
      delay: 0
    },
    {
      content: <><span className="text-purple-600">import</span> <span className="text-slate-700">{'{'} motion {'}'}</span> <span className="text-purple-600">from</span> <span className="text-green-600">'framer-motion'</span></>,
      delay: 400
    },
    {
      content: <span className="h-4 block" />,
      delay: 600
    },
    {
      content: <><span className="text-blue-600">const</span> <span className="text-amber-600">App</span> <span className="text-slate-700">= () {'=> {'}</span></>,
      delay: 800
    },
    {
      content: <span className="pl-4"><span className="text-blue-600">const</span> <span className="text-slate-700">[</span><span className="text-cyan-600">data</span><span className="text-slate-700">,</span> <span className="text-cyan-600">setData</span><span className="text-slate-700">] =</span> <span className="text-amber-600">useState</span><span className="text-slate-700">([])</span></span>,
      delay: 1100
    },
    {
      content: <span className="h-4 block" />,
      delay: 1300
    },
    {
      content: <span className="pl-4"><span className="text-purple-600">return</span> <span className="text-slate-700">(</span></span>,
      delay: 1500
    },
    {
      content: <span className="pl-8"><span className="text-slate-400">{'<'}</span><span className="text-blue-600">motion.div</span></span>,
      delay: 1700
    },
    {
      content: <span className="pl-12"><span className="text-cyan-600">initial</span><span className="text-slate-700">=</span><span className="text-slate-700">{'{{'}</span> <span className="text-cyan-600">opacity</span><span className="text-slate-700">:</span> <span className="text-orange-500">0</span> <span className="text-slate-700">{'}}'}</span></span>,
      delay: 1900
    },
    {
      content: <span className="pl-12"><span className="text-cyan-600">animate</span><span className="text-slate-700">=</span><span className="text-slate-700">{'{{'}</span> <span className="text-cyan-600">opacity</span><span className="text-slate-700">:</span> <span className="text-orange-500">1</span> <span className="text-slate-700">{'}}'}</span></span>,
      delay: 2100
    },
    {
      content: <span className="pl-8"><span className="text-slate-400">{'>'}</span></span>,
      delay: 2250
    },
    {
      content: <span className="pl-12"><span className="text-slate-400">{'<'}</span><span className="text-green-600">Dashboard</span> <span className="text-cyan-600">data</span><span className="text-slate-700">=</span><span className="text-slate-700">{'{'}data{'}'}</span> <span className="text-slate-400">{'/>'}</span></span>,
      delay: 2450
    },
    {
      content: <span className="pl-8"><span className="text-slate-400">{'</'}</span><span className="text-blue-600">motion.div</span><span className="text-slate-400">{'>'}</span></span>,
      delay: 2650
    },
    {
      content: <span className="pl-4"><span className="text-slate-700">)</span></span>,
      delay: 2800
    },
    {
      content: <span className="text-slate-700">{'}'}</span>,
      delay: 2950
    }
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    codeLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
      timers.push(timer);
    });

    // Cursor blink
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <div className="font-mono text-sm leading-relaxed">
      <div className="space-y-1">
        {codeLines.slice(0, visibleLines).map((line, index) => (
          <div 
            key={index} 
            className="animate-fade-in"
            style={{ animationDuration: '150ms' }}
          >
            {line.content}
          </div>
        ))}
      </div>
      
      {/* Typing cursor */}
      <span 
        className={`inline-block w-2 h-5 bg-primary ml-0.5 transition-opacity ${showCursor ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

export default CodeTypingAnimation;