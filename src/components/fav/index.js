import React from "react";
import "./style.css";
const Fav = () => {
  const arr = JSON.parse(localStorage.getItem("faav"));
  console.log(arr);
  let arrFav = arr;
  console.log(arrFav);
  return (
    <div className='fav'>

      {arrFav.map((item, i) => (
      <li key={i}><p>{item.name}</p>
      <img src={item.img} />
      </li>
      ))}
    </div>
  );
};

export default Fav;
