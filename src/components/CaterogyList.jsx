import CaterogyItem from "./CaterogyItem";

const CaterogyList = ({ catalog = [] }) => {
  return (
    <div className="list">
      {catalog.map((el) => (
        <CaterogyItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
};

export default CaterogyList;
