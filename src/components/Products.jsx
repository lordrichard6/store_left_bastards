import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Black Hoodie",
    description: "Black hoodie with logo and name.",
    price: "50CHF",
    image: '../img/logo_noTitle_gold.png',
  },
  {
    id: 2,
    name: "White Hoodie",
    description: "White hoodie with logo and name.",
    price: "50CHF",
    image: '../img/logo_noTitle_gold.png',
  },
  {
    id: 3,
    name: "Black Hoodie",
    description: "Black hoodie with logo and name.",
    price: "50CHF",
    image: '../img/logo_noTitle_gold.png',
  },
  {
    id: 4,
    name: "White Hoodie",
    description: "White hoodie with logo and name.",
    price: "50CHF",
    image: '../img/logo_noTitle_gold.png',
  },
  {
    id: 5,
    name: "Black Hoodie",
    description: "Black hoodie with logo and name.",
    price: "50CHF",
    image: '../img/logo_noTitle_gold.png',
  },
  {
    id: 6,
    name: "White Hoodie",
    description: "White hoodie with logo and name.",
    price: "50CHF",
    image: '../img/logo_noTitle_gold.png',
  },
  {
    id: 7,
    name: "Black Hoodie",
    description: "Black hoodie with logo and name.",
    price: "50CHF",
    image: '../img/logo_noTitle_gold.png',
  },
  {
    id: 8,
    name: "White Hoodie",
    description: "White hoodie with logo and name.",
    price: "50CHF",
    image: '../img/logo_noTitle_gold.png',
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
