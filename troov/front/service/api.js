import axios from 'axios';

  var req = [];
  var send;


export default {

  emitReqSubject() {
    this.reqSubject.next(this.req.slice());
  },

  getFtpState(cb) {

    axios.get(`${API_URL}/?action=getByKey&cachePath=/${site}/params&key=ftpSrvStatus`).then(res => {

        res.data[2] = atob(res.data[2]);

      cb(res.data);
    });
  },
    print(options, cb) {
      const str = "/?action=addTarget&cachePath=/"+site+"/requests&body="+options.body+"&key="+options.key+"&ttl=-1&responseType=string";
      axios.post(`${NODE_JS_ROOT}`, str).then(data => {
        cb(data);
      });
    },
    deleteAlarm(item, cb) {
      axios.get(`${API_URL}/?action=deleteTarget&cachePath=/${site}/alarms&key=${item[0]}`).then(data => {
        cb(data);
      });
    },



  newReqFromServer(form, cb) {

    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      window.sessionStorage.accessToken
    );
    headers = headers.append('Content-Type', 'application/json');

    this.send = {
      title: form.value['title'],
      nb: form.value['nb'],
    };

    const str = "/?action=addTarget&cachePath=/"+site+"/requests&body="+options.body+"&key="+options.key+"&ttl=-1&responseType=string";
    axios.post('http://127.0.0.1:8080/api/stuff', this.send, { headers }).then(data => {
      console.log('Enregistrement terminé !');
      cb(data);
    }).catch(err => {
      console.error('Error ! : ' + err);
    });
  },

  getReqFromServer(cb) {

    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      window.sessionStorage.accessToken
    );
    headers = headers.append('Content-Type', 'application/json');


    axios.get('http://127.0.0.1:8080/api/stuff', { headers }).then(data => {
      console.log('Enregistrement terminé !');
          this.req = response;
          cb(data);
    }).catch(err => {
      console.error('Error ! : ' + err);
    });
  },


  supprReqFromServer(id, cb) {

    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      window.sessionStorage.accessToken
    );
    headers = headers.append('Content-Type', 'application/json');


    axios.delete('http://127.0.0.1:8080/api/stuff/' + id, { headers }).then(data => {
      console.log('suppr');
          cb(data);
    }).catch(err => {
      console.error('Error ! : ' + err);
    });
  },

  newReqFromServer(form, cb) {

    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      window.sessionStorage.accessToken
    );
    headers = headers.append('Content-Type', 'application/json');

    this.send = {
      title: form[0],
      nb: form[1],
    };

    axios.put('http://127.0.0.1:8080/api/stuff/' + form[2], this.send, { headers }).then(data => {
      console.log('modif');
      cb(data);
    }).catch(err => {
      console.error('Error ! : ' + err);
    });
  }


}
