export type MenuItem = {
  id: string;
  title: string;
  price: string;
  desc: string;
  image: string;
  rating?: number;
  spicy?: number;
  category?: string;
};

export const MENU: MenuItem[] = [
  {
    id: "espresso",
    title: "Single Origin Espresso",
    price: "Rp35.000",
    desc: "Rich, syrupy body with orange and chocolate notes.",
    image: "/assets/menu/espresso.jpg",
    rating: 4.8,
    category: "coffee",
  },
  {
    id: "matcha",
    title: "Matcha Latte",
    price: "Rp45.000",
    desc: "Stone-ground ceremonial matcha with creamy milk.",
    image: "/assets/menu/matcha.jpg",
    rating: 4.7,
    category: "coffee",
  }
];
