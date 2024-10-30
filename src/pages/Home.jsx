import { useState, useEffect } from "react";

import { getAllCategories } from "../api";
import Preloader from "../components/Preloader";
import CaterogyList from "../components/CaterogyList";

const Home = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <>{catalog.length ? <CaterogyList catalog={catalog} /> : <Preloader />}</>
  );
};

export default Home;
