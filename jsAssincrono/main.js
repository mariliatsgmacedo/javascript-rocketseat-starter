//Requisição AJAX

    // var xhr = new XMLHttpRequest()
    // xhr.open('GET', 'https://api.github.com/users/mariliatsgmacedo')
    // xhr.send(null)

    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4) {
    //         console.log(JSON.parse(xhr.responseText));
    //     }
    // }

//Promises

    // var minhaPromise = function () {
    //     return new Promise((resolve, reject) => {
    //         var xhr = new XMLHttpRequest()
    //         xhr.open('GET', 'https://api.github.com/users/mariliatsgmacedo')
    //         xhr.send(null)

    //         xhr.onreadystatechange = function () {
    //             if (xhr.readyState === 4) {
    //                 if (xhr.status === 200) {
    //                     resolve(JSON.parse(xhr.responseText))
    //                 } else {
    //                     reject('Erro na requisição.')
    //                 }
    //             }
    //         }
    //     })
    // }

    // minhaPromise()
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((error) => {
    //         console.warn(error);
    //     })


//AXIOS

axios.get('https://api.github.com/users/mariliatsgmacedo')
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.warn(error);
    })