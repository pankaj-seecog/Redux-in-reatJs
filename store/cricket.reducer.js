let cricket = {
  players : 11,
  runs : 0
}
let cricketReducer = (state=cricket,action)=>{
switch(action.type){
case 'fourRuns':
return {
  ...state,//spread operator
  runs : state.runs+4
}
case 'sixRuns':
return {
  ...state,//spread operator
  runs : state.runs+6
}
case 'out':
return {
  ...state,//spread operator
  players : state.players-1
}

}
return state;
}

export default cricketReducer;