var vencedor = "";
var vez = 1;
var cont = 1;
var empate = 0;
var jogador = "Jogador 2";
var nomes = ["Jogador 1", "Jogador 2"]
var placar = [0,0]

nomes[0] = window.prompt("Nome do Jogador 1 (X): ")
nomes[1] = window.prompt("Nome do Jogador 2 (O): ")

if(nomes[0] == ""){
    nomes[0] = "Jogador Convidado X";
}

if(nomes[1] == ""){
    nomes[1] = "Jogador Convidado O";
}

function resetar() {
    for (cont = 1; cont <= 9; cont++) {
        let position = "div#coluna" + cont
        document.querySelector(position).innerHTML = ""
        document.getElementById("resultado-vencedor").innerHTML = "Aguardando Iniciar!"
    }
    vez = 1;
    cont = 1;
    empate = 0;
}

setCell = function (pos) {
    let position = "div#coluna" + pos
    if (vez == 1 && document.querySelector(position).innerHTML == "") {
        document.querySelector(position).innerHTML = "X"
        jogador = nomes[1]
        document.getElementById("resultado-vencedor").innerHTML = `Aguardando Jogada: ` + jogador
        vez += 1;

    } else if (vez == 2 && document.querySelector(position).innerHTML == "") {
        document.querySelector(position).innerHTML = "O"
        jogador = nomes[0]
        document.getElementById("resultado-vencedor").innerHTML = `Aguardando Jogada: ` + jogador
        vez = 1;
    }

    linhaCompleta();
    colunaCompleta();
    diagonalCompleta();
    empateCompleto();
}

empateCompleto = function () {
    for (cont = 1; cont <= 9; cont += 1) {
        let position = "div#coluna" + cont
        if (vencedor =="" && document.querySelector(position).innerHTML == "X" || document.querySelector(position).innerHTML == "O") {
            empate++;
        }

        if (empate >= 44) {
            document.getElementById("resultado-vencedor").innerHTML = `Empate!`
            empate = 0;
        }
    }
}

linhaCompleta = function () {
    cont = 1
    for (cont = 1; cont < 9; cont += 3) {
        if (document.getElementById("coluna" + cont).innerHTML == "X" && document.getElementById("coluna" + (cont + 1)).innerHTML == "X" && document.getElementById("coluna" + (cont + 2)).innerHTML == "X") {
            var vencedor = nomes[0]
            document.getElementById("resultado-vencedor").innerHTML = `O vencedor foi: ${vencedor}`
        }

        if (document.getElementById("coluna" + cont).innerHTML == "O" && document.getElementById("coluna" + (cont + 1)).innerHTML == "O" && document.getElementById("coluna" + (cont + 2)).innerHTML == "O") {
            var vencedor = nomes[01]
            document.getElementById("resultado-vencedor").innerHTML = `O vencedor foi: ${vencedor}`
        }
    }
}

colunaCompleta = function () {
    cont = 1
    for (cont = 1; cont < 5; cont += 1) {
        if (document.getElementById("coluna" + cont).innerHTML == "X" && document.getElementById("coluna" + (cont + 3)).innerHTML == "X" && document.getElementById("coluna" + (cont + 6)).innerHTML == "X") {
            var vencedor = nomes[0]
            document.getElementById("resultado-vencedor").innerHTML = `O vencedor foi: ${vencedor}`
        }

        if (document.getElementById("coluna" + cont).innerHTML == "O" && document.getElementById("coluna" + (cont + 3)).innerHTML == "O" && document.getElementById("coluna" + (cont + 6)).innerHTML == "O") {
            var vencedor = nomes[1]
            document.getElementById("resultado-vencedor").innerHTML = `O vencedor foi: ${vencedor}`
        }
    }
}

diagonalCompleta = function () {
    cont = 1
    if (document.getElementById("coluna1").innerHTML == "X" && document.getElementById("coluna5").innerHTML == "X" && document.getElementById("coluna9").innerHTML == "X" ||
        document.getElementById("coluna3").innerHTML == "X" && document.getElementById("coluna5").innerHTML == "X" && document.getElementById("coluna7").innerHTML == "X") {
        var vencedor = nomes[0]
        document.getElementById("resultado-vencedor").innerHTML = `O vencedor foi: ${vencedor}`
    }
    if (document.getElementById("coluna1").innerHTML == "O" && document.getElementById("coluna5").innerHTML == "O" && document.getElementById("coluna9").innerHTML == "O" ||
        document.getElementById("coluna3").innerHTML == "O" && document.getElementById("coluna5").innerHTML == "O" && document.getElementById("coluna7").innerHTML == "O") {
        var vencedor = nomes[1]
        document.getElementById("resultado-vencedor").innerHTML = `O vencedor foi: ${vencedor}`
    }
}