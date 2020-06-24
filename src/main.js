import { changeState, storeState } from './rpg.js';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import $ from "jquery";

const givePlayerName = changeState("name");
const givePlayerType = changeState("type");
const givePlayerAbility = changeState("ability");
export const givePlayerHealth = changeState("health");
export const givePlayerExperience = changeState("experience");
export const givePlayerLevel = changeState("level");
export const givePlayerMana = changeState("mana");

$(document).ready(function () {

  $("#player-form").submit(function (event) {
    event.preventDefault();

    const player1 = storeState();

    var nameInput = $("#player-name").val();
    const player1Name = givePlayerName(nameInput);

    var typeInput = $("#player-type").val();
    const playerType = givePlayerType(typeInput);

    var abilityInput = $("#player-ability").val();
    let abilityArr = [];
    abilityArr.push("Punch");
    abilityArr.push(abilityInput);
    const playerAbility = givePlayerAbility(abilityArr);


    player1(player1Name);
    player1(playerType);
    player1(playerAbility);
    player1(givePlayerExperience(0));
    player1(givePlayerHealth(10));
    player1(givePlayerMana(5));

    const player1State = player1(givePlayerLevel(1));

    $("#output").text(`Name: ${player1State.name} Class: ${player1State.type} Ability: ${player1State.ability} Mana: ${player1State.mana} Level: ${player1State.level} Health: ${player1State.health} Experience: ${player1State.experience}`);

  });
});