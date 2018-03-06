var kills = 0;

function kill(number){
    kills = kills + number;
    document.getElementById("kills").innerHTML = kills;
};

var swords = 0;

function buySword(){
    var swordCost = Math.floor(10 * Math.pow(1.1,swords));     //works out the cost of this cursor
    if(kills >= swordCost){                                   //checks that the player can afford the cursor
        kills = kills + 1;                                   //increases number of cursors
    	kills = kills - swordCost;                          //removes the cookies spent
        document.getElementById('swords').innerHTML = swords;  //updates the number of cursors for the user
        document.getElementById('kills').innerHTML = kills;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,swords));       //works out the cost of the next cursor
    document.getElementById('swordCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	kill(swords);
	
}, 1000);
function save(){
var save = {
    kills: kills,
    swords: swords,
}
};
localStorage.setItem("save",JSON.stringify(save));
function load(){
var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.swords !== "undefined") swords = savegame.swords;
	if (typeof savegame.kills !== "undefined") kills = savegame.kills;
};

