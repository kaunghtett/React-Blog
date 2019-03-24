import React from 'react'
import { BrowserRouter as Redirect, Route, Link } from 'react-router-dom'


export default class Login extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                   email : "",
                   password : "",
                   
            }
    }

    handleChange = (e) => {
        const email = e.target.value;
        const password = e.target.value;
        this.setState({
            email : email,
            password : password,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const User = this.RegisteredUser(this.state.email, this.state.password);
		
        if(User[0]){
            this.props.LoginEvent(User[1]);
            return true;
        }
        else{
            return false;
        }
    }

    RegisteredUser = ( email,password, username) => {
        let Id = [false, 0];
        const accounts = localStorage.getItem("user_accounts");
        if(accounts != null){
            let account_array = JSON.parse(accounts);
		
            for(const account of account_array){
                console.log(account);
                if(account[1] === email && account[2] === password){
                    Id[0] = true;
                    Id[1] = account[0];
                    return Id;
                }
            }
            return Id;
        }
        else{
            return Id;
        }
    }

   
    render() {

        return (

            <React.Fragment>

          
            <div>

                <h1> Login Page</h1>

                <form action="/articles" onSubmit={this.handleSubmit}>
                    <label> UserName
                    <input type="text" onChange={this.handleChange} />
                    </label>
                    <label>
                        Password
                        <input type="text" onChange={this.handleChange} />
                    </label>

                    <button>Login</button>

                </form>
            </div>

            </React.Fragment>

        )

    }

}