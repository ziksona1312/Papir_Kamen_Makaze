$(document).ready(function(){
    $(".pogodak1").hide();
    $(".pogodak2").hide();
    $(".pogodak3").hide();
    $(".promasaj1").hide();
    $(".promasaj2").hide();
    $(".promasaj3").hide();




    let promenljiva=5;
    let randomBroj=5;
    let mesto=0;
    let pogodak=0;
    let promasaj=0;

    console.log(+randomBroj+"  "+promenljiva+"  "+mesto+"  "+promasaj+"  "+pogodak);


    if(localStorage.getItem('mesto')){
        mesto=localStorage.getItem('mesto');
    }
    if(localStorage.getItem('pogodak')){
        pogodak=localStorage.getItem('pogodak');
    }
    if(localStorage.getItem('promasaj')){
        promasaj=localStorage.getItem('promasaj');
    }

    randomBroj =Math.floor(Math.random() * 3);

    rezultat();
    console.log(+randomBroj+"  "+promenljiva+"  "+mesto+"  "+promasaj+"  "+pogodak);

   



    $(".dugmeKamen").click(function(){
        promenljiva=0;

        if(randomBroj==0){
            nereseno();
        }else if(randomBroj==1){
            poraz();
        }else{
            pobeda();
        }


    });
    $(".dugmePapir").click(function(){
        promenljiva=1;

        if(randomBroj==0){
            pobeda();
        }else if(randomBroj==1){
            nereseno();
        }else{
            poraz();
        }
    });
    $(".dugmeMakaze").click(function(){
        promenljiva=2;
        
        if(randomBroj==0){
            poraz();
        }else if(randomBroj==1){
            pobeda();
        }else{
            nereseno();
        }
    });
    

    function rezultat(){
        if(pogodak==1 || pogodak==3 || pogodak==5 || pogodak==7){
            $(".pogodak1").show();
        }
        if(promasaj==1 || promasaj==3 || promasaj==5 || promasaj==7){
            $(".promasaj1").show();
        }
        if(pogodak==2 || pogodak==3 || pogodak==6 || pogodak==7){
            $(".pogodak2").show();
        }
        if(promasaj==2 || promasaj==3 || promasaj==6 || promasaj==7){
            $(".promasaj2").show();
        }
        if(pogodak>3){
            $(".pogodak3").show();
        }
        if(promasaj>3){
            $(".promasaj3").show();
        }


    };


    function nereseno(){
        
        sacuvaj();

    };
    function pobeda(){
        if(mesto==0){
            pogodak=+pogodak + +1;
        }
        if(mesto==1){
            pogodak=+pogodak + +2;
        }
        if(mesto==2){
            pogodak=+pogodak + +4;
        }
        mesto++;
        sacuvaj();
 
    }; 
    function poraz(){
        if(mesto==0){
            promasaj=+promasaj + +1;
        }
        if(mesto==1){
            promasaj=+promasaj + +2;
        }
        if(mesto==2){
            promasaj=+promasaj + +4;
        }
        mesto++;
        sacuvaj();

    };

    
    function sacuvaj(){
        localStorage.setItem('igrac', promenljiva);
        localStorage.setItem('protivnik', randomBroj);
        localStorage.setItem('mesto',mesto);
        localStorage.setItem('pogodak', pogodak);
        localStorage.setItem('promasaj',promasaj);
    }
    $(".dugmeMeni").click(function(){
        localStorage.clear();
      });

      if(mesto>2){
        if(pogodak==3 || pogodak==5 || pogodak==6 || pogodak==7){
            alert("Pobeda");
        }else{
            alert("Poraz");
        }
        $(".dugmeKamen").hide();
        $(".dugmePapir").hide();
        $(".dugmeMakaze").hide();

    }

});





