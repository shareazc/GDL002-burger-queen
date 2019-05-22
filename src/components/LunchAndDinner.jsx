import React from "react";
import { NavigationBarWaiter } from "./NavigationBarWaiter";
import { WaiterTabs } from "./WaiterTabs";
import { Layout } from "./Layout";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from "styled-components";

const Styles = styled.div `
.vl {
    border-left: 1px solid #707070;
    height: 500px;
  }
`

export const LunchAndDinner = () => (
    <div>
        <NavigationBarWaiter />
        <WaiterTabs />
        <Layout>
            <Container>
                <h2>Comida y Cena</h2>
                <Row>
                    <Col sm={7}>Menu Items go here</Col>
                    <Styles><Col sm={1}><div class="vl"></div></Col></Styles>
                    <Col sm={4}>Total bill goes here</Col>
                </Row>
            </Container>
        </Layout>
    </div>
)