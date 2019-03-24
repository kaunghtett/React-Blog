import React from 'react';
import { BrowserRouter as Router,Redirect, Route, Link } from 'react-router-dom';
import Login from './components/login/Login'
import Register from './components/register/Register'
import Article from './components/list-items/Article';


export default class Blog extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      isLoggedin : false,
      userID : 0
    };
  }

  UserLoggIn = (id) => {
    this.setState({
      isLoggedin : true,
      userID : id
    });
  }

  UserLoggedout = () => {
    this.setState({
      isLoggedin : false,
      userID : 0
    });
  }


    
  
    render() {
      return (
        <React.Fragment>
           <h1>An awesome blog will be here</h1>
        <Router>
        <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          {/* <li>
            <Link to="/topics">Topics</Link>
          </li> */}
        </ul>

        <hr />

        <Route path="/home" render={props => this.state.isLoggedin ? <Article {...props} LogoutEvent = {this.UserLoggedout} currentUser={this.state.userID}/> : <Login {...props} LoginEvent={this.UserLoggIn}/>}></Route>
            <Route exact path="/login" render={props => this.state.isLoggedin ? <Article {...props} LogoutEvent = {this.UserLoggedout} currentUser={this.state.userID}/> : <Login {...props} LoginEvent={this.UserLoggIn}/>} ></Route>
            <Route exact path="/register" render={props => this.state.isLoggedin ? <Article {...props} LogoutEvent = {this.UserLoggedout} currentUser={this.state.userID}/> : <Register {...props} LoginEvent={this.UserLoggIn}/>}></Route>
            <Route exact path="/articles" render={props => this.state.isLoggedin ? <Article {...props} LogoutEvent = {this.UserLoggedout} currentUser={this.state.userID}/> : <Redirect to="/login" />}></Route>
      </div>
        </Router>
        {/* <Register /> */}
        </React.Fragment>
       
      );
    }
  }