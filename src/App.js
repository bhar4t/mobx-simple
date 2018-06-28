import React, { Component } from 'react';
import Celsius from './Celsius';
import Fahrenheit from './Fahrenheit';
import './App.css';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      col: '',
    };
  }
  handleClick = (e, data) => {
    console.log(data);
  }

  componentDidMount() {
      setInterval(() => {
          this.setState(() => {
              // console.log(['red','blue','green','yellow','black',].sort(() => { return 0.5 - Math.random() }));
              return { unseen: "does not display",
              col: ['red','blue','green','yellow','black','orange','pink','purple'].sort(() => { return 0.5 - Math.random() })[0],
             };
          });
      }, 1000);
  }

  shouldComponentUpdate(nextProps) {
      let flag = false;
      console.log('color :' + this.state.col);
      if('red' === this.state.col){
        console.log('Change ');
        flag = true;
      }
      const differentTitle = this.props.title !== nextProps.title;
      const differentDone = this.props.done !== nextProps.done
      return differentTitle || flag;
  }

  render() {
    return (
      <div style={{ backgroundColor: this.state.col }}>

        <ContextMenuTrigger id="some_unique_identifier">

                <div class="left">
                  <Celsius />
                </div>

                <div class="right">
                  <Fahrenheit />
                </div>
                <button style={{ color: this.state.col }}> Check</button>
              </ContextMenuTrigger>
              <ContextMenu id="some_unique_identifier">
                <MenuItem data={'Edit'} onClick={this.handleClick}>
                  Edit
                </MenuItem>
                <MenuItem data={'Approve'} onClick={this.handleClick}>
                  Approve
                </MenuItem>
                <MenuItem divider />
              </ContextMenu>

      </div>
    );
  }
}

export default App;
