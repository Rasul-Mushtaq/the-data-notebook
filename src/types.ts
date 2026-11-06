export interface Topic {
  id: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  breakdown: string[];
  code: { language: string; code: string };
  formula: string;
  links: { label: string; url: string }[];
}

export interface Resource {
  id: string;
  platform: string;
  title: string;
  category: string;
  description: string;
  topics: string[];
  url: string;
  icon: React.ReactNode;
}

export type CardItem =
  | { type: "topic"; id: string }
  | { type: "resource"; id: string };
