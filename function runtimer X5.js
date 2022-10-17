function runtimer(x){
    Currtime=50;
    var timeout= 1000;
    for(i=0;i<11;i++){ 
        setTimeout(function(){
            if(Currtime==0){
                x.innerHTML=Currtime;
                alert("BLASTOFF!!")
            }
           else if(Currtime>25){
                x.innerHTML="Warning Less than ½ way to launch, time left ="+Currtime;

            }
            else{x.innerHTML=Currtime;

            }
        
        Currtime=Currtime-5;
    }, timeout);
    timeout=timeout+1000;
    
}

   







} function startbuttonclick(){
document.getElementById("btnstart").disabled=true
document.getElementById("btnstop").disabled=false


}
function stopbuttonclick(){
    document.getElementById("btnstart").disabled=false
document.getElementById("btnstop").disabled=true
}

function getuserinput(){
firstname=""
surname=""
fullname=""

do{
     firstname=prompt("please enter legal firstname: ");
     surname=prompt("please enter legal surname: ");

     fullname=firstname + " " + surname; 

     if (fullname.length>19){
         alert("please enter shorter names(less than 20 characters"+ fullname.length)

}

}while(fullname.length > 19);


badgenumber=0

do{
    badgenumber=prompt("please enter badgenumber")

    if(badgenumber>999){
        alert("please enter shorter badge number(less than 1000"+badgenumber)
    }
    }while(badgenumber>999);



}
