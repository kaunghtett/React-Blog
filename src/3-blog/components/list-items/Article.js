import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { stringify } from 'querystring';

export default class Article extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
        newItem : "",
        value : ""
    }
}

handleOnSubmit = (event) => {
    event.preventDefault();
    // this.props.addEventHandler(this.state.newItem);
   

    let oldItems = JSON.parse(localStorage.getItem('newdata')) || [];

    let newarticle = {
       title : this.state.newItem,
      body : this.state.value
    };
    
    oldItems.push(newarticle);
    
    localStorage.setItem('newdata', JSON.stringify(oldItems));
    this.setState({
      newItem : "",
      value : ""
    })
}

handleOnChange = (event) => {
    this.setState ({
        newItem : event.target.value,
        value : event.target.value
    })
}

render() {
    return (
        <React.Fragment>
        <form onSubmit={this.handleOnSubmit}>
        <lable> Add Article Title
        <input type="text"  onChange={this.handleOnChange}></input>
        </lable>
        <lable> Add Article Body
        <input type="text"  onChange={this.handleOnChange}></input>
        </lable>
           
        <button type="submit">Add</button>
        </form>
        </React.Fragment>
    )
}

}
    
