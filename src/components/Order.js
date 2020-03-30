import React, { Component } from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {formatPrice} from './../helpers';

class Order extends Component{
     renderPlus = key => {
         console.log(key)
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';
        // Make sure fish is loaded
        if(!fish){
            return null
        }
       
        if(!isAvailable){
           return(
                <CSSTransition classNames='order' key={key} timeout={{enter:250, exit:250}}>
                <li key={key}>Sorry { fish } not available</li>
                </CSSTransition>
                )
           
        } return (
         <CSSTransition 
            classNames='order' 
            key={key} 
            timeout={{enter:5000, exit:5000}}
            >
            <li className='order-info' key={key}>
              <span>
              <TransitionGroup component='span' className='count'>
                <CSSTransition 
                    classNames='count' 
                    key={count}
                    timeout={{enter: 500, exit:500}}
                >
                <span className='order-count'>{count}</span> 

                </CSSTransition>
              </TransitionGroup>
              <span className='order-count'>lbs</span>
              {fish.name}
              </span>   
                {formatPrice(count * fish.price)}
                <button onClick={() => {this.props.removeFromOrder(key)}}>X</button>
            </li>
           
            </CSSTransition>
            )
            
     }
    render(){
        const orders = Object.keys(this.props.order);
        const total = orders.reduce((prevTotal, key) =>{
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable =fish && fish.status === 'available';
            if(isAvailable){ 
                 return prevTotal + (count * fish.price);
            }
            return prevTotal
        },0)
        return(
            
            <div className='order-wrap'>
            <h3>Orders</h3>
            <TransitionGroup component='ul'>
                {orders.map(this.renderPlus)}
            </TransitionGroup>
           
            <div className="total final-price">
            <p>Total</p>

                <strong>{formatPrice(total)}</strong>
            </div>
                
            </div>
        )
    }
}

export default Order