import {Spacecraft, Containership} from './base-ships';
import {MillenniumFalcon} from './starfighters';
import { Humanoid } from './humanoid';
import { Jedi } from './jedi';

/**
 * Para executar a compilação, rode o comando tsc -w na pasta do projeto
 * Para executar a aplicação, rode 'node dist/app' no terminal  
 */

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();


let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();


let  goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;
console.log(`Is falcon good for the job? ${goodForTheJob( falcon ) ? 'YES' : 'NO'}`);

/**
 * 1. Criar uma classe "Humanoid"
 * 2. especializar para a força
 */

 let hanSolo = new Humanoid("Han Solo");
 hanSolo.say("I love you Leia.");

 let lukeSkywalker = new Jedi("Luke Skywalker");
 lukeSkywalker.TheForce();

 let isALuke = (human: Humanoid) => human.name == "Luke Skywalker";
 
console.log(`Ele é o Luke Skywalker ? ${isALuke(hanSolo) ? 'YES' : 'NO'}`);
console.log(`Ele é o Luke Skywalker ? ${isALuke(lukeSkywalker) ? 'YES' : 'NO'}`);
 