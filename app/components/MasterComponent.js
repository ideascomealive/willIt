const React = require("react");
const reactRouterDom = require('react-router-dom');
const {BrowserRouter, Route, Switch} = reactRouterDom;
const {Component} = React;
const HomePage = require("./HomePage.js");
const LoginPage = require("./LoginPage.js");
const NotFound = require("./NotFound.js");

class MasterComponent extends Component{
    render(){
        return (
              <BrowserRouter>
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </BrowserRouter>
            )
    }
};

module.exports = MasterComponent;