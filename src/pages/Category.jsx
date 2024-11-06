import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import { getFilteredCategory } from "../api";
import Search from "../components/Search";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const handleSearch = (str) => {
    setFilteredMeals(
      meals.filter((item) =>
        item.strMeal.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
      setFilteredMeals(
        search
          ? data.meals.filter((item) =>
              item.strMeal
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.meals
      );
    });
  }, [name, search]);
  return (
    <>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={name} />
        <meta name="keywords" content={`${name}, recipes`} />
      </Helmet>
      <Search cb={handleSearch} />
      <h4 style={{ textAlign: "center" }}>{name}</h4>
      <button
        onClick={goBack}
        title="Go Back"
        className="btn-small red"
        aria-label="Go Back"
      >
        <i className="material-icons center">arrow_back</i>
      </button>
      {meals.length ? <MealList meals={filteredMeals} /> : <Preloader />}
    </>
  );
};

export default Category;
