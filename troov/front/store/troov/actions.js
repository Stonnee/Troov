import tablesAPI from '../../service/api';

export default {
    async state({ dispatch}, options){
        await dispatch("ftpState");
        await dispatch("alarmState");
        await dispatch("activeURLState");
        await dispatch("pluquosState", options);
        dispatch("getPageNumber", options)
    },
    newReqFromServer({ commit}, form) {
      return new Promise((resolve) => {
      tablesAPI.newReqFromServer(form, (data) => {
      //call the store and use the "setTableData" function in the "mutations" file to store the return of the block string

      commit('setIsSet', data);
      resolve()
    });
})
  },
  activeURLState({ commit}) {
   return new Promise((resolve) => {
     tablesAPI.getActiveURLState((data) => {

      commit('setActiveURL', data);
      resolve()
    });
})
  },
  setActiveURLState({ commit}, state) {
    return tablesAPI.setActiveURLState(state, (data) => {


      commit('setActiveURLState', data);
    });
  },
  pluquosState({commit}, options){
  return new Promise((resolve)=>{
     tablesAPI.getPluquos(options, (data)=>{

      commit('setPluquos', data)
      resolve()
    });
});
  },
  getPageNumber({commit}, options){
      tablesAPI.getTableFilRequest(options, (data)=>{
        var pages = Math.ceil(data.kvSize / 10);
        commit("setPageNumbers", pages)
      });
  },
  alarmState({commit}/* , options */){
    return new Promise((resolve) => {
    tablesAPI.getAlarm(/* options, */ (data)=>{


      commit('setAlarmState', data)
      resolve()
    });
})
  },
  print({commit}, options){
    tablesAPI.print(options, (data) =>{
      commit('setPrintStatue', data)
    });
  },
  deleteAlarm({ commit }, item){
    return tablesAPI.deleteAlarm(item, (data) =>{
        commit('setDeleteState', data)

    });
  },
  updataEvent({commit, getters}, item){
      var page = getters["getActualPage"];
      var path = item[0].split("/");
      var site = url[url.length - 1]

      if(site == path[1])
    switch ("/"+path[2]) {
        case "/params":

            item[3] = atob(item[3]);
            item.shift();
            if(item[0] == "activeURL"){
                item.pop()
                commit("setActiveURL", null)
                commit("setActiveURL", item)
            }

            if(item[0] == "ftpSrvStatus")
            commit("setFtpState", item)
            break;
        case "/order":
        case "/preinvoice":
            console.log("1", item)
            if(page == 1){
                console.log("2")

            if(item[0] == item[4]){
                console.log("3", item)

            item[3] = atob(item[3]);
            item.shift()
            commit("setPluquosEvent", item)
        }}
        else{
            if(atob(item[3]) ==  ""){
            item[3] = atob(item[3]);
            item.shift()
            commit("setPluquosEvent", item);
        }
        }
            break;
        case "/alarms":
            item[3] = atob(item[3]);
            item.shift();
            commit("setAlarmStateEvent", item)
            break;
    }
  }
};
