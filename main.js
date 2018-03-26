var A = 0;

function a(number){
    A = A + number;
    document.getElementById("A").innerHTML = A;
};

var B = 0;

function buyB(){
    var BCost = Math.floor(10 * Math.pow(1.1,A));     //works out the cost of this cursor
    if(A >= BCost){                                   //checks that the player can afford the cursor
        B = B + 1;                                   //increases number of cursors
    	kills = kills - swordCost;                          //removes the cookies spent
        document.getElementById('A').innerHTML = A;  //updates the number of cursors for the user
        document.getElementById('B').innerHTML = B;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,A));       //works out the cost of the next cursor
    document.getElementById('BCost').innerHTML = nextCost ;  //updates the cursor cost for the user
};
function b(number){
 B = B + number;
 document.getElementById("B").innerHTML = B;
}

var C = 0;

function buyC(){
    var CCost = Math.floor(10 * Math.pow(1.1,B));     //works out the cost of this cursor
    if(B >= CCost){                                   //checks that the player can afford the cursor
        C = C + 1;                                   //increases number of cursors
    	C = C - magicCost;                          //removes the cookies spent
        document.getElementById('C').innerHTML = C;  //updates the number of cursors for the user
        document.getElementById('B').innerHTML = B;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,B));       //works out the cost of the next cursor
    document.getElementById('magicCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
function c(number){
 C = C + number;
 document.getElementById("C").innerHTML = C;
}

var D = 0;

function buyD(){
    var DCost = Math.floor(10 * Math.pow(1.1,));     //works out the cost of this cursor
    if(C >= DCost){                                   //checks that the player can afford the cursor
        D = D + 1;                                   //increases number of cursors
    	C = C - DCost;                          //removes the cookies spent
        document.getElementById('D').innerHTML = D;  //updates the number of cursors for the user
        document.getElementById('C').innerHTML = C;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(500 * Math.pow(1.1,C));       //works out the cost of the next cursor
    document.getElementById('DCost').innerHTML = nextCost;  //updates the cursor cost for the user
};
function d(number){
 D = D + number;
 document.getElementById("D").innerHTML = D;
}

var E = 0;

function buyE(){
    var ECost = Math.floor(5000 * Math.pow(1.1,D));     //works out the cost of this cursor
    if(D >= ECost){                                   //checks that the player can afford the cursor
        E = E + 1;                                   //increases number of cursors
    	D = D - ECost;                          //removes the cookies spent
        document.getElementById('E').innerHTML = E;  //updates the number of cursors for the user
        document.getElementById('D').innerHTML = D;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,D));       //works out the cost of the next cursor
    document.getElementById('ECost').innerHTML = nextCost;  //updates the cursor cost for the user
};


ones = 0;
function buyOne(){
    var oneCost = Math.floor(10 * Math.pow(1.1,B));     //works out the cost of this cursor
    if(B >= oneCost){                                   //checks that the player can afford the cursor
        ones = ones + 1;                                   //increases number of cursors
    	B = B - oneCost;                          //removes the cookies spent
        document.getElementById('ones').innerHTML = ones;  //updates the number of cursors for the user
        document.getElementById('B').innerHTML = B;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,B));       //works out the cost of the next cursor
    document.getElementById('oneCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

twos = 0;
function buyTwo(){
    var twoCost = Math.floor(10 * Math.pow(1.1,C));     //works out the cost of this cursor
    if(C >= twoCost){                                   //checks that the player can afford the cursor
        twos = twos + 1;                                   //increases number of cursors
    	C = C - twoCost;                          //removes the cookies spent
        document.getElementById('twos').innerHTML = twos;  //updates the number of cursors for the user
        document.getElementById('C').innerHTML = C;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,C));       //works out the cost of the next cursor
    document.getElementById('twoCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

threes = 0;
function buyThree(){
    var threeCost = Math.floor(10 * Math.pow(1.1,D));     //works out the cost of this cursor
    if(D >= threeCost){                                   //checks that the player can afford the cursor
        threes = threes + 1;                                   //increases number of cursors
    	D = D - threeCost;                          //removes the cookies spent
        document.getElementById('threes').innerHTML = threes;  //updates the number of cursors for the user
        document.getElementById('D').innerHTML = D;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,D));       //works out the cost of the next cursor
    document.getElementById('threeCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

fours = 0;
function buyFour(){
    var fourCost = Math.floor(10 * Math.pow(1.1,E));     //works out the cost of this cursor
    if(E >= fourCost){                                   //checks that the player can afford the cursor
        fours = fours + 1;                                   //increases number of cursors
    	E = E - fourCost;                          //removes the cookies spent
        document.getElementById('fours').innerHTML = fours;  //updates the number of cursors for the user
        document.getElementById('E').innerHTML = E;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,E));       //works out the cost of the next cursor
    document.getElementById('fourCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	a(ones);
	
}, 1000);
window.setInterval(function(){
	
	b(twos);

}, 1000);
window.setInterval(function(){
	
	c(threes);

}, 1000);
window.setInterval(function(){
	
	d(fours);

}, 1000);


