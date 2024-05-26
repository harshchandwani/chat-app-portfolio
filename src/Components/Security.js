
import React from 'react';
import { Container } from 'react-bootstrap';

const Security = () => {
  return (
    <Container className="text-center my-5">
      <p className="display-4 font-weight-bold extra-bold">
        Still Worried about Security?
        <br></br>
        <span className='display-6'>Don't, here is our Security Handlers</span>
      </p>
      <div className="brand-images">
      <img src={`${process.env.PUBLIC_URL}/cloudflare.png`} alt="Brand 1" />
      <img src={`${process.env.PUBLIC_URL}/jwt.png`} alt="Brand 2" />
      <img src={`${process.env.PUBLIC_URL}/render.png`} alt="Brand 3" />
      <img src={`${process.env.PUBLIC_URL}/bcryt.jpg`} alt="Brand 4" />
    </div>
    </Container>
  );
};

export default Security;