export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  category: 'capsules' | 'beans' | 'drip' | 'gear';
  image: string;
  description: string;
  roastLevel?: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark';
  origin?: string;
  process?: string;
  altitude?: string;
  tastingNotes?: string[];
  inStock: boolean;
}

export interface DrinkOption {
  id: string;
  name: string;
  category: 'Espresso & Coffee' | 'Cold Brew' | 'Tea & Matcha' | 'Pastries';
  basePrice: number;
  image: string;
  description: string;
  temperatures?: ('Hot' | 'Iced')[];
  milkOptions?: string[];
  sweetnessLevels?: string[];
}

export interface CartItem {
  id: string; // unique item id in cart
  productId?: string;
  drinkId?: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  type: 'product' | 'pickup_drink';
  selectedOutlet?: string;
  customizations?: {
    temperature?: string;
    milk?: string;
    sweetness?: string;
    extraShot?: boolean;
    notes?: string;
  };
}

export interface Outlet {
  id: string;
  name: string;
  address: string;
  directions: string;
  openingHours: string;
  image: string;
  phone: string;
  status: 'Open' | 'Opening Soon';
}

export interface GuideArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  tips: { title: string; desc: string }[];
}
