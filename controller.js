function PlayerController(){
    var playerService = new PlayerService()

    function updateRoster(arr){
        var rosterElem = $('#roster')
        var template = ''
        for (var i=0; i< arr.length; i++){
            var player = arr[i];
            template +=  `<div class="card">
        <div class="player-card">
         <img class="card-img-top" src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/">
         <div class="card-block">
          <p class="card-text cName text">${player.name}</p>
         <p class="card-text cPosition text">${player.position}</p>
         <p class="card-text cNumber text">${player.jersey}</p>
         <button class="remove-player" id="${player.id}">REMOVE FROM TEAM</button>
         </div>
         </div>
         </div>`
        }
rosterElem.empty()
rosterElem.append(template);

    }
$('.new-player-form').on('submit', function addPlayer(event){
event.preventDefault();
var form = event.target; 
playerService.addPlayer(form.pName.value, form.pPosition.value, form.pJersey.value)
updateRoster(playerService.getPlayers())
})

$('#roster').on('click', 'button.remove-player', function(){
    playerService.removePlayer(this.id)
    updateRoster(playerService.getPlayers())

})

playerService.getNFL(updateRoster)

var loading = true;
var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
var playerService = new PlayerService(apiUrl, ready);

function ready(){
    loading = false;
}

$('#nfl-data').on('click',function(){
    var positionWR = playerService.getPlayersByPosition("WR");
     var teamSF = playerService.getPlayersByTeam("SF");
}


var filteredPlayers= playersData.filter(function(player){
if(player.team == "SF"){
    return true;
}
});

}

PlayerController()