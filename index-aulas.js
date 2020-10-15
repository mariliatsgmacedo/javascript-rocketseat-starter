/** Variáveis */

var nome = "Tamiles"
var idade = 33
var peso = 65.5
var humano = true

var alunos = ['Tamiles', 'Jeferson', 'Mr.White']

var aluno = {
    nome: alunos[2],
    idade: 2,
    peso: 2.5,
    humano: false
}

console.log(alunos[1]);
console.log(aluno.nome);

/** Operações Matemáticas */

var x = 10, y = 5

x += 3

var resultado = x + y

console.log(x)
console.log(resultado)


/**Funções */

function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(1, 2));

/**Condicionais */

//IF-ELSE
function retornarSexo(sexo) {
    if (sexo === 'M' || sexo === 'm') {
        return 'Masculino'
    } else if (sexo === 'F' || sexo === 'f') {
        return 'Feminino'
    } else {
        return 'Outro'
    }
}

console.log(retornarSexo('f'));

//SWITCH-CASE
function serHumano(valor) {
    switch (valor) {
        case 'S':
            return 'É um ser humano.'
        case 'N':
            return 'Não é um ser humano. '

        default:
            return 'Um android? Um Et? Um animal?'
            break;
    }
}

console.log(serHumano('jsjsj'));

//OPERADORES LÓGICOS AND-OR-NOT

var idade = 18
var sexo = 'M'

if (idade > 18 && sexo === 'M') {
    console.log('É maior e homem');
}
if (idade > 18 || sexo === 'M') {
    console.log('É maior ou homem');
}

var sexo = 'M'
var masculino = sexo === 'M'

console.log(masculino)

//OPERADOR TERNÁRIO

var genero = 'F'

var retorno = (genero === 'F') ? 'Feminino' : 'Masculino'

console.log(retorno)

//ESTRUTURA DE REPETIÇÃO - FOR(Quando se sabe o tamanho ou frequencia do fluxo) - WHILE(Quando não souber o conteudo)

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var j = 21934

while (j > 100) {

    console.log(j);
    j /= 5
}

//INTERVALO E TIMEOUT

function exibeAlgo(){
    console.log('Hello World')
}

setInterval(exibeAlgo,1000)
setTimeout(exibeAlgo,5000) //Executa após 5 segundos



