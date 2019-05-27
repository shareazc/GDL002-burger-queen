import React from "react";
import { NavigationBarWaiter } from "./NavigationBarWaiter";
import { WaiterTabs } from "./WaiterTabs";
import { Bill } from "./Bill";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from "styled-components";

const Styles = styled.div `
.col-md-4 {
    border-left: 1px solid #707070;
}
`



export const LunchAndDinner = () => (
    <div>
        <NavigationBarWaiter />
        <WaiterTabs />
        <Container>
            <Styles>
            <p></p>
            <h2>Comida y cena</h2>
            <Row>
                <Col md={8} >
                    
                </Col>
               
                <Col md={4} >
                    <Bill />
                </Col>
            </Row>
            </Styles>
        </Container>
    </div>
)
