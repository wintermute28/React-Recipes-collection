import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);
  return (
    <>
      <h4 style={{ textAlign: "center" }}>{name}</h4>
      <button
        onClick={goBack}
        title="Go Back"
        className="btn-small red"
        aria-label="Go Back"
      >
        <i className="material-icons center">arrow_back</i>
      </button>
      {meals.length ? <MealList meals={meals} /> : <Preloader />}
    </>
  );
};

export default Category;
