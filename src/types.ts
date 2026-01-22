import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface IndustryItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AccordionItem {
  title: string;
  content: string;
}
