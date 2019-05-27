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

//Se agregó box-sizing y ya no hay overflow, pero ahora manda
//la cuenta a un renglón aparte

const Styles = styled.div`
  .col-md-4 {
    border-left: 1px solid #707070;
  }

  .dishCard {
    display: inline;
  }

  .col-md-8 {
    display: flex;

    flexwrap: wrap;
  }
`;

class Breakfast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brkfst: []
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
  }

  render() {
    return (
      <div className="Breakfast">
        <NavigationBarWaiter />
        <WaiterTabs />
        <Container>
          <Styles>
            <h1>Desayuno</h1>
            <Row>
              <Col md={8}>
                {this.state.brkfst.map(dish => {
                  return (
                    <div className="dishCard">
                      <Card style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={dish.img} />
                        <Card.Body>
                          <Card.Title>{dish.dish}</Card.Title>
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

export default Breakfast;
