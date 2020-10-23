// function checarIdade(idade) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (idade > 18) {
//                 resolve()
//             } else {
//                 reject()
//             }

//         },2000)
//     })
// }

// checarIdade(14)
//     .then(() => {
//         console.log('Maior que 18');
//     }).catch(() => {
//         console.log('Menor que 18');

//     });



let inputName = document.querySelector('#inputUserName')
let listRepo = document.querySelector('#list')

function userRepo(){
    let user = inputName.value.toLowerCase()
    
    axios.get(`https://api.github.com/users/${user}/repos`)
        .then((result) => {
            showList(result.data)
        }).catch((err) => {
            console.log( err);
        });

}

function showList (repositorios) {
    for (item of repositorios) {
        const eachRepo = document.createTextNode(item.name);
        const liTaf = document.createElement("li");
    
        liTaf.appendChild(eachRepo);
        listRepo.appendChild(liTaf);
      }
  
}





