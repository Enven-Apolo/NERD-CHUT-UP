//escreva o nome da função. Essa função é chamada quando o botão 'login' é clicado
function addUser() {
    //escreva o nome da variável que guardará o nome dos jogadores
   GuardarUser1 = document.getElementById("player1_name_input").value;
   GuardarUser2 = document.getElementById("player2_name_input").value;
   //escreva essa variável para que ela seja mostrada no localStorage do navegador
      localStorage.setItem("GuardarUser1", GuardarUser1);
      localStorage.setItem("GuardarUser2", GuardarUser2);
  //escreva o nome da tela que você deseja mostrar quando o botão for clicado
      window.location = "tela2.html";
  }
  