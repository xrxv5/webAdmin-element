<template>
  <div id="app">
	<!-- <img src="./assets/logo.png"> -->
	<Navigator />
	<router-view/>
  </div>
</template>

<script>
import Navigator from './components/nav/Navigator';
export default {
  name: 'app',
  components: { Navigator }
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
