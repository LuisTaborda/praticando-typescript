export class Humanoid{
    
    constructor(public name:String){
    }
    
    say(message: String){
        console.log(`${this.name}: ${message}`);
    }
}