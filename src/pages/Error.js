import React from 'react';

import ErrorImg from '../img/error.png';

const Error = () => {
  return (
    <section className="section-error">
      <img src={ErrorImg} alt="error image" className="error-img" />

      <p className="fs-1">
        <span className="oops">Oops...</span>We can't find the page you're
        looking for.{' '}
      </p>
    </section>
  );
};

export default Error;
