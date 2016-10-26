function PlayerController(){
    var playerService = new PlayerService()

    playerService.getNFL(ready)

   function ready(localData){
       update(localData, '#nfl-roster');
       update(playerService.getMyPlayers(), '#my-roster')

       $('#nfl-roster').on('click', '.btn-sucess', function(){
           playerService.addMyPlayer(this.id);
           update(playerService.getNflPlayers(), '#nfl-roster');
           update(playerService.getMyPlayers(), '#my-roster');
           
           

       })

       $('#my-roster').on('click', '.btn-danger', function(){
           playerService.removeMyPlayer(this.id);
           update(playerService.getNflPlayers(), '#nfl-roster');
           update(playerService.getMyPlayers(), '#my-roster');

       })

       $('#nfl-team').on('change', function(){
        // $(this).val()
        // var x =$(this) 
        var x = playerService.addMyTeam($(this).val());
        update(x, '#nfl-roster');

       })

       $('#nfl-position').on('change', function(){
        var y = playerService.addMyPosition($(this).val());
        update(y, '#nfl-roster');

       })


       $('#clear').on('click', function(event){
            event.preventDefault();
           update(playerService.getNflPlayers(), '#nfl-roster');
           update(playerService.getMyPlayers(), '#my-roster');
           playerService.clearFilter();
        })
    

       

       function update(list, target){
        var elem = $(target)
        elem.empty()

        for(var i in list){
            // console.log(list)
            var player = list[i];
            // console.log(player);
            var nflTemplate = `
            <div class="card">
        <div class="player-card">
         <img class="card-img-top" src="${player.photo}" height="170" width="170">
         <div class="card-block">
          <p class="card-text cName text">${player.fullname}</p>
         <p class="card-text cPosition text">${playerService.formatPosition(player.position)}</p>
         <p class="card-text cNumber text">${player.jersey}</p>
         <p class="card-text cTeam text">${playerService.formatTeam(player.pro_team)}</p>
         <button class="btn-sucess" id="${player.id}">ADD TO TEAM</button>
         </div>
         </div>
         </div>
            `


            var myTemplate =`
            <div class="card">
        <div class="player-card">
         <img class="card-img-top" src="${player.photo}" height="170" width="170">
         <div class="card-block">
          <p class="card-text cName text">${player.fullname}</p>
         <p class="card-text cPosition text">${playerService.formatPosition(player.position)}</p>
         <p class="card-text cNumber text">${player.jersey}</p>
         <p class="card-text cTeam text">${playerService.formatTeam(player.pro_team)}</p>
         <button class="remove-player btn-danger" id="${player.id}">REMOVE FROM TEAM</button>
         </div>
         </div>
         </div>
            `

            elem.append(target == '#nfl-roster' ? nflTemplate : myTemplate)
        }//loop

       }//update

   }//ready(localData)
}//playercontroller 
PlayerController();

