<template>
    <body>
        <div class="header"> <a name = "top"> </a>
            <div class="container1">
                <div class="menubar">
                    <div class="logo">
                        <img src="../assets/logot.gif" width="200px">
                    </div>
                    <nav>
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/catalogo">Catalogo</router-link></li>
                            <li v-if="userdata.userLogged === false"><router-link to="/login">Inicia sesión</router-link></li>
                            <li v-if="userdata.userLogged === false"><router-link to="/creaCuenta">Regístrate</router-link></li>
                            <li v-if="userdata.userLogged === true"><router-link to="/Perfil">Mi cuenta</router-link></li>
                            <li v-if="userdata.userLogged === true"><router-link to="/">Cerrar sesión</router-link></li>
                            <li v-if="userdata.userLogged === true">Hola, {{userdata.user.name}}</li>
                        </ul>
                    </nav>
                    <router-link v-if="isUserLogged === true" to="/carrito"><img src="../assets/bolsa.png" width="30px" height="30px"></router-link>
                </div>

                <div class="fila">
                    <h2> {{product.title}} </h2>
                </div>

                <div class="body2">
                    <div class="container">
                        <div class="form">
                            <div class="fila">
                                <div class="col-2">
                                    <img v-if="product.image != ''" :src="product.image">
                                    <img v-else src="../assets/cd_default.jpg">
                                </div>
                                <div class="col-2">
                                    <h5> {{product.artist}} </h5> <br>
                                    <h2> {{product.description}} <br><br><br>
                                    Tracklist: <br><br>
                                    {{product.tracklist}}
                                    </h2> <br>
                                    <h4> ${{product.price}} </h4> <br>
                                    <h3>Producto sujeto a disponibilidad y hasta agotar existencias.<br>
                                        Envío Gratis en montos mayores a $50. Aplica a partir del 1 de diciembre. <br>
                                        Nuestros tiempo de entrega promedio, son de 3 a 7 días. Aplica a partir del 1 de Diciembre. <br>
                                        En algunos casos, pueden llegar a ser de 15 días dependiendo de la disponibilidad.</h3>
                                </div>
                            </div>
                            <br><br>
                            <input class="mouse-hover" type="button" id="bot" name="bot" value="Agregar a bolsa" v-on:click ="addToCart()"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="pie">
            <div class="contenedor_pie">
                <div class="fila">
                    <div class="col1">
                        <h5>Cualquier duda, aclaraci&oacute;n o comentario, <br> no dudes en escribirnos a: <a href="mailto:atencionaclientes@symphony.com">atencionaclientes@symphony.com</a><br>
                        <a href="#top"> Click para ver la parte superior </a> </h5>
                    </div>
                    <div class="col1">
                        <img src="../assets/logot.gif" width="200px">
                    </div>
                    <div class="col1">
                        S&iacute;guenos en redes <br>
                        <img src="../assets/facebook.png" width="50px">
                        <img src="../assets/Instagram.png" width="50px"> <br>
                        <img src="../assets/Twitter.png" width="50px">
                        <img src="../assets/Youtube.png" width="50px">
                    </div>
                </div>
            </div>
        </div>

    </body>
</template>

<script>
import axios from 'axios'

export default {
  name: 'product',
  data () {
    return {
      product: {
        name: null
      },
      userdata: {
        userLogged: false,
        user: null
      }
    }
  },
  methods: {
    addToCart: function (event) {
      var params = {
        'Id_prod': this.$route.params.Pid,
        'Id_user': String(this.userdata.user.id)
      }
      axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/addtocart', params).then(response => {
        alert('Producto agregado a tu bolsa')
      })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  mounted () {
    if (this.$cookies.isKey('token')) {
      var tokenparam = {
        'token': this.$cookies.get('token')
      }

      axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/gettokenjwt', tokenparam)
        .then(response => {
          this.userdata = response.data
        })
    } else {}

    var params = {
      'productId': this.$route.params.Pid
    }

    axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/getcatalogo', params).then(response => {
      console.log(response.data)
      this.product = response.data.productos[0]
      this.status = response.data.status
    })
      .catch(e => {
        this.errors.push(e)
      })
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
    margin: 70px;
    margin-bottom: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    font-family: "Segoe UI";
}

.col-4{
    flex-basis: 25%;
    padding: 10px;
    min-width: 200px;
    margin-bottom: 50px;
}

.col-4 img{
    width: 50%
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

.fila h2{
    color: #ffffff;
    font-size: 40px;;
}

.col-2{
    flex-basis: 100%;
    min-width: 100px
}

.col-2 img{
    width: 300px;
    padding: 10px 10px;
}

.col-2 h1{
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
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 650px;
    min-height: 500px;
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
    background: linear-gradient(45deg, #2bff00, #4c00ff);
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
    align-items: left;
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
    color: #2962ff;
    font-size: 25px;
    text-align: right;

}

.form h2{
    text-align: left;
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-size: 12px;
}

.form h3{
    text-align: left;
    margin: 0;
    padding: 0;
    color: #d4d4d4;
    font-size: 10px;
}

.form h4{
    text-align: left;
    margin: 0;
    padding: 0;
    color: #e0e0e0;
    font-size: 20px;
}

.form h5{
    text-align: left;
    margin: 0;
    padding: 0;
    color: #1d1616;
    font-size: 25px;
}

.form .inputBox{
    width: 100%;
    margin-top: 30px;
}

.form .inputBox{
    text-align: center;
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

.form .inputbox a{
    display: inline-block;
    color: #0394f4;
    font-size: 20px;
    text-decoration: none;
    text-transform: uppercase;
    /*overflow: hidden; */
    transition: 0.5s;
    letter-spacing: 2px;
    padding: 8px 30px;
    margin: 30px 0;
}

.form .inputbox a:hover{
    background: #0394f4;
    color: #ffffff;
    box-shadow: 0 0 5px #0394f4,
                0 0 25px #0394f4,
                0 0 50px#0394f4,
                0 0 150px#0394f4;
}

.inputbox a{
    text-decoration: none;
}

.pie{
    background: radial-gradient(#09000a , #000000);
    color: #ffffff;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 30px;
    padding-bottom: 60px;
}

.pie h5 {
    color: #ffffff;
    text-decoration: none;

}

input{
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid #ffffff;
    outline: none;
    font-size: 18px;
    color: #ffffff;
    padding: 0px 0;
    font-family: "Segoe UI";
}

input[type="button"]{
    display: inline-block;
    color: #03e9f4;
    font-size: 15px;
    text-decoration: none;
    transition: 0.5s;
    letter-spacing: 1px;
    padding: 5px 5px;
    margin: auto;
}

input[type="button"]:hover{
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 150px #03e9f4;
}
</style>
