// Declaração da função que vai ser executada no evento onload do body.
function start() {
    // Cria a div:
    let div = document.createElement("div");
    // Insere a div no body:
    document.body.appendChild(div);

    // Uma repetição pra criar os inputs de texto e labels:
    for (let index = 0; index < 3; index++) {
        // Cria o elemento input
        let input = document.createElement("input");
        // Define que o input vai ser do tipo numérico
        input.type = "number";
        // Seta o id. Cada input vai ter um id único usando o índice da repetição.
        // O parseInt é usado aqui para o valor não ser tratado como string e concatenado.
        input.id = "lado" + parseInt(index + 1);
        // Seta o nome. Cada input vai ter um nome único usando o índice da repetição.
        // O parseInt é usado aqui para o valor não ser tratado como string e concatenado.
        input.name = "lado" + parseInt(index + 1);

        // Cria o elemento label
        let label = document.createElement("label");
        // Define para qual input o label é. Usa o elemento criado anteriormente.
        label.for = input.name;
        // Define o conteúdo do label.
        label.innerHTML = "Lado " + parseInt(index + 1);

        // Adiciona os elementos criados à div principal.
        div.appendChild(label);
        div.appendChild(input);
    }

    // Cria o botão que vai realizar o cálculo:
    let botao = document.createElement("button");
    // Define o conteúdo que o botão vai exibir:
    botao.innerHTML = "Identificar"
    // Define o comportamento do evento onclick:
    botao.setAttribute("onclick", "identificaTriangulo();");
    // Adicinoa o elemento criado à div principal:
    div.appendChild(botao);
}

function identificaTriangulo() {
    // Recupera os conteúdos dos inputs para o cálculo.
    let lado1 = parseInt(document.querySelector("#lado1").value);
    let lado2 = parseInt(document.querySelector("#lado2").value);
    let lado3 = parseInt(document.querySelector("#lado3").value);

    // Checa se todos os valores foram informados corretamente.
    if (!lado1 || !lado2 || !lado3 || lado1 < 1 || lado2 < 1 || lado3 < 1) {
        alert("Informe todos os lados!");
        return;
    }

    // Checa se os valores informados formam um triângulo.
    if ((lado1 + lado2 < lado3) || (lado1 + lado3 < lado2) || (lado2 + lado3 < lado1) ) {
        alert("Os valores informados não formam um triângulo!");
        return;
    }

    // Cria a mensagem de retorno.
    let message = "O triângulo é ";

    // Se todos os lados são iguais, equilátero.
    if ((lado1 == lado2) && 
        (lado1 == lado3)) {
        message += "equilátero";
    } else 
    // Se apenas dois lados são iguais, isósceles.
    if ((lado1 == lado2) && (lado1 != lado3) ||
        (lado1 == lado3) && (lado1 != lado2) ||
        (lado2 == lado3) && (lado2 != lado1)) {
        message += "isóceles";
    } else 
    // Se não é nenhum dos dois, é escaleno
    {
        message += "escaleno";
    }

    // Exibe o resultado para o usuário em um alerta.
    alert(message);
}