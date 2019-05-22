import React from "react";
import { NavigationBarWaiter } from "./NavigationBarWaiter";
import { WaiterTabs } from "./WaiterTabs";
import { BreakfastItems } from "./BreakfastItems";
import { Bill } from "./Bill";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from "styled-components";
import Button from 'react-bootstrap/Button';


const Styles = styled.div`
  .col-md-4 {
      border-left: 1px solid #707070;
  }
`


export const Breakfast = () => (
    <div>
        <NavigationBarWaiter />
        <WaiterTabs />

        <Container>
            <Styles>
            <p></p>
            <h2>Desayuno</h2>
            <Row>
                <Col md={8} >
                    <BreakfastItems />
                </Col>
               
                <Col md={4} >
                    <Bill />
                </Col>
            </Row>
            </Styles>
        </Container>

    </div>
)

