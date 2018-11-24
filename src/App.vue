<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <div v-if="$apollo.loading">Loading...</div>
        <div v-else>
            <div v-for="(planet, index) in allPlanets.planets" :key="index">
                {{planet.name}}
            </div>
        </div>
    </div>
</template>

<script>
    import gql from 'graphql-tag';

    export default {
        apollo: {
            allPlanets: gql`query {
                allPlanets {
                    planets {
                        name
                    }
                }
            }`
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
