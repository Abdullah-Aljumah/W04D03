import React, { useState } from "react";
import { useHistory } from "react-router";
import "./style.css";

const Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();
  const [cards] = useState([
    {
      id: 0,
      name: "Tree ",
      img: "https://www.bssei.in/wp-content/uploads/2021/09/news1.jpg",
      fav: false,
    },
    {
      id: 1,
      name: "Another Tree",
      img: "https://i0.hippopx.com/photos/654/243/649/tree-field-cornfield-nature-preview.jpg",
      fav: false,
    },
    {
      id: 2,
      name: "Field",
      img: "https://cdn.pixabay.com/photo/2019/07/06/12/28/landscape-4320380_960_720.jpg",
      fav: false,
    },
  ]);
  const addFav = (id) => {
    let val = cards[id];
    if (val.fav === true) {
      val.fav = false;
      alert("Remove from favorite")
    } else {
      val.fav = true;
      alert("Add to favorite")

      let faav = cards.filter((cards) => cards.fav);
      localStorage.setItem("faav",JSON.stringify(faav))
    }
  };

  const cardPage = (id) => {
    history.push(`/card/${id}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <ul className="ulCards">
        {cards
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, i) => (
            <div className="cards">
              <li className="card" key={i}>
                <div onClick={() => cardPage(item.id)}>
                  <h2>{item.name}</h2> <img src={item.img} alt="gg" />{" "}
                </div>
                <button className='buttons' onClick={() => addFav(item.id)}>Favorite</button>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Cards;
