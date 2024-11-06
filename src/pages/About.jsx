import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="description" content="React Recipes collection" />
        <meta name="keywords" content="Recipes collection on React" />
      </Helmet>
      <h4>About</h4>
      <p>
        &nbsp;The recipe website is a simple and user-friendly web application
        that allows users to browse recipes for various dishes. Using React and
        React Router, the site offers smooth navigation between different pages,
        such as a homepage featuring popular categories, a page with dishes from
        those categories, and individual recipe pages for those dishes. The
        website has a responsive design, ensuring convenient access from any
        device. Bon Appétit!
      </p>
      <img
        style={{ display: "block", margin: "0 auto" }}
        src="https://www.themealdb.com/images/meal-icon.png"
        alt=""
      />
    </div>
  );
};

export default About;
