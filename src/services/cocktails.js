import axios from "axios";

const url = "https://the-cocktail-db3.p.rapidapi.com";
const config = {
  headers: {
    "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
    "X-RapidAPI-Hos": "the-cocktail-db3.p.rapidapi.com",
  },
};

const api = axios.create({
  baseURL: url,
});

const getCocktailList = async () => {
  try {
    const response = await api.get("/", config);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const getCocktailData = async (id) => {
  const response = await api.get(
    `https://the-cocktail-db3.p.rapidapi.com/${id}`
  );
  return response.data;
};

export { getCocktailList, getCocktailData };
