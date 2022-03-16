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
  <nav class="navbar navbar-default">

  <div class="container-fluid">
    <a href="https://chefing.fr/"><img src="https://media.discordapp.net/attachments/427578589530292233/709196532947091456/google-shopping-icon-66_1.png"></a>
    <ul class="nav navbar-nav">
      <li routerLinkActive="active"><nuxt-link to="/auth"><strong>identification</strong></nuxt-link></li>
      <li routerLinkActive="active"><nuxt-link to="/list"><strong>liste de course</strong></nuxt-link></li>
    </ul>
    <a href="https://chefing.fr/"><img src="https://chefing.fr/wp-content/uploads/2020/01/logo_chefing_blanc.png" ></a>
  </div>
</nav>



<div class="container">
  <div class="block"></div>


  <div class="row">
    <nuxt-child/>
    <!-- <NuxtLink to="/">Home page</NuxtLink> -->
  </div>
</div>



<footer>
<div class="container">

  <form name="listF" class="form-inline">
    
    <div class="searchBox">
            <input v-model="form.titleInput" class="searchInput" type="text"  name="title" placeholder="nom" required>

          <input v-model="form.nbInput" class="nbInput"  type="number" name="nb" placeholder="nb" required>
          <input v-model="form.hiddenInput" id="id" name="id" hidden />
            <button class="searchButton" type="submit" v-on:click="onSubmit">
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
        hiddenInput: null,
        nbInput: null,
        titleInput: null
      }

    };
  },

  computed: {
    getLineData() {

    },
  },
  watch: {
    isRealtime(value) {

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
    this.hiddenInput.nativeElement.value = id;
    this.titleInput.nativeElement.value = stuff.title;
    this.nbInput.nativeElement.value = stuff.nb;
    this.isPut = true;
  },

  onSubmit() {
    if (this.isPut) {
      const put = [
        this.form.titleInput,
        this.form.nbInput,
        this.form.hiddenInput,
      ];

      this.Request.putReqFromServer(put);
      this.isPut = false;
      this.form.reset();
      this.Refresh();
    }else{
      this.$store.dispatch("troov/newReqFromServer", this.form);
    }
  },

  suppr(id) {
    this.Request.supprReqFromServer(id);
    this.Refresh();
  }
  },
};

</script>

<style scoped>


nav{

   z-index: 1;
  background-color: rgb(15, 22, 31);
  height: 100px;
  border-color: transparent;

  box-shadow: 0px 5px 10px black;
}

footer{
  background-color: rgb(15, 22, 31);
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
