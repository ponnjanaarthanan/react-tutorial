import React from 'react';

class Lesson1 extends React.Component {
   render() {
      return (
         <div>
			<StatelessComponent1 />
			<StatelessComponent2 />
         </div>
      );
   }
}

class StatelessComponent1 extends React.Component{
	render(){
		return (
			<div> Stateless Component 1 </div>
		);
	}
}

class StatelessComponent2 extends React.Component{
	render(){
		return (
			<div> Stateless Component 2 </div>
		);
	}
}

export default Lesson1;
