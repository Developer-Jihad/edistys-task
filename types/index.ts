// Common TypeScript interfaces and types used across the application
export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
}
export interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
export interface TrustedBy {
  key: string;
  description: string;
  number: number;
  frontSymbol?: string;
  backSymbol?: string;
}
