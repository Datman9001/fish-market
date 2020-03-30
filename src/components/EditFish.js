import React, { Component } from 'react';
 


class EditFish extends Component{
    handleChange = (e) => {
        // update fish
        //  take copy of fish
        // get the updated information
        // move updated information to state
        const updatedFish = {
            ...this.props.fishes,
            [e.currentTarget.name]: e.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish)
    } 
    render(){
        return(
            <div className='fish-edit'>
              <input 
              name='name'   
              type="text" 
              onChange={this.handleChange} 
              value={this.props.fishes.name} 

              />
                 
                 <input 
                 name='price' 
                 type="text" 
                 onChange={this.handleChange} 
                 value={this.props.fishes.price} 

                 />
                 
                 <select name='status' onChange={this.handleChange}  value={this.props.fishes.status}>
                     <option  value="available">Fresh!</option>
                     <option  value="unavailable">Sold Out</option>
                 </select>
                
                 <textarea 
                 name='desc'  
                 type="text" 
                 onChange={this.handleChange} 
                 value={this.props.fishes.desc}

                 />
                
                 <input 
                 name='image' 
                 type="text" 
                 onChange={this.handleChange} 
                 value={this.props.fishes.image}

                 />
                 <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }
}

export default EditFish