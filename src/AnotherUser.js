import React from 'react';
import { withApollo, gql } from 'react-apollo';

/**
 * This component uses the vanilla js API instead of apollo-react.
 */
class AnotherUser extends React.Component {
  async componentDidMount() {
    const { client } = this.props;

    const AnotherUserQuery = gql`
      query AnotherUserQuery {
        user: userById(id: 3) {
          firstName
          lastName
        }
      }
    `;

    try {
      const response = await client.query({ query: AnotherUserQuery });
      this.setState({ response: response });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (!this.state || !this.state.response) {
      return null;
    }

    const { response: { loading, error, data } } = this.state;

    if (error) {
      console.error(error);
      return <p>error</p>;
    }

    if (loading) {
      return null;
    }

    const { user } = data;

    return (
      <div>
        AnotherUser: {user.firstName} {user.lastName}
      </div>
    );
  }
}

const AnotherUserWithData = withApollo(AnotherUser);

export default AnotherUserWithData;
