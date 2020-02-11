$(document).ready(function(){

	$("#btn-bars").on("click", function(){

	    $("header").toggleClass("open-menu");
	
	});

	//Remover mascara e fechar menu
    $("#menu-mobile-mask, .btn-close").on("click", function(){

        $("header").removeClass("open-menu");
        
    });

    //Clicar em Logo direcionar para pág. principal
    //$("#logotipo").on("click", function(){ )};

});