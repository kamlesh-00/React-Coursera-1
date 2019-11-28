import React, { Component } from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap';
import './blink.css';


class Menu extends Component {
    

    


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1" >
                <Card onClick={()=>this.props.onClick(dish.id)}>
                  <CardImg width="100" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="row">
                {menu}
            </div>
        );
    }
}

export default Menu;