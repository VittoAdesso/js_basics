let player = {
    name : 'Frank', 
    strength: 1, 
    // method == function 
    improveStrength : function (){
        this.strength += 1; 
    }, 
    // method == function 
    showStrength: function (){
        console.log('Hi' + ' ' + this.name + ', your strength is' + ' '+ this.strength); 
    }
}; 

// show
player.showStrength();
// improve
player.improveStrength(); 
// show
player.showStrength();