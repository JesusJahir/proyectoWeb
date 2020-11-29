<template>
<div id = "intro" style = "text-align:center;">
   
    <h1>{{ msg }}</h1>
    </div>
</template>

<script>
import axios from 'axios';

export default {

     name: 'VuePage',
  data () {
    return {
     msg: '',

      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
      let currentObj = this;
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      currentObj.msg=response.data;
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
