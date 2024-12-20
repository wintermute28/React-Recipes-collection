import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getAllCategories } from "../api";
import Preloader from "../components/Preloader";
import CaterogyList from "../components/CaterogyList";
import Search from "../components/Search";

const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Helmet>
        <title>React Recipes collection</title>
        <meta name="description" content="React Recipes collection" />
        <meta name="keywords" content="Recipes collection on React" />
      </Helmet>
      <Search cb={handleSearch} />
      <h4 style={{ textAlign: "center" }}>Categories</h4>
      {catalog.length ? (
        <CaterogyList catalog={filteredCatalog} />
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default Home;
