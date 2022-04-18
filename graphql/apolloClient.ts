import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl1c2azvx2lne01yv6ofbdkaz/master',
  cache: new InMemoryCache()
});
