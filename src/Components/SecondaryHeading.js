// src/components/Highlight.js
import React from 'react';
import { Container } from 'react-bootstrap';

const SecondaryHeading = () => {
    return (
        <Container className="text-center my-5">
            <h1 className="display-4 font-weight-bold extra-bold">
                Experience Innovation
                <br></br>
                <span className='display-6'>90+ Conversations, 50+ Users and 500+ Messages</span>
            </h1>
            <img className="responsive-image"  src={`${process.env.PUBLIC_URL}/reviews.jpg`} height={540}></img>
        </Container>
    );
};

export default SecondaryHeading;