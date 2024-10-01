const comando  = prompt("Informe o comando para a lampada (ligar/desligar")

const elementoImagem = document.createElement("img")


switch (comando.toLocaleLowerCase) {
    case "ligar":
        elementoImagem.src = "./"
        break;
    case "desligar":
        
        break;
    default:
        break;
}

if (elementoImagem.src != null) {
    document.body.appendChild(elementoImagem)
}