import {Spacecraft, Containership} from './base-ships';
import {MillenniumFalcon} from './starfighters';

/**
 * Para executar a aplicação, rode o comando tsc -w na pasta do projeto
 */

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();


let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();


let  goodForTheJob = (ship: Containership) => ship.cargoContainers > 2;
console.log(`Is falcon good for the job? ${goodForTheJob( falcon ) ? 'YES' : 'NO'}`);