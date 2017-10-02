const React = require("react");
const {Component} = React;
const reactRouterDom = require('react-router-dom');
const {Redirect} = reactRouterDom;

class LoggedIn extends Component{
  render(){
    return(
      <div>
        {this.props.loggedIn ?<div> Successfully Logged in.</div>:<Redirect to={{pathname:'/login'}}/>}
      </div>
    )
  }
}

module.exports = LoggedIn;