import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./featuredProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="container">
        <div className="top">
          <h1>{type} products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum,
            harum, fugiat nesciunt at mollitia nulla est nobis, distinctio
            perspiciatis blanditiis facilis veritatis consequuntur quaerat
            repudiandae beatae cum quibusdam quia eos sequi! Obcaecati eaque
            deleniti delectus alias eum? Quas, asperiores!
          </p>
        </div>
        <div className="bottom">
          {error
            ? "Something went wrong"
            : loading
            ? "Loading..."
            : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
