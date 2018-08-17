import React from "react";
import { withApollo, gql } from "react-apollo";

/**
 * This component uses the vanilla js API instead of apollo-react.
 */
class MutationButton extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      user: {
        firstName: "",
        lastName: ""
      }
    };
  }

  onMutateUser = async () => {
    const { client } = this.props;

    const UserMutation = gql`
      mutation UserMutation {
        user: updateUser(id: 3) {
          firstName
          lastName
        }
      }
    `;

    const response = await client.mutate({ mutation: UserMutation });
    const { data: { user } } = response;
    this.setState({ user });
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        <div>
          Mutated User: {user.firstName} {user.lastName}
        </div>
        <button onClick={this.onMutateUser}>Mutate a user</button>
      </div>
    );
  }
}

const MutationButtonWithData = withApollo(MutationButton);

export default MutationButtonWithData;
