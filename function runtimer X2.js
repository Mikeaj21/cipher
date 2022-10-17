function runtimer(x){
    Currtime=50;
    var timeout= 1000;
    for(i=0;i<11;i++){ 
        setTimeout(function(){
            if(Currtime==0){
                x.innerHTML=Currtime;
                alert("BLASTOFF!!")
            }
            else if(Currtime<25){
                x.innerHTML="Warning Less than ½ way to launch, time left ="+Currtime;

            }
            else{x.innerHTML=Currtime;

            }
        
        Currtime=Currtime-5;
    }, timeout);
    timeout=timeout+1000;
    
}

   







} function startbuttonclick(){}
function stopbuttonclick(){}