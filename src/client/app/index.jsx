import React from 'react';
import {render} from 'react-dom';

import TestFile from './TestFile.jsx';

class App extends React.Component {
  render () {
    return (
    	<div>
	    	<TestFile />
    	</div>
	);
  }
}

render(<App/>, document.getElementById('app'));