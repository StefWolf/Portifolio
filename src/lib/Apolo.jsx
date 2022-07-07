import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://graphql.datocms.com/',
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_IDCMS}`
    },
    cache: new InMemoryCache()
})