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
                            <li><router-link to="/perfil">Mi cuenta</router-link></li>
                        </ul>
                    </nav>
                    <router-link to="/carrito"><img src="../assets/bolsa.png" width="30px" height="30px"></router-link>
                </div>

                <div class="fila-2">
                    <h6> Tu bolsa de compras</h6>
                </div>

                <div class="body2">
                    <div v-if="status === false">No hay productos en tu bolsa :(</div>
                        <div v-else class="catalog-grid">
                            <div class="container">
                                <div class="form">
                                    <div class="fila" v-for="product in products" :key="product.id">
                                        <div class="col-2">
                                            <img v-if="product.image != ''" :src="product.image">
                                            <img v-else src="../assets/cd_default.jpg">
                                        </div>
                                        <div class="col-2">
                                            <h2> {{product.title}} </h2>
                                            <h5> {{product.artist}} </h5><br>
                                            <h5> Cantidad: {{product.quantity}} </h5>
                                            <p> Precio: ${{product.price}} </p><br>
                                            <h4> Subtotal: ${{product.subtotal}} </h4>
                                        </div>
                                    </div>
                                <div class="fila">
                                    <h3> PRECIO TOTAL : ${{total}} </h3>
                                </div><br><br>
                                <input class="mouse-hover" type="button-2" id="bot" name="bot" value="Borrar todos los productos del carrito" v-on:click ="deleteCarrito()"/> <br><br>
                                <input class="mouse-hover" type="button" id="bot" name="bot" value="Pagar" v-on:click ="generarVenta()"/> <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pie">
            <div class="contenedor_pie">
                <div class="fila-2">
                    <div class="col1">
                        <h5>Cualquier duda, aclaraci&oacute;n o comentario, <br> no dudes en escribirnos a: <a href="mailto:atencionaclientes@symphony.com">atencionaclientes@symphony.com</a><br>
                        <a href="#top"> Click para ver la parte superior </a></h5>
                    </div>
                    <div class="col1">
                        <img src="../assets/logot.gif" width="200px">
                    </div>
                    <div class="col1">
                        S&iacute;guenos en redes <br>
                        <a href = "https://www.facebook.com/jesus.jahir.23"><img src="../assets/facebook.png" width="50px"></a>
                        <a href = "https://www.instagram.com/jesusjahir/"><img src="../assets/Instagram.png" width="50px"> <br></a>
                        <a href = "https://twitter.com/home"><img src="../assets/Twitter.png" width="50px"></a>
                        <a href = "https://www.youtube.com/channel/UCoFU_sQUS3-d5iVjoPdHGxw?view_as=subscriber"><img src="../assets/Youtube.png" width="50px"></a>
                    </div>
                </div>
            </div>
        </div>

    </body>
</template>

<script>
import axios from 'axios'

export default {
  name: 'carrito',
  data () {
    return {
      products: null,
      status: '',
      total: '',
      userdata: {
        userLogged: false,
        user: null
      }
    }
  },
  methods: {
    getCarrito: function (params) {
      axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/getcarrito', params).then(response => {
        this.products = response.data.productos
        this.status = response.data.status
        this.total = response.data.total
      })
        .catch(e => {
          this.errors.push(e)
        })
    },
    deleteCarrito: function () {
      var params = {
        Id_user: this.userdata.user.id
      }
      axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/deleteallcart', params).then(response => {
        this.products = null
        this.status = ''
        this.total = ''
        alert('Todos los productos se han eliminado de tu bolsa')
      })
        .catch(e => {
          this.errors.push(e)
        })
    },
    generarVenta: function () {
      var params = {
        Id_user: this.userdata.user.id,
        total: this.total
      }
      axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/generarventa', params).then(response => {
        this.products = response.data.productos
        alert('Se ha realizado la compra exitosamente')
        this.$router.push('home')
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
      Id_user: '12'
    }
    this.getCarrito(params)
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

.catalog-grid {
    display: grid;
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
    border-bottom: 2px solid #ffffff;
}

.fila-2{
    display: flex;
    align-items: center;
    flex: wrap;
    justify-content: space-around;
}

.fila-2 h6{
    font-size: 35px;
}

.col-2{
    flex-basis: 100%;
    min-width: 100px
}

.col-2 img{
    width: 150px;
    padding: 10px 10px;
}

.fila .col-2 h1{
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
}

.fila .col-2 h2{
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
}

.fila .col-2 h5{
    font-size: 15px;
    text-align: center;
}

.fila .col-2 h4{
    font-size: 18px;
    margin-bottom: 10px;
    text-align: right;
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
    min-height: 50px;
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
    background: linear-gradient(45deg,#ff8800,#2f00ff);
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
    position: relative;
    width: 100%;
    height: auto;
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
    text-align: right;
    margin: 0;
    padding: 0;
    color: #09c4dd;
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

input[type="button-2"]{
    text-align: center;
    display: inline-block;
    color: #680000;
    font-size: 15px;
    text-decoration: none;
    transition: 0.5s;
    letter-spacing: 1px;
    padding: 5px 5px;
    margin: auto;
}

input[type="button-2"]:hover{
    background: #ff0000;
    color: #050801;
    box-shadow: 0 0 5px #ff0000,
                0 0 25px #ff0000,
                0 0 50px #ff0000,
                0 0 150px #ff0000;
}

</style>
