import React from "react";
import firebase from "../firebase";
import { NavigationBarWaiter } from "./NavigationBarWaiter";
import { WaiterTabs } from "./WaiterTabs";
import { Bill } from "./Bill";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styled from "styled-components";


const Styles = styled.div`
  .col-md-4 {
    border-left: 1px solid #707070;
  }

  .col-md-8 {
    display: flex;

    flexwrap: wrap;
  }
`;

class LunchAndDinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lnchdnnr: []
    };
  }

  componentDidMount() {
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
          description: lunchdishes[dish].description,
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
          <h1>Comida y Cena</h1>
            <Row>
              <Col md={8}>
               
                {this.state.lnchdnnr.map(dish => {
                  return (
                    <div>
                      <Card style={{ width: "11rem" }}>
                        <Card.Img variant="top" src={dish.img} />
                        <Card.Body>
                          <Card.Title>{dish.dish}</Card.Title>
                          <Card.Text>{dish.description}</Card.Text>
                          <Button variant="primary" block>
                            ${dish.price}
                          </Button>
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

export default LunchAndDinner;
