// mutations
//store the result of api call in the state of the page
export default {
  setIsSet(state, isSet) {
    state.isSet = isSet;
  },
  setPluquos(state, pluquosData) {
    
    state.pluquos = pluquosData;
  },
  setPluquosEvent(state, pluquosData) {
    console.log("4", pluquosData)

    pluquosData.pop();
    state.pluquos.forEach((item, index) => {
        if(item[0] == pluquosData[0]){
            state.pluquos.splice(index, 1)
        }
    });
    if(pluquosData[2] != ""){
    state.pluquos.unshift(pluquosData);
    if(state.pluquos.length == 11)
    state.pluquos.pop()
}
  },
  setActiveURL(state, activeURLData) {
    
    state.activeURL = activeURLData;
  },
  setPageNumbers(state, pageNumbersData){
      state.pageNumbers = pageNumbersData
  },
  setActualPage(state, actualPageData){
    state.actualPage = actualPageData
},
  setActiveURLState(state, activeURLStateData){
    state.activeURLState = activeURLStateData;
  },
  setAlarmState(state, alarmData) {
    
    state.alarmState = alarmData;
  },
  setAlarmStateEvent(state, alarmData) {
   
     alarmData.pop()

    state.alarmState.forEach((item, index) => {
        if(item[0] == alarmData[0]){
            state.alarmState.splice(index, 1)
        }
    });
    
    if(alarmData[2] != "")
    state.alarmState.unshift(alarmData);
  },
  setDeleteState(state, deleteData){
    state.deleteState = deleteData;
  },
  setCheckBoxState(state, index){
    if(state.pluquos[index][3])
    state.pluquos[index].pop()
    else  
    state.pluquos[index].push(true);
  },
  setPrintStatue(state, printStateData){
    state.printState = printStateData;
  }
  
}
