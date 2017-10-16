import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {StyleRoot} from 'radium';
import * as actions from '../actions';

import Header from './Header.jsx';
import Main from './Main.jsx';
import EventProfile from './event_profile';

class App extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <StyleRoot>
        <BrowserRouter>
          <div style={{margin: 0, padding: 0}}>
            <Header />
            <Main/>
            <Route path="/events/:id" component={EventProfile} />
          </div>
        </BrowserRouter>
      </StyleRoot>
    );
  }
}

export default connect(null, actions)(App);