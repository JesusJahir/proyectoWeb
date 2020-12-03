<template>
    <body>
    <div class="header"> <A name = "top"> </A>
        <div class="container1">
            <div class="menubar">
                <div class="logo">
                    <img src="../assets/logotipo.gif" width="200px">
                </div>
                <nav>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/catalogo">Catalogo</router-link></li>
                        <li v-if="isUserLogged === false"><router-link to="/login">Inicia sesión</router-link></li>
                        <li v-if="isUserLogged === false"><router-link to="/creaCuenta">Regístrate</router-link></li>
                        <li v-if="isUserLogged === true"><router-link to="/Perfil">Mi cuenta</router-link></li>
                        <li v-if="isUserLogged === true"><router-link to="/">Cerrar sesión</router-link></li>
                        <li v-if="isUserLogged === true">Hola, {{nambre}}</li>
                    </ul>
                </nav>
                <router-link v-if="isUserLogged === true" to="/carrito"><img src="../assets/bolsa.png" width="30px" height="30px"></router-link>
            </div>

            <div class="body2">
                <div class="container">
                    <div class="form">
                        <h1> Bienvenido, ingresa a tu cuenta </h1>
                        <form action="">
                        <div class="inputBox">
                            <input type="mail" name="mail" id="mail" ref="mail" placeholder="username"/>
                        </div>
                        <div class="inputBox">
                            <input type="password" name="pass" id="pass" ref="pwd" placeholder="password"/>
                        </div>
                        <div class="inputBox">
                            <input class="mouse-hover" type="button" id="bot" name="bot" value="Login" v-on:click ="login"/>
                        </div>
                        <p><router-link to="/changePassword"> ¿Olvidaste tu password? Da click aquí</router-link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>

</template>

<script>
import axios from 'axios'
// import VueCookies from 'vue-cookies'

export default {

  name: 'login',
  data () {
    return {
      msg: '',
      posts: [],
      errors: []
    }
  },

  methods: {
    login: function (event) {
      // const requestToken = {'username': mail}
      const params = {
        'username': this.$refs.mail.value,
        'password': this.$refs.pwd.value
      }

      axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/logina01378845', params)
        .then(response => {
          console.log(response.data)
          if (response.data.login === 'success') {
            this.$cookies.set('token', response.data.token)
            this.$router.push('index')
          } else {
            alert('Error de login, intenta de nuevo')
          }
        })
        .catch(e => {
          this.errors.push(e)
        })

      /*
      let tokenJWT = ''
      axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/gettokenjwt', requestToken)
        .then(response => {
          console.log(response.data)
          tokenJWT = response.data.token

          let pwd = this.$refs.pwd.value
          const article = { 'mail': mail,
            'password': pwd,
            'token': tokenJWT}
          axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/logina01378845', article)
            .then(response => {
              // JSON responses are automatically parsed.
              if (response.data.login === 'success') {
                this.$router.push('loggedIndex')
              } else {
                alert('Error de login, intenta de nuevo')
              }
            })
            .catch(e => {
              this.errors.push(e)
            })
        })
        */
    }}

  // Fetches posts when the component is created.

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: "Segoe UI";
}

.body2{
    color: #ffffff;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 250px;
    font-family: "Segoe UI";
}

.menubar{
    display: flex;
    align-items: center;
    padding: 20px;
}
nav{
    flex: 1;
    text-align: right;
}

nav ul{
    display: inline;
    list-style-type: none;
}

nav ul li{
    display: inline-block;
    margin-right: 20px;
}

nav a{
    display: inline-block;
    color: #03e9f4;
    font-size: 10px;
    text-decoration: none;
    text-transform: uppercase;
    /*overflow: hidden; */
    transition: 0.5s;
    letter-spacing: 2px;
    padding: 4px 15px;
    margin: 10px 0;
    border-radius: 30px;
}

nav a:hover{
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 150px #03e9f4;
}

a{
    text-decoration: none;
}

p{
    color: #ffffff;
}

.container1{
    max-width: 1200px;
    margin: auto;
    padding-left: 10px;
    padding-right: 10px;
}

.fila{
    display: flex;
    align-items: center;
    flex: wrap;
    justify-content: space-around;
}

.col2{
    flex-basis: 50%;
    min-width: 100px
}

.col2 img{
    max-width: 100%;
    padding: 10px 0;
}

.col2 h1{
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
}

.but{
    display: inline-block;
    color: #03e9f4;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    /*overflow: hidden; */
    transition: 0.5s;
    letter-spacing: 2px;
    padding: 8px 30px;
    margin: 30px 0;
}

.but:hover{
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 150px #03e9f4;
}

.header{
    background: radial-gradient(#000040 , #000000);
    color: #ffffff;
}

.container{
    position: relative;
    width: 350px;
    min-height: 350px;
    background: rgba(255,255,255,0.5);
    box-shadow: 0 5px 15px rgba(0,0,0,1);
}

.container:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    pointer-events: none;
}

.container::after{
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, #ff0047, #6eff00);
    pointer-events: none;
    animation: animate 10s linear infinite;
}

@keyframes animate{
    0%{
        filter: blur(60px) hue-rotate(0deg);
    }
    100%{
        filter: blur(60px) hue-rotate(360deg);
    }
}

.form{
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    z-index: 1;
}

.form h1{
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-size: 25px;
}

.form .inputBox{
    width: 100%;
    margin-top: 30px;
}

.form .inputBox input{
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid #ffffff;
    outline: none;
    font-size: 18px;
    color: #ffffff;
    padding: 5px 0;
    font-family: "Segoe UI";
}

::placeholder{
    color: #eeeeee;
}

.form .inputBox input[type="button"]{
    display: inline-block;
    color: #03e9f4;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    /*overflow: hidden; */
    transition: 0.5s;
    letter-spacing: 2px;
    padding: 8px 30px;
    margin: 30px 0;
}

.form .inputBox input[type="button"]:hover{
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 150px #03e9f4;
}

.form p{
    color: #eee;
}

.form p a{
    color: #ffff;
}
</style>
