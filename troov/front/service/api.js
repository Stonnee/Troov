import axios from 'axios';




export default {





  newReqFromServer(form, cb) {
    console.log("5")

    /* headers = headers.append(
      'Authorization',
      window.sessionStorage.accessToken
    );
    headers = headers.append('Content-Type', 'application/json'); */


    axios({
      method: 'post',
      url: 'http://127.0.0.1:8080/api/stuff',
      data: {
        title: form.titleInput,
      nb: form.nbInput,
      },
      headers: {
        'Authorization': window.sessionStorage.accessToken,
        'Content-Type': 'application/json'
      }
    }).then(data => {
      console.log('Enregistrement terminé !');
          cb(data.data);
    }).catch(err => {
      console.error('Error ! : ' + err);
    });
    
  },

  getReqFromServer(cb) {



    axios({
      method: 'get',
      url: 'http://127.0.0.1:8080/api/stuff',
      headers: {
        'Authorization': window.sessionStorage.accessToken,
        'Content-Type': 'application/json'
      }
    }).then(data => {
      console.log('get !');
          cb(data.data);
    }).catch(err => {
      console.error('Error ! : ' + err);
    });
  },


  supprReqFromServer(id, cb) {

    axios({
      method: 'delete',
      url: 'http://127.0.0.1:8080/api/stuff/'+id,
      headers: {
        'Authorization': window.sessionStorage.accessToken,
        'Content-Type': 'application/json'
      }
    }).then(data => {
      console.log('suppr !');
          cb(data.data);
    }).catch(err => {
      console.error('Error ! : ' + err);
    });
  },

  putReqFromServer(form, cb) {


    axios({
      method: 'put',
      url: 'http://127.0.0.1:8080/api/stuff/'+ form.hiddenIdInput,
      data: {
        title: form.titleInput,
      nb: form.nbInput,
      },
      headers: {
        'Authorization': window.sessionStorage.accessToken,
        'Content-Type': 'application/json'
      }
    }).then(data => {
      console.log('Enregistrement terminé !');
          cb(data.data);
    }).catch(err => {
      console.error('Error ! : ' + err);
    });
  }


}
