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
                    <router-link v-if="userdata.userLogged === true" to="/carrito"><img src="../assets/bolsa.png" width="30px" height="30px"></router-link>
                </div>

                <div class="fila">
                    <h2> Cat&aacute;logo de productos </h2>

                    <select @change="orderBy($event)" class="form-control" v-model="orderByKey">
                        <option disabled value="">Seleccione un elemento</option>
                        <option value="1">De mayor a menor precio</option>
                        <option value="2">De menor a mayor precio</option>
                    </select>
                </div>
                <br><br>

                <div class="fila">
                    <div class="inputBox">
                        <input class="search-text" type="text" name="searchText" id="searchText" ref="searchText" placeholder="Búsqueda de producto" v-model="searchText"/>
                        <button class="search-button mouse-hover" v-on:click ="searchProducts"><img src="../assets/lupa.png" width="40px" height="40px"></button>
                        <button class="search-clean-button mouse-hover" v-on:click ="cleanSearch">Limpiar búsqueda</button>
                    </div>
                </div>

                <div v-if="status === false">No hay resultados</div>
                <div v-else class="catalog-grid">
                    <div class="container" v-for="product in products" :key="product.id">
                        <div class="form">
                            <div class="fila">
                                <div class="col-2">
                                    <a class="mouse-hover" v-on:click ="goToProduct(product.id)">
                                        <img v-if="product.image != ''" :src="product.image">
                                        <img v-else src="../assets/cd_default.jpg">
                                    </a>
                                    <h4> {{product.artist}} </h4>
                                    <h5> {{product.title}} </h5>
                                    <p> ${{product.price}} </p>
                                    <input class="mouse-hover" type="button" id="bot" name="bot" value="Agregar a bolsa" v-on:click ="addToCart(product.id)"/> <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="page-but">
                <br>
                <span v-for="page in totalPages" :key="page" v-on:click ="goToPage(page)">{{page}}</span>
            </div>
            <br>
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
  name: 'catalogo',
  data () {
    return {
      products: null,
      status: '',
      orderByKey: '',
      searchText: '',
      totalPages: 0,
      userdata: {
        userLogged: false,
        user: null
      }
    }
  },
  methods: {
    getProducts: function (params) {
      axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/getcatalogo', params).then(response => {
        this.products = response.data.productos
        this.status = response.data.status
        this.totalPages = response.data.totalPages
      })
        .catch(e => {
          this.errors.push(e)
        })
    },
    searchProducts: function (event) {
    /*
      const requestToken = {'username': mail}
      let tokenJWT = ''
      axios.post('https://5e6cplgzmi.execute-api.us-east-1.amazonaws.com/default/gettokenjwt', requestToken)
      .then(response => {
      tokenJWT = response.data.token
      })
    */

    // let searchText = this.$refs.searchText.value
      this.orderByKey = ''

      var params = {
        'searchTerm': this.searchText
      }

      this.getProducts(params)
    },

    cleanSearch: function (event) {
      this.searchText = ''
      this.orderByKey = ''

      var params = {
        'searchTerm': this.searchText
      }

      this.getProducts(params)
    },

    orderBy (event) {
      var params = {
        'orderBy': event.target.value,
        'searchTerm': this.searchText
      }
      this.getProducts(params)
    },

    goToPage: function (page) {
      console.log('page ', page)

      var params = {
        'orderBy': this.orderByKey,
        'searchTerm': this.searchText,
        'currentPage': page
      }

      this.getProducts(params)
    },
    goToProduct: function (id) {
      this.$router.push({name: 'product', params: {Pid: id}})
    },
    addToCart: function (id) {
      var params = {
        'Id_prod': id,
        'Id_user': this.userdata.user.id
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
    var params = {}
    this.getProducts(params)
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
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
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

.col-2{
    flex-basis: 100%;
    min-width: 100px
}

.col-2 img{
    width: 200px;
    padding: 10px 10px;
}

.col-2 h1{
    color: #050801;
    font-size: 50px;
    line-height: 20px;
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
    width: 250px;
    min-height: 380px;
    background: rgba(255,255,255,0.5);
    box-shadow: 0 5px 15px rgba(0,0,0,1);
    margin: auto;
    margin-bottom: 70px;
}

.container img{
    width: auto;
    max-width: 100%;
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
    background: linear-gradient(45deg, #ff00ff, #0044ff);
    pointer-events: none;
    animation: animate 20s linear infinite;
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
    margin: auto;
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
    font-size: 15px;
    text-align: center;

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
    text-align: center;
    margin: 0;
    padding: 0;
    color: #3f038f;
    font-size: 18px;
}

.form h5{
    text-align: center;
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-size: 12px;
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

.page-but span{
    display: inline-block;
    border: 1px solid#03e9f4;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}

.page-but span:hover{
    background: #03e9f4;
    color: #000000;
}

.search-text{
    max-width: 80%;
}

.search-button{
    top: 12px;
    position: relative;
    background: none;
    border: 0;
}

.search-text::placeholder{
    color: rgba(150, 150, 150, 0.6);
}

.catalog-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.search-clean-button{
    background: none;
    border: 1px;
    display: inline-block;
    color: #f44f03;
    font-size: 15px;
    text-decoration: none;
    transition: 0.5s;
    letter-spacing: 1px;
    padding: 5px 5px;
    margin: 12px;
}

.search-clean-button:hover{
    background:  #f46303;
    color: #050801;
    box-shadow: 0 0 5px #f46303,
                0 0 25px #f46303,
                0 0 50px #f46303,
                0 0 150px #f46303;
}

</style>
