// Navigation Links
interface NavigationLink {
  label: string;
  url: string;
}
export const navigationLinks: NavigationLink[] = [
  { label: "Home", url: "/" },
  { label: "Contact", url: "/contact" },
  { label: "About", url: "/about" },
  { label: "Sign Up", url: "/sign-up" }
];
//Flash Sales Time
export const timerData = [
  { label: "Days", value: "03" },
  { label: "Hours", value: "23" },
  { label: "Minutes", value: "19" },
  { label: "Seconds", value: "56" }
];
//Slider Banners
export const banners = [
  "https://res.cloudinary.com/dj5q966nb/image/upload/v1719253445/rmbjpuzctjdbtt8hewaz.png",
  "https://res.cloudinary.com/dj5q966nb/image/upload/v1719253433/ticeufjqvf6napjhdiee.png",
];
//  categories
export const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty"
];

// footer Links
export const footerSections = [
  {
    title: "Support",
    links: [
      { text: "saddar, Karachi, Pakistan.", href: "#" },
      { text: "anasahmedd244@gmail.com", href: "mailto:anasahmedd244@gmail.com" },
      { text: "+88015-88888-9999", href: "tel:+8801588888999" }
    ]
  },
  {
    title: "Account",
    links: [
      { text: "My Account", href: "#" },
      { text: "Login / Register", href: "#" },
      { text: "Cart", href: "#" },
      { text: "Wishlist", href: "#" },
      { text: "Shop", href: "#" }
    ]
  },
  {
    title: "Quick Link",
    links: [
      { text: "Privacy Policy", href: "#" },
      { text: "Terms Of Use", href: "#" },
      { text: "FAQ", href: "#" },
      { text: "Contact", href: "#" }
    ]
  }
];

// cart product
export const cartData: CartItemsData = {
  items: [
    {
      productName: "LCD Monitor",
      price: "$650",
      quantity: 1,
      subtotal: "$650",
      imageSrc: "/products/monitor.png"
    },
    {
      productName: "H1 Gamepad",
      price: "$550",
      quantity: 2,
      subtotal: "$1100",
      imageSrc: "/products/controller.png"
    }
  ]
};

//Statistics Data
export const statisticsData = [
  {
      icon: "/icons/stat1.png",
      value: "10.5k",
      description: "Sallers active our site"
  },
  {
      icon: "/icons/stat2.png",
      value: "33k",
      description: "Mopnthly Produduct Sale",
  },
  {
      icon: "/icons/stat3.png",
      value: "45.5k",
      description: "Customer active in our site"
  },
  {
      icon: "/icons/stat4.png",
      value: "25k",
      description: "Anual gross sale in our site"
  }
];


//team members data
export const teamData = [
  {
      image: "/aboutguy1.png",
      name: "Tom Cruise",
      role: "Founder & Chairman",
    
  },
  {
      image: "/aboutlady.png",
      name: "Emma Watson",
      role: "Managing Director",
     
  },
  {
      image: "/aboutguy2.png",
      name: "Will Smith",
      role: "Product Designer",
      
  }
];
