import { Product, DrinkOption, Outlet, GuideArticle } from '../types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCV1mZAX0g6LO2-eooDs9-Co4in1OcAUjiDE62PBcMLUWvEJL0fuIB6OO-uf08OWpPK0bRMmhkNiylRqQvbFOH9soIAJGa0w2qy6dUWOTgxOv1PyXC3Cdl0BXI8FWmcS4EMn_1hh-TYpVPdXad9Pksbu3hZb1bZXSZIHj6QE4ACfsnoDOaWO97Pg9raJRZ_LQvQvzRlMMnUC7aIbdjc29lKr8e3sRPVMYuBFzEVbEx9uq75P3sdouUC";

export const PRODUCTS: Product[] = [
  {
    id: 'smoky-quartz-capsules',
    name: 'Smoky Quartz Capsules',
    price: 15.00,
    currency: 'SGD',
    category: 'capsules',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsgb7WP_7PydG1lBvznGH1__0-uBa8IR4ILGHVq11Sq1wAjy5NMfvxbr_z31KqiOTp8zeV0NUzjoQWt394ibYemkwmw4BSJzmXq4TzP_5DGjLCCsnYvLjX4eJ24SJBb5jIaQULCxcl9djTT1PZHCJgrpWio3GkI16JhlGUvteIe7UGMIS7sBtN2xYXuh0Hbw096E_Cqkn7Ey31tupVXUaR4X-TLyxlzGhXxgWgw39KCIVZHnKBt0JpGixY',
    description: 'A signature dark roast blend packed into Nespresso-compatible aluminum capsules. Deep notes of dark chocolate, roasted hazelnut, and brown sugar with a velvety finish.',
    roastLevel: 'Dark',
    origin: 'Brazil & Colombia Blend',
    process: 'Washed & Natural',
    altitude: '1,100m - 1,800m',
    tastingNotes: ['Dark Chocolate', 'Roasted Hazelnut', 'Molasses'],
    inStock: true
  },
  {
    id: 'gachala-capsules',
    name: 'Gachala Capsules',
    price: 14.50,
    currency: 'SGD',
    category: 'capsules',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvf7F9kVUuojXlH1XWy4KHLDzNqy7HQ971mGy9lwJBH8F9XXUJRNXi_3jtazyYqtaeykRMM7bqor5X3WVk42ujjTKHwFOPu9qNDoqNiXIIFv_imylkU3mFhVdfN8_K8pMQW3tn1hYXmRQeLoI4Fydk8YgC1s6JG7wfCYrZvGqp7DIIIJPSEoTywPLultqhzmzTL7Phjnhk1klIPZLnx8B0sPvmKfaIsZicqzzCRPQ_t8Y-Hebjv4qlvwhE',
    description: 'Single-origin Colombian specialty capsules boasting vibrant red berry acidity, sugarcane sweetness, and a crisp floral honey aroma.',
    roastLevel: 'Medium',
    origin: 'Cundinamarca, Colombia',
    process: 'Fully Washed',
    altitude: '1,750m',
    tastingNotes: ['Red Currant', 'Sugarcane', 'Floral Honey'],
    inStock: true
  },
  {
    id: 'heritage-signature-blend',
    name: 'Heritage Signature Whole Beans (250g)',
    price: 22.00,
    currency: 'SGD',
    category: 'beans',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuxd1mJgpOfZhVWGeb59TV8wKZSZWBcICHRYNj4sEfjGKOTq8ZQCfkvUVRGZtWM7xBuwge-SJyve9INooWZEs7u3Usz4NZunSEpRhuv_DPgy2cwKzeUmaZkjc9cBAHfJyHvj537n9j_ku9rii7Ko7dArkT6-s6fnWH9YzEz20HT4dxXfFmkmDceM15aZH05VFm6oxEX3liRnHN6Lg9WBxHJa-DVxyMbVBV4b5VhL1rgXKLAFFdHPVsL5VI',
    description: 'Our staple house espresso roast since 1960. Balanced body with toasted almond notes, ripe plum, and a lingering cocoa powder finish.',
    roastLevel: 'Medium-Dark',
    origin: 'Guatemala & Ethiopia',
    process: 'Washed / Honey',
    altitude: '1,500m - 2,000m',
    tastingNotes: ['Toasted Almond', 'Plum', 'Bittersweet Cocoa'],
    inStock: true
  },
  {
    id: 'ethiopia-yirgacheffe-drip',
    name: 'Ethiopia Yirgacheffe Drip Bags (10pk)',
    price: 18.00,
    currency: 'SGD',
    category: 'drip',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsgb7WP_7PydG1lBvznGH1__0-uBa8IR4ILGHVq11Sq1wAjy5NMfvxbr_z31KqiOTp8zeV0NUzjoQWt394ibYemkwmw4BSJzmXq4TzP_5DGjLCCsnYvLjX4eJ24SJBb5jIaQULCxcl9djTT1PZHCJgrpWio3GkI16JhlGUvteIe7UGMIS7sBtN2xYXuh0Hbw096E_Cqkn7Ey31tupVXUaR4X-TLyxlzGhXxgWgw39KCIVZHnKBt0JpGixY',
    description: 'Convenient single-serve pour over drip bags. Delivers jasmine tea florals, bergamot citrus, and peach nectar notes anywhere.',
    roastLevel: 'Light',
    origin: 'Yirgacheffe, Ethiopia',
    process: 'Washed',
    altitude: '2,000m',
    tastingNotes: ['Jasmine', 'Bergamot', 'Peach'],
    inStock: true
  }
];

export const OUTLETS: Outlet[] = [
  {
    id: 'novena-square-2',
    name: 'Novena Square 2',
    address: '10 Sinaran Drive, #B1-113, Singapore 307506',
    directions: 'Turn right into Square 2 Basement 1 at Novena MRT Exit A.',
    openingHours: 'Mon - Fri: 8:00 AM - 6:00 PM | Sat - Sun: 9:00 AM - 5:00 PM',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLv8W8UHsVyieTlJ3uT5dchprFpoqujEqW--KaroQ9IMUZkbU3HzREo3AAv2YRJQ2GSKq_3F9-n_SHRxu4NIylPaj_kWNsAPoi-0c_M5sdX__ccCF3B_hgEJ6HeTrlg0VydTO0kZbptCyWBTYrYygmhNF26UZpLrzrkBigsuStYXzHs5n0-OlWtfIM-YKyTNBPRyZp7N2qHE3t9pfTbgZRwop1-17LCgLzgmZnZHyZgzznGBVk_eHBZipg',
    phone: '+65 6235 1102',
    status: 'Open'
  },
  {
    id: 'one-raffles-place',
    name: 'One Raffles Place',
    address: '1 Raffles Place, #01-11, Singapore 048616',
    directions: 'Located on the ground floor next to main tower escalators.',
    openingHours: 'Mon - Fri: 7:30 AM - 5:30 PM | Closed Weekends',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsVlcoe7EhRynZiGnCFhVPts-0eFqoTYxOw-nJbN9a5XJdsRMiMvzNJ0eLC1MgXq7V19wQCDDFrYcTKbdVGcNlxRoPnUFzKMak3uzNklPDk4kSIEGckU2_3-1eUSvfCHwULNWg-UAhhikFyWGe38daFGTSgQNYnEVkbTyT7aVQ0NimE0VN1VeKKzLxneXAP0EdmDw8Hg99WcVr7u7VmIu3ofbtC7ue0_Xj7FZbhzKsY72I09NCFi1h_yiI',
    phone: '+65 6532 8901',
    status: 'Open'
  },
  {
    id: 'sbf-center',
    name: 'SBF Center',
    address: '160 Robinson Road, #01-04, Singapore 068914',
    directions: 'Ground floor retail plaza opposite Tanjong Pagar MRT Exit F.',
    openingHours: 'Mon - Fri: 7:30 AM - 5:00 PM | Closed Weekends',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuWfFWoc4S4yuV6CoJzRswjgThnxCAg-D1qlKRyX7DD5EDMjM7tCbXoUVexMX-ktCSOnH33rKcHq6-lgvLa6owvkfGIxq1P8yClUGNsm0pQhCT8E1hjZDtkcAvoCDcN6Yn_KS3KxxVbaFs55GYSPvj-3VzG_90dV6WOZAA7NX7MaIUTPP5cESTmtsRVzV_mcrqXabipdMU6yE-wGuB2URAQO3ggLpNptZvROW2fvYeVfa0vcrrBokFZvQ',
    phone: '+65 6384 4410',
    status: 'Open'
  },
  {
    id: 'one-north-galaxis',
    name: 'one-north (Galaxis)',
    address: '1 Fusionopolis Place, #01-34, Singapore 138522',
    directions: 'Directly linked to one-north MRT Station Exit B inside Galaxis concourse.',
    openingHours: 'Mon - Fri: 8:00 AM - 5:00 PM | Sat: 8:30 AM - 2:00 PM',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvSucwvudOMUHnnRDt72QpC3mIynhGafCG4Beg5SFbgqSFckn45ya3eH8svUixO_G_TAPJncccV1gnPU29IxOkp7shLMyOOhU3tIoRuLF0USQMtueJH9OEyWtMlAX4r8YKiBRs2X-P6-rFIywrksTCAy3k5Lm3rpPSHTaqu1SFGPNsMu2Q_vxnm3ITW8C7uBheL33LboifsN5ujDlYNooaiH1s7Rb4-d04NsajDxXG7UZw6R3NyRWyWlw',
    phone: '+65 6266 0192',
    status: 'Open'
  }
];

export const DRINK_MENU: DrinkOption[] = [
  {
    id: 'espresso-single-origin',
    name: 'Specialty Espresso',
    category: 'Espresso & Coffee',
    basePrice: 4.50,
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuxd1mJgpOfZhVWGeb59TV8wKZSZWBcICHRYNj4sEfjGKOTq8ZQCfkvUVRGZtWM7xBuwge-SJyve9INooWZEs7u3Usz4NZunSEpRhuv_DPgy2cwKzeUmaZkjc9cBAHfJyHvj537n9j_ku9rii7Ko7dArkT6-s6fnWH9YzEz20HT4dxXfFmkmDceM15aZH05VFm6oxEX3liRnHN6Lg9WBxHJa-DVxyMbVBV4b5VhL1rgXKLAFFdHPVsL5VI',
    description: 'Double shot pulled using our Heritage espresso blend or rotating single origin bean.',
    temperatures: ['Hot', 'Iced'],
    sweetnessLevels: ['Regular (100%)', 'Less Sweet (50%)', 'Unsweetened (0%)']
  },
  {
    id: 'flat-white-latte',
    name: 'Flat White / Latte',
    category: 'Espresso & Coffee',
    basePrice: 6.00,
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLv8W8UHsVyieTlJ3uT5dchprFpoqujEqW--KaroQ9IMUZkbU3HzREo3AAv2YRJQ2GSKq_3F9-n_SHRxu4NIylPaj_kWNsAPoi-0c_M5sdX__ccCF3B_hgEJ6HeTrlg0VydTO0kZbptCyWBTYrYygmhNF26UZpLrzrkBigsuStYXzHs5n0-OlWtfIM-YKyTNBPRyZp7N2qHE3t9pfTbgZRwop1-17LCgLzgmZnZHyZgzznGBVk_eHBZipg',
    description: 'Silky micro-foamed fresh milk paired with a robust espresso double shot.',
    temperatures: ['Hot', 'Iced'],
    milkOptions: ['Fresh Full Cream Milk', 'Oat Milk (+ $1.00)', 'Soy Milk (+ $0.80)'],
    sweetnessLevels: ['Regular', 'Less Sweet', 'Unsweetened']
  },
  {
    id: 'piccolo-latte',
    name: 'Piccolo Latte',
    category: 'Espresso & Coffee',
    basePrice: 5.20,
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsVlcoe7EhRynZiGnCFhVPts-0eFqoTYxOw-nJbN9a5XJdsRMiMvzNJ0eLC1MgXq7V19wQCDDFrYcTKbdVGcNlxRoPnUFzKMak3uzNklPDk4kSIEGckU2_3-1eUSvfCHwULNWg-UAhhikFyWGe38daFGTSgQNYnEVkbTyT7aVQ0NimE0VN1VeKKzLxneXAP0EdmDw8Hg99WcVr7u7VmIu3ofbtC7ue0_Xj7FZbhzKsY72I09NCFi1h_yiI',
    description: 'A punchy ristretto shot cut with velvety steamed milk in a 4oz cup.',
    temperatures: ['Hot'],
    milkOptions: ['Fresh Full Cream Milk', 'Oat Milk (+ $1.00)'],
    sweetnessLevels: ['Unsweetened', 'Less Sweet']
  },
  {
    id: 'cold-brew-black',
    name: 'Signature Bottled Cold Brew (Black)',
    category: 'Cold Brew',
    basePrice: 7.50,
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvf7F9kVUuojXlH1XWy4KHLDzNqy7HQ971mGy9lwJBH8F9XXUJRNXi_3jtazyYqtaeykRMM7bqor5X3WVk42ujjTKHwFOPu9qNDoqNiXIIFv_imylkU3mFhVdfN8_K8pMQW3tn1hYXmRQeLoI4Fydk8YgC1s6JG7wfCYrZvGqp7DIIIJPSEoTywPLultqhzmzTL7Phjnhk1klIPZLnx8B0sPvmKfaIsZicqzzCRPQ_t8Y-Hebjv4qlvwhE',
    description: 'Slow-steeped for 18 hours. Exceptionally smooth with natural stone fruit notes and low acidity.',
    temperatures: ['Iced'],
    sweetnessLevels: ['Unsweetened (Original)']
  },
  {
    id: 'cold-brew-oat-latte',
    name: 'Bottled Oat Milk Cold Brew',
    category: 'Cold Brew',
    basePrice: 8.50,
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLsgb7WP_7PydG1lBvznGH1__0-uBa8IR4ILGHVq11Sq1wAjy5NMfvxbr_z31KqiOTp8zeV0NUzjoQWt394ibYemkwmw4BSJzmXq4TzP_5DGjLCCsnYvLjX4eJ24SJBb5jIaQULCxcl9djTT1PZHCJgrpWio3GkI16JhlGUvteIe7UGMIS7sBtN2xYXuh0Hbw096E_Cqkn7Ey31tupVXUaR4X-TLyxlzGhXxgWgw39KCIVZHnKBt0JpGixY',
    description: 'Crafted with Minor Figures oat milk and concentrated cold brew. Creamy, nutty, and highly refreshing.',
    temperatures: ['Iced'],
    milkOptions: ['Minor Figures Oat Milk']
  },
  {
    id: 'uji-matcha-latte',
    name: 'Artisanal Uji Matcha Latte',
    category: 'Tea & Matcha',
    basePrice: 6.80,
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuWfFWoc4S4yuV6CoJzRswjgThnxCAg-D1qlKRyX7DD5EDMjM7tCbXoUVexMX-ktCSOnH33rKcHq6-lgvLa6owvkfGIxq1P8yClUGNsm0pQhCT8E1hjZDtkcAvoCDcN6Yn_KS3KxxVbaFs55GYSPvj-3VzG_90dV6WOZAA7NX7MaIUTPP5cESTmtsRVzV_mcrqXabipdMU6yE-wGuB2URAQO3ggLpNptZvROW2fvYeVfa0vcrrBokFZvQ',
    description: 'Ceremonial grade Uji Matcha stone-ground and hand-whisked to order.',
    temperatures: ['Hot', 'Iced'],
    milkOptions: ['Fresh Full Cream Milk', 'Oat Milk (+ $1.00)'],
    sweetnessLevels: ['Regular', 'Less Sweet', 'Unsweetened']
  },
  {
    id: 'fresh-almond-croissant',
    name: 'Freshly Baked Almond Croissant',
    category: 'Pastries',
    basePrice: 5.50,
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvSucwvudOMUHnnRDt72QpC3mIynhGafCG4Beg5SFbgqSFckn45ya3eH8svUixO_G_TAPJncccV1gnPU29IxOkp7shLMyOOhU3tIoRuLF0USQMtueJH9OEyWtMlAX4r8YKiBRs2X-P6-rFIywrksTCAy3k5Lm3rpPSHTaqu1SFGPNsMu2Q_vxnm3ITW8C7uBheL33LboifsN5ujDlYNooaiH1s7Rb4-d04NsajDxXG7UZw6R3NyRWyWlw',
    description: 'Flaky buttery French croissant filled with frangipane almond cream and topped with toasted almond flakes.',
    temperatures: ['Hot']
  }
];

export const BUYING_GUIDE_ARTICLE: GuideArticle = {
  id: 'choosing-your-perfect-coffee',
  title: 'Choosing Your Perfect Coffee: A Coffee Buying Guide',
  category: 'Coffee Guidebook',
  readTime: '4 min read',
  summary: 'Feeling lost choosing coffee? This guide decodes our coffee bag labels, from roast type to taste notes, so you can find your perfect brew with confidence.',
  image: 'https://lh3.googleusercontent.com/aida/AP1WRLuxd1mJgpOfZhVWGeb59TV8wKZSZWBcICHRYNj4sEfjGKOTq8ZQCfkvUVRGZtWM7xBuwge-SJyve9INooWZEs7u3Usz4NZunSEpRhuv_DPgy2cwKzeUmaZkjc9cBAHfJyHvj537n9j_ku9rii7Ko7dArkT6-s6fnWH9YzEz20HT4dxXfFmkmDceM15aZH05VFm6oxEX3liRnHN6Lg9WBxHJa-DVxyMbVBV4b5VhL1rgXKLAFFdHPVsL5VI',
  content: [
    'Navigating specialty coffee options can feel intimidating with terms like "washed processing", "altitude 1800m", or "light roast berry acidity". At Tiong Hoe, we believe exceptional coffee should be accessible to everyone.',
    'Here are the 4 fundamental pillars printed on every Tiong Hoe coffee bag to help you select the bean that matches your morning ritual:'
  ],
  tips: [
    {
      title: '1. Roast Level (Body vs Acidity)',
      desc: 'Light roasts retain floral and fruit acidity with tea-like body. Medium roasts balance sweetness and origin character. Dark roasts deliver heavy body, low acidity, and deep chocolate/roasted nut warmth.'
    },
    {
      title: '2. Origin & Altitude',
      desc: 'Higher altitude beans (above 1,500m) grow slower, yielding denser beans with complex fruit and floral sugars. African origins (Ethiopia, Kenya) tend to be bright & juicy; South American origins (Colombia, Brazil) tend to be chocolatey & nut-forward.'
    },
    {
      title: '3. Processing Method',
      desc: 'Washed process produces clean, crisp cups with prominent acidity. Natural process lets the cherry fruit dry on the bean, infusing heavy berry, jammy sweetness. Honey process yields smooth, syrup-like body.'
    },
    {
      title: '4. Grind Size Matching',
      desc: 'Whole beans preserve freshness up to 60 days. If grinding at home: coarse for French Press & Cold Brew, medium for V60 pour over, fine for Espresso and Moka Pot.'
    }
  ]
};
