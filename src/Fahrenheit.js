import React from 'react';
import Scale from './stores/Scale';
import { observer } from 'mobx-react';
import './App.css';

class Fahrenheit extends React.Component {
  render(){
    return(
      <fieldset>
        <legend>Fahrenheiet:</legend>
        <span>{Scale.fahrenheit}</span>
      </fieldset>
    );
  }
}

export default observer(Fahrenheit);
