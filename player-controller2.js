/**
 * To handle user input and manipulate the DOM 
 * pass data from the player-service to the DOM 
 */

var playerController = {

    updateNfl: function(players){
        var nflElem = $('#nfl-players')
    },

     updateMyRoster: function(players){
        var nflElem = $('#my-roster');
        var template = ''
        var player = players[i];
        for(var i =0; i< players.length; i++){
            template+= `<div>
            <h3>${player.name}</h3>
            </div>`
        }
    } 


}