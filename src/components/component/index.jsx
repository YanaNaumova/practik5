import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

function Component() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);

  function fetchData() {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.error(error.response))
      .finally(() => console.log("запрос завершен"));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.component}>
      {data.map((el, ind) => {
        return (
          <div key={ind}>
            <div>{el.id}</div>
            <div>{el.title}</div>
            <div>{el.body}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Component;
