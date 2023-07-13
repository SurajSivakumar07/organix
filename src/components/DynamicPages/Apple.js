import React, { useState } from "react";
import { sellerData } from "../Seller/DataSeller";

import { data } from "../Fruits/FruitsData";
import "./dynamic.css";
import Nav from "../Fruits/Nav";
import Slider from "../Fruits/Slider";

export default function Apple() {
  const arr = window.location.href.split("/");
  const named = arr[arr.length - 1].toLowerCase();
  const [loding, setLoding] = useState(false);
  const [img, setImg] = useState();
  const fruitsDetail = [];
  const [final, setFinal] = useState(false);
  const [value, setValue] = useState([]);

  let a;

  useState(() => {
    async function image() {
      for (let i = 0; i < data.length; i++) {
        const compaare = named.localeCompare(data[i].name.toLowerCase());

        if (compaare === 0) {
          a = data[i].img;
          console.log(a);
          setImg(a);
          break;
        }
      }
    }
    image();

    async function setInterval() {
      for (let i = 0; i < sellerData.length; i++) {
        let len = sellerData[i].fruits.length;
        for (let j = 0; j < len; j++) {
          const compaare = named.localeCompare(
            sellerData[i].fruits[j].name.toLowerCase()
          );
          if (compaare === 0) {
            fruitsDetail.push({
              name: sellerData[i].name,
              price: sellerData[i].fruits[j].price,
              type: sellerData[i].fruits[j].type,
            });
          }
        }
      }
      setValue(fruitsDetail);
    }
    setInterval();

    setLoding(true);
    setFinal(true);

    console.log(data);
  }, []);
  console.log(img);

  return (
    <>
      <p> {named}</p>

      {final ? (
        <div className="seller-display-wrap">
          {loding
            ? value.map((items) => (
                <div className="display-sellers-wrap" key={items.id}>
                  <img src={img} />
                  <h1>Seller Name:{items.name}</h1>
                  <h2>Price:{items.price}/kg</h2>
                  <h4>Type:{items.type}</h4>

                  <div className="hidden-cart">
                    <button>Add to cart</button>
                  </div>
                </div>
              ))
            : ""}
        </div>
      ) : (
        "Loading.."
      )}
    </>
  );
}
