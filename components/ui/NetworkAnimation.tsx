'use client';

import React, { useEffect, useRef } from 'react';

const NetworkAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      canvas.style.width = canvas.offsetWidth + 'px';
      canvas.style.height = canvas.offsetHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();

    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;

    // Scale based on canvas size for responsiveness
    const canvasSize = Math.min(canvas.offsetWidth, canvas.offsetHeight);
    const scaleFactor = canvasSize / 600; // 600 is the base size

    // Network structure
    const center = { x: centerX, y: centerY, radius: 30 * scaleFactor };

    // Create hub nodes around center
    interface Hub {
      x: number;
      y: number;
      radius: number;
      connections: OuterNode[];
    }

    interface OuterNode {
      x: number;
      y: number;
      radius: number;
    }

    const hubs: Hub[] = [];
    const hubCount = 8;
    const hubDistance = 140 * scaleFactor;

    for (let i = 0; i < hubCount; i++) {
      const angle = (i / hubCount) * Math.PI * 2;
      hubs.push({
        x: centerX + Math.cos(angle) * hubDistance,
        y: centerY + Math.sin(angle) * hubDistance,
        radius: 14 * scaleFactor,
        connections: []
      });
    }

    // Create outer nodes - 3 per hub, evenly distributed
    const nodesPerHub = 3;
    const totalOuterNodes = hubCount * nodesPerHub; // 24 total nodes
    const outerNodeDistance = hubDistance + (90 * scaleFactor);
    const outerNodes: OuterNode[] = [];

    for (let i = 0; i < totalOuterNodes; i++) {
      const angle = (i / totalOuterNodes) * Math.PI * 2;
      outerNodes.push({
        x: centerX + Math.cos(angle) * outerNodeDistance,
        y: centerY + Math.sin(angle) * outerNodeDistance,
        radius: 6 * scaleFactor
      });
    }

    // Assign outer nodes to nearest hubs
    outerNodes.forEach((node) => {
      let closestHub = hubs[0];
      let minDistance = Math.hypot(node.x - hubs[0].x, node.y - hubs[0].y);

      hubs.forEach((hub) => {
        const distance = Math.hypot(node.x - hub.x, node.y - hub.y);
        if (distance < minDistance) {
          minDistance = distance;
          closestHub = hub;
        }
      });

      closestHub.connections.push(node);
    });

    // Animation state
    interface Line {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      progress: number;
      speed: number;
      delay: number;
      type: string;
    }

    interface Node {
      x: number;
      y: number;
      radius: number;
      scale: number;
      appearDelay: number;
      type: string;
      color?: string;
      colorTransition?: number;
    }

    const lines: Line[] = [];
    const nodes: Node[] = [];

    // Center node always visible
    nodes.push({
      x: center.x,
      y: center.y,
      radius: center.radius,
      scale: 1,
      appearDelay: 0,
      type: 'center',
      color: '#4A4A4A',
      colorTransition: 0
    });

    // Create node and line objects for animation
    hubs.forEach((hub) => {
      // Outer nodes
      hub.connections.forEach((node) => {
        nodes.push({
          x: node.x,
          y: node.y,
          radius: node.radius,
          scale: 0,
          appearDelay: Math.random() * 60,
          type: 'outer'
        });

        // Line from outer node to hub (appears after nodes)
        lines.push({
          x1: node.x,
          y1: node.y,
          x2: hub.x,
          y2: hub.y,
          progress: 0,
          speed: 0.02,
          delay: 180 + Math.random() * 60,
          type: 'outer'
        });
      });

      // Hub node (appears after outer nodes)
      nodes.push({
        x: hub.x,
        y: hub.y,
        radius: hub.radius,
        scale: 0,
        appearDelay: 80 + Math.random() * 40,
        type: 'hub'
      });

      // Line from hub to center (appears after all outer lines, all at same time)
      lines.push({
        x1: hub.x,
        y1: hub.y,
        x2: center.x,
        y2: center.y,
        progress: 0,
        speed: 0.018,
        delay: 300,
        type: 'hub'
      });
    });

    let frame = 0;
    let animationId: number;
    const outerCircleRadius = outerNodeDistance;
    let outerCircleProgress = 0;

    function drawNode(x: number, y: number, radius: number, scale = 1, color = '#4A4A4A', noBorder = false) {
      if (scale <= 0 || !ctx) return;

      ctx.save();
      ctx.translate(Math.round(x), Math.round(y));

      ctx.beginPath();
      ctx.arc(0, 0, radius * scale, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();

      if (!noBorder) {
        ctx.strokeStyle = 'rgba(160, 160, 160, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      ctx.restore();
    }

    function easeIn(t: number) {
      return t * t * t;
    }

    function drawLine(x1: number, y1: number, x2: number, y2: number, progress: number) {
      if (progress <= 0 || !ctx) return;

      const easedProgress = easeIn(progress);
      const currentX = x1 + (x2 - x1) * easedProgress;
      const currentY = y1 + (y2 - y1) * easedProgress;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(currentX, currentY);
      ctx.strokeStyle = 'rgba(74, 74, 74, 0.6)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      frame++;

      // Animate outer circle (draws slowly after outer nodes appear)
      if (frame > 80 && outerCircleProgress < 1) {
        outerCircleProgress = Math.min(outerCircleProgress + 0.012, 1);
      }

      // Draw outer circle connecting all outer dots
      if (outerCircleProgress > 0) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, outerCircleRadius, 0, Math.PI * 2 * outerCircleProgress);
        ctx.strokeStyle = 'rgba(74, 74, 74, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Update and draw nodes (they appear first)
      nodes.forEach(node => {
        if (node.type === 'center') {
          // Check if all hub lines are complete to change color gradually
          const hubLines = lines.filter(l => l.type === 'hub');
          const allHubLinesComplete = hubLines.every(l => l.progress >= 1);

          if (allHubLinesComplete && (node.colorTransition || 0) < 1) {
            node.colorTransition = Math.min((node.colorTransition || 0) + 0.015, 1);
          }

          // Interpolate between grey and orange
          const startR = 74, startG = 74, startB = 74;
          const endR = 255, endG = 69, endB = 0;
          const t = node.colorTransition || 0;

          const r = Math.round(startR + (endR - startR) * t);
          const g = Math.round(startG + (endG - startG) * t);
          const b = Math.round(startB + (endB - startB) * t);

          node.color = `rgb(${r}, ${g}, ${b})`;
        } else if (frame > node.appearDelay && node.scale < 1) {
          node.scale = Math.min(node.scale + 0.06, 1);
        }

        // Draw non-center nodes first
        if (node.type !== 'center') {
          drawNode(node.x, node.y, node.radius, node.scale);
        }
      });

      // Update and draw lines (they appear after nodes)
      lines.forEach(line => {
        if (frame > line.delay) {
          line.progress = Math.min(line.progress + line.speed, 1);
        }
        drawLine(line.x1, line.y1, line.x2, line.y2, line.progress);
      });

      // Draw center node last (on top of everything)
      const centerNode = nodes.find(n => n.type === 'center');
      if (centerNode) {
        drawNode(centerNode.x, centerNode.y, centerNode.radius, 1, centerNode.color, true);
      }

      // Check if animation is complete
      const allNodesAppeared = nodes.every(n => n.scale >= 1);
      const allLinesComplete = lines.every(l => l.progress >= 1);

      // Animation completes and stops (no loop)
      if (allNodesAppeared && allLinesComplete && frame > 420) {
        return;
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      canvas.style.width = canvas.offsetWidth + 'px';
      canvas.style.height = canvas.offsetHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default NetworkAnimation;
