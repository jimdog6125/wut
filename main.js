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
    var cannonCost = Math.floor(500 * Math.pow(1.1,cannons));     //works out the cost of this cursor
    if(kills >= cannonCost){                                   //checks that the player can afford the cursor
        cannons = cannons + 1;                                   //increases number of cursors
    	kills = kills - cannonCost;                          //removes the cookies spent
        document.getElementById('cannons').innerHTML = cannons;  //updates the number of cursors for the user
        document.getElementById('kills').innerHTML = kills;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(500 * Math.pow(1.1,cannons));       //works out the cost of the next cursor
    document.getElementById('cannonCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
var oilTowers = 0;

function buyOilTower(){
    var oilTowerCost = Math.floor(5000 * Math.pow(1.1,oilTowers));     //works out the cost of this cursor
    if(kills >= oilTowerCost){                                   //checks that the player can afford the cursor
        oilTowers = oilTowers + 1;                                   //increases number of cursors
    	kills = kills - cannonCost;                          //removes the cookies spent
        document.getElementById('oilTowers').innerHTML = cannons;  //updates the number of cursors for the user
        document.getElementById('kills').innerHTML = kills;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(5000 * Math.pow(1.1,oilTowers));       //works out the cost of the next cursor
    document.getElementById('oilTowerCost').innerHTML = nextCost;  //updates the cursor cost for the user
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
window.setInterval(function(){
	
	kill(oilTowers);

}, 100);

var game = {
kills: kills,
swords: swords,
magic: magic,
cannons: cannons,
oilTowers: oilTowers
}

var save = localStorage.setItem('saveName', game);

var load = localstorage.getItem('saveName');
if (load) game = load;
//Autosave
  var saveVar;

 function autoSaveFunc() {
 saveVar = setInterval(save, 10000); //Autosave every 10 second

  }
  autoSaveFunc();


 //AutoLoad
  var loadVar;

function autoLoadFunc() {
 loadVar = setTimeout(load, 1000); //autoload

}
autoLoadFunc();

var lastUpdate = Date.now()
setInterval(function() {
    let currentUpdate = Date.now()
    let delta = (currentUpdate - lastUpdate) / 1000 //divided by 1000 because Date.now() is in milliseconds
    currency += resourcesGainedPerSecond * delta

   lastUpdate = currentUpdate
}, 100)
