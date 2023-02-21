import React from "react";

const Footer = () => {
  return (
    <>
        <footer className="bg-dark text-center text-white">
          <div className="container p-4 pb-0">
            <section className="mb-1">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.linkedin.com/in/celeste-soledad-b-980477262/"
                type="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://github.com/celes-sb"
                type="button"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>
          <div className="text-center p-3 fw-light">
            Made with ♡ by Celeste S. Bareiro under the guidance of 4Geeks Academy
          </div>
        </footer>
    </>
  );
};

export default Footer;
