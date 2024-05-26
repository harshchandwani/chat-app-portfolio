// src/components/Highlight.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Developer = () => {
    return (
        <Container className="text-center my-5">
            <h5 className="display-6 font-weight-bold extra-bold">
                Developer? Here is what you are looking for
                <br></br>
                <br></br>

                <Button href='https://github.com/harshchandwani/ChitChat' variant="success">Github Repository</Button>{}
            </h5>
            
        </Container>
    );
};

export default Developer;