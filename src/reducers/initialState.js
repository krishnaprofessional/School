let stateContent;

if (localStorage["data"]){stateContent = JSON.parse(localStorage.getItem('data'))}
else{
 stateContent =  
({
  Classes: [
  {name:"Class A",students:[{name:"Richard Lindberg"},{name:"Fredrik"}]},
  {name:"Class B",students:[{name:"Benny Lovstrom" },{name:"Ali"}]},
  {name:"Class C",students:[{name:"Erik" },{name:"Ana Lunde"}]},
  {name:"Class D",students:[{name:"Josef" },{name:"Rock"}]}
  ],
  Students: [
  {name: "Titi"},
  {name: "Sven Johnson"},
  {name: "Patrik"},

  ]
  });}
  export default stateContent;