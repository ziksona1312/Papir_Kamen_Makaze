$(document).ready(function(){


     $(".dugme").hide();

    $(".dugmeKamen").click(function(){
        $(".divHor").css("background-color","rgba(255, 240, 24, 0.959)");
     });
    
     $(".dugmePapir").click(function(){
        $(".divHor").css("background-color","rgb(181, 125, 233)");
     });
     $(".dugmeMakaze").click(function(){
        $(".divHor").css("background-color","rgb(61, 179, 209)");
     });

    $(".dugme2").click(function(){
        alert("Korisnik "+$("#korisnik").val()+
        "\n"+
        "Smer "+$("input[name=radiokamen]:checked", "#forma2").val()+
        "\n"+
        
        "Omiljena slika "+$("#PadajucaKamen").val());

        
       $(".dugme").show("slow");
       $(".dugme2").hide("slow");
    });
    $(".dugme").click(function(){
      localStorage.clear();
    });

    $(".dugmeMeni").click(function(){
      localStorage.clear();
    });


});