import React from 'react';
import TitleBar from './TitleBar'
import PlayerList from './PlayerList'
import AddPlayer from './AddPlayer'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title="Score Keep!!" />
        <div className="wrapper">
            <PlayerList players={this.props.players}/>
            <AddPlayer />
        </div>
      </div>
    );
  }
}
