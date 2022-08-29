import React from 'react';
import homeImg from '../img/home-1.jpg';
import { useGlobalCtx } from '../context';

const Search = () => {
  const { setSearchTerm } = useGlobalCtx();
  return (
    <section className="section-search">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={homeImg} className="home-img" />
          </div>
          <div className="col-md-6 home-text">
            <h2>Find your daily cooking inspiration</h2>
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio delectus ut illo, dolor magni doloremque?
            </small>
            <div className="input-container">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
