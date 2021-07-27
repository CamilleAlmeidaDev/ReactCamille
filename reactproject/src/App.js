import React, {Component} from 'react';
import './App.css';
import { Button } from 'reactstrap';
import CardFrame from './components/CardFrame';


class App extends Component {

  render () {
    return (
      <div className="App">
     <CardFrame/>
      </div>
    );
   
}

}
export default App;
