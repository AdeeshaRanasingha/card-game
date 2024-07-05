let total =0;
function generate(){

    let number = Math.floor( Math.random() * 100 /7.6)+1;
    total = total + number;
    if(total>21){
        document.getElementById("btn").innerHTML="reset"
        document.getElementById("btn").onclick= location.reload();
        alert("you losed");
        
        
    }
    else{
        let img = document.createElement("img");
        img.src = number+".png";
        img.height=200;

        document.body.appendChild(img);

        

        document.getElementById("total").innerHTML=total;

        if(total == 21){
            alert("you win");
        }
        else if(total > 21){
            alert("you losed");
            return 0;
        }
    }
    

}
