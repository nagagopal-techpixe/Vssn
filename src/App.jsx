import React, { useState, useEffect, useRef } from 'react';
import logo from "./assest/logo1.png";
import image1 from "./assest/vssimages/1.png";
import image2 from "./assest/vssimages/2.png";
import image3 from "./assest/vssimages/3.png";
import image4 from "./assest/vssimages/4.png";
import image5 from "./assest/vssimages/5.png";
import image6 from "./assest/vssimages/6.png";
import image7 from "./assest/vssimages/7.png";
import image8 from "./assest/vssimages/8.png";
import image9 from "./assest/vssimages/9.png";
import image10 from "./assest/vssimages/10.png";
import image11 from "./assest/vssimages/11.png";
import image12 from "./assest/vssimages/12.png";
import image13 from "./assest/vssimages/13.png";
import image14 from "./assest/vssimages/14.png";
import image15 from "./assest/vssimages/15.png";
import image16 from "./assest/vssimages/16.png";
import image17 from "./assest/vssimages/17.jpeg";


const video1 = "https://web30x.in/videos/4.MP4";
const video2 =  "https://web30x.in/videos/1.MP4";
const video3 =  "https://web30x.in/videos/2.MP4";
const video4 =  "https://web30x.in/videos/7.MP4";
const video5 =  "https://web30x.in/videos/5t.mp4";
const video6 =  "https://web30x.in/videos/18.MP4";
const video7 =  "https://web30x.in/videos/16.MP4";
const video8 =  "https://web30x.in/videos/14.MP4";
const video9 =  "https://web30x.in/videos/9t.mp4";
const video10 =  "https://web30x.in/videos/11.MP4";
const video11 =  "https://web30x.in/videos/11t.mp4";
const video12 =  "https://web30x.in/videos/12t.mp4";
const video13 =  "https://web30x.in/videos/17.MP4";
const video14 =  "https://web30x.in/videos/13.MP4";
const video15 =  "https://web30x.in/videos/15.MP4";
const video16 =  "https://web30x.in/videos/16t.mp4";
const video17 =  "https://web30x.in/videos/3.MP4";

import { 
  Menu, ArrowUpRight, Plus, Minus, Grid, 
  X, Maximize2, Terminal, Circle, Square, 
  ChevronRight, ArrowRight, Sparkles as SparkleIcon,
  Cpu, Wifi, Activity, Disc, Aperture, Play, Film, ScanLine, Smartphone, Monitor,
  CornerDownLeft, Keyboard, Video, Settings, Layers, Zap, Fingerprint, TrendingUp,
  Database, Network
} from 'lucide-react';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// --- Hooks ---
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, visible];
};

// --- DATA CONSTANTS ---

const workflowSystem = [
  { id: "01", title: "Signal", sub: "Intent before execution.", desc: "We begin by identifying signal. Brand intent. Cultural context. Constraints. This stage defines what matters — and what does not.", note: "No visuals yet. Only clarity." },
  { id: "02", title: "Architecture", sub: "Systems before outputs.", desc: "We design the structure: Visual language, Aesthetic rules, Operational logic. This is where direction is set.", note: "Direction is set here." },
  { id: "03", title: "Build", sub: "Synthetic construction.", desc: "Using machine intelligence, we construct visual systems and cultural assets. Nothing captured. All engineered.", note: "Everything engineered." },
  { id: "04", title: "Deploy", sub: "Precision over volume.", desc: "Outputs are refined, tested, and delivered. Formats are resolved, not improvised. What ships is final.", note: "What ships is final." },
  { id: "05", title: "Operate", sub: "Ongoing systems.", desc: "VSSN continues beyond delivery through managed systems and white-label operations. We don't exit after launch.", note: "System maintained." }
];

const faqItems = [
  { q: "What is VSSN?", a: "VSSN is an AI Culture Studio. We design synthetic visual systems and cultural frameworks. Not content. Not campaigns. Systems." },
  { q: "Is VSSN an agency?", a: "No. Agencies deliver projects. Content studios deliver volume. VSSN designs operating systems for culture." },
  { q: "How is AI used?", a: "AI is a collaborator, not a shortcut. We combine machine intelligence with human design sensibility for intentional precision." },
  { q: "Are visuals AI-generated?", a: "Yes. Constructed, not captured. No cameras, sets, or physical shoots. Every frame is engineered." },
  { q: "Commercial rights?", a: "Yes. All outputs come with clear commercial usage rights. No stock assets. No borrowed styles." },
  { q: "Who is this for?", a: "Brands entering the synthetic era. Founders building long-term identities. Agencies seeking white-label systems." }
];

const galleryData = [
  {
    id: "SYS_01",
    type: "video",
    url: video1,          // for modal + player
    thumbnail: image1,   // for gallery card
    title: "Swarovski: Nocturnal Radiance",
    category: "Editorial Motion",
  },
  {
    id: "SYS_02",
    type: "video",
    url: video2,
    thumbnail: image2,
    title: "Synthetic Identity V2",
    category: "Short Films",
  },
  {
    id: "SYS_03",
    type: "video",
    url: video3,
    thumbnail: image3,
    title: "Vantablack Vision",
    category: "Engineered Instinc",
  },
  {
    id: "SYS_04",
    type: "video",
    url: video4,
    thumbnail: image4,
    title: "Monogram Metamorphosis",
    category: "Digital Artistry",
  },
  {
    id: "SYS_05",
    type: "video",
    url: video5,
    thumbnail: image5,
    title: "The Elite Alpine Experience",
    category: "Cinematic Short-Form Content",
  },
  {
    id: "SYS_06",
    type: "video",
    url: video6,
    thumbnail: image6,
    title: "The Living Monogram Aesthetic",
    category: "Aspirational Environmental Art",
  },
  {
    id: "SYS_07",
    type: "video",
    url: video7,
    thumbnail: image7,
    title: "The Elite Peak Instinct",
    category: "Action Narrative Short",
  },
  {
    id: "SYS_08",
    type: "video",
    url: video8,
    thumbnail: image8,
    title: "Cultivating High-Performance Style",
    category: "Artisanal Sportswear Brand Campaign",
  },
  {
    id: "SYS_09",
    type: "video",
    url: video9,
    thumbnail: image9,
    title: "Nature’s Grand Unfinished World",
    category: "Elite Cinematic Wilderness Art",
  },
  {
    id: "SYS_10",
    type: "video",
    url: video10,
    thumbnail: image10,
    title: "Sirens of the Deep",
    category: "Nature & Wildlife (Surreal)",
  },
  {
    id: "SYS_11",
    type: "video",
    url: video11,
    thumbnail: image11,
    title: "Beneath the Flame",
    category: "Cinematic Advertisement",
  },
  {
    id: "SYS_12",
    type: "video",
    url: video12,
    thumbnail: image12,
    title: "Beyond the Frame: Higgsfield AI",
    category: "Cinematic Dreams: The Higgsfield Journey",
  },
  {
    id: "SYS_13",
    type: "video",
    url: video13,
    thumbnail: image13,
    title: "Nataraja 2077: The Digital Dance",
    category: "Conceptual Art / Visual Narrative",
  },
    {
    id: "SYS_14",
    type: "video",
    url: video14,
    thumbnail: image14,
    title: "Swan Lake Reimagined",
    category: "Digital Art ",
  },
   {
    id: "SYS_15",
    type: "video",
    url: video15,
    thumbnail: image15,
    title: "Glow of the Abyss",
    category: "Art & Visual Effects (VFX)",
  },
   {
    id: "SYS_16",
    type: "video",
    url: video16,
    thumbnail: image16,
    title: "Weightless Wonder",
    category: "Digital Art & CGI",
  },
  {
    id: "SYS_17",
    type: "video",
    url: video17,
    thumbnail: image17,
    title: "The Ocean's Jewelry Box",
    category: "Surrealist Art",
  },
];


const categories = ["All", "AI Ads", "Music Videos", "Short Films", "Reels", "Experimental"];

const advantages = [
    { id: "01", icon: Zap, title: "Velocity", desc: "Production timelines collapsed from months to days. We react to culture in real-time." },
    { id: "02", icon: Layers, title: "Infinite Scale", desc: "One core asset system generates variations for every platform and format instantly." },
    { id: "03", icon: Fingerprint, title: "Brand DNA", desc: "Models trained on your specific aesthetic ensure perfect consistency across every output." },
    { id: "04", icon: TrendingUp, title: "Efficiency", desc: "Eliminate travel, sets, and logistics costs. Reallocate budget to strategy and reach." }
];

// --- SUB-COMPONENTS ---

// 1. Scroll Progress Bar
const ScrollProgress = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      setWidth((scrollPosition / totalHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-[#1A1A1A] z-[100]">
      <div className="h-full bg-white transition-all duration-100 ease-out" style={{ width: `${width}%` }} />
    </div>
  );
};

// 2. Neural Vortex (THREADS STYLE: Colorful, Rotating 3D Sphere)
const NeuralVortex = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    let animationId;
    
    // Mouse state for 3D interaction (Tilt)
    let targetX = 0;
    let targetY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const particles = [];
    const particleCount = 2000; // Dense cloud
    
    // Threads-like color palette
    const colors = ['#FF0055', '#FF4D4D', '#FFC857', '#8A2BE2', '#FFFFFF'];

    // Initialize Particles on a Sphere Surface
    for(let i = 0; i < particleCount; i++) {
        // Uniform sphere distribution
        const theta = Math.random() * Math.PI * 2; // Longitude
        const phi = Math.acos((Math.random() * 2) - 1); // Latitude
        
        // Vary radius slightly for "thickness"
        const radius = 300 + (Math.random() * 50); 
        
        particles.push({
            theta, 
            phi, 
            radius,
            size: Math.random() * 2.0,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: (Math.random() * 0.005) + 0.002 // Rotation speed
        });
    }

    const animate = () => {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height); 
        
        ctx.globalCompositeOperation = 'lighter'; // Critical for the "glowing" look

        const cx = width / 2;
        const cy = height / 2;
        const fov = 400;
        const time = Date.now() * 0.0005; // Time base

        // Smooth Mouse Rotation Follow
        // Normalize mouse to small angle range
        const mouseTiltX = (targetY / height - 0.5) * 1.5; 
        const mouseTiltY = (targetX / width - 0.5) * 1.5;
        
        // Ease the current rotation towards target
        currentRotationX += (mouseTiltX - currentRotationX) * 0.05;
        currentRotationY += (mouseTiltY - currentRotationY) * 0.05;

        // Base rotation (The spin)
        const baseRotationY = time; 

        // Sort particles by depth (painter's algorithm)
        // We need to calculate transformed Z for sorting
        const transformedParticles = particles.map(p => {
             // 1. Base Rotation (Spinning around local Y axis)
             const theta = p.theta + p.speed + baseRotationY;
             
             let x = p.radius * Math.sin(p.phi) * Math.cos(theta);
             let y = p.radius * Math.cos(p.phi);
             let z = p.radius * Math.sin(p.phi) * Math.sin(theta);

             // 2. Apply Interaction Rotation (Tilt/Pan)
             // Rotate around X (Tilt)
             let y1 = y * Math.cos(currentRotationX) - z * Math.sin(currentRotationX);
             let z1 = z * Math.cos(currentRotationX) + y * Math.sin(currentRotationX);
             
             // Rotate around Y (Pan)
             let x1 = x * Math.cos(currentRotationY) - z1 * Math.sin(currentRotationY);
             let z2 = z1 * Math.cos(currentRotationY) + x * Math.sin(currentRotationY);

             // 3. Project
             const scale = fov / (fov + z2);
             const x2d = cx + x1 * scale;
             const y2d = cy + y1 * scale;

             return { ...p, x2d, y2d, scale, z: z2 };
        });

        // Sort
        transformedParticles.sort((a, b) => b.z - a.z);

        // Draw
        transformedParticles.forEach(p => {
            if (p.scale > 0) {
                // Alpha fades based on depth AND edge of sphere
                const alpha = Math.max(0.1, Math.min(1, p.scale));
                
                ctx.beginPath();
                ctx.fillStyle = p.color;
                ctx.globalAlpha = alpha;
                ctx.arc(p.x2d, p.y2d, p.size * p.scale, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        ctx.globalCompositeOperation = 'source-over';
        animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => { 
        targetX = e.clientX; 
        targetY = e.clientY; 
    };

    const handleResize = () => { 
        width = canvas.width = window.innerWidth; 
        height = canvas.height = window.innerHeight; 
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};


// 3. Synthetic Field (3D Data Cloud for Advantages Section)
const SyntheticField = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Config
    const particles = [];
    const numParticles = 800;
    let currentRotX = 0;
    let currentRotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: (Math.random() - 0.5) * 2000,
            y: (Math.random() - 0.5) * 1000,
            z: (Math.random() - 0.5) * 2000,
            size: Math.random() * 2,
            opacity: Math.random() * 0.5 + 0.1
        });
    }

    let animationFrame;
    const fov = 400;

    const render = () => {
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);
        const cx = width / 2;
        const cy = height / 2;

        let scrollProgress = 0;
        if (containerRef.current) {
             const rect = containerRef.current.getBoundingClientRect();
             scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        }

        currentRotX += (targetRotX - currentRotX) * 0.05;
        currentRotY += (targetRotY - currentRotY) * 0.05;

        const cameraZ = scrollProgress * 1500; 

        particles.forEach(p => {
            let x = p.x;
            let y = p.y;
            let z = p.z - cameraZ;

            while (z < -1000) z += 2000;
            while (z > 1000) z -= 2000;

            let tx = x * Math.cos(currentRotY) - z * Math.sin(currentRotY);
            let tz = z * Math.cos(currentRotY) + x * Math.sin(currentRotY);
            x = tx;
            z = tz;

            let ty = y * Math.cos(currentRotX) - z * Math.sin(currentRotX);
            tz = z * Math.cos(currentRotX) + y * Math.sin(currentRotX);
            y = ty;
            z = tz;

            const scale = fov / (fov + z);
            const x2d = cx + x * scale;
            const y2d = cy + y * scale;

            if (scale > 0 && z > -fov) {
                const alpha = Math.max(0, Math.min(1, (1000 - Math.abs(z)) / 1000)) * p.opacity;
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.beginPath();
                ctx.rect(x2d, y2d, p.size * scale, p.size * scale);
                ctx.fill();
            }
        });

        animationFrame = requestAnimationFrame(render);
    };

    const handleMouseMove = (e) => {
        const nx = (e.clientX / window.innerWidth) - 0.5;
        const ny = (e.clientY / window.innerHeight) - 0.5;
        targetRotY = nx * 0.5;
        targetRotX = ny * 0.5;
    };

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    render();

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />
    </div>
  );
};


// 4. Reveal Animation
const Reveal = ({ children, className, delay = 0 }) => {
  const [ref, visible] = useOnScreen({ threshold: 0.1 });
  return (
    <div 
      ref={ref} 
      className={cn("transition-all duration-700 ease-out", className)}
      style={{ 
        opacity: visible ? 1 : 0, 
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

// 5. Scramble Text
const ScrambleText = ({ text, className, delay = 0 }) => {
  const [display, setDisplay] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@&%';
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let iterations = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplay(text.split('').map((letter, index) => {
          if (index < iterations) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join(''));
        if (iterations >= text.length) clearInterval(interval);
        iterations += 1 / 3;
      }, 30);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isVisible, text, delay]);
  return <span ref={elementRef} className={className}>{display || <span className="opacity-0">{text}</span>}</span>;
};

// 6. Typing Prompt
const TypingPrompt = ({ start }) => {
  const [text, setText] = useState('');
  const fullText = "generate cinematic_masterpiece --style vssn --ar 16:9 --video";
  useEffect(() => {
    if (!start) return;
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [start]);
  return (
    <div className="font-mono text-xs md:text-sm text-neutral-500 mb-8 bg-black/50 border border-white/20 p-3 rounded-lg inline-flex items-center gap-2 max-w-full overflow-hidden backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
      <Video className="w-3 h-3 text-[#FF0055]" />
      <span className="text-[#FF0055]">/imagine video:</span>
      <span className="text-white">{text}</span>
      <span className="w-1.5 h-4 bg-white animate-pulse"></span>
    </div>
  );
};

// 7. Tilt Card Component
const TiltCard = ({ children, className, onClick }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -12; 
        const rotateY = ((x - centerX) / centerX) * 12;

        setRotation({ x: rotateX, y: rotateY });
        setGlarePosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
    };

    const handleMouseEnter = () => setIsHovered(true);
    
    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div 
            ref={cardRef}
            className={cn("w-full h-full transition-transform duration-200 ease-out will-change-transform relative group", className)}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{
                transformStyle: 'preserve-3d',
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`
            }}
        >
            <div className="w-full h-full overflow-hidden relative border border-white/20 bg-black hover:border-white transition-colors duration-300">
                {children}
                
                <div 
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                        background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4), transparent 60%)`,
                        zIndex: 30
                    }}
                />
            </div>
        </div>
    );
};

// 8. Gallery Modal (Inspection View)


const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }) => {
  if (!isOpen || !selectedItem) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
      <div className="relative w-full h-full md:w-[95vw] md:h-[95vh] flex flex-col bg-black border border-[#3A3A3A] shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3A3A3A]">
            <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-[#A0A0A0] uppercase tracking-widest">Inspection_Mode</span>
                <span className="text-[10px] font-mono text-white bg-[#3A3A3A] px-2 py-0.5">{selectedItem.id}</span>
            </div>
            <button onClick={onClose} className="text-[#A0A0A0] hover:text-white transition-colors interactive">
                <X className="w-5 h-5" />
            </button>
        </div>
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            <div className="flex-1 bg-[#050505] flex items-center justify-center p-4 md:p-12 relative" onClick={onClose}>
                <div className="relative w-full h-full flex items-center justify-center">
                    {selectedItem.type === 'video' ? (
                        <video 
  className="max-w-full max-h-full object-contain border controls border-[#1A1A1A]" 
  src={selectedItem.url} 
  autoPlay 
  playsInline 
  loop 
/>
                    ) : (
                        <img src={selectedItem.url} alt={selectedItem.title} className="max-w-full max-h-full object-contain border border-[#1A1A1A]" />
                    )}
                </div>
            </div>
            <div className="w-full md:w-80 border-l border-[#3A3A3A] bg-black p-8 overflow-y-auto hidden md:block">
                <div className="space-y-8">
                    <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#555] mb-2 block font-mono">Designator</span>
                        <h2 className="text-xl font-medium text-white">{selectedItem.title}</h2>
                    </div>
                    <div>
                        <span className="text-[10px] uppercase tracking-widest text-[#555] mb-2 block font-mono">Parameters</span>
                        <p className="text-sm text-[#A0A0A0] leading-relaxed">{selectedItem.desc}</p>
                    </div>
                    <div className="pt-8 border-t border-[#1A1A1A] space-y-2">
                         <div className="flex justify-between text-[10px] font-mono"><span className="text-[#555]">TYPE</span><span className="text-white">{selectedItem.type.toUpperCase()}</span></div>
                         <div className="flex justify-between text-[10px] font-mono"><span className="text-[#555]">RATIO</span><span className="text-white">{selectedItem.ratio}</span></div>
                         <div className="flex justify-between text-[10px] font-mono"><span className="text-[#555]">STATUS</span><span className="text-white">FINAL_RENDER</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-20 border-t border-[#1A1A1A] bg-black flex items-center px-4 gap-2 overflow-x-auto">
             {mediaItems.map((item) => (
                <button key={item.id} onClick={(e) => { e.stopPropagation(); setSelectedItem(item); }} className={cn("h-12 w-20 relative flex-shrink-0 border transition-all duration-200 overflow-hidden interactive", selectedItem.id === item.id ? "border-white opacity-100" : "border-[#1A1A1A] opacity-40 hover:opacity-80")}>
                     {item.type === 'video' ? <video src={item.url} className="w-full h-full object-cover" muted /> : <img src={item.url} className="w-full h-full object-cover" alt="" />}
                </button>
             ))}
        </div>
      </div>
    </div>
  );
};



// 9. Orbit Gallery (3D Rotating Carousel)
const OrbitGallery = ({ items, onSelect }) => {
    const trackRef = useRef(null);
    const requestRef = useRef(null);
    const angleRef = useRef(0);
    const [tilt, setTilt] = useState({ x: -5, y: 0 });
    const [hoveredId, setHoveredId] = useState(null);

    // Optimized Animation Loop: Updates DOM directly via Ref instead of React State
    useEffect(() => {
        const animate = () => {
            angleRef.current = (angleRef.current + 0.04) % 360;
            if (trackRef.current) {
                trackRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
            }
            requestRef.current = requestAnimationFrame(animate);
        };
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * -20;
        setTilt({ x: -5 + y, y: x });
    };

    // Auto-calculate radius so cards never overlap:
    // r = (cardWidth + gap) / (2 * sin(π / n))
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const cardW = isMobile ? 220 : 450;
    const cardH = isMobile ? 130 : 250;
    const gap = 40;
    const radius = Math.ceil((cardW + gap) / (2 * Math.sin(Math.PI / items.length)));

    return (
        <section
            className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center perspective-[2000px] border-b border-white/10"
            onMouseMove={handleMouseMove}
            id="gallery"
        >
        
            <div className="absolute top-12 left-12 z-20 pointer-events-none">
                <h2 className="text-4xl md:text-6xl font-display font-medium uppercase text-white mb-2">3D ARCHIVE</h2>
                <p className="text-xs font-mono text-white/50 tracking-widest uppercase">Move mouse to tilt / Click to expand</p>
            </div>

            {/* Orbit Container */}
            <div
                className="relative w-full h-full flex items-center justify-center preserve-3d z-10 transition-transform duration-300 ease-out"
                style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
                {/* Rotating Track */}
                <div
                    ref={trackRef}
                    className="preserve-3d will-change-transform"
                    style={{ width: cardW, height: cardH, position: 'relative' }}
                >
                    {items.map((item, i) => {
                        const itemAngle = (i / items.length) * 360;
                        return (
                            <div
                                key={item.id}
                                className={`absolute inset-0 cursor-pointer group rounded-xl overflow-hidden border border-white/10 hover:border-white/40 bg-black/80 transition-all duration-300 interactive`}
                                onClick={() => onSelect(item)}
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                style={{
                                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                                    backfaceVisibility: 'visible',
                                }}
                            >
                                <div className="w-full h-full relative">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none"></div>

                                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <h3 className="text-white font-display text-xl uppercase tracking-wider mb-1">{item.title}</h3>
                                                <span className="text-[9px] font-mono text-[#D4FF00] tracking-widest uppercase px-2 py-1 border border-[#D4FF00]/30 bg-[#D4FF00]/10">{item.category}</span>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                                <Play className="w-3 h-3 text-black fill-black ml-0.5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// 10. Process 3D (Workflow)
const Process3D = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const { top, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            let progress = (window.scrollY - containerRef.current.offsetTop) / (height - windowHeight);
            
            if (progress < 0) progress = 0;
            if (progress > 1) progress = 1;
            
            const totalSteps = workflowSystem.length;
            const currentStep = Math.min(Math.floor(progress * totalSteps), totalSteps - 1);
            
            if (currentStep !== activeStep) {
                setActiveStep(currentStep);
            }
            
            if (canvasRef.current) {
                canvasRef.current.scrollProgress = progress;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeStep]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles = [];
        const layerCount = 5;
        const particlesPerLayer = 100;

        for (let l = 0; l < layerCount; l++) {
            for (let i = 0; i < particlesPerLayer; i++) {
                particles.push({
                    x: (Math.random() - 0.5) * width * 2,
                    y: (Math.random() - 0.5) * height * 2,
                    z: l * 400 + Math.random() * 200,
                    size: Math.random() * 1.5,
                    opacity: Math.random() * 0.5 + 0.1
                });
            }
        }

        let animationFrame;
        
        const render = () => {
            const progress = canvas.scrollProgress || 0;
            ctx.fillStyle = '#000000'; 
            ctx.fillRect(0, 0, width, height);
            
            const cx = width / 2;
            const cy = height / 2;
            const fov = 400;

            const cameraZ = progress * 2000; 
            
            particles.forEach(p => {
                let relZ = p.z - cameraZ;
                const loopDepth = 2400;
                while (relZ < -fov) relZ += loopDepth; 
                while (relZ > loopDepth - fov) relZ -= loopDepth;

                const scale = fov / (fov + relZ);
                const x2d = p.x * scale + cx;
                const y2d = p.y * scale + cy;

                const rot = progress * Math.PI * 0.5;
                const rotX = (x2d - cx) * Math.cos(rot) - (y2d - cy) * Math.sin(rot) + cx;
                const rotY = (x2d - cx) * Math.sin(rot) + (y2d - cy) * Math.cos(rot) + cy;

                if (scale > 0) {
                    const alpha = (1 - Math.abs(relZ) / 1500) * p.opacity;
                    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(rotX, rotY, p.size * scale, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrame = requestAnimationFrame(render);
        };
        
        render();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <section id="process" className="py-32 border-b border-[#1A1A1A] -mt-20">
        <div className="container max-w-[1400px] mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl tracking-tighter mb-6">OPERATING SYSTEM</h2>
            <p className="text-[#777] max-w-md text-lg leading-relaxed">
              We do not follow a creative process. We operate a system. Each stage is designed to reduce noise.
            </p>
          </div>

          <div className="border-t border-[#1A1A1A]">
            {workflowSystem.map((step) => (
              <div key={step.id} className="grid md:grid-cols-12 border-b border-[#1A1A1A] group hover:bg-[#0A0A0A] transition-colors interactive">
                <div className="md:col-span-2 p-6 border-r border-[#1A1A1A] font-mono text-xs text-[#333] pt-8 group-hover:text-white transition-colors">
                  {step.id}
                </div>
                <div className="md:col-span-4 p-6 border-r border-[#1A1A1A] pt-8">
                  <h3 className="text-xl mb-1 text-white">{step.title}</h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#555]">{step.sub}</p>
                </div>
                <div className="md:col-span-6 p-6 pt-8">
                  <p className="text-base text-[#A0A0A0] leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

// 11. Magnetic Button
const MagneticButton = ({ children, className, onClick }) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3; // Magnet strength
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={btnRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {children}
    </button>
  );
};

// --- Main App ---

const App = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [booting, setBooting] = useState(true);
  const [bootLogs, setBootLogs] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [entered, setEntered] = useState(false); // New Entered State

  // Boot Sequence - AI THEMED
  useEffect(() => {
    const logs = ["INITIALIZING VIDEO_NEURAL_NET...", "LOADING_DIFFUSION_MODELS...", "BYPASSING_PHYSICAL_CAMERAS...", "GENERATING_SYNTHETIC_ENV...", "SYSTEM_READY."];
    let delay = 0;
    logs.forEach((log, index) => {
      setTimeout(() => {
        setBootLogs(prev => [...prev, log]);
        if (index === logs.length - 1) setTimeout(() => setBooting(false), 1200);
      }, delay);
      delay += Math.random() * 300 + 300;
    });
  }, []);

  // Enter Key Listener
  useEffect(() => {
    if (!booting && !entered) {
      const handleKeyDown = (e) => {
        if (e.key === 'Enter') setEntered(true);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [booting, entered]);

  // Cursor & Scroll
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      const isClickable = target.closest('button') || target.closest('a') || target.closest('.interactive');
      setIsHoveringLink(!!isClickable);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleFaq = (index) => setActiveFaq(prev => (prev === index ? null : index));

  if (booting) {
    return (
      <div className="fixed inset-0 bg-[#050505] text-white font-mono text-sm p-10 z-[200] flex flex-col justify-end">
        <div className="mb-4">
          {bootLogs.map((log, i) => (
            <div key={i} className="mb-1 text-neutral-400 font-mono text-xs">
              <span className="text-neutral-600 mr-2">{`>`}</span>
              {log}
            </div>
          ))}
          <div className="animate-pulse text-white mt-2">_</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-black text-white font-sans min-h-screen selection:bg-white selection:text-black  ${!entered ? 'overflow-hidden h-screen' : 'overflow-x-hidden'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap');
        body { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: #fff; }
        .bg-grid-pattern { background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 60px 60px; }
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        .animate-scanline { animation: scanline 4s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 20s linear infinite; }
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .perspective-2000px { perspective: 2000px; }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
      </div>
      
      {/* Scroll Progress - Only show when entered */}
      {entered && (
        <div className="fixed top-0 left-0 w-full h-[2px] bg-[#1A1A1A] z-[100]">
          <ScrollProgress />
        </div>
      )}

      {/* Custom Cursor */}
      <div className={`fixed pointer-events-none z-[300] hidden md:block mix-blend-difference transition-all duration-100 ease-out`} style={{ left: cursorPos.x, top: cursorPos.y }}>
        <div className={`relative transition-all duration-300 ${isHoveringLink ? 'scale-150' : 'scale-100'}`}>
          <div className="absolute top-0 left-0 w-[40px] h-[1px] bg-white -translate-x-1/2"></div>
          <div className="absolute top-0 left-0 h-[40px] w-[1px] bg-white -translate-y-1/2"></div>
          {/* Target Reticle (Shows on Hover) */}
          <div className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-white transition-all duration-300 ${isHoveringLink ? 'opacity-100 rotate-90 scale-75' : 'opacity-0 scale-150 rotate-0'}`}>
             <div className="absolute top-0 left-0 w-1 h-1 bg-white"></div>
             <div className="absolute top-0 right-0 w-1 h-1 bg-white"></div>
             <div className="absolute bottom-0 left-0 w-1 h-1 bg-white"></div>
             <div className="absolute bottom-0 right-0 w-1 h-1 bg-white"></div>
          </div>
          {/* Data Label */}
          <div className={cn(
            "absolute top-8 left-8 bg-white text-black px-1.5 py-0.5 text-[9px] font-mono font-bold tracking-widest transition-all duration-300",
            isHoveringLink ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          )}>
            TARGET_LOCKED
          </div>
          <div className={cn("absolute top-4 left-4 text-[8px] font-mono text-white tracking-widest whitespace-nowrap bg-black px-1 border border-white/20 transition-opacity duration-300", isHoveringLink ? "opacity-0" : "opacity-100")}>X:{Math.round(cursorPos.x)} Y:{Math.round(cursorPos.y)}</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 top-0 border-b border-[#1A1A1A] bg-black/90 backdrop-blur-sm transition-opacity duration-1000 ${entered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="w-full px-6 h-16 flex justify-between items-center">
      <div className="flex items-center gap-4 interactive group cursor-pointer">

  {/* LOGO */}

<img
  src={logo}
  alt="VSSN Logo"
  className="w-24 h-24 object-contain "
/>




  {/* TAGLINE */}
  <span className="text-[10px] font-mono text-[#555] border border-[#333] px-1.5 py-0.5 rounded-sm bg-white/5">
    AI VIDEO PRODUCTION
  </span>

</div>


          <div className="hidden md:flex gap-8 text-[11px] font-medium tracking-widest uppercase text-[#555]">
            {['Studio', 'Gallery', 'Process', 'Access'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors interactive">
                <ScrambleText text={item} />
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4 text-[10px] text-neutral-500 font-mono">
            <div className="flex items-center gap-2"><ScanLine className="w-3 h-3 animate-pulse" /><span>GENERATING_VIDEO...</span></div>
            <div className="flex items-center gap-2"><Wifi className="w-3 h-3" /><span>NET: SECURE</span></div>
          </div>
          <button className="md:hidden text-white interactive"><Menu className="w-5 h-5" /></button>
        </div>
      </nav>

      {/* Hero Section - 3D GALAXY BACKGROUND */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16 border-b border-[#1A1A1A] overflow-hidden group">
        
        {/* 3D Neural Vortex - Hero Only */}
        <div className="absolute inset-0 z-0">
           <NeuralVortex />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10"></div> 
        </div>

        {/* Cinema Video Overlay HUD */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-12 z-0 opacity-40">
           <div className="flex justify-between items-start">
               <div className="w-8 h-8 border-l-2 border-t-2 border-white/50"></div>
               <div className="w-8 h-8 border-r-2 border-t-2 border-white/50"></div>
           </div>
           <div className="flex justify-between items-end">
               <div className="w-8 h-8 border-l-2 border-b-2 border-white/50"></div>
               <div className="w-8 h-8 border-r-2 border-b-2 border-white/50"></div>
           </div>
           
           {/* Center Crosshair */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div className="w-12 h-[1px] bg-white/30"></div>
               <div className="h-12 w-[1px] bg-white/30 absolute top-0 left-1/2 -translate-x-1/2"></div>
           </div>
           
           {/* Recording Status */}
           <div className="absolute top-16 right-16 flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-red-600 tracking-widest">REC</span>
           </div>
        </div>

        <div className="max-w-[1400px] w-full mx-auto grid md:grid-cols-12 gap-8 relative z-10">
{!entered && (
  <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
    <img
      src={logo}
      alt="VSSN Logo"
      className="w-32 h-32 object-contain opacity-100 transition-opacity duration-500"
      style={{ mixBlendMode: 'normal' }}
    />
  </div>
)}





          <div className="md:col-span-9 flex flex-col justify-center min-h-[60vh]">
            
            {/* ENTER STATE: Only show this if NOT entered */}
            {!entered && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-50 animate-in fade-in zoom-in duration-700">
                    <button 
                      onClick={() => setEntered(true)} 
                      className="group relative px-8 py-4 bg-transparent border border-white/20 text-white font-mono text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 interactive flex items-center gap-4"
                    >
                      <CornerDownLeft className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      [ ENTER SYSTEM ]
                      <div className="absolute -right-2 -top-2 w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute -left-2 -bottom-2 w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                    <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-[#555] animate-pulse">
                      <Keyboard className="w-3 h-3" /> <span>PRESS ENTER KEY</span>
                    </div>
                </div>
            )}

            {/* MAIN CONTENT: Show if entered */}
            {entered && (
                <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
                    <Reveal>
                    <TypingPrompt start={entered} />
                    <div className="flex items-center gap-2 mb-8 text-[#555]">
                        <Terminal className="w-4 h-4" />
                        <span className="text-xs font-mono uppercase tracking-widest">/// Automated Cinema Pipeline</span>
                    </div>
                    <h1 className="text-6xl md:text-[8vw] font-medium tracking-tighter leading-[0.85] mb-12 mix-blend-exclusion text-white">
                        <ScrambleText text="NOT CONTENT." className="block" delay={0} />
                        <ScrambleText text="CULTURE." className="block text-white" delay={500} />
                        <span className="block opacity-50">ENGINEERED.</span>
                    </h1>
                    </Reveal>
                    <Reveal delay={200}>
                    <div className="max-w-xl border-l border-[#333] pl-8 backdrop-blur-sm">
                        <p className="text-xl md:text-2xl text-[#A0A0A0] leading-relaxed font-light mb-8">
                        VSSN is an AI-driven studio designing the visual language of the synthetic era. <span className="text-white">We do not capture visuals. We construct systems.</span>
                        </p>
                        <div className="flex flex-col gap-4">
                            {/* Fake Render Progress Bar */}
                            <div className="w-full h-1 bg-[#222] rounded-full overflow-hidden">
                                <div className="h-full bg-white animate-[width_3s_ease-in-out_infinite]" style={{ width: '0%' }}></div>
                            </div>
                            <div className="flex justify-between text-[10px] font-mono text-[#555]">
                                <span>RENDERING FRAME 1042/2400</span>
                                <span>EST. TIME: 00:00:12</span>
                            </div>
                        </div>
                        
                        <MagneticButton className="group flex items-center gap-3 bg-white text-black px-8 py-4 hover:bg-[#E4E4E4] transition-colors interactive mt-8">
                        <span className="text-xs font-mono uppercase tracking-widest font-bold">Start Generating</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </MagneticButton>
                    </div>
                    </Reveal>
                </div>
            )}
          </div>
          
          {entered && (
            <div className="md:col-span-3 flex flex-col justify-end items-end pb-12 animate-in fade-in slide-in-from-right-10 duration-1000 delay-500">
                <Reveal delay={400} className="text-right font-mono text-[9px] text-neutral-600 space-y-2 border-r border-neutral-800 pr-4">
                <p>LAT: 40.7128° N</p>
                <p>LON: 74.0060° W</p>
                <p>ENG: NEURAL_RENDER</p>
                <p>GPU: ALLOCATED</p>
                <p>STATUS: GENERATING</p>
                </Reveal>
            </div>
          )}
        </div>
      </section>

      {/* Rest of the Website - Only rendered if entered */}
      {entered && (
        <div className="animate-in fade-in duration-1000">
            
            {/* Philosophy / About */}
            <section id="studio" className="py-32 border-b border-[#1A1A1A] bg-black/80 backdrop-blur-md">
                <div className="container max-w-[1400px] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-24">
                    <div>
                    <span className="block text-[10px] font-mono text-[#555] mb-8 tracking-widest">01 / MANIFESTO</span>
                    <h2 className="text-4xl md:text-5xl leading-[1] tracking-tight mb-8">
                        WE OPERATE AT THE INTERSECTION OF HUMAN IMAGINATION AND MACHINE INTELLIGENCE.
                    </h2>
                    </div>
                    <div className="space-y-16 pt-8">
                    <div>
                        <h3 className="text-2xl mb-3 font-normal">Precision is aesthetic.</h3>
                        <p className="text-[#777] text-sm max-w-xs leading-relaxed">Every decision reduces noise. Every choice amplifies signal. Clarity is the design.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 border-t border-[#1A1A1A] pt-8">
                        <div>
                        <span className="text-[10px] font-mono text-white block mb-4 uppercase tracking-widest">VSSN IS</span>
                        <ul className="space-y-2 text-sm text-[#A0A0A0]">
                            <li>Synthetic vision lab</li>
                            <li>Design entity</li>
                            <li>System builder</li>
                        </ul>
                        </div>
                        <div>
                        <span className="text-[10px] font-mono text-[#333] block mb-4 uppercase tracking-widest">VSSN IS NOT</span>
                        <ul className="space-y-2 text-sm text-[#333] line-through">
                            <li>Content studio</li>
                            <li>Trend-driven AI</li>
                            <li>Volume agency</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Advantages Section (NEW - With Synthetic Field) */}
            <section className="py-32 border-b border-[#1A1A1A] bg-black relative overflow-hidden">
              <SyntheticField />
              <div className="container max-w-[1400px] mx-auto px-6 relative z-10">
                <Reveal className="mb-20">
                  <span className="text-[10px] font-mono text-[#555] mb-4 block tracking-widest">02 / ADVANTAGE</span>
                  <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">
                    WHY BRANDS MIGRATE <br/> TO SYNTHETIC MEDIA.
                  </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
                  {advantages.map((item) => (
                    <div key={item.id} className="bg-black/90 p-8 group hover:bg-[#0A0A0A]/90 transition-colors relative h-full flex flex-col justify-between backdrop-blur-sm">
                      <div>
                        <div className="mb-6 text-[#555] group-hover:text-white transition-colors">
                          <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-[#777] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <div className="mt-8 text-[9px] font-mono text-[#333] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                          SYSTEM_ADVANTAGE_{item.id}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3D Orbit Gallery */}
            <OrbitGallery 
                items={galleryData} 
                onSelect={setSelectedGalleryItem} 
            />

            {/* Replaced Workflow List with New 3D Process Component */}
            <Process3D />

            {/* FAQ Section */}
            <section className="py-32 border-b border-[#1A1A1A]">
                <div className="container max-w-[800px] mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-4xl tracking-tighter mb-2">FAQ</h2>
                    <p className="text-[10px] font-mono text-[#555] uppercase">Clarity, before commitment.</p>
                </div>
                
                <div className="border-t border-[#1A1A1A]">
                    {faqItems.map((item, index) => (
                    <div key={index} className="border-b border-[#1A1A1A]">
                        <button 
                        className="w-full py-6 text-left flex justify-between items-start hover:bg-[#0A0A0A] transition-colors group interactive"
                        onClick={() => toggleFaq(index)}
                        >
                        <span className="text-lg font-light text-[#E4E4E4] group-hover:text-white transition-colors">{item.q}</span>
                        <span className="font-mono text-xs text-[#555] pt-1">
                            {activeFaq === index ? <Minus className="w-4 h-4"/> : <Plus className="w-4 h-4"/>}
                        </span>
                        </button>
                        {activeFaq === index && (
                        <div className="pb-8 text-[#A0A0A0] leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                            {item.a}
                        </div>
                        )}
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="access" className="py-32">
                <div className="container max-w-[1400px] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-24">
                    <div>
                    <h2 className="text-6xl md:text-8xl tracking-tighter leading-[0.85] mb-12">
                        ENTER <br/> THE STUDIO.
                    </h2>
                    <p className="text-lg text-[#A0A0A0] font-light max-w-sm leading-relaxed">
                        VSSN collaborates selectively. We work with teams building long-term systems — not short-term outputs.
                    </p>
                    </div>

                    <form className="pt-4">
                    <div className="space-y-12">
                        {['Name', 'Organization', 'Role'].map((label) => (
                        <div key={label} className="group relative">
                            <label className="absolute -top-3 left-0 text-[9px] font-mono text-[#555] uppercase tracking-widest bg-black pr-2 group-focus-within:text-white transition-colors">{label}</label>
                            <input type="text" className="w-full bg-transparent border-b border-[#333] py-4 text-xl focus:outline-none focus:border-white transition-colors text-white rounded-none" />
                        </div>
                        ))}
                        <div className="group relative">
                        <label className="absolute -top-3 left-0 text-[9px] font-mono text-[#555] uppercase tracking-widest bg-black pr-2 group-focus-within:text-white transition-colors">Intent</label>
                        <textarea rows="3" className="w-full bg-transparent border-b border-[#333] py-4 text-xl focus:outline-none focus:border-white transition-colors resize-none text-white rounded-none"></textarea>
                        </div>
                    </div>
                    
                    <div className="pt-16">
                        <button type="button" className="text-xl font-medium text-white hover:text-[#A0A0A0] transition-colors flex items-center gap-4 interactive">
                        Initiate Alignment 
                        <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </section>

            {/* Live System Footer */}
            <div className="border-t border-[#1A1A1A] bg-[#050505]">
                {/* Marquee */}
                <div className="overflow-hidden border-b border-[#1A1A1A] py-2">
                    <div className="flex gap-8 whitespace-nowrap animate-marquee text-[10px] font-mono text-[#333]">
                        {Array(10).fill("SYSTEM STATUS: ONLINE /// ALL SYSTEMS OPERATIONAL /// NEURAL ENGINE ACTIVE /// ").map((t, i) => (
                            <span key={i}>{t}</span>
                        ))}
                    </div>
                </div>
                
                <footer className="py-20 text-xs">
                    <div className="container max-w-[1400px] mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-20">
                        <div>
                        <h3 className="text-2xl font-bold tracking-tighter mb-4">VSSN</h3>
                        <p className="text-[#555] font-mono">AI Culture Studio</p>
                        </div>
                        {['Studio', 'Operate', 'Connect'].map((col) => (
                        <div key={col} className="space-y-4 text-[#555]">
                            <span className="block text-white mb-2 font-mono uppercase tracking-widest text-[10px]">{col}</span>
                            {['Systems', 'Artifacts', 'Access'].map(link => (
                                <p key={link} className="hover:text-white cursor-pointer transition-colors interactive">{link}</p>
                            ))}
                        </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-end text-[#333] font-mono uppercase tracking-widest border-t border-[#111] pt-8">
                        <p>© VSSN. Synthetic vision engine.</p>
                        <p className="text-white text-right normal-case tracking-normal font-sans text-xl">Not content. <br/> Culture.</p>
                    </div>
                    </div>
                </footer>
            </div>
        </div>
      )}

      {/* Interactive Modal Layer */}
      <GalleryModal 
        selectedItem={selectedGalleryItem} 
        isOpen={!!selectedGalleryItem} 
        onClose={() => setSelectedGalleryItem(null)} 
        setSelectedItem={setSelectedGalleryItem}
        mediaItems={galleryData} 
      />
    </div>
  );
};

export default App;