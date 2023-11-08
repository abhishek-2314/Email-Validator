const button = document.querySelector('.btn')
const res = document.querySelector('.result-content')

button.addEventListener('click', async (e) => {
    e.preventDefault()
    res.innerHTML = `<img src="img/loading.svg" width="100px" alt="loading">`

    const key = 'ema_live_vU9FJKwDHSUpfhSxXiYBc38ZISIClD9Icj88D7fN'
    const email = document.querySelector('#inputMail').value

    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    try {
        let response = await fetch(url)
        if (!response.ok) {
            throw ("Invalid email");
        }
        let result = await response.json();

        let str = ""
        for (let key of Object.keys(result)) {
            if (result[key] !== "") {
                str += `<div>${key} : ${result[key]}</div>`
            }
        }

        res.innerHTML = str;
    } catch (error) {
        res.innerHTML = error;
    }
    
})