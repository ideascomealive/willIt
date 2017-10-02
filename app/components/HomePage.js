const React = require("react");
const {Component} = React;
const LoggedIn = require("./LoggedIn.js");

class HomePage extends Component{
    constructor(props) {
    super(props); 
  }
    render(){
        return(
          <div> 
            <p>Home Page</p>
            <LoggedIn loggedIn={false}/>
          </div>
        )
    }
};

module.exports = HomePage;