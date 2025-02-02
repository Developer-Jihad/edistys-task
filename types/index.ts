// Common TypeScript interfaces and types used across the application
export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Philosophy {
  icon: string;
  title: string;
  description: string;
}

export interface Slide {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  image: string;
}
export interface TrustedBy {
  key: string;
  description: string;
  number: number;
  frontSymbol?: string;
  backSymbol?: string;
}
