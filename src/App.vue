<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      userdata: {
        userLogged: false,
        user: null
      }
    }
  },
  methods: {
  },
  mounted () {
    // if ($cookies.isKey('token')) {
    //   var tokenparam = {
    //     'token': this.$cookies.get('token')
    //   }

    //   axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/gettokenjwt', tokenparam)
    //     .then(response => {
    //       console.log('success', response.data)
    //       this.userdata = response.data
    //     })
    // } else {}
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
}

body {
  margin: 0;
}

.mouse-hover{
  cursor: pointer;
}
</style>
