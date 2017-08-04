import React, { Component } from 'react';
import logo from './logo.svg';
import { ApolloProvider } from 'react-apollo';
import styled, { keyframes } from 'styled-components';
import User from './User';
import apolloClient from './apolloClient';

let AppIntro = props =>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>;

AppIntro = styled(AppIntro)`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div className={this.props.className}>
          <AppIntro />
          <User />
        </div>
      </ApolloProvider>
    );
  }
}

App = styled(App)`
  text-align: center;
`;

export default App;
