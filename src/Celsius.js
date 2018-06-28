import React from 'react';
import Scale from './stores/Scale';
import { observer } from 'mobx-react';

class Celsius extends React.Component {
  render(){
    return(
        <fieldset style={{ padding: '25%' }}>
          <legend>Celsius:</legend>
          <input value={Scale.celsius} onChange={(e) => { Scale.celsius = e.target.value }} maxLength="3"/>
        </fieldset>
    );
  }
}

export default observer(Celsius);
