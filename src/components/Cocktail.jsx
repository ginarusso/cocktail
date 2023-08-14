import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CocktailHeader from "./CocktailHeader";
import CocktailDetails from "./CocktailDetails";
import IngredientsList from "./IngredientsList";
import CocktailMethod from "./CocktailMethod";
import { getCocktailData } from "../services/cocktails";

const Cocktail = ({ id }) => {
  let [cocktailData, setCocktailData] = useState({});
  useEffect(() => {
    const fetchCocktailData = () => {
      getCocktailData(id)
        .then((data) => {
          setCocktailData(data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchCocktailData();
  }, []);

  return (
    <div>
      {cocktailData && (
        <div className="card" key={cocktailData.id}>
          <CocktailHeader
            title={cocktailData.title}
            image={cocktailData.image}
          />
          <IngredientsList ingredients={cocktailData.ingredients} />
          <CocktailDetails
            difficulty={cocktailData.difficulty}
            portion={cocktailData.portion}
            time={cocktailData.time}
            description={cocktailData.description}
          />
          <CocktailMethod method={cocktailData.method || []} />
        </div>
      )}
    </div>
  );
};

export default Cocktail;
