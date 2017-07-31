const React = require("react");
const {Component} = React;

class LoginPage extends Component{
    render(){
        return(
            <div>
             <form method='POST' action='/api/login'>
                <h2>Log in to get started</h2>
                <label for="username">Username</label>
                <input id="#username" name="username" type="text" palceholder="username"></input>
                <label for="password">Password</label>
                <input id="#password" name="password" type="password" palceholder="secure password goes here"></input>
                <button type="submit" value="submit">Log in</button>
             </form>


            </div>);
    }
};

module.exports = LoginPage;