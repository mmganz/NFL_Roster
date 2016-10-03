function PlayerService(){
    var _players = [];
    var _playersData = [];

    function Player(name, position, jersey){
        this.name = name;
        this.position = position;
        this.jersey= jersey;
        this.id = id;
        id ++;
    }

this.getPlayersByTeam = function(teamName){
    _playersData.filter(function(player){
        if(player.team == teamName){
            return true;

        }
        });
}    

this.getPlayersByPositions = function(position){
_playersData.filter(function(player){
    if(player.position == position){
        return true;
    }
});
}


this.getPlayers = function(){
    return _players
}

this.getPlayers = function(){
    if(!name || ![position|| !jersey]){
        return
    }
    var player = new Player(name, position, jersey)
    _players.push(player)
}

this.removePlayer = function(id){
    for(var i=0; i<_players.length; i++){
        if(player.id == id){
            return _players.splice(i,1)
        }
    }
}

 this.getNFL = function loadPlayersData(callback){
      var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";

       var localData = localStorage.getItem('playersData');
      if(localData){
        playersData = JSON.parse(localData);
        return callback(playersData); 
      }

            var url = "http://bcw-getter.herokuapp.com/?url=";
      var endPointUrl = url + encodeURIComponent(apiUrl);
        $.getJSON(endPointUrl, function(data){
          playersData = data.body.players;
          console.log('Player Data Ready')
          console.log('Writing Player Data to localStorage')
          localStorage.setItem('playersData', JSON.stringify(playersData))
          console.log('Finished Writing Player Data to localStorage')
          callback(playersData)
        });
    }   
loadPlayersData();
}