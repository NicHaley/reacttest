import React from 'react';

class TestFile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {likesCount : 0};
		this.onLike = this.onLike.bind(this);
	}

	onLike () {
		let newLikesCount = this.state.likesCount + 1;
		this.setState({likesCount: newLikesCount});
	}

	render () {
		return (
			<div>
				Phil is a tit?
				Like: {this.state.likesCount}
				<div><button onClick={this.onLike}>Like Me</button></div>
			</div>
		);
	}

}

export default TestFile;