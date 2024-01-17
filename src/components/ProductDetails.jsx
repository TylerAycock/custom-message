import MessageGenerator from "./MessageGenerator";
import classes from "./ProductDetails.module.css";

import { useState } from "react";

function ProductDetails() {
  const [isChecked, setIsChecked] = useState(false);

  function changeHandler() {
    setIsChecked(!isChecked);
  }

  return (
    <div className={classes.product__details__container}>
      <div className={classes.product__card}>
        <img
          src="https://source.unsplash.com/random/500"
          alt="random picture"
        />
        <ul className={classes.product__details}>
          <li>Product Name</li>
          <li>$Price</li>
        </ul>
      </div>
      <label htmlFor="checkbox">Add a free message?</label>
      <input type="checkbox" id="checkbox" onChange={changeHandler} />
      {isChecked && <MessageGenerator/>}
    </div>
  );
}

export default ProductDetails;
