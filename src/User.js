import React from 'react';
import { gql, graphql } from 'react-apollo';

const User = props => {
  const { data } = props;
  const { loading, user } = data;

  if (loading) {
    return null;
  }

  return (
    <div>
      {user.firstName} {user.lastName}
    </div>
  );
};

const UserQuery = gql`
  query UserQuery {
    user: me {
      firstName
      lastName
    }
  }
`;

const UserWithData = graphql(UserQuery)(User);

export default UserWithData;
