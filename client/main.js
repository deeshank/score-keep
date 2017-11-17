import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import App from './../imports/ui/App';
import {calculatedPositionedPlayers} from "../imports/api/players";


Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, {sort: {score: -1, name: 1}}).fetch();
    let rankedPlayers = calculatedPositionedPlayers(players);
    ReactDOM.render(<App players={rankedPlayers}/>, document.getElementById('app'));
  });


});
