import { changeState, storeState } from './rpg.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import $ from "jquery";

const givePlayerName = changeState("name");
const givePlayerType = changeState("type");
const givePlayerHealth = changeState("health");
const givePlayerExperience = changeState("experience");
const givePlayerLevel = changeState("level");


$(document).ready(function () {

  $("#player-form").submit(function (event) {
    event.preventDefault();

    const player1 = storeState();
    const player2 = storeState();

    var nameInput = $("#player-name").val();
    const player1Name = givePlayerName(nameInput);

    var typeInput = $("#player-type").val();
    const playerType = givePlayerType(typeInput);


    player1(player1Name);
    player1(playerType);
    player1(givePlayerExperience(0));
    player1(givePlayerHealth(10));

    const player1State = player1(givePlayerLevel(1));

    const player2Name = givePlayerName("Emma");
    const player2State = player2(player2Name);

    // console.log(playerInfo(player1));
    $("#output").text(`Name: ${player1State.name} PLAYER2NAME: ${player2State.name} Class: ${player1State.type} Level: ${player1State.level} Health: ${player1State.health} Experience: ${player1State.experience}`);

  });
});

//form name, character type, ability