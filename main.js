
var b1, b2, b3, b4, b5, b6, b7, b8, b9;

var flag = 1;
var current_id;
const x = "X";
const o = "O";

b1 = document.getElementById("b1");
b2 = document.getElementById("b2");
b3 = document.getElementById("b3");
b4 = document.getElementById("b4");
b5 = document.getElementById("b5");
b6 = document.getElementById("b6");
b7 = document.getElementById("b7");
b8 = document.getElementById("b8");
b9 = document.getElementById("b9");

var whoseTurn = document.getElementById("whose-turn");
var declareWinner = document.getElementById("winner");

const valid_boxes = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
// var retry = document.getElementById("retry");
var disabled_boxes = 0;


// Initializes and shows its the Playes X's turn
whoseTurn.textContent = "Player X you can START the Game"
playerInput();


// retry.addEventListener("click", () => {
//     location.reload = true
// });
function playerInput()
{   
    addEventListener("click", function(e){

        // At every click e.target.id grabs the id
        grabbed_box = document.getElementById(e.target.id);
        if (valid_boxes.includes(grabbed_box))
        {
             console.log(grabbed_box)
            
            if (grabbed_box.value == "")
            {
                if (flag == 1){
                    grabbed_box.value ='X';
                    flag = 0
                    whoseTurn.textContent = "It's Player O's turn now";
                    }
                else{
                    grabbed_box.value = "O";
                    flag = 1
                    whoseTurn.textContent = "It's Player X's turn now";
                }
                disabled_boxes += 1;
                grabbed_box.disabled = true;
                grabbed_box.style.backgroundColor ='#1ba098';
                checkResut();
            }
        }

    });    
}

// Disables all the boxes when ONE player has won
function disableAllBoxes(box_list)
{
    for (let i = 0; i < box_list.length; i++){
        box_list[i].disabled = true;
    }
   
}


function win(player_type, box1, box2, box3)
{
    
    box1.style.backgroundColor = "green";
    box2.style.backgroundColor = "green";
    box3.style.backgroundColor = "green";
    declareWinner.textContent = "Player"+ " " + player_type + " " + "has won"

    disableAllBoxes(valid_boxes);
}

function gameOver()
{
    declareWinner.textContent = "TIE!"
}


// Checks for wins and game over
function checkResut(){
    // Check all vertical boxes
    if (b1.value== x && b2.value == x && b3.value == x)
    {
        win(x, b1, b2, b3);
        
        
    }
    else if (b1.value== o && b2.value == o && b3.value == o)
    {
        win(o, b1, b2, b3);
        
    }
    else if (b4.value== x && b5.value == x && b6.value == x)
    {
        win(x, b4, b5, b6);
        
    }
    else if (b4.value== o && b5.value == o && b6.value == o)
    {
        win(o, b4, b5, b6);
        
    }
    else if (b7.value== x && b8.value == x && b9.value == x)
    {
        win(x, b7, b8, b9);
        
    }
    else if (b7.value== o && b8.value == o && b9.value == o)
    {
        win(o, b7, b8, b9);
        
    }

    // Check all horizontal boxes

    else if (b1.value== x && b4.value == x && b7.value == x)
    {
        win(x, b1, b4, b7);
        
    }

    else if (b1.value== o && b4.value == o && b7.value == o)
    {
        win(o, b1, b4, b7);
        
    }
    else if (b2.value== x && b5.value == x && b8.value == x)
    {
        win(x, b2, b5, b8);
        
    }
    else if (b2.value== o && b5.value == o && b8.value == o)
    {
        win(o, b2, b5, b8);
        
    }
    else if (b3.value== x && b6.value == x && b9.value == x)
    {
        win(x, b3, b6, b9);
        
    }
    else if (b3.value== o && b6.value == o && b9.value == o)
    {
        win(o, b3, b6, b9);
       
    }
    // Diagonal check

    else if (b1.value== x && b5.value == x && b9.value == x)
    {
        win(x, b1, b5, b9);
        
    } 
    else if (b1.value== o && b5.value == o && b9.value == o)
    {
        win(o, b1, b5, b9);
        
    }
    else if (b3.value== x && b5.value == x && b7.value == x)
    {
        win(x, b3, b5, b7);
        
    } 
    else if (b3.value== o && b5.value == o && b7.value == o)
    {
        win(o, b3, b5, b7);
        
    }
    else if (disabled_boxes > 8){
        gameOver()
    }
}
