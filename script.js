const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
// const team=[];
// for(let i=0;i<players.length;i++){
	team=players;
// }
const team1=[];
for(let x=0;x<players.length;x++){
	team1[x]=players[x];
}
for(let x=0;x<person.length;x++){
	const cap1[x]= person[x];
}

// console.log(team);
// console.log(team1);
// console.log(cap1);
// const cap1= person;
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
