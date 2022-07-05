import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://graphql.datocms.com/',
    headers: {
        'Authorization':'Bearer 994b81afe5b831329c06efab9b01f1'
    },
    cache: new InMemoryCache()
})