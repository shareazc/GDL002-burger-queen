import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div `
    .navbar {
        background-color: #8C2318;
    }

    .navbar-brand, a,  .navbar-nav, .navbar-light .navbar-nav .nav-link {
        color: rgba(247, 247, 247, 0.7);
       
        &:hover {
            color: rgba(247, 247, 247, 1);
        }
    }

`;


export const NavigationBarWaiter = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand><a href="/">Burger Queen</a> / Meserx </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href ="/waiter">Meserx</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/kitchen">Cocina</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)