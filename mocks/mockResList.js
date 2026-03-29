export const MOCK_DATA = {
  data: {
    cards: [
      {},
      {},
      {},
      {},
      {
        card: {
          card: {
            gridElements: {
              infoWithStyle: {
                restaurants: [
                  {
                    info: {
                      id: "1",
                      name: "Pizza Hut",
                      cuisines: ["Pizza"],
                      avgRating: 4.7,
                      cloudinaryImageId: "mock_id_1" // Added to prevent img src errors
                    },
                  },
                  {
                    info: {
                      id: "2",
                      name: "KFC",
                      cuisines: ["Chicken"],
                      avgRating: 4.2,
                      cloudinaryImageId: "mock_id_2"
                    },
                  },
                ],
              },
            },
          },
        },
      },
    ],
  },
};