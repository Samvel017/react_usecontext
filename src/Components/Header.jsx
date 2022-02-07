import React, { useContext } from "react";
import { Context } from "../Context";

export default function Header() {
    const {createCard,sortCards} = useContext(Context)
  return (
    <div className="header">
      <nav>
        <button onClick={createCard}>ADD CARD</button>
        <button onClick={sortCards}>SORT CARD</button>
      </nav>
    </div>
  );
}
