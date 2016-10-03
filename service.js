 function PlayerService(){
    var _myPlayers = [];
    var __nfl = [];
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

playerService.addMyPlayer = function(fullname){
    for(var i=0; i<_nfl.length; i++){
        var player = _nfl[i];
        if(player.fullname == fullname){
            _myPlayers.push(player)
            _nfl.splice(i,1)
        }
    }
  return
}

playerService.removeMyPlayer = function(fullname){
    for(var i=0; i<_myPlayers.length; i++){
        var player = _myPlayers[i]
        if(player.fullname == fullname){
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
        loadPlayersData();
    }   
}