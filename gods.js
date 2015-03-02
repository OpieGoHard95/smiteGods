// Coded by Jared Smith
// The array filter function 
// Started 2/6/15

var godList = [
{ "name": "agni", "pantheon": "hindu", "class": "mage", "attack type": "ranged", "power type": "magical" },
{ "name": "anhur", "pantheon": "egyptian", "class": "hunter", "attack type": "ranged", "power type": "physical" },
{ "name": "anubis", "pantheon": "egyptian", "class": "mage", "attack type": "ranged", "power type": "magical" },
{ "name": "apollo", "pantheon": "greek", "class": "hunter", "attack type": "ranged", "power type": "physical" },
{ "name": "ares", "pantheon": "greek", "class": "guardian", "attack type": "melee", "power type": "magical" },
{ "name": "awilix", "pantheon": "mayan", "class": "assassin", "attack type": "melee", "power type": "physical" },
{ "name": "bellona", "pantheon": "roman", "class": "warrior", "attack type": "melee", "power type": "physical" },
{ "name": "chaac", "pantheon": "mayan", "class": "warrior", "attack type": "melee", "power type": "physical" },
{ "name": "chronos", "pantheon": "greek", "class": "mage", "attack type": "ranged", "power type": "magical" },
{ "name": "cupid", "pantheon": "roman", "class": "hunter", "attack type": "ranged", "power type": "physical" },
{ "name": "fenrir", "pantheon": "norse", "class": "assassin", "attack type": "melee", "power type": "physical" },
{ "name": "hades", "pantheon": "greek", "class": "guardian", "attack type": "ranged", "power type": "magical" },
{ "name": "hel", "pantheon": "norse", "class": "mage", "attack type": "ranged", "power type": "magical" },
{ "name": "hercules", "pantheon": "roman", "class": "warrior", "attack type": "melee", "power type": "physical" },
{ "name": "isis", "pantheon": "egyptian", "class": "mage", "attack type": "ranged", "power type": "magical" },
{ "name": "janus", "pantheon": "roman", "class": "mage", "attack type": "ranged", "power type": "magical" },
{ "name": "kali", "pantheon": "hindu", "class": "assassin", "attack type": "melee", "power type": "physical" },
{ "name": "loki", "pantheon": "norse", "class": "assassin", "attack type": "melee", "power type": "physical" },
{ "name": "mercury", "pantheon": "roman", "class": "assassin", "attack type": "melee", "power type": "physical" },
{ "name": "neith", "pantheon": "egyptian", "class": "hunter", "attack type": "ranged", "power type": "physical" },
{ "name": "nemesis", "pantheon": "greek", "class": "assassin", "attack type": "melee", "power type": "physical" },
{ "name": "nox", "pantheon": "roman", "class": "mage", "attack type": "ranged", "power type": "magical" },
{ "name": "odin", "pantheon": "norse", "class": "warrior", "attack type": "melee", "power type": "physical" },
{ "name": "osiris", "pantheon": "egyptian", "class": "warrior", "attack type": "melee", "power type": "physical" },
{ "name": "scylla", "pantheon": "greek", "class": "mage", "attack type": "ranged", "power type": "magical" },
{ "name": "xbalanque", "pantheon": "mayan", "class": "hunter", "attack type": "ranged", "power type": "physical" },
];
console.log(godList);

// Filter Function

function filter(array, test) {
	var passed = [];
	for (var j = 0; j < array.length; j = j + 1) {
		if (test(array[j]))
			passed.push(array[j]);
		}
		return passed;
	}

console.log(filter(godList, function(god) {
	return god.pantheon == "mayan";
	}));
