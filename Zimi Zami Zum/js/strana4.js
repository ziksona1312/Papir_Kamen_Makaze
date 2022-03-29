$(document).ready(function(){
    $(".dugme2").hide();
    $(".kamen1").hide();
    $(".kamen2").hide();
    $(".papir1").hide();
    $(".papir2").hide();
    $(".makaze1").hide();
    $(".makaze2").hide();

    let prvi;
    let drugi;
    let treci;
    let cetvrti;
    let peti;

    prvi=localStorage.getItem('igrac');
    drugi=localStorage.getItem('protivnik');
    treci=localStorage.getItem('mesto');
    cetvrti=localStorage.getItem('pogodak');
    peti=localStorage.getItem('promasaj');
    
    console.log(prvi+"   "+drugi+"   "+treci+"   "+cetvrti+"   "+peti);

    if(prvi==0){
        $(".kamen1").show();
    }
    if(drugi==0){
        $(".kamen2").show();
    }
    if(prvi==1){
        $(".papir1").show();
    }
    if(drugi==1){
        $(".papir2").show();
    }
    if(prvi==2){
        $(".makaze1").show();
    }
    if(drugi==2){
        $(".makaze2").show();
    }


    if(treci>3){
        $(".dugme").hide();

        localStorage.clear();
    }
    $(".dugmeMeni").click(function(){
        localStorage.clear();
      });
});