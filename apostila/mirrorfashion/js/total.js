var $input_quantidade = document.querySelector("#qtd");
var $output_total = document.querySelector("#total");

$input_quantidade.oninput = function(){
    var preco = document.querySelector("#preco").textContent;
    preco = preco.replace("R$ ", "");
    preco = preco.replace(",", ".");
    preco = parseFloat(preco);

    var quantidade = $input_quantidade.value;
    var total = quantidade *preco;
    total = "R$ " + total.toFixed (2)
    total = total.replace(".", ",");

    $output_total.value = total;
}

var palavras = 0
for (let i = 0; i < palavras.length; i++) {
    alert(palavras[i]);
}

function soma(x, y) {
    return x+y
}

console.log(soma(10,10))