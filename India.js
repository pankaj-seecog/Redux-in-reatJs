import React from 'react';
import {connect} from 'react-redux';
class India extends React.Component{

constructor(){
  super();
  this.state = {
    country : 'India'
  }
}
render(){
  let content = null;
  if(this.props.storePlayers==0){
content = (<button disabled="true" onClick={this.props.OUT}>Out</button>
) 
  }
  else{
content =    (
<button onClick={this.props.OUT}>Out</button>
) 
  }
  return (
    <div>
The runs is {this.props.storeRuns} <br/>
The Total players is {this.props.storePlayers}<br/><hr/>
<button onClick={this.props.FOUR_RUNS}>4 Runs</button> | 
<button onClick={this.props.SIX_RUNS}>6 Runs</button> |  &nbsp;
{content}

    </div>
  )
}
}
let mapStateToProps = (state) =>{
return {
  storeRuns : state.runsRed.runs,
  storePlayers : state.playerRed.players
}
}
let mapDispatchToProps = (dispatch)=>{
  return{
    FOUR_RUNS : ()=>dispatch({type : 'fourRuns'}),
    SIX_RUNS : ()=>dispatch({type : 'sixRuns'}),
    OUT : ()=>dispatch({type : 'out'})
  }
}
//To connect the redux store with component props, we will use HOC connect
export default connect(mapStateToProps,mapDispatchToProps)(India);