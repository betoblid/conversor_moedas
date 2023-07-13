//pegando o valor do input do form
let valor_monetario = document.getElementById("moeda");
//funçoes do formulario
let btn_calcular = document.getElementById("enviar");
let btn_limpar = document.getElementById("limpar")
//resultado pro usuario
let text_resultado = document.getElementById("resu")
//mensagem up 
let card_mensagem = document.getElementById("container_alert");
let text_mensagem = document.getElementById("mensagem")
let btn_fechar_mensagem = document.getElementById("btn_fechar_msg");
let MENSAGEM_USUARIO = "";
//chamando o pop para passar mensagem para o usuario
MENSAGEM_USUARIO = "Seja bem vindo"
chama_pop(MENSAGEM_USUARIO)
/*esse evento sera responsavel por fazer todo o processo de 
calcular e passar para o usuario o resultado e previnir o envio do form*/
btn_calcular.addEventListener("click", function (event){

    //não deixar que o formulario recarregue
    event.preventDefault()

    //validar para passar resultado
    validar()
})

//validar o input number caso de numeros negativos ou
//numeros invalidos
function validar(){

    if(valor_monetario.value <= 0){
        MENSAGEM_USUARIO = "Digite um numero maior que 0";
        chama_pop(MENSAGEM_USUARIO)
    }else{
        converter(valor_monetario.value)
    }
}

//fuction responsavel por fazer a converção e passar para o Dom função chamada
//apos aperta o botão calcular
function converter(quantidades){

    //pegar o value do radio onde sera escolida a moeda que deseja converter
    let moedas = document.querySelector("input[name='moeda']:checked").value
    
    //parte usada para calcular
    let valores = {dola: 4.81, euro: 5.30, libra: 6.00, bitcoin: 148.100}

    switch(Number(moedas)){

        case 1:
            let total_dola =  quantidades / valores.dola ;
            text_resultado.innerHTML = `<p>valor deu ${total_dola.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})}</p>`;
            break;
        case 2:
            let total_euro =  quantidades / valores.euro ;
            text_resultado.innerHTML = `<p>valor deu ${total_euro.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'})}</p>`;
            break;
        case 3:
            let total_libra =  quantidades / valores.libra ;
            text_resultado.innerHTML = `<p>valor deu ${total_libra.toLocaleString('pt-br', {style: 'currency', currency: 'GBP'})}</p>`;
            break;
        case 4:
            let total_bitcoin =  quantidades / valores.bitcoin ;
            text_resultado.innerHTML = `<p>valor deu ${total_bitcoin.toLocaleString('pt-br', {style: 'currency', currency: 'USD'})}</p>`;
            break;
        default:
            MENSAGEM_USUARIO = "digite numeros inteiros aparti de 1"
            chama_pop(MENSAGEM_USUARIO)
            break;
    }
    text_resultado.classList.add("resu")
}

//fechar o pop da mensagem
btn_fechar_mensagem.addEventListener("click", function (){
    card_mensagem.classList.add("hidden");
})

//chamar o pop da mensagem para mostrar mensagem ao usuario
//sempre que chamar O POP deverar passar uma mensagem na variavel de suport chamada MENSAGEM_USUARIO
function chama_pop(mensagem){
    //passar a mensagem para o usuario
    text_mensagem.innerHTML = `<p> ${MENSAGEM_USUARIO}</p>`;
    //deixara visivel o pop para mostra a mensagem
    card_mensagem.classList.remove("hidden")
    //fecharar o pop apos 4s
    setTimeout(() => {
        card_mensagem.classList.add("hidden")
    },4000);
}

//colocando mas funcionalidades no botão limpar

btn_limpar.addEventListener("click", function(){

    text_resultado.classList.remove("resu")
    text_resultado.textContent = ""
})