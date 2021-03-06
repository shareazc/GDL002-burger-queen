import React from "react";
import firebase from "../firebase";
import { NavigationBarWaiter } from "./NavigationBarWaiter";
import { WaiterTabs } from "./WaiterTabs";
import Bill from "./Bill";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import styled from "styled-components";


const Styles = styled.div`
  .col-md-4 {
    border-left: 1px solid #707070;
  }

  .col-md-8 > div {
    display: inline;
  }
`;

class LunchAndDinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lnchdnnr: [],
      orders:[],
      total: 0
    };
    this.submit = this.submit.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.sumOrder = this.sumOrder.bind(this)
  };

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

  submit (dish, price) {
    const order = {
      dish: dish,
      price: price
    }
    this.setState({
      orders:[...this.state.orders, order]
    })
  };

  deleteRow(e, lnchdnnr) {
    e.preventDefault(e)
    this.setState(prevState => ({
      orders: prevState.orders.filter(element => element != lnchdnnr)
    }));
  }

  sumOrder () {
    const priceArr = this.state.orders.map((el) => el.price)
    const items = priceArr.reduce((sum, result) => {
      return sum + result;
    });
    this.setState ({
      total: items
    })
  };

  render() {
    return (
      <div className="LunchDinner">
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
                          <Button variant="primary" block block onClick={() => {
                            this.submit(dish.dish, dish.price)
                          }}>
                            ${dish.price}
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
               
              </Col>
              <Col md={4}>
              <Card>
                  <Card.Header>Cuenta</Card.Header>
                  <Card.Body>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Platillo</th>
                        <th>Precio</th>
                      </tr>
                    </thead>
                  
                      <Bill menuList={this.state.orders} handleDelete={this.deleteRow} />
                    </Table>
                  <Button variant="success" block onClick={this.sumOrder} >Total : $ {this.state.total}</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Styles>
        </Container>
      </div>
    );
  }
}

export default LunchAndDinner;
