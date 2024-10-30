import { Link } from "react-router-dom";

const CaterogyItem = (props) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>
          {strCategoryDescription.length > 75
            ? strCategoryDescription.slice(0, 75) + "..."
            : strCategoryDescription}
        </p>
      </div>
      <div className="card-action">
        <Link className="btn" to={`/category/${strCategory}`}>
          Watch category
        </Link>
      </div>
    </div>
  );
};

export default CaterogyItem;
