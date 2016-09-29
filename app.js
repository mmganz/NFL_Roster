

function NewPlayer(name,position,jersey){
    this.name = name;
    this.position = position;
    this.jersey = jersey;
}

var players = [
    {name: 'Player Name',
    position: 'Player Position',
    jersey: 'Player Number'},
]

$("form").submit(function(event){
     event.preventDefault();
     var form = this;
    
    var p = new NewPlayer(
        form.inputName.value,
        form.inputPosition.value,
        form.inputNumber.value
    )

    console.log(p)

players.push(p);
form.reset();
cards(players);
});

function cards(players){
    var elem = document.getElementById('player-roster')
    elem.innerHTML = ''
    var template = ''
    for(var i=0; i<players.length; i++){
        var nfl= players[i]
        template+= `
        <div class="card">
        <div class="player-card">
         <img class="card-img-top" src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/">
         <div class="card-block">
          <p class="card-text cName text">${nfl.name}</p>
         <p class="card-text cPosition text">${nfl.position}</p>
         <p class="card-text cNumber text">${nfl.jersey}</p>
         </div>
         </div>
         </div>`
    }

    elem.innerHTML = template;
}

cards(players);




