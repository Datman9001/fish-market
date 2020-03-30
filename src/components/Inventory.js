import React, { Component } from 'react';
import firebase from 'firebase';
import base, {firebaseApp} from '../base';
import AddFishForm from './AddFishForm';
import EditFish from './EditFish';
import Login from './Login';

class Inventory extends Component{
     state = {
        uid: null,
        owner: null
    }
    authHandler = async(authData) => {
        // look up current store in the firebase database
        const store = await base.fetch(this.props.storeId, {context: this}) 
        // claim it if there is no owner
        if(!store.owner){
            await base.post(`${this.props.storeId}/owner`,{
               data: authData.user.uid
            })
        }
        // set the state of inventory component to refect the user
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        })
        console.log(authData)
    }


    authenticate = (provider) => {
         const authProvider = new firebase.auth[`${provider}AuthProvider`]();
         firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler)
    }

    render(){
        // check if person is logged in
        if(!this.state.uid){
            return <Login authenticate={this.authenticate}/>

        }
        return(
            <div className='inventory'>
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(key => 
                <EditFish 
                key={key} 
                index={key}
                fishes={this.props.fishes[key]}
                updateFish={this.props.updateFish} 
                deleteFish={this.props.deleteFish}
                /> )}
                <AddFishForm addfish={this.props.addfish}/>
                 <button onClick={this.props.loadSampleFishes}>Fish Menu</button>
                
            </div>
        )
    }
}

export default Inventory