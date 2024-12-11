document.getElementById("register").addEventListener("click", function () {
    let titre = document.getElementById("titre").value
    let text = document.getElementById("txt").value
    if (titre != "" & text != "")
        document.getElementById("post-it").innerHTML += `<div class="post-it"><button class="close" onclick="supprimer(this)"></button><h1 id="titres">${titre}</h1><p>${text}</p></div>`
})
document.getElementById("cancell").addEventListener("click", function () {
    document.getElementById("titre").value = ""
    document.getElementById("txt").value = ""
})
function supprimer(el) {
    el.parentElement.remove()
}