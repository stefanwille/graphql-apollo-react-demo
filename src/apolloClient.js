import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});

const apolloClient = new ApolloClient({
  networkInterface: networkInterface,
});

export default apolloClient;
