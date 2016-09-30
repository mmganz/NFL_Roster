// function PlayerService(){
//     var _players = [
//     {name: 'Player Name',
//     position: 'Player Position',
//     jersey: 'Player Number',
//     id: 1
// },{
//     name: 'Meredith',
//     position: 'Playa',
//     jersey: 1,
//     id: 2
// },{
//     name: 'Goofy',
//     position: 'QB',
//     jersey: 2,
//     id = 3,
// },]


// function Player(name,position,jersey){
//     this.name = name;
//     this.position = position;
//     this.jersey = jersey;
//     this.id= id;
//     id++;
// }

// this.getPlayers = function(){
//     return _players
// }

// this.addPlayer = function(name, position, jersey){
//     if(!name || !pos|| !jersey){
//         return
//     }
//     var player = new Player(name, position, jersey)
//     _players.push(player)

// }

// this.removePlayer = function(id){
//     console.log(id)
//     for(var i =0; 0 < _players.length; i++){
//         if(_players[i].id == id){
//         _players.splice(i,1)
//         return
//         }
//     }
// }
// }

// // ENDED HERE 


// $("form").submit(function(event){
//      event.preventDefault();
//      var form = this;
    
//     var p = new NewPlayer(
//         form.inputName.value,
//         form.inputPosition.value,
//         form.inputNumber.value
//     )

//     console.log(p)

// players.push(p);
// form.reset();
// cards(players);
// });

// function cards(players){
//     var elem = document.getElementById('player-roster')
//     elem.innerHTML = ''
//     var template = ''
//     for(var i=0; i<players.length; i++){
//         var nfl= players[i]
//         template+= `
//         <div class="card">
//         <div class="player-card">
//          <img class="card-img-top" src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/">
//          <div class="card-block">
//           <p class="card-text cName text">${nfl.name}</p>
//          <p class="card-text cPosition text">${nfl.position}</p>
//          <p class="card-text cNumber text">${nfl.jersey}</p>
//          </div>
//          </div>
//          </div>`
//     }

//     elem.innerHTML = template;
// }

// cards(players);




