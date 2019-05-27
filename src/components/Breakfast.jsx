import React from "react";
import firebase from "../firebase";
import { NavigationBarWaiter } from "./NavigationBarWaiter";
import { WaiterTabs } from "./WaiterTabs";
//import BreakfastItems from "./BreakfastItems";
import Waiter from "./Waiter";
import { Bill } from "./Bill";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { CardDeck } from "react-bootstrap";
//import Button from 'react-bootstrap/Button';

const Styles = styled.div`
  .col-md-4 {
    border-left: 1px solid #707070;
  }
`;

class Breakfast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brkfst: [],
      lnchdnnr: []
    };
  }

  componentDidMount() {
    const menuRef = firebase.database().ref();
    const brkfstRef = menuRef.child("brkfst");
    brkfstRef.on("value", snap => {
      let dishes = snap.val();
      let newState = [];
      for (let dish in dishes) {
        newState.push({
          id: dish,
          img: dishes[dish].img,
          dish: dishes[dish].dish,
          price: dishes[dish].price
        });
      }
      this.setState({
        brkfst: newState
      });
    });

    const rootRef = firebase.database().ref();
    const ldRef = rootRef.child("lnchdnnr");
    ldRef.on("value", snap => {
      let lunchdishes = snap.val();
      let newState = [];
      for (let dish in lunchdishes) {
        newState.push({
          id: dish,
          img: lunchdishes[dish].img,
          dish: lunchdishes[dish].dish,
          price: lunchdishes[dish].price
        });
      }
      this.setState({
        lnchdnnr: newState
      });
    });
  }

  render() {
    return (
      <div className="Breakfast">
        <NavigationBarWaiter />
        <WaiterTabs />
        <Container>
          <Styles>
              <Row>
                <Col md={8}>
                    <h1>Breakfast</h1>
                    {this.state.brkfst.map(dish => {
                      return (
                        <div>
                          <Card style={{ width: "10rem" }}>
                            <Card.Img variant="top" src={dish.img} />
                            <Card.Body>
                              <Card.Title>{dish.dish}</Card.Title>
                              {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text> */}
                              <Button variant="primary" block>${dish.price}</Button>
                            </Card.Body>
                          </Card>
                        </div>
                      );
                    })}
                </Col>
                <Col md={4}>
                  <Bill />
                </Col>
              </Row>
          </Styles>
        </Container>
      </div>
    );
  }
}

export default Breakfast;

/*
class Breakfast extends React.Component {
    render() {
    return(
    <div>
        <NavigationBarWaiter />
        <WaiterTabs />

        <Container>
            <Styles>
            <p></p>
            <h2>Desayuno</h2>
            <Row>
                <Col md={8} >
                    <Waiter />
                </Col>
               
                <Col md={4} >
                    <Bill />
                </Col>
            </Row>
            </Styles>
        </Container>

    </div>
    )
    }
}

export default Breakfast;
*/

//<BreakfastItems />
