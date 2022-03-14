export default {
  //return the current state
  getItems: state => {
    return state.items;
  },
  getPluquos: (state) => {
    
    return state.pluquos;
  },
  getPageNumbers(state){
    return state.pageNumbers
  },
  getActualPage(state){
    return state.actualPage
},
  getActiveURL: (state) => {
    
    return state.activeURL;
  },
  setDeleteState: (state) => {
    
    return state.deleteState;
  },
  getAlarmState: (state) => {
    
    return state.alarmState;
  },
  getStatueData: (state =>{
    return state.statue;
  })
}