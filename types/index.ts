// Common TypeScript interfaces and types used across the application
export interface User {
  id: string;
  name: string;
  email: string;
}

export type SectionProps = {
  title: string;
  description: string;
  className?: string;
}

export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
}
