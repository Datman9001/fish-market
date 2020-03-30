import React from 'react';




class Store extends React.Component{
    myInput = React.createRef();

    goToStore = (event) => {
        // stop form from submitting
        event.preventDefault();
        // get the text from the input
        const storeEntry = this.myInput.current.value;
         // change the page to /store
         this.props.history.push(`./store/${storeEntry}`)

        
    }

    render(){
        return(
            <form className='store-selector' onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input 
                type="text" 
                ref={this.myInput}
                required placeholder='Store'/>
                <button type='submit'>Visit Store </button>
            </form>
        )
    }
}

export default Store;