(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} = ReactBootstrap;

class NavbarInstance extends React.Component {
  render() {
    return (
      React.createElement(Navbar, null, 
        React.createElement(Navbar.Header, null, 
          React.createElement(Navbar.Brand, null, 
            React.createElement("a", {href: "#"}, "React-Bootstrap")
          )
        ), 
        React.createElement(Nav, null, 
          React.createElement(NavItem, {eventKey: 1, href: "#"}, "Link"), 
          React.createElement(NavItem, {eventKey: 2, href: "#"}, "Link"), 
          React.createElement(NavDropdown, {eventKey: 3, title: "Dropdown", id: "basic-nav-dropdown"}, 
            React.createElement(MenuItem, {eventKey: 3.1}, "Action"), 
            React.createElement(MenuItem, {eventKey: 3.2}, "Another action"), 
            React.createElement(MenuItem, {eventKey: 3.3}, "Something else here"), 
            React.createElement(MenuItem, {divider: true}), 
            React.createElement(MenuItem, {eventKey: 3.3}, "Separated link")
          )
        )
      )
    );
  }
}

class App extends React.Component {
  render() {
    return (
      React.createElement(NavbarInstance, null)
    );
  }
}

ReactDOM.render(React.createElement(App, null), document.body);

},{}]},{},[1]);
