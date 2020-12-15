import React from 'react';
import RoutingScreen from './app/routes/routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <RoutingScreen />;
  }
}
export default App;

console.disableYellowBox = true;
