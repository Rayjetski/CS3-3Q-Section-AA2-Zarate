function calculateMonsters(){
	
	let PG= parseFloat (prompt("Enter the initial population: "));
	let R = parseFloat (prompt("Enter the growth rate in decimals: "));
	let T = parseFloat (prompt("Enter the time in hours: "));
	
	let P = Math.round (PG * Math.pow(Math.E,R * T));
	
	let MonsterRegion = prompt ("Enter the monster's region/location: ");
	let MonsterName = prompt ("Enter the the monster's name: ");
	
	let MonsterInfo = (MonsterRegion + " " + MonsterName).toUpperCase();
	
	document.getElementById("result").innerHTML = '"After ' + T + ' hours, the population of ' + MonsterInfo + ' has risen to ' + P + '!';
}
	