

export const MENU_DATA = {
  restaurant: {
    id: "1030963",
    name: "Spice Villa",
    cuisines: ["Indian", "Chinese"],
    avgRating: 4.3,
  },

  categories: [
    {
      title: "Recommended",
      isPopular: true,
      itemCards: [
        {
          id: "1",
          name: "Paneer Butter Masala",
          price: 25000,
        },
        {
          id: "2",
          name: "Veg Biryani",
          price: 18000,
        },
      ],
    },
    {
      title: "Starters",
      isPopular: false,
      itemCards: [
        {
          id: "3",
          name: "Spring Rolls",
          price: 15000,
        },
        {
          id: "4",
          name: "Chilli Paneer",
          price: 20000,
        },
      ],
    },
    {
      title: "Main Course",
      isPopular: false,
      itemCards: [
        {
          id: "5",
          name: "Dal Tadka",
          price: 16000,
        },
        {
          id: "6",
          name: "Mix Veg Curry",
          price: 17000,
        },
      ],
    },
    {
      title: "Desserts",
      isPopular: true,
      itemCards: [
        {
          id: "7",
          name: "Gulab Jamun",
          price: 9000,
        },
        {
          id: "8",
          name: "Ice Cream",
          price: 12000,
        },
      ],
    },
  ],
};