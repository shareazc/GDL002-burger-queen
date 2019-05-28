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