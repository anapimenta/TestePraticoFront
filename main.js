function novosInputs(qtd){
    //seleciona area que serão adicionados os inputs 
    //limpa oq ja tiver la 

    for (let i = 0; i < qtd; i++) {
        //area.append input .inputSoma

    }
    //add botao de soma  
    //adicionar função somaInputs ao click 
}

function somaInputs(){

    let $inputs = $(".inputSoma");
  
    $inputs.each(campoVazio(element));
     
    let total = 0;

    $inputs.each(function(element){

       total+= parseInt($(element).val());
     });
    //modalResultado 

}

function campoVazio(el){
    //testa se o value é nulo 
    //lança exceção e mensagem 
} 

function modalResultado(){
    //cria um modal com o resultado 
}


let $inputQuantidade = $("#inputQuantidade");

let $btnQuantidade = $("btnQuantidade")
.click(function(){

    campoVazio($inputQuantidade);
    //talvez colocar valor max 
    novosInputs($inputQuantidade.val());
});