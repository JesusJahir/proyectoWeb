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
                        <li><router-link to="/login">Inicia sesión</router-link></li>
                    </ul>
                </nav>
            </div>

            <form action='' method='post'>
            <div class="body2">
                <div class="container">
                    <div class="form">
                        <h1> Bienvenido, crea tu cuenta con tus datos </h1>
                        <form action="">
                        <div class="inputBox">
                            <input type="text" name="username" id="username" placeholder="username" ref='username'/>
                        </div>
                        <div class="inputBox">
                            Pronombre: <select id="trato" ref='trato'><option value=""></option><option value="sr">Sr.</option> <option value="sra">Sra.</option><option value="srita">Srita.</option></select>
                        </div>
                        <div class="inputBox">
                            <input type="text" name="nombre" id="nombre" placeholder="Nombre" ref='nombre'/>
                        </div>
                        <div class="inputBox">
                            <input type="text" name="apellidoPaterno" id="apellidoPaterno" placeholder="Apellido Paterno" ref='apellidoPaterno'/>
                        </div>
                        <div class="inputBox">
                            <input type="text" name="apellidoMaterno" id="apellidoMaterno" placeholder="Apellido Materno" ref='apellidoMaterno'/>
                        </div>
                        <div class="inputBox">
                            <input type="text" name="telefono" id="telefono" placeholder="Teléfono" ref='telefono'/>
                        </div>
                        <div class="inputBox">
                            <input type="text" name="email" id="email" placeholder="email" ref='email'/>
                        </div>
                        <div class="inputBox">
                            <input type="text" name="password" id="password" placeholder="password" ref='password'/>
                        </div>
                        <div class="inputBox">
                            Fecha de nacimiento: <input type="date" id="birth" name="birth" ref='birth' min=" 1920-01-01" max="2020-12-31">
                        </div>
                        <div class="inputBox">
                            <input type="text" name="artistaF" id="artistaF" placeholder="Artista favorito" ref='artistaF'/>
                        </div>
                        <div class="inputBox">
                            <input class="mouse-hover" type="button" id="bot" name="bot" value="Registrarse" v-on:click ='creaCuenta'/>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </form>
        </div>
    </div>
    </body>

</template>

<script>
import axios from 'axios'

export default {
  name: 'creaCuenta',
  data () {
    return {}
  },
  methods: {
    creaCuenta: function (event) {
      let SendInfo = {
        'username': this.$refs.username.value,
        'trato': this.$refs.trato.value,
        'nombre': this.$refs.nombre.value,
        'apellidoPaterno': this.$refs.apellidoPaterno.value,
        'apellidoMaterno': this.$refs.apellidoMaterno.value,
        'telefono': this.$refs.telefono.value,
        'email': this.$refs.email.value,
        'password': this.$refs.password.value,
        'birth': this.$refs.birth.value,
        'artistaF': this.$refs.artistaF.value
      }

      axios
        .post(
          'https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/creacuentamysql',
          SendInfo
        )
      axios
        .post(
          'https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/creaCuentaA01378845',
          SendInfo
        )
        .then((response) => {
          if (response.data.result === 'success') {
            this.$router.push('loggedIndex')
          } else {
            alert('Error creando cuenta')
          }
        })
        .catch((e) => {
          this.errors.push(e)
        })
    }
  }
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
    padding-bottom: 100px;
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
    width: 450px;
    min-height: 900px;
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
