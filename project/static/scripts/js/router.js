(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

var MainLayout = React.createClass({displayName: "MainLayout",
  render: function() {
    return (
      React.createElement("div", {className: "app"}, 
        React.createElement("header", {className: "primary-header"}), 
        React.createElement("aside", {className: "primary-aside"}, 
          React.createElement("ul", null, 
            React.createElement("li", null, React.createElement(Link, {to: "/"}, "Home")), 
            React.createElement("li", null, React.createElement(Link, {to: "/users"}, "Users")), 
            React.createElement("li", null, React.createElement(Link, {to: "/widgets"}, "Widgets"))
          )
        ), 
        React.createElement("main", null, 
          this.props.children
        )
      )
      )
  }
})

var Home = React.createClass({displayName: "Home",
  render: function() {
    return (React.createElement("h1", null, "Home Page"))
  }
})

var SearchLayout = React.createClass({displayName: "SearchLayout",
  render: function() {
    return (
      React.createElement("div", {className: "search"}, 
        React.createElement("header", {className: "search-header"}), 
        React.createElement("div", {className: "results"}, 
          this.props.children
        ), 
        React.createElement("div", {className: "search-footer pagination"})
      )
      )
  }
})

var UserList = React.createClass({displayName: "UserList",
  render: function() {
    return (
      React.createElement("ul", {className: "user-list"}, 
        React.createElement("li", null, "Dan"), 
        React.createElement("li", null, "Ryan"), 
        React.createElement("li", null, "Michael")
      )
      )
  }
})

var WidgetList = React.createClass({displayName: "WidgetList",
  render: function() {
    return (
      React.createElement("ul", {className: "widget-list"}, 
        React.createElement("li", null, "Widget 1"), 
        React.createElement("li", null, "Widget 2"), 
        React.createElement("li", null, "Widget 3")
      )
      )
  }
})

// Note that with how CodePen works, I wasn't able to get the browserHistory to work
// as the article suggests. The demo works without it, but you'll want to be sure to
// use it in a real application
ReactDOM.render((
  React.createElement(Router, null, 
    React.createElement(Route, {path: "/", component: MainLayout}, 
      React.createElement(IndexRoute, {component: Home}), 
      React.createElement(Route, {component: SearchLayout}, 
        React.createElement(Route, {path: "users", component: UserList}), 
        React.createElement(Route, {path: "widgets", component: WidgetList})
      )
    )
  )
), document.getElementById('root'))

},{}]},{},[1]);
