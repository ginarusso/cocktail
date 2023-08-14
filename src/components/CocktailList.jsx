import React, { useEffect, useState } from "react";
import { getCocktailList } from "../services/cocktails";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  let [cocktails, setCockTails] = useState([]);
  let [selectedId, setSelectedId] = useState();
  useEffect(() => {
    const fetchList = () => {
      getCocktailList().then((data) => {
        setCockTails(data);
      });
    };
    fetchList();
  });

  return (
    <>
      <h1>Cocktails</h1>
      {cocktails && !selectedId && (
        <ul>
          {cocktails.map((cocktail) => {
            return (
              <h4>
                <button onClick={() => setSelectedId(cocktail.id)}>
                  {cocktail.title}
                </button>
              </h4>
            );
          })}
        </ul>
      )}
      {cocktails && selectedId && <Cocktail id={selectedId} />}
    </>
  );
};

export default CocktailList;
