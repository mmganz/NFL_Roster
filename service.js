 function PlayerService(){
    var playerService = this;
    var _myPlayers = [];
    var _nfl = [];
    // var _filteredPosition = [];
    // var _filteredTeam = [];

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

//  var _filteredArray = _nfl.map(formatPosition(player));
//  _filteredArray = _filteredArray.map(formatTeam(player));
//  console.log(_filteredArray)


playerService.formatPosition = function (positionText){
    switch (positionText){
        case 'DB': 
        return 'Defensive Back';
        case 'DL':
        return 'Defensive Line';
        case 'LB':
        return 'Linkebacker';
        case 'K': 
        return 'Kicker';
        case 'QB':
        return 'Quaterback';
        case 'RB':
        return 'Running Back';
        case 'TE':
        return 'Tight End';
        case 'WR': 
        return 'Wide Receiver';
    }
}

playerService.formatTeam = function (teamText){
     switch (teamText) {
            case 'ARI':
                return 'Arizona Cardinals';
            case 'ATL':
                return 'Atlanta Falcons';
            case 'BAL':
                return 'Baltimore Ravens';
            case 'BUF':
                return 'Buffalo Bills';
            case 'CAR':
                return 'Carolina Panthers';
            case 'CHI':
                return 'Chicago Bears'
            case 'CIN':
                return 'Cincinnati Bengals';
            case 'CLE':
                return 'Cleveland Browns';
            case 'DAL':
                return 'Dallas Cowboys';
            case 'DEN':
                return 'Denver Broncos';
            case 'DET':
                return 'Detroit Lions';
            case 'GB':
                return 'Green Bay Packers';
            case 'HOU':
                return 'Houston Texans';
            case 'IND':
                return 'Indianapolis Colts';
            case 'JAC':
                return 'Jacksonville Jaguars';
            case 'KC':
                return 'Kansas City Chiefs';
            case 'LAR':
                return 'Los Angeles Rams';
            case 'MIA':
                return 'Miami Dolphins';
            case 'MIN':
                return 'Minnesota Vikings';
            case 'NE':
                return 'New England Patriots';
            case 'NO':
                return 'New Orleans Saints';
            case 'NYG':
                return 'New York Giants';
            case 'NYJ':
                return 'New York Jets';
            case 'OAK':
                return 'Oakland Raiders';
            case 'PHI':
                return 'Philadelphia Eagles';
            case 'PIT':
                return 'Pittsburgh Steelers';
            case 'SD':
                return 'San Diego Chargers';
            case 'SEA':
                return 'Seattle Seahawks';
            case 'SF':
                return 'San Francisco 49ers';
            case 'TB':
                return 'Tampa Bay Buccaneers';
            case 'TEN':
                return 'Tennessee Titans';
            case 'WAS':
                return 'Washington Redskins';
    }

}

playerService.getFilteredPlayers = function(){
    return _filteredPosition
}

playerService.getFilteredTeam = function(){
    return _filteredTeam
}

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

playerService.addMyTeam = function(teamText){
    var _filteredTeam = [];
    for(var i =0; i < _nfl.length; i++){
        var player = _nfl[i];
        if(player.pro_team == teamText){
            _filteredTeam.push(player)
        }
    }
    return _filteredTeam;
}

playerService.addMyPosition = function(positionText){
    var _filteredPosition = [];
    for(var i = 0; i <_nfl.length; i++){
        var player = _nfl[i];
        if(player.position == positionText){   
            _filteredPosition.push(player)
             }
    }
    return _filteredPosition;
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