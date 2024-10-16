import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "../Products.types";

function Card({ title, image, price, rating }: Product) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <main>
        <p>{title.slice(15)} ...</p>
        <div className="card-details">
          <div>
            {Array(Math.ceil(rating.rate))
              .fill(0)
              .map(() => (
                <AiFillStar style={{ color: "orange" }} />
              ))}

            {Array(5 - Math.ceil(rating.rate))
              .fill(0)
              .map(() => (
                <AiOutlineStar style={{ color: "orange" }} />
              ))}
          </div>
          <p>{price}$</p>
        </div>
        <button>Add to Basket</button>
      </main>
    </div>
  );
}

export default Card;
