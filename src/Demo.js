import axios from "axios";
import React, { useEffect, useState } from "react";
import { displayFruitsAction } from "./Redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

export default function Demo() {
  const [data, setData] = useState([]);

  let arr = [];

  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      fetch("http://localhost:8080/")
        .then((res) => res.json())
        .then((dat) => setData(dat));

      data.filter((items) => {
        if (items.category.includes("fruit")) {
          console.log(items);
        }
      });
    }

    getData();
  }, []);

  // dispatch(arr);
  console.log(arr);

  return (
    <>
      {data
        .filter((items) => {
          if (items.category.includes("fruit")) {
            return items;
          }
        })
        .map((items) => (
          <>
            <p>{items.name}</p>
          </>
        ))}
    </>
  );
}
