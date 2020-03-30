import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import fishes from './../sample-fishes';
import FishList from './FishList';
import base from '../base';
 



class App extends React.Component{
    state = {
        fishes:{},
        order:{}
    };

    componentDidMount(){
        // // reinstate local storage
        // const localStorageRef = localStorage.getItem(this.props.match.params.storeId)
        //  if(localStorage){
        //      this.setState({
        //          order:JSON.parse(localStorageRef)
        //      })
        //  }
      this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,{
          context: this,
          state: 'fishes'
      });  
    }

    // componentDidUpdate(){
    //      localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    // }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    

    // Add Fish to state 
    addFish = fish => {
        // 1 take copy of exsiting state
        const fishes = {...this.state.fishes}
        // 2. add new fishes to the variable
        fishes[`fish${Date.now()}`] = fish;
        // 3 set new fishes to object state
        this.setState({
            fishes
        })
     
    }
    // Populate inventory
    loadSampleFishes = () =>{
         this.setState({fishes: fishes})
    }

    // Add to order status
    addToOrder = (key) =>{
        // 1. copy the state
         const order = {...this.state.order}
        // 2. add to order
            order[key] = order[key] + 1 || 1;
        // 3. call setstate to update our state
         this.setState({
             order
         })
    }

    updateFish = (key, updatedFish) => {
        // take copy of the current state
        const fishes = {...this.state.fishes}
        // update that state
        fishes[key] = updatedFish;
        // set to state
        this.setState({fishes})

    }

    deleteFish = (key) => {
        // take copy of state
        const fishes = {...this.state.fishes}
        // update state for firebase
        fishes[key] = null
        // update app state
        this.setState({fishes})

    }

    removeFromOrder = (key) => {
         // 1. copy the state
         const order = {...this.state.order}
        // 2. add to order
            delete order[key];
        // 3. call setstate to update our state
         this.setState({ order })

    }



    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header/>
                    <ul className='fishes'>
                    {Object.keys(this.state.fishes).map(key =>
                     <FishList key={key} 
                    fishList={this.state.fishes[key]} 
                    addToOrder={this.addToOrder}
                    index={key}    
                    />)}
                </ul>
                  
                </div>
                
                <Order 
                fishes={this.state.fishes} 
                order={this.state.order}
                removeFromOrder={this.removeFromOrder}

                />
                <Inventory 
                addfish={this.addFish} 
                updateFish={this.updateFish}
                loadSampleFishes={this.loadSampleFishes} 
                fishes={this.state.fishes}
                deleteFish={this.deleteFish}
                storeId={this.props.match.params.storeId}



                />

            </div>
        )
    }
}


export default App;
