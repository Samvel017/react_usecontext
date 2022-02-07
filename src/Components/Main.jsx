import React, { useContext } from "react";
import { Context } from "../Context";

export default function Main() {
    const {card,deleteCard} = useContext(Context);
  return (
    <div className="main">
      <div className="container">
        {card.map((el,index) => {
          return (
            <div className="card" key={index}>
              <span>{el.id}</span>
              <button
                className="close-btn"
                onClick={() => {
                  deleteCard(el.id);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
