//import React from "react";

//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
//import sandwich from "../assets/grilled-cheese.jpg";
//import americano from "../assets/cafe-americano.jpg";
//import lechero from "../assets/cafe-con-leche.jpg";
//import jugo from "../assets/fruit-juice.jpg";
//import { CardDeck } from "react-bootstrap";

/*
class BreakfastItems extends React.Component {

    constructor() {
        super();
        this.state = {
            menu: []
        };
    };


    componentDidMount() {
        const refFood = firebase.database().ref().child('menu');   
        console.log(refFood)     
        refFood.on('value', (snapshot) => {
            let menu1 = snapshot.val();
            let newState = [];
            for (let name in menu1) {
                newState.push({
                  img: menu1[name].img,
                  name: menu1[name].name,
                  price: menu1[name].price  
                });


            }
            console.log(menu1);
            this.setState({
                menu: newState
            });
        });
            
    }

    render () {
        //console.log(this.state.menu);
        
        return(
            <CardDeck>
                {this.state.menu.map((postMenu, i) => {
                    return (
                        <Card key={i}>
                        <Card.Img variant="top" fluid />
                        <Card.Body>
                            <Card.Title>{postMenu.name}</Card.Title>
                            <Button variant="primary">{postMenu.price}</Button>
                        </Card.Body> 
                        </Card> 
                    )
                }
                )}
            </CardDeck>
        )
    }
       
}

export default BreakfastItems;
*/


/*
export const BreakfastItems = () => (
    <CardDeck>
        <Card>
            <Card.Img variant="top" src={sandwich} fluid />
            <Card.Body>
                <Card.Title>Sándwich Jamón y Queso</Card.Title>
                <Button variant="primary">$10.00</Button>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={americano} />
            <Card.Body>
                <Card.Title>Café Americano</Card.Title>
                <Button variant="primary">$5.00</Button>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={lechero} />
            <Card.Body>
                <Card.Title>Café Con Leche</Card.Title>
                <Button variant="primary">$7.00</Button>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={jugo} />
            <Card.Body>
                <Card.Title>Jugo de Frutas</Card.Title>
                <Button variant="primary">$7.00</Button>
            </Card.Body>
        </Card>
    </CardDeck>  
)
*/