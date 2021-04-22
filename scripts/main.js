
//Populando selects
var selectEstado = document.querySelector("#estado");
var selectTipo = document.querySelector("#tipo");
var selectEscala = document.querySelector("#escala");

var estados = ["Acre","Alagoas","Amazonas","Amapá","Bahia","Ceará","Distrito Federal",
"Espírito Santo","Goiás","Maranhão","Minas Gerais","Mato Grosso do Sul","Mato Grosso",
"Pará","Paraíba","Pernambuco","Piauí","Paraná","Rio de Janeiro","Rio Grande do Norte",
"Rondônia","Roraima","Rio Grande do Sul","Santa Catarina","Sergipe","São Paulo","Tocantins"];

var tipos = ["Vendedor","Gerente","Programador","Técnico"];

var escala = ["Padrão","5×1","5×2","6×1"];

function populateSelect(component, array){ 
  for (let i = 0; i < array.length; i++) {
    var item = document.createElement('option');
    item.setAttribute('value',`state${i}`);

    var state = document.createTextNode(array[i]);

    item.appendChild(state);
    component.appendChild(item);
  }
}

populateSelect(selectEstado, estados);
populateSelect(selectTipo, tipos);
populateSelect(selectEscala, escala);

//

function salvarForm(){
  if(document.querySelector('form').checkValidity()){
    alert('Dados salvos com sucesso!')
  }
}

//

if(selectTipo.value == "VenVendedor"){
  document.querySelector('#percentualDiv').style.display = 'flex';
}

//Verifica se o tipo é vendedor, caso for abre a opção de habilitar percentual de comissão
function alteraTipo(){
  if(selectTipo.value == "state0"){
    document.querySelector('#percentualDiv').style.display = 'flex';
  }else{
    document.querySelector('#percentualDiv').style.display = 'none';
  }
}

//Switch de habilita ou desativar comissão
function switchPerc(){
  if(document.querySelector('#on').checked){
    document.querySelector('#percentual input').disabled = false;
  }else{
    document.querySelector('#percentual input').disabled = true;
  }
} 

//Resetando cartão de ponto

var modal = document.querySelector('#modalReset');
function resetTimeCardModal(){
  if(modal.style.display === 'none'){
    modal.style.display = 'flex';
  }else{
    modal.style.display = 'none';
  }
}

function resetTimeCard(){
  alert('Senha do cartão de ponto resetada!');
  resetTimeCardModal();
}
