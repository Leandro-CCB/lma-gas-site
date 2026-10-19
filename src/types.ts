export type TabScreen =
  | 'dashboard'
  | 'pdv'
  | 'entregador'
  | 'cardapio'
  | 'vasilhames'
  | 'crm';

export interface ScreenDetail {
  id: TabScreen;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  kpis: { label: string; value: string; hint: string }[];
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  description: string;
  priceMonthly: number;
  priceQuarterly: number;
  highlighted?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface FaqItem {
  q: string;
  a: string;
  category: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  city: string;
  avatar: string;
  quote: string;
  bottlesPerMonth: string;
  highlight: string;
}