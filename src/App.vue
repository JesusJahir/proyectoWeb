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
      msg: 'TESTasdasd'
    }
  },
  mounted () {
    /*
    if($cookies.isKey('token')) {
      console.log('existe la cookie')
    } else {
      console.log('no existe')
    }

    const token = this.$cookies.get('token')
    console.log('token ', token)

    axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/gettokenjwt', token)
      .then(response => {
        console.log('success', response.data)
        tokenJWT = response.data.token
      })
    */
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
