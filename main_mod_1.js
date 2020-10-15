/** 1º Exercício */
function datas() {

    var address = {
        street: "Rua Inicial",
        number: 123,
        neighborhood: "Centro",
        city: "Ao Redor",
        uf: "AR"
    }

    return `O usuário mora em ${address.city} / ${address.uf}, no bairro ${address.neighborhood}, na rua "${address.street}" com nº ${address.number}`
}

//console.log(datas())

/**2º Exercício */

function pares(x, y) {

    while (x < y) {
        if (x % 2 === 0) {
            console.log(x)
        }
        x++
    }

}

//pares(32, 321)

/**3º Exercício */

var skills = ['Javascript', 'ReactJS', 'React Native']

function temHabilidade(skills) {

    return (((skills.indexOf('Javascript')) !== -1) ? true : false)

}

//console.log(temHabilidade(skills))

/**4º Exercício */
/**
 * -> 0-1 ano: Iniciante
 * -> 1-3 anos: Intermediário
 * -> 3-6 anos: Avançado
 * -> 7 acima: Jedi Master
 */

function experiencia(anos) {

    if (anos >= 0 && anos <= 1) {
        console.log('Iniciante')

    } else if (anos > 1 && anos <= 3) {
        console.log('Intermediário')

    } else if (anos > 3 && anos <= 6) {
        console.log('Avançado')

    } else {
        console.log('Jedi Master')

    }
}

var anosEstudos = 7
//experiencia(anosEstudos)

/**5º Exercício */


function estudante() {

    var usuarios = [
        {
            nome: "Diego",
            habilidades: ["Javascript", "ReactJS", "Redux"]
        },
        {
            nome: "Gabriel",
            habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
        }
    ]

    for (const elemento of usuarios) {

        console.log(` O ${elemento.nome} possui as habilidades: ${elemento.habilidades}`)
    }

    return usuarios.join()


}

//estudante()






