import React from 'react';
import { gql, graphql } from 'react-apollo';

const User = props => {
  const { data } = props;
  const { loading, error, user } = data;

  if (error) {
    console.error(error);
    return <p>error</p>;
  }

  if (loading) {
    return null;
  }

  return (
    <div>
      User: {user.firstName} {user.lastName}
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
