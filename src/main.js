import { changeState, storeState, changePoints } from './rpg.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././css/styles.css';

import $ from "jquery";

const giveName = changeState("name");
const giveType = changeState("type");
const giveAbility = changeState("ability");
export const giveHealth = changeState("health");
export const giveExperience = changeState("experience");
export const giveLevel = changeState("level");
export const giveMana = changeState("mana");

const dragon = storeState();
dragon(giveName("dragon"));
dragon(giveType("enemy"));
dragon(giveAbility(["Fire Breath", "Bite"]));
dragon(giveHealth(20));
const dragonState = dragon(giveLevel(3));

const giant = storeState();
giant(giveName("giant"));
giant(giveType("enemy"));
giant(giveAbility(["Stomp", "Throw Boulder", "FeFiFoFum"]));
giant(giveHealth(10));
const giantState = giant(giveLevel(2));

const goblin = storeState();
goblin(giveName("goblin"));
goblin(giveType("enemy"));
goblin(giveAbility(["Claw", "Bite"]));
goblin(giveHealth(5));
const goblinState = goblin(giveLevel(1));

$(document).ready(function () {

  $("#player-form").submit(function (event) {
    event.preventDefault();
    $("#buttonUser").hide();
    $("#player-form").hide();

    $("#battle-form").show();

    const player1 = storeState();

    var nameInput = $("#player-name").val();
    const player1Name = giveName(nameInput);

    var typeInput = $("#player-type").val();
    const playerType = giveType(typeInput);

    var abilityInput = $("#player-ability").val();
    let abilityArr = [];
    abilityArr.push("Punch");
    abilityArr.push(abilityInput);
    const playerAbility = giveAbility(abilityArr);
    let demo = `<button class="btn-success" id="attack">${abilityInput}</button>` +
      `<button class="btn-success" id="attack">${abilityArr[0]}</button>`;
    $("#buttonUser").html(demo);


    player1(player1Name);
    player1(playerType);
    player1(playerAbility);
    player1(giveExperience(0));
    player1(giveHealth(10));
    player1(giveMana(5));
    const player1State = player1(giveLevel(1));

    $("#output").html(`<p>Name: ${player1State.name}<br> Class: ${player1State.type} <br>Ability: ${player1State.ability}<br> Mana: ${player1State.mana} <br> Level: ${player1State.level}<br> Health: ${player1State.health}<br> Experience: ${player1State.experience}</p>`);

  });

  $("#battle-form").submit(function (event) {
    event.preventDefault();
    $("#battle-form").hide();
    $("#buttonUser").show();
    $("#run").show();
    $("#enemy").show();
    var target = $("#target").val();

    if (target === "dragon") {
      $("#enemy-name").text(dragonState.name.toUpperCase());
      $("#enemy-hp").text(dragonState.health);
    } else if (target === "giant") {
      $("#enemy-name").text(giantState.name.toUpperCase());
      $("#enemy-hp").text(giantState.health);
    } else if (target === "goblin") {
      $("#enemy-name").text(goblinState.name.toUpperCase());
      $("#enemy-hp").text(goblinState.health);
    }
  });

  $('#run').click(function () {
    $("#battle-form").show();
    $("#buttonUser").hide();
    $("#run").hide();
    $("#enemy").hide();
  });

  $('#punch').click(function () {

    const targetInput = $('input[name="target"]:checked').val();
    if (targetInput === "dragon") {
      const newDragon = dragon(changePoints(-5));
    }
    else {
      const newGiant = giant(changePoints(-5));
    }
  });

  $('#attack').click(function () {
    const targetInput = $('input[name="target"]:checked').val();
    if (targetInput === "dragon") {
      const newDragon = dragon(changePoints(-5));
    }
    else {
      const newGiant = giant(changePoints(-5));
    }
  });
});