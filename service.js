 function PlayerService(){
    var _myPlayers = [];
    var _nfl = [];
    var playerService = this;

    // function Player(name, position, jersey){
    //     this.name = name;
    //     this.position = position;
    //     this.jersey= jersey;
    //     this.id = id;
    //     id ++;
    // }

// this.getPlayersByTeam = function(teamName){
//     _playersData.filter(function(player){
//         if(player.team == teamName){
//             return true;

//         }
//         });
// }    

// this.getPlayersByPositions = function(position){
// _playersData.filter(function(player){
//     if(player.position == position){
//         return true;
//     }
// });
// }


playerService.getMyPlayers = function(){
    return _myPlayers
}

playerService.getNflPlayers = function(){
    return _nfl
}

playerService.addMyPlayer = function(id){
    for(var i=0; i < _nfl.length; i++){
        var player = _nfl[i];
        if(player.id == id){
            _myPlayers.push(player)
            _nfl.splice(i,1)
        }
    }
  return
}

playerService.removeMyPlayer = function(id){
    for(var i=0; i<_myPlayers.length; i++){
        var player = _myPlayers[i]
        if(player.id == id){
           _myPlayers.splice(i,1);
           _nfl.push(player);
        }
    }
    return
}

 playerService.getNFL = function loadPlayersData(callback){
      var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";

       var localData = localStorage.getItem('playersData');
      if(localData){
        _nfl = JSON.parse(localData);
        return callback(_nfl); 
      }

       var url = "http://bcw-getter.herokuapp.com/?url=";
      var endPointUrl = url + encodeURIComponent(apiUrl);
        $.getJSON(endPointUrl, function(data){
          _nfl = data.body.players;
          console.log('Player Data Ready')
          console.log('Writing Player Data to localStorage')
          localStorage.setItem('playersData', JSON.stringify(playersData))
          console.log('Finished Writing Player Data to localStorage')
          callback(_nfl)
        });
        loadPlayersData();
    }   
}