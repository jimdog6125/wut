var kills = 0;

function kill(number){
    kills = kills + number;
    document.getElementById("kills").innerHTML = kills;
};

var swords = 0;

function buySword(){
    var swordCost = Math.floor(10 * Math.pow(1.1,swords));     //works out the cost of this cursor
    if(kills >= swordCost){                                   //checks that the player can afford the cursor
        swords = swords + 1;                                   //increases number of cursors
    	kills = kills - swordCost;                          //removes the cookies spent
        document.getElementById('swords').innerHTML = swords;  //updates the number of cursors for the user
        document.getElementById('kills').innerHTML = kills;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,swords));       //works out the cost of the next cursor
    document.getElementById('swordCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var magic = 0;

function buyMagic(){
    var magicCost = Math.floor(100 * Math.pow(1.1,magic));     //works out the cost of this cursor
    if(kills >= magicCost){                                   //checks that the player can afford the cursor
        magic = magic + 1;                                   //increases number of cursors
    	kills = kills - magicCost;                          //removes the cookies spent
        document.getElementById('magic').innerHTML = magic;  //updates the number of cursors for the user
        document.getElementById('kills').innerHTML = kills;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,magic));       //works out the cost of the next cursor
    document.getElementById('magicCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
var cannons = 0;

function buyCannon(){
    var cannonCost = Math.floor(300 * Math.pow(1.1,cannons));     //works out the cost of this cursor
    if(kills >= cannonCost){                                   //checks that the player can afford the cursor
        cannons = cannons + 1;                                   //increases number of cursors
    	kills = kills - cannonCost;                          //removes the cookies spent
        document.getElementById('cannons').innerHTML = cannons;  //updates the number of cursors for the user
        document.getElementById('kills').innerHTML = kills;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(300 * Math.pow(1.1,cannons));       //works out the cost of the next cursor
    document.getElementById('cannonCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
window.setInterval(function(){
	
	kill(swords);
	
}, 2000);
window.setInterval(function(){
	
	kill(magic);

}, 1000);
window.setInterval(function(){
	
	kill(cannons);

}, 500);

var prestige = 0;
document.getElementById("prestige").innerHTML = prestige;
function buyPrestige(){
    var prestigeCost = 10000000;
    if(kills >= prestigeCost){                                   
        prestige = prestige + 1;                                  
    	kills = 0;
      swords = 0;
      magic = 0;
      cannons = 0;
        document.getElementById('swords').innerHTML = swords;
        document.getElementById('magic').innerHTML = magic;
        document.getElementById('cannons').innerHTML = cannons;  
        document.getElementById('kills').innerHTML = kills;
 };    
   };
   if (prestige = 1){
   window.setInterval(function(){
	
	kill(swords);
	
}, 1000);
window.setInterval(function(){
	
	kill(magic);

}, 500);
window.setInterval(function(){
	
	kill(cannons);

}, 250);
   };
function save(){
var save = {
    kills: kills,
    swords: swords,
    magic: magic,
    cannons: cannons,
    prestige: prestige
}
localStorage.setItem("save",JSON.stringify(save));
	
}
function load(){
var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
if (typeof savegame.magic !== "undefined") magic = savegame.magic;
if (typeof savegame.cannons !== "undefined") cannons = savegame.cannons;
if (typeof savegame.prestige !== "undefined") prestige = savegame.prestige;
};
