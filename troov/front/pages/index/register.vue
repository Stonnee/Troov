<template>
  <div class="auth">

  <form name="loginF" class="form">
    <h2>Register</h2>
    <div class="form-group">
       <label for="mail">  </label>
         <input v-model="form.email" type="email" value="ok" id="mail" name="mail" placeholder="email" class="form-control" required/>
      </div>

       <div class="form-group">
          <label for="pwd"> </label>
          <input v-model="form.password" type="password" id="pwd" name="pwd" placeholder="password" class="form-control" required/>
        </div>


        <button class="btn btn-success" type="button" >OK</button>

  </form>

</div>

</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
        form : {
          email: null,
          password: null
        },
    };
  },

  computed: {
    getIsAuth() {
      return this.$store.getters["troov/getIsAuth"];
    },
  },
  mounted() {
      this.authStatus = this.getIsAuth;
  },

  methods: {


  sub() {
    this.$store.dispatch("troov/register", this.form).then(()=>{
      redirect("/auth");
    });
 
      //() => this.router.navigate(['list'])
    
   }
  },
};



</script>

<style>
.auth > form{
  width: 900px;
  height: 500px;
  background-color: rgb(62, 69, 75);
  position: relative;
  border-radius: 15px;
  padding: 10%;
  text-align: center;
  left: 125px;
}

input{
  border-radius: 0;
  height: 50px;

}

.btn{
padding: 30px;
}

.register{
  position: relative;
  right: 300px;
}

</style>