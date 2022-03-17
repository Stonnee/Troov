<template>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

<div>
  <nav class="navbar navbar-default navbar-expand-lg">

    
  <div class="container-fluid collapse navbar-collapse">
    
    <ul class="nav navbar-nav">
      <a class="navbar-brand" href="https://www.troov.com/"><img src="https://www.troov.com/images/logo-dark.png"></a>
      <li class="nav-item" routerLinkActive="active"><nuxt-link class="nav-link" to="/auth"><strong>identification</strong></nuxt-link></li>
      <li class="nav-item" routerLinkActive="active"><nuxt-link class="nav-link" to="/list"><strong>liste de course</strong></nuxt-link></li>
    </ul>
  </div>
</nav>




<div class="container">


  <div class="row">
    <nuxt-child  :appPut="this.put" :appSuppr="this.suppr"/>
    <!-- <NuxtLink to="/">Home page</NuxtLink> -->
  </div>
</div>



<footer>
<div class="container">

  <form name="listF" class="form-inline">
    
    <div class="searchBox">
            <input v-model="form.titleInput" class="searchInput" type="text"  name="title" placeholder="nom" required>

          <input v-model="form.nbInput" class="nbInput"  type="number" name="nb" placeholder="nb" required>
          <input v-model="form.hiddenIdInput" id="id" name="id" hidden />
            <button class="searchButton" type="button" v-on:click="sub">
                <i class="material-icons">
                    >
                </i>
            </button>
        </div>
  </form>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</div>

</footer>
</div>
</body>
</html>

</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      title : 'troov',
      isPut : false,
      form: {
        hiddenIdInput: null,
        nbInput: 1,
        titleInput: null
      }

    };
  },

  computed: {
    getItems() {
      return this.$store.getters["troov/getItems"];
    },
  },
  watch: {
    getItems(value) {
      console.log("CHANGE!", value)
    },
  },
  mounted() {
  // setInterval(function () {console.log(window.sessionStorage)}, 1000);

  },

  methods: {
    Refresh() {
    this.Request.getReqFromServer();
  },

  put(id, stuff) {
      console.log("3")
    
    this.form.hiddenIdInput = id;
    this.form.titleInput = stuff.title;
    this.form.nbInput = stuff.nb;
    this.isPut = true;
      console.log("4")
  },

  sub() {
    if (this.isPut) {
      const put = {
        titleInput: this.form.titleInput,
        nbInput: this.form.nbInput,
        hiddenIdInput: this.form.hiddenIdInput,
      };

      console.log("wiw")
      console.log(put)
      this.$store.dispatch("troov/putItems", put).then(()=>{

    this.$store.dispatch("troov/getItems"); 
    });
      this.isPut = false;
    }else{
      this.$store.dispatch("troov/newReqFromServer", this.form).then(()=>{

    this.$store.dispatch("troov/getItems"); 
    });
    }
    this.form = {
        hiddenIdInput: null,
        nbInput: 1,
        titleInput: null
      }
  },

  suppr(id) {
    this.$store.dispatch("troov/supprItems", id).then(()=>{

    this.$store.dispatch("troov/getItems"); 
    });
  }
  },
};

</script>

<style scoped>


nav{
   z-index: 1;
  background-color: rgb(6, 68, 77);
  height: 100px;
  border-color: transparent;
  box-shadow: 0px 5px 10px black;
}
footer{
  background-color: rgb(6, 68, 77);
  height: 85px;
  bottom: 0px;
  width: 100%;
  z-index: 1;
  position: fixed;
}
footer > .container > form{
  padding-top: 3%;
  padding-left: 15%;
  position: relative;
}
.container{
  color: white;
}
.nav > li > a {
  padding: 41px 60px;
  font-size: 15px;
}
.nav > li{
  right: -250px;
}
.block{
   z-index: 0;
  width: 125px;
  height: 144%;
  position: absolute;
  top: 92px;
  left:0 ;
  background-image:linear-gradient(to right, rgb(19, 27, 39), rgb(32, 64, 92) 80%);
}
img{
  width: 100px;
  position: relative;
right: 430px;
}
/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */

body{
background-color: rgb(3, 131, 148);
}

*{
  box-sizing: unset;
}
.searchBox {
  position: absolute;
  top: -140%;
  left: 44%;
  transform:  translate(-50%,100%);
  background: #2f3640;
  height: 40px;
  border-radius: 40px;
  padding: 10px;
}
.searchBox:hover > .searchButton {
background: white;
color : #2f3640;
}
.searchButton {
  color: white;
  float: right;
  width: 30px;
  height: 40px;
  border-radius: 50%;
  background: #0084ff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}
.nbInput {
  border:none;
  background: none;
  outline:none;
  float:left;
  padding: 0 6px;
  color: white;
  font-size: 16px;
  line-height: 40px;
   width: 40px;
}
.searchInput {
  border:none;
  background: none;
  outline:none;
  float:left;
  padding: 0 6px;
  color: white;
  font-size: 16px;
  line-height: 40px;
   width: 440px;
}

</style>
