import React, { Component } from 'react';
import logo from './logo.svg';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import styled, { keyframes } from 'styled-components';
import User from './User';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});
const apolloClient = new ApolloClient({
  networkInterface: networkInterface,
});

let AppLogo = props => <img src={logo} className={props.className} alt="logo" />;

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

AppLogo = styled(AppLogo)`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`;

let AppHeader = props =>
  <div className={props.className}>
    <AppLogo />
    <h2>Welcome to React</h2>
  </div>;

AppHeader = styled(AppHeader)`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

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
          <AppHeader />
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
