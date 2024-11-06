import { Link } from "react-router-dom";

const Meal = (props) => {
  const { strMeal, strMealThumb, idMeal } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link
          className="btn red"
          title="Go to meal"
          aria-label="Go to meal"
          to={`/meal/${idMeal}`}
        >
          Watch recipe
        </Link>
      </div>
    </div>
  );
};

export default Meal;
