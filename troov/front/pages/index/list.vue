<template>
  <div class="box">

  <h1>Ma liste de course</h1>

  <div class="play_ground"><!-- [ngClass]="{'btn btn-primary': isPut == false, 'btn btn-default': isPut === true}" -->

  <li v-for="(i, index) in this.getItems" :key="index">
    <h3><button id="btnP" class="btn btn-primary" v-on:click="put(i._id)">
    <img width="20px" src="https://img.icons8.com/metro/26/000000/settings.png"/></button>&nbsp;
      <button id="btnT" class="btn btn-danger" v-on:click="suppr(i._id)">
    <img width="20px" src="https://img.icons8.com/material-sharp/26/000000/trash.png"/></button>
    &nbsp;&nbsp;&nbsp;&nbsp;{{ i.nb }} &nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp; {{ i.title }}</h3>
  </li>



  </div>
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Bowlby+One" />
</div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: [
    "appSuppr",
    "appPut"
  ],
  data: function () {
    return {
    };
  },

  computed: {
    getItems() {
      return this.$store.getters["troov/getItems"];
    },
  },
  watch: {
    isRealtime(value) {

    },
  },
  mounted() {
     this.$store.dispatch("troov/getItems");
  },

  methods: {
    put(id){
      console.log("1")
    const stuff = this.getItems.find((stuff) => {
      return stuff._id === id;
    });
      console.log("2")

    this.appPut(id, stuff);
    //this.$store.dispatch("troov/putItems",{id, stuff});
  },

  suppr(id){
    this.appSuppr(id);
  }
  },
};

</script>

<style scoped>

.box{
padding-left: 25%;
padding-top: 10%;
}
h1{
  margin-top: -70px;
  margin-bottom: 80px;
}
#btnT, #btnP, #btnC{
  border-radius: 40%;
  width: 45px;
  height: 40px;
}
.play_ground{
padding-bottom: 14%;
position: relative;
right: 150px;
}
.box > form{
  position: relative;
}
li{
  list-style-type: none;
  padding: 20px;
}
.container{
  padding-left: 10%;
  padding-top: 0%;
}
h1{ font-family: "Bowlby One"; font-size: 43px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 23px; }
h3 { font-family: "Bowlby One"; font-size: 17px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; }

</style>
