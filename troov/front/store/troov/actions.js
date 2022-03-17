import tablesAPI from '../../service/api';
import authAPI from '../../service/auth';

export default {
    signIn({ commit}, form) {
        return new Promise((resolve) => {
          authAPI.signIn(form, (data) => {
             console.log(data)
           commit('setIsAuth', data);
           resolve()
         });
     })
       },
       register({ commit}, form) {
        return new Promise((resolve) => {
          authAPI.register(form, (data) => {
           commit('setIsSet', data);
           resolve()
         });
     })
       },
    getItems({ commit}){
        
        return new Promise((resolve) => {
            tablesAPI.getReqFromServer((data) => {
            //call the store and use the "setTableData" function in the "mutations" file to store the return of the block string
      
            commit('setItems', data);
            resolve()
          });
      })
    },
    newReqFromServer({ commit}, form) {
      console.log("4")
      return new Promise((resolve) => {
      tablesAPI.newReqFromServer(form, (data) => {
      //call the store and use the "setTableData" function in the "mutations" file to store the return of the block string

      commit('setIsSet', data);
      resolve()
    });
})
  },
  
  supprItems({ commit}, id) {

  return new Promise((resolve)=>{
      tablesAPI.supprReqFromServer(id, (data) => {

      commit('setIsSet', data);
      resolve()
    });
    });
  },
  putItems({commit}, id){
  return new Promise((resolve)=>{
     tablesAPI.putReqFromServer(id, (data)=>{

      commit('setIsSet', data)
      resolve()
    });
});
  },
};
