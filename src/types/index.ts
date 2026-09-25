export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Industry {
  slug: string;
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  path: string;
}
