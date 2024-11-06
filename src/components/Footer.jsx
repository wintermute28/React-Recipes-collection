const Footer = () => {
  return (
    <footer className="page-footer green darken-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} All rights reserved
          <a
            target="_blank"
            rel="noreferrer"
            className="grey-text text-lighten-4 right"
            href="https://github.com/wintermute28/React-Recipes-collection"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
