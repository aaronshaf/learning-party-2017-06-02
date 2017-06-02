import React, { Component } from 'react'
import logo from './logo.svg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.css'
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Baz extends Component {
  render() {
    return <div>Baz</div>
  }
}

class Zaz extends Component {
  render() {
    return <div>Zaz</div>
  }
}

class Foo extends Component {
  render() {
    return (
      <div className='Foo'>
        <ul>
          <li><Link to="/foo/baz">Baz</Link></li>
          <li><Link to="/foo/zaz">Zaz</Link></li>
        </ul>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          <Route
            location={this.props.location}
            key={this.props.location.key}
            path={`${this.props.match.url}/baz`}
            component={Baz}
          />
          <Route
            location={this.props.location}
            key={this.props.location.key + '2'}
            path={`${this.props.match.url}/zaz`}
            component={Zaz}
          />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

class Bar extends Component {
  render() {
    return <div>Bar</div>
  }
}

class Main extends Component {
  render() {
    return <div>Main</div>
  }
}

class NoMatch extends Component {
  render() {
    return <div>404 - NoMatch</div>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Main</Link></li>
              <li><Link to="/foo">Foo</Link></li>
              <li><Link to="/bar">Bar</Link></li>
              <li><Link to="/waddup">Waddup</Link></li>
            </ul>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/foo" component={Foo} />
              <Route exact path="/bar" component={Bar} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
