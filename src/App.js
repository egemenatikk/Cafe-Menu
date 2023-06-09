import React from "react";
import Logo from "./components/Logo";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import Total from "./components/Total";
import Order from "./components/Order";
import { Provider } from "./Context";
import data from "./data";

import "./styles.css";

export default function App() {
  const mains = data.mains
  const sides = data.sides;
  const drinks = data.drinks;
  return (
    <Provider>
      <div className="menu">
        <Logo />
        <Mains meals={mains} />
        <aside className="aside">
          <Extras type="Sides" items={sides} />
          <Extras type="Drinks" items={drinks} />
        </aside>
        <Total />
        <Order />
      </div>
    </Provider>
  );
}
