function novosInputs(qtd){

    let $somaContainer = $("#somaContainer").empty(); 


    for (let i = 0; i < qtd; i++) {

        $somaContainer.append(
            '<input type="number" class="inputSoma"> '
        )

    }

    $somaContainer.append(
        '<p id="mostraResultado"><a href="#resultado" rel="modal:open">Open Modal</a></p>'
    )
    
    $("#mostraResultado").click(function(){
        console.log("click");
        calculaResultado();
    });
    //adiciona  função somaInputs ao click 
}

function calculaResultado(){

    let $inputs = $(".inputSoma");
  
    // $inputs.each(campoVazio(this));
     
    let total = 0;

    $inputs.each(function(){

        console.log(
            $(this).val(), total
        )
       total+= parseInt($(this).val());
     });

    //Adiciona resultado no modal
    $("#resultado").html("<p> Resultado da Soma:" + total + "</p>")

}

function campoVazio(el){
    //testa se o value é nulo 
    //lança exceção e mensagem 
} 


let $inputQuantidade = $("#inputQuantidade");

let $btnQuantidade = $("#btnQuantidade")
.click(function(){

    campoVazio($inputQuantidade);
    //talvez colocar valor max 
    novosInputs($inputQuantidade.val());
});