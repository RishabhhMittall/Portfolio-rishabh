import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const AnimationContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

const BUBBLE_COUNT = 400;
const ATTRACTION_DISTANCE = 150;
const MAX_SPEED = 2;
const DRIFT_FACTOR = 0.95;
const RETURN_FORCE = 0.05;  // Force pulling bubbles back to original position
const MAX_DISPLACEMENT = 50;  // Maximum distance a bubble can move from its original position

class Bubble {
  constructor(x, y, radius) {
    this.originalX = x;
    this.originalY = y;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = 0;
    this.vy = 0;
  }

  update(mouseX, mouseY, width, height) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Attraction to mouse
    if (distance < ATTRACTION_DISTANCE) {
      const attractionForce = (ATTRACTION_DISTANCE - distance) / ATTRACTION_DISTANCE;
      this.vx += (dx / distance) * attractionForce * 0.5;
      this.vy += (dy / distance) * attractionForce * 0.5;
    }

    // Return force to original position
    const dxOriginal = this.originalX - this.x;
    const dyOriginal = this.originalY - this.y;
    this.vx += dxOriginal * RETURN_FORCE;
    this.vy += dyOriginal * RETURN_FORCE;

    // Apply velocity
    this.vx *= DRIFT_FACTOR;
    this.vy *= DRIFT_FACTOR;

    // Limit speed
    this.vx = Math.min(Math.max(this.vx, -MAX_SPEED), MAX_SPEED);
    this.vy = Math.min(Math.max(this.vy, -MAX_SPEED), MAX_SPEED);

    // Update position
    this.x += this.vx;
    this.y += this.vy;

    // Limit displacement from original position
    const displacement = Math.sqrt(dxOriginal * dxOriginal + dyOriginal * dyOriginal);
    if (displacement > MAX_DISPLACEMENT) {
      const angle = Math.atan2(dyOriginal, dxOriginal);
      this.x = this.originalX - MAX_DISPLACEMENT * Math.cos(angle);
      this.y = this.originalY - MAX_DISPLACEMENT * Math.sin(angle);
    }

    // Keep within bounds
    this.x = Math.min(Math.max(this.x, 0), width);
    this.y = Math.min(Math.max(this.y, 0), height);
  }
}

const HeroBgAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [bubbles, setBubbles] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { left, top } = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - left,
        y: event.clientY - top
      });
    };

    const handleMouseLeave = () => {
      setMousePosition({ x: -1000, y: -1000 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const { width, height } = containerRef.current.getBoundingClientRect();
    const newBubbles = Array.from({ length: BUBBLE_COUNT }, () => 
      new Bubble(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 5 + 1  // Reduced size range from (5-15) to (1-6)
      )
    );
    setBubbles(newBubbles);
  }, []);

  useEffect(() => {
    const animate = () => {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setBubbles(prevBubbles => 
        prevBubbles.map(bubble => {
          bubble.update(mousePosition.x, mousePosition.y, width, height);
          return bubble;
        })
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <AnimationContainer ref={containerRef}>
      <Svg>
        <defs>
          <radialGradient id="bubbleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(19, 173, 199, 0.5)" />
            <stop offset="100%" stopColor="rgba(148, 93, 214, 0.3)" />
          </radialGradient>
        </defs>
        {bubbles.map((bubble, index) => (
          <circle
            key={index}
            cx={bubble.x}
            cy={bubble.y}
            r={bubble.radius}
            fill="url(#bubbleGradient)"
          />
        ))}
      </Svg>
    </AnimationContainer>
  );
};

export default HeroBgAnimation;