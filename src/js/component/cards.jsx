import React from "react";

const Cards = (props) => {
  return (
    <>
      <div class="col">
        <div className="card" key={props.key}>
          <img
            src="https://www.plastipon.es/caja-plastica-500x325-mm-35-litros-fondo-ranurado-y-paredes-ranuradas_pic199839ni0t0.jpg"
            className="card-img-top img-fluid"
            alt="500x325 plastic box"
          />
          <div className="card-body text-center">
            <h4 className="card-title">{props.titulo}</h4>
            <p className="card-text fw-light h-100">{props.texto}</p>
          </div>
          <footer class="card-footer text-center p-3">
              <a href="#" className="btn btn-warning">
                For real. Find out more.
              </a>
            </footer>
        </div>
      </div>
    </>
  );
};

export default Cards;
