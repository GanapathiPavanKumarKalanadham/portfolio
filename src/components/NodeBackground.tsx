import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  targetX: number;
  targetY: number;
}

const NodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createNodes = () => {
      const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 6000); // More nodes
      nodesRef.current = [];

      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        nodesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          targetX: x,
          targetY: y,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      setMousePosition(mouseRef.current);
    };

    const updateNodes = () => {
      const mouse = mouseRef.current;
      
      nodesRef.current.forEach(node => {
        // Calculate distance to mouse
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Mouse attraction/repulsion effect
        if (distance < 150) {
          const force = (150 - distance) / 150;
          const angle = Math.atan2(dy, dx);
          
          // Attract nodes to mouse
          node.vx += Math.cos(angle) * force * 0.02;
          node.vy += Math.sin(angle) * force * 0.02;
        }
        
        // Apply velocity with damping
        node.x += node.vx;
        node.y += node.vy;
        node.vx *= 0.99; // Damping
        node.vy *= 0.99;

        // Boundary collision with bounce
        if (node.x < 0 || node.x > canvas.width) {
          node.vx *= -0.8;
          node.x = Math.max(0, Math.min(canvas.width, node.x));
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy *= -0.8;
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        }
      });
    };

    const drawNodes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodeColor = isDark 
        ? 'rgba(139, 92, 246, 0.8)' 
        : 'rgba(99, 102, 241, 0.8)';
      const lineColor = isDark 
        ? 'rgba(139, 92, 246, 0.15)' 
        : 'rgba(99, 102, 241, 0.15)';

      // Draw connections
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const node1 = nodesRef.current[i];
          const node2 = nodesRef.current[j];
          const distance = Math.sqrt(
            Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
          );

          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.4;
            ctx.strokeStyle = isDark 
              ? `rgba(139, 92, 246, ${opacity})` 
              : `rgba(99, 102, 241, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections
      const mouse = mouseRef.current;
      nodesRef.current.forEach(node => {
        const distance = Math.sqrt(
          Math.pow(node.x - mouse.x, 2) + Math.pow(node.y - mouse.y, 2)
        );
        
        if (distance < 100) {
          const opacity = (100 - distance) / 100 * 0.6;
          ctx.strokeStyle = isDark 
            ? `rgba(236, 72, 153, ${opacity})` 
            : `rgba(219, 39, 119, ${opacity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      // Draw nodes with enhanced glow
      nodesRef.current.forEach(node => {
        const distance = Math.sqrt(
          Math.pow(node.x - mouse.x, 2) + Math.pow(node.y - mouse.y, 2)
        );
        
        // Enhanced glow for nodes near mouse
        if (distance < 100) {
          ctx.shadowColor = isDark ? '#ec4899' : '#db2777';
          ctx.shadowBlur = 15;
        } else {
          ctx.shadowColor = isDark ? '#8b5cf6' : '#6366f1';
          ctx.shadowBlur = 8;
        }
        
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
      });

      // Draw cursor glow effect
      ctx.shadowColor = isDark ? '#ec4899' : '#db2777';
      ctx.shadowBlur = 20;
      ctx.fillStyle = isDark ? 'rgba(236, 72, 153, 0.3)' : 'rgba(219, 39, 119, 0.3)';
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      updateNodes();
      drawNodes();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createNodes();
    animate();

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      resizeCanvas();
      createNodes();
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        background: isDark 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)' 
          : 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 50%, #c7d2fe 100%)'
      }}
    />
  );
};

export default NodeBackground;