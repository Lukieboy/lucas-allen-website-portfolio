import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  // Fix: Added React import to resolve 'Cannot find namespace React' error for ReactNode type
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date: string;
  avatar?: string;
}

export type BackgroundEffectType = 'particles' | 'bubbles' | 'stars' | 'full-particles' | 'connected' | 'none';
