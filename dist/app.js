"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var humanoid_1 = require("./humanoid");
var jedi_1 = require("./jedi");
/**
 * Para executar a compilação, rode o comando tsc -w na pasta do projeto
 * Para executar a aplicação, rode 'node dist/app' no terminal
 */
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
/**
 * 1. Criar uma classe "Humanoid"
 * 2. especializar para a força
 */
var hanSolo = new humanoid_1.Humanoid("Han Solo");
hanSolo.say("I love you Leia.");
var lukeSkywalker = new jedi_1.Jedi("Luke Skywalker");
lukeSkywalker.TheForce();
var isALuke = function (human) { return human.name == "Luke Skywalker"; };
console.log("Ele \u00E9 o Luke Skywalker ? " + (isALuke(hanSolo) ? 'YES' : 'NO'));
console.log("Ele \u00E9 o Luke Skywalker ? " + (isALuke(lukeSkywalker) ? 'YES' : 'NO'));
