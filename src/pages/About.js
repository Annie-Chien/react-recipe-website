import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="container section-about">
      <div className="row text-center">
        <h2 className="col-md-12">About</h2>
        <p className="col-md-6 m-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          veritatis ea atque ipsa laborum aspernatur quas, fugit enim possimus
          quod alias voluptate eaque qui a ut incidunt pariatur eos tempora.
        </p>
      </div>
      <div className="row text-center my-5 m-auto">
        <Link to="/" className="btn-return">
          <i className="fa-solid fa-circle-left"></i> Return
        </Link>
      </div>
    </section>
  );
};

export default About;
