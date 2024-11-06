import { Link } from "react-router-dom";

const CaterogyItem = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

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
        <Link
          className="btn red"
          title="Go to category"
          aria-label="Go to category"
          to={`/category/${strCategory}`}
        >
          Watch category
        </Link>
      </div>
    </div>
  );
};

export default CaterogyItem;
