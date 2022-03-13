<template>

<div>
  <nav class="navbar navbar-default">

  <div class="container-fluid">
    <ul class="nav navbar-nav">
      <li routerLinkActive="active"><a routerLink="auth"><strong>identification</strong></a></li>
      <li routerLinkActive="active"><a routerLink="list"><strong>liste de course</strong></a></li>
    </ul>

  </div>
</nav>



<div class="container">
  <div class="block"></div>


  <div class="row">
    <router-outlet></router-outlet>
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



</div>

</footer>
</div>


</template>

<script>
export default {
  store: store,
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

  },

  methods: {


  onSubmit() {

      this.$store.dispatch("troov/newReqFromServer", this.form);

  },


  },
};

</script>

<style>


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
