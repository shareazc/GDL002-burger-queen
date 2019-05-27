import React from "react";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

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
              <td><Button variant="danger">🗙</Button></td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td><Button variant="danger">🗙</Button></td>
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