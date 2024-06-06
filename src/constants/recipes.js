import strawberries from "../img/food/strawberries.png";
import carbonara from "../img/food/carbonara.png";
import brulee from "../img/food/brulee.png";
import risotto from "../img/food/risotto.png";
import cheesecake from "../img/food/cheesecake.png";
import mussel from "../img/food/mussel.png";
import steak from "../img/food/steak.png";
import cupcake from "../img/food/cupcake.png";

export const recipes = [
  {
    id: 1,
    name: "Cupcakes 3",
    //flour, butter, sugar
    ingredients: [22, 11, 6],
    points: 3,
    uri: cupcake,
  },
  {
    id: 2,
    name: "Crème Brûlée 2",
    // egg, sugar, heavy cream
    ingredients: [5, 6, 7],
    points: 2,
    uri: brulee,
  },
  {
    id: 3,
    name: "Spaghetti carbonara 3",
    // eggs, pasta, cheese, garlic, butter
    ingredients: [5, 4, 21],
    points: 3,
    uri: carbonara,
  },
  {
    id: 4,
    name: "Steamed mussel 2",
    //oil, mussel, garlic, beer
    ingredients: [12, 1, 21],
    points: 2,
    uri: mussel,
  },
  {
    id: 5,
    name: "Tomato & mascarpone risotto 3",
    // olive oil, onion, garlic, rice, tomatoes, cheese
    ingredients: [12, 21, 9, 13, 4],
    points: 3,
    uri: risotto,
  },
  {
    id: 6,
    name: "Strawberry cheesecake 2",
    // butter, sugar, strawberry, cream cheese, cracker
    ingredients: [15, 4, 6],
    points: 2,
    uri: cheesecake,
  },
  {
    id: 7,
    name: "Chocolate covered strawberries 2",
    // chocolate, strawberry
    ingredients: [15, 20],
    points: 2,
    uri: strawberries,
  },
  {
    id: 8,
    name: "Pan Seared Steak with Vegetables 3",
    ingredients: [0, 3, 16, 21, 22],
    points: 3,
    uri: steak,
  },
  //   {
  //     id: 9,
  //     name: "Seared Sea Scallop & Lemon Granita",
  //     ingredients: [0, 1, 2, 4, 5, 6],
  //     points: 3,
  //     uri: "",
  //   },
  //   {
  //     id: 10,
  //     name: "Seared Sea Scallop & Lemon Granita",
  //     ingredients: [0, 1, 2, 4, 5, 6],
  //     points: 3,
  //     uri: "",
  //   },
  //   {
  //     id: 11,
  //     name: "Seared Sea Scallop & Lemon Granita",
  //     ingredients: [0, 1, 2, 4, 5, 6],
  //     points: 3,
  //     uri: "",
  //   },
  //   {
  //     id: 12,
  //     name: "Seared Sea Scallop & Lemon Granita",
  //     ingredients: [0, 1, 2, 4, 5, 6],
  //     points: 3,
  //     uri: "",
  //   },
];
