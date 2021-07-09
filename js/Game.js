class Game{
    constructor(){}

    getState() {

        var gameStateRef = database.ref('gameState');

        gameStateRef.on("value", function (data) {

            gameState = data.val();

        })

    }

    update(state) {

        database.ref('/').update({

            gameState: state

        });

    }

    async start() {

            if (gameState === 0) {

                player = new Player();

                var playerCountRef = await database.ref('playerCount').once("value");

                if (playerCountRef.exists()) {

                    playerCount = playerCountRef.val();

                    player.getCount();
                   
                }

                form.display();

            }
        }


        play(){
            allPlayers=[player1,player2];

            player1=new Bow(100,300,70,70);
            player2=new Bow(700,300,70,70);

            form.hide();


            Player.getPlayerInfo();

            var x=300;
            var y=200;
            var ScoreTextY=20;
            var index = 1;
            console.log(player1.x);

             for(var plr in allPlayers){

                index+=1;
                ScoreTextY+=20;

            }





        }

        end(){
           //write code..

           

         }

    }