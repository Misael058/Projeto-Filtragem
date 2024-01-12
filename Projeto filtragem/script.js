let input = document.getElementById("filter"); //pegando o filter que ta no input no html
let card= document.querySelectorAll(".cards li"); //pegando os li de cada cards classe 



input.addEventListener('input', filtragem) //coloacando eventon input no input selecionado a cima 
function filtragem() {

  if (input.value !== " ") { //pegando o valor inserindo do input e dizendo se ele for ao contrario de vazio, execute o codigo
     for (let escolher of card ) { //fazendo um loop pra selecionar cada caerd
        let titulo = escolher.querySelector("h2"); //pegando cada h2 do cards 
        let titulos= titulo.textContent.toLowerCase(); //transformando os titulos em letras minusculas
        let textFilter = input.value.toLowerCase();

        if (!titulos.includes(textFilter)) { // fazendo if e colando se titulo do card  nao for o mesmo que a letra digitada no input , card fica invisivel!
            escolher.style.display="none";

        }else {
            escolher.style.display="block"; //Se não, o card aparece. e uma menira de filtrar facilmente os card

        }
        
     }
    
  }
  else {

  }



}