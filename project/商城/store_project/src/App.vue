<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
	html{
		background-color: #f5f5f5;
	}
	*{
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		a{
			text-decoration: none;
		}
	}
</style>
