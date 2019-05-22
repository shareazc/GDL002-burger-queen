import React from "react";
//import firebase from "./firebase";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import sandwich from "../assets/grilled-cheese.jpg";
import americano from "../assets/cafe-americano.jpg";
import lechero from "../assets/cafe-con-leche.jpg";
import jugo from "../assets/fruit-juice.jpg";
import styled from "styled-components";
import { CardDeck } from "react-bootstrap";

const Styles = styled.div `
.card-deck {
    display:flex;
    align-content: center;
}

`

/*
export const BreakfastItems = () => (

    constructor(props) {
        super(props);
        this.state = {
            breakfastMenu: []
        };
    };

    componentDidMount() {
        const 
    }

    

       
)*/


export const BreakfastItems = () => (
    <CardDeck>
        <Card>
            <Card.Img variant="top" src={sandwich} fluid />
            <Card.Body>
                <Card.Title>Sándwich Jamón y Queso</Card.Title>
                <Button variant="primary">$10.00</Button>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={americano} />
            <Card.Body>
                <Card.Title>Café Americano</Card.Title>
                <Button variant="primary">$5.00</Button>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={lechero} />
            <Card.Body>
                <Card.Title>Café Con Leche</Card.Title>
                <Button variant="primary">$7.00</Button>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={jugo} />
            <Card.Body>
                <Card.Title>Jugo de Frutas</Card.Title>
                <Button variant="primary">$7.00</Button>
            </Card.Body>
        </Card>
    </CardDeck>  
)