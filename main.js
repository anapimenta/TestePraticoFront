function novosInputs(qtd){

    let $somaContainer = $("#somaContainer").empty(); 


    for (let i = 0; i < qtd; i++) {

        $somaContainer.append(
            '<input type="number" class="inputSoma"> '
        )

    }

    $somaContainer.append(
 
        '<button id="btnResultado">Resultado</button>'
    )
    
    $("#btnResultado").click(function(){

        let $inputs = $(".inputSoma");
    
       $inputs.each(function(){
           campoVazio($(this));
       });

        calculaResultado($inputs);
    });
}

function calculaResultado(inputs){
     
    let total = 0;

    inputs.each(function(){
        
       total+= parseInt($(this).val());
     });
     

    //Adiciona resultado no modal
    $("#resultado").html("<p> Resultado da Soma:" + total + "</p>")
    $("#mostraResultado").click();

}

function campoVazio(el){
 
    //lança exceção caso campo for vazio 
    if(!el.val()){

        $("#mostraErro").click();
        
        throw "Campo vazio";
        
    }
    
} 

function campoInvalido(el){
 
    //lança exceção caso campo for invalido
    if(el.val() < 1){

        $("#mostraErro").click();
        
        throw "Campo negativo";
        
    }
    
} 

let $inputQuantidade = $("#inputQuantidade");

let $btnQuantidade = $("#btnQuantidade")
.click(function(){

    campoVazio($inputQuantidade);
    campoInvalido($inputQuantidade);
    //talvez colocar valor max 
    novosInputs($inputQuantidade.val());
});