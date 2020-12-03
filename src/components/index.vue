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
                            <li v-if="userdata.userLogged === true"><a href="#"  v-on:click="logOut()">Cerrar sesión</a></li>
                            <li v-if="userdata.userLogged === true">Hola, {{userdata.user.name}}</li>
                        </ul>
                    </nav>
                    <router-link v-if="userdata.userLogged === true" to="/carrito"><img src="../assets/bolsa.png" width="30px" height="30px"></router-link>
                </div>

                <div class="fila">
                    <div class="col2">
                        <h1> ¡SMILE <br> ya disponible!</h1>
                        <p>El nuevo álbum de Katy Perry, incluye los hits: <br>
                            <ol>
                                <li> Never Really Over </li>
                                <li> Daisies </li>
                                <li> Smile </li>
                                <li> Harleys in Hawaii </li>
                            </ol>
                        </p>
                        <a class="but mouse-hover" v-on:click ="goToProduct(76)">
                            ¡C&oacute;mpralo ya!
                        </a>
                    </div>

                    <div class="col2">
                        <img src="../assets/KP.png">
                    </div>

                </div>
            </div>
        </div>

        <div class="parte2">
            <div class="billboardtop">
                <h2 class="title"> ¿No sabes qu&eacute; comprar? ¡Revisa el top de álbumes de la semana! <br></h2>
                <table border="3">
                    <tr class="fila1">
                    <th><i><b>Posici&oacute;n</b></i></th>
                    <th><i><b>Artista</b></i></th>
                    <th><i><b>&Aacute;lbum</b></i></th>
                    <th><i><b>Precio</b></i></th>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Katy Perry</td>
                        <td>Smile</td>
                        <td>$13.99</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Taylor Swift</td>
                        <td>folklore</td>
                        <td>$13.99</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Dua Lipa</td>
                        <td>Future Nostalgia</td>
                        <td>$12.99</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>The Weeknd</td>
                        <td>After Hours</td>
                        <td>$10.99</td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Lady Gaga</td>
                        <td>Chromatica</td>
                        <td>$9.99</td>
                    </tr>

                </table>
            </div>

        <div class="fotoscds">
            <a href = "https://www.instagram.com/theweeknd/"><img src = "../assets/the w.jpg"></a>
            <a href = "https://www.instagram.com/taylorswift/"><img src = "../assets/folk.jpg"></a>
            <a href = "https://www.instagram.com/katyperry/"><img src = "../assets/Smile Album.jpg"></a>
            <a href = "https://www.instagram.com/dualipa/"><img src = "../assets/dua.jpg"></a>
            <a href = "https://www.instagram.com/ladygaga/"><img src = "../assets/lady gaga.jpg"> </a>
        </div>

        </div>

        <div class="parte3">
            <h3 class="title"> Productos relevantes </h3>
            <div class="fila">
                <div class="col1-4">
                    <a class="mouse-hover" v-on:click ="goToProduct(59)">
                      <img src="../assets/ironmaiden.jpg">
                    </a>
                    <h4>Powerslave - Iron Maiden </h4>
                    <p>$15.99</p>
                </div>
                <div class="col1-4">
                    <a class="mouse-hover" v-on:click ="goToProduct(57)">
                      <img src="../assets/imaginedragons.jpg">
                    </a>
                    <h4>Evolve - Imagine Dragons </h4>
                    <p>$9.99</p>
                </div>
                <div class="col1-4">
                    <a class="mouse-hover" v-on:click ="goToProduct(80)">
                      <img src="../assets/lorde.jpg">
                    </a>
                    <h4>Melodrama - Lorde </h4>
                    <p>$11.99</p>
                </div>
                <div class="col1-4">
                    <a class="mouse-hover" v-on:click ="goToProduct(5)">
                      <img src="https://www.covercentury.com/covers/audio/a/Adele-02TwentyOne.jpg">
                    </a>
                    <h4>21 - Adele </h4>
                    <p>$12.99</p>
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

  name: 'index',
  data () {
    return {
      userdata: {
        userLogged: false,
        user: null
      }
    }
  },
  methods: {
    goToProduct: function (id) {
      this.$router.push({name: 'product', params: {Pid: id}})
    },

    logOut: function (event) {
      $cookies.remove('token')
      this.$router.go()
    },
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
    console.log(this.$parent.msg)
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

.col2 ol li{
    align-content: center;
    margin: auto;
    width: 30%;
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

.parte2{
    background: radial-gradient(#0a3808 , #000000);
    color: #ffffff;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 30px;
    padding-bottom: 70px;
}

.billboardtop{
    text-align: center;
    max-width: 1200px;
    margin: auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
}

table {
    table-layout: fixed;
    border-collapse: collapse;
    width: 50%;
    border: 3px solid #ffffff;
    margin: auto;
    border-spacing: 5px;
    color: #fff;
 }

 td, th {
    padding: 10px;
    text-align: center;
    color: #ffff;
    vertical-align: top;
 }

 .fila1 {
    background-color:#000000;
}

.title{
    text-align: center;
    margin: 0 auto 80 px;
    position: relative;
    line-height: 100px;
}

.fotoscds{
    text-align: center;
}

.fotoscds img{
    max-width: 15%;
    box-shadow: 0 0 5px #39f186,
                0 0 25px #39f186,
                0 0 50px #39f186;
    padding-left: 5x;
    padding-right: 5px;
}

.parte3{
    background: radial-gradient(#3d1e05 , #000000);
    color: #ffffff;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 30px;
    padding-bottom: 70px;
    text-align: center;
}

.col1-4{
    flex-basis: 25%;
    padding: 10px;
    min-width: 200px;
    margin-bottom: 30px;
}

.col1-4 img{
    width: 60%;
    box-shadow: 0 0 5px #eebd36,
                0 0 25px #eebd36,
                0 0 50px #eebd36;
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

</style>
