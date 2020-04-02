import { Humanoid } from "./humanoid";

class Jedi extends Humanoid{
    
    constructor(public name:String){
        super(name);
    }

    TheForce(){
        this.say("Eu sinto a força");
    }
}

export {Jedi};