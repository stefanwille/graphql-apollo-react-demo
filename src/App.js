import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import styled from "styled-components";
import User from "./User";
import AnotherUser from "./AnotherUser";
import MutationButton from "./MutationButton";
import apolloClient from "./apolloClient";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <div className={this.props.className}>
          <p className="AppIntro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <User />
          <AnotherUser />
          <MutationButton />
        </div>
      </ApolloProvider>
    );
  }
}

App = styled(App)`
  text-align: center;

  .AppIntro {
    font-size: 14px;
  }
`;

export default App;
