let iniRuns = {
  runs : 0
}
let runsReducer = (state=iniRuns,action)=>{
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

}
return state;
}

export default runsReducer;