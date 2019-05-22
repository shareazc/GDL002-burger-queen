import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div `
    .navbar {
        background-color: rgba(112, 112, 112, 0.3);
    }

    .navbar-nav, .navbar-light .navbar-nav .nav-link {
        color: rgba(112, 112, 112, 0.7);
        font-weight: bold;
        
       
        &:hover {
            color: rgba(112, 112, 112, 1);
        }
    }

    .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: 1rem;
        padding-left: 1rem;
    }
`;

export const KitchenTabs = () => ( 
    <Styles>
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item><Nav.Link href ="/new-orders">Pedidos Nuevos</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/finished-orders">Pedidos Completados</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)