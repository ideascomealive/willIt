const React = require("react");
const {Component} = React;

class LoginPage extends Component{

    constructor(props){
        super(props);
        this.state={
            errorMessage:"",
            emailValue:"",
            passwordValue:""
        };
        this.emailField = null;
        this.passwordField = null;
        this.validateUserField = (input)=>{
            input.includes("@") && input.includes(".")? this.setState({errorMessage:"",emailValue:input} ):this.setState({errorMessage:"email format is invalid"})
        };
        this.validatePasswordField = (input)=>{
            input.length>=6? this.setState({errorMessage:"",passwordValue:input} ):this.setState({errorMessage:"Password must be at least 6 characters long"})
        };
        this.handleSubmit = ()=>{    
            if(this.state.emailValue!==""&&this.state.passwordValue!==""&&this.state.errorMessage===""){
                console.log(this.emailField.value);
                console.log(this.passwordField.value);
                this.sendData({
                    method:"POST",
                    route:"/api/login",
                    userEmail:this.state.emailValue,
                    password:this.state.passwordValue
                });
            }else{
                console.error("NO YOU MAY NOT!");
            }
        };
        this.sendData = (options)=>{
            console.log(options);
            let userEmail,password = options;
            let reqBodyString = {userEmail,password};
            let reqBody = JSON.stringify(reqBodyString);
            //take in data from handleSubmit as arguments
            fetch(options.route,{
                method:options.method,
                headers:{
                    'Content-Type':'application/json'
                },
                body:{reqBody}
            }).then(res=>{
                console.log(res);
            });
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
                <h5>{this.state.errorMessage}</h5>
                <label htmlFor="username">E-mail</label>
                <input ref={input=>{this.emailField = input;}} name="email" type="text" placeholder="email" onKeyUp={(input)=>{this.validateUserField(this.emailField.value)}}></input>
                <label htmlFor="password">Password</label>
                <input ref={input=>{this.passwordField = input;}} name="password" type="password" placeholder="secure password" onKeyUp={(input)=>{this.validatePasswordField(this.passwordField.value)}}></input>
             </form>
             <button onClick={this.handleSubmit}>Log in</button>
            </div>);
    }
};

module.exports = LoginPage;