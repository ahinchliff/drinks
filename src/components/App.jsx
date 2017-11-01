import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Main/>
          <Route path="/events/:id" component={EventProfile} />
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`