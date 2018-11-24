import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueApollo);

const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: 'https://swapi.apis.guru'
    }),
    cache: new InMemoryCache()
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});

export default (containerId) => {
    new Vue({
        apolloProvider,
        render: h => h(App)
    }).$mount(`#${containerId}`)
};
