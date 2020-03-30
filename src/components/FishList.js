import React, { Component } from 'react';
import {formatPrice} from './../helpers';
 

class FishList extends Component{
    handleOrder = () =>{
        this.props.addToOrder(this.props.index)
    }

     render(){
        const {image, name, desc, price, status} = this.props.fishList;
        const fishStatus = status === "available";
        
        return(
            <li className='menu-fish'>
            <img src={image} alt=""/>
            <h3 className='fish-name'>{name}
                <span className='price'>{formatPrice(price)}</span>
            </h3>
            <p>{desc}</p>
            <button disabled={!fishStatus} onClick={this.handleOrder}>
                {fishStatus ? 'Add To Order' : "Sold Out!"}
            </button>

            </li>
        )
    }
}

export default FishList;