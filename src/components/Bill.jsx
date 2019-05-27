import React from "react";
import Button from "react-bootstrap/Button";


export class Bill extends React.Component {
  deleteItem = (e, i) => {
    this.props.handleDelete(e, i)
  }
  render (){
    console.log(this.props.menuList)
    const bill = this.props.menuList.map((dish, i) => {
      return (
            <tr>
              <td><Button variant="danger" size="sm" id={i} onClick={(event)=> this.deleteItem(event, dish)}>🗙</Button></td>
              <td>{dish.dish}</td>
              <td>{"$" + dish.price}</td>
            </tr>
      )
    })
    return(
      bill
    )
  }
}

export default Bill;

/*
export const Bill = () => (
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
          <tbody>
            <tr>
              <td><Button variant="danger" size="sm">🗙</Button></td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td colSpan="2">Total</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="success" block>Ordernar</Button>
      </Card.Body>
    </Card>
)
*/