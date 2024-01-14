const ProductModal = [
  {
    Department: "Women",
    id: "B09H4J42QD", // ASIN if u are not getting ID IMPORTANT
    title: "Product Name",
    rating: 4, // Over all Star Rating
    totalRatingCount: 2033, //total No of rating count
    price: 100,
    oldPrice: 200,
    offer: 50, // 50% discount
    sold: 1000, // total sold Items if Possible
    stock: 100, // available stock if Possible
    discription: "Product Description", // Important
    bestSeller: true, // true or false
    images: [{ url: "images/", id: "id", alt: "image alt" }],
    variants: [
      // maximum Varients 4
      {
        color: "black",
        image: "", // if any
        sizes: [{ id: "id", title: "sixe title" }], // how many you get
      },
    ],
    productDetails: {
      brand: "Brand",
      Category: "Category",
      Feature: "Feature",
      Season: "Season",
      Garment_Care: "GarmentCare",
      Occasion:
        "Daily wear/Outdoor activities/Shopping/Vacation/Travel/Hang out/Club/Party/Dates/Christmas.",
      // or any Other thing you get
    },
    ratings: {
      totalRatings: 65656566,
      rating: [
        "5 star rating",
        "4 star rating",
        "3 star rating",
        "3 star rating",
        "1 star rating",
      ], // as Number only
      topReviews: [
        // only top 5 reviews
        {
          userName: "userName",
          rating: 4,
          date: "date",
          comment: "comment",
        },
      ],
    },
  },
];
