function q (sel) {
    return document.querySelector(sel)
}

function qs (sel) {
    return document.querySelectorAll(sel)
}

document.addEventListener('DOMContentLoaded', function () {
    q('form').addEventListener('submit', function (event) {
        event.preventDefault()
        const searchTerm = q('#artist-name').value
        const url = `https://itunes-api-proxy.glitch.me/search?term=${encodeURIComponent(searchTerm)}`
    
        fetch(url)
            .then(response => response.json())
            .then(function (data) {
                
            })
    })
})



// document.querySelector('#form1').addEventListener('click', function() {
//     userInput = document.querySelector('#artist').value
//     urlBase = "https://itunes-api-proxy.glitch.me/search?term="
//     urlBase += encodeURIComponent(userInput)
//     fetch(urlBase)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
        
//         let songDiv = document.createElement('div')
//         songDiv.innerHTML = <p>${data.results[0].trackname)</p>
//         document.querySelector('#results').appendChild(songDiv)
//     })
// })