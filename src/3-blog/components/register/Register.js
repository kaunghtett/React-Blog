import React from 'react';
import { BrowserRouter as Redirect, Route, Link } from 'react-router-dom'



export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

           
            name : "",
            email : "",
            password : "",
        

        }
    }

    handleValue = (e) => {

        const name = e.target.value;
        const email = e.target.value;
        const password = e.target.value;

        this.setState({

          
            name : name,
            email : email,
            password : password,
            

        })
        
        console.log(name);
        console.log(email);
        console.log(password)
    }
    
    handleOnSubmit = (e) => {

            const id = this.setUser(this.state.name, this.state.email, this.state.password);
            this.props.LoginEvent(id);
            return true;
       
    }

    setUser = (name, password , email) => {
        const users = localStorage.getItem("user_accounts");
        let new_user = [];
        let acc_array = [];
        if(users != null){
            acc_array = JSON.parse(users);
        }
        const id = acc_array.length + 1;
        new_user.push(id);
        new_user.push(email);
        new_user.push(name);
      
        new_user.push(password);

        acc_array.push(new_user);

        localStorage.setItem("user_accounts", JSON.stringify(acc_array));

        return id;
    }



    render() {
        // const { redirect } = this.state.isLoggedIn;

        // if (redirect) {
        //   return <Redirect to='/login'/>;
        // }
        
        return (
            <div>

            <h1>Helo Register</h1>

            <div >

                <form action="/article" onSubmit={this.handleOnSubmit}>
                <label htmlFor=""> Name
                <input type="text" onChange={this.handleValue} />

                </label>
                
                <label htmlFor=""> Email
                <input type="text" onChange={this.handleValue} />

                </label>

                <label htmlFor=""> Password
                <input type="password" onChange={this.handleValue}/>

                </label>

                <button type="submit">Register</button>
               
                </form>
           



            </div>
                
            </div>

        )
        
    }

    
}
