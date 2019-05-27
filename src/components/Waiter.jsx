import React from "react";

//import { NavigationBarWaiter } from "./NavigationBarWaiter";
//import { WaiterTabs } from "./WaiterTabs";
import Breakfast from "./Breakfast";
//import { Home } from "./Home";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


// class Waiter extends React.Component {

//     constructor(props) {
//       super(props);
//       this.state = {
//         brkfst: [],
//         lnchdnnr: [],
//       }
//     }
  
//     componentDidMount() {
//       const menuRef = firebase.database().ref();
//       const brkfstRef = menuRef.child('brkfst');
//       brkfstRef.on('value', snap => {
//         let dishes = snap.val();
//         let newState = [];
//         for (let dish in dishes) {
//           newState.push({
//             id: dish,
//             dish: dishes[dish].dish,
//             price: dishes[dish].price
//           })
  
//         }
//         this.setState({
//           brkfst: newState
//         })
//       });
  
//       const rootRef = firebase.database().ref();
//       const ldRef = rootRef.child('lnchdnnr');
//       ldRef.on('value', snap => {
//         let lunchdishes = snap.val();
//         let newState = [];
//         for (let dish in lunchdishes) {
//           newState.push({
//             id: dish,
//             dish: lunchdishes[dish].dish,
//             price: lunchdishes[dish].price
//           })
  
//         }
//         this.setState({
//           lnchdnnr: newState
//         })
//       });
//     }
  
//     render() {
//       return (
//         <div className="Waiter">
//           <div>
//             <section id="breakfast">
//               <div>
//                 <h1>Breakfast</h1>
//                 {this.state.brkfst.map((dish) => {
//                   return (
//                     <div>
//                         <Card style={{ width: '10rem' }}>
//                             <Card.Img variant="top" src="holder.js/100px180" />
//                             <Card.Body>
//                                 <Card.Title>{dish.dish}</Card.Title>
//                                 {/* <Card.Text>
//                                 Some quick example text to build on the card title and make up the bulk of
//                                 the card's content.
//                                 </Card.Text> */}
//                                 <Button variant="primary">${dish.price}</Button>
//                             </Card.Body>
//                         </Card>;
//                       {/* <h3>{dish.dish}</h3>
//                       <p>{dish.price}</p> */}
//                     </div>
//                   )
//                 })}
//               </div>
//             </section>
//             <section id="lunch">
//               <div>
//                 <h1>Lunch and Dinner</h1>
//                 {this.state.lnchdnnr.map((dish) => {
//                   return (
//                     <div>
//                       <h3>{dish.dish}</h3>
//                       <p>{dish.price}</p>
//                     </div>
//                   )
//                 })}
//               </div>
//             </section>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   export default Waiter;


    export const Waiter = () => (

            <div>
                <Breakfast />
            </div>
        )  