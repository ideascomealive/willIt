const React = require("react");
const {Component} = React;

class LoginPage extends Component{


    componentDidUpdate() {
        username.focus();
    };

    constructor(props){
        super(props);
        this.usernameField = null;
        this.passwordField = null;
        this.handleSubmit = ()=>{                
            console.log(this.usernameField.value);
            console.log(this.passwordField.value);
            //send input data, method, and route to sendData
        };
        this.sendData = (options)=>{
            //take in data from handleSubmit as arguments
            //fetch request(or xmlHttpRequest) as POST to express API
            //take callback or promise, invoke rerouteUser
        };
        this.rerouteUser = (options)=>{
            //test if authentication call returned true.
            //if true, return <Route {...this.props} /> or similar
            //else, remain on page. Alert user of login failure.
        };
    }

    render(){
        return(
            <div>
             <form>
                <h2>Log in to get started</h2>
                <label htmlFor="username">Username</label>
                <input ref={input=>{this.usernameField = input;}} name="username" type="text" placeholder="username"></input>
                <label htmlFor="password">Password</label>
                <input ref={input=>{this.passwordField = input;}} name="password" type="password" placeholder="secure password"></input>
             </form>
             <button onClick={this.handleSubmit}>Log in</button>
            </div>);
    }
};

module.exports = LoginPage;