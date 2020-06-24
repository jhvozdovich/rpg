import { changeState, stateChanger } from './rpg.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import $ from "jquery";

const givePlayerName = changeState("name");
const givePlayerType = changeState("type");
const givePlayerHealth = changeState("health");
const givePlayerExperience = changeState("experience");
const givePlayerLevel = changeState("level");


$(document).ready(function () {
  //NAME CHARACTER
  //get form field character name and set name qual


  $("#player-form").submit(function (event) {
    event.preventDefault();

    var nameInput = $("#player-name").val();
    const playerName = givePlayerName(nameInput);

    var typeInput = $("#player-type").val();
    const playerType = givePlayerType(typeInput);

    const newStateName = stateChanger(playerName);

    console.log(newStateName.name);
    const newStateType = stateChanger(playerType);
    console.log(newStateType.name, newStateType.type);

    const newStateHealth = stateChanger(givePlayerHealth(10));
    console.log(newStateHealth.health);
    const newStateExperience = stateChanger(givePlayerExperience(0));
    console.log(newStateExperience.experience);
    const newStateLevel = stateChanger(givePlayerLevel(1));
    console.log(newStateLevel.level);

    $("#output").text(`Name: ${newStateLevel.name} Class:${newStateLevel.type} Level: ${newStateLevel.level} Health: ${newStateLevel.health} Experience: ${newStateLevel.experience}    `);

  });
});

//form name, character type, ability