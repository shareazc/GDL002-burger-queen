import React from "react";
import styled from "styled-components";
import logoBQ from "../assets/LogoBQ.png";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Styles = styled.div`
    background-color: #FC9337;
    height: 100%;
    position: fixed;

    .logo{
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 3rem;
        width: 40%;
    }

    .col {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Home = () => (
    <Styles>
        <img className="logo" src={logoBQ}></img>

        <Container>
            <Row className="buttons">
                <Col><Button variant="success" size="lg" href="/waiter">
                Meserx
            </Button></Col>
                <Col><Button variant="success" size="lg" href="/kitchen">
                Cocina
            </Button></Col>
            </Row>
        </Container>
        
        </Styles>
        )