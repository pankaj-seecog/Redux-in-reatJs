let iniPlayers = {
  players : 11
}
let playersReducer = (state=iniPlayers,action)=>{
switch(action.type){

case 'out':
return {
  ...state,//spread operator
  players : (state.players>0)?state.players-1:0
}

}
return state;
}

export default playersReducer;