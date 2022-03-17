import axios from 'axios';

var isAuth = true; //store
var send;


export default {



   signIn(form, cb) {

    this.send = {
      "email": form.email,
      "password": form.password
      };


axios.post('http://127.0.0.1:8080/api/auth/login', this.send).then(data => {
  window.sessionStorage.accessToken = "Bearer "+ data.data.token;
     console.log(data.data);
     console.log(window.sessionStorage, this.$store);
     console.log('connecté !');
  cb(data);
}).catch(err => {
  console.error('Error ! : ' + err);
});
    
  },

  register(form, cb) {

    this.send = {
      "email": form.email,
      "password": form.password
      };

      
    axios.post('http://127.0.0.1:8080/api/auth/signup', this.send).then(data => {
         console.log('register !');
      cb(data);
    }).catch(err => {
      console.error('Error ! : ' + err);
    });
  },

  emitAuth(){
      this.authSubject.next(this.isAuth);
    },

    signOut() {
      this.isAuth = false;
    }


}






