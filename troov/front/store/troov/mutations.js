// mutations
//store the result of api call in the state of the page
export default {
  setIsSet(state, isSet) {
    state.isSet = isSet;
  },
  setIsAuth(state, isAuth) {
    
    state.isAuth = isAuth;
  },
  setItems(state, itemsData) {
    
    state.items = itemsData;

  },
  
 
}
