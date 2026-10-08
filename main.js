let inp = document.querySelector("input")
let btn = document.querySelector("button")
let items = document.querySelector(".items")

let gunluk = JSON.parse(localStorage.getItem("todo")) || []

function elaveEt(yazi) {
    let newDiv = document.createElement("div")
    let span = document.createElement("span")
    let silBtn = document.createElement("button")

    span.innerText = yazi
    silBtn.innerText = "Sil"

    silBtn.addEventListener("click", () => {
        newDiv.remove()
        let index = gunluk.indexOf(yazi)
        gunluk.splice(index, 1)
        localStorage.setItem("todo", JSON.stringify(gunluk))
    })

    newDiv.append(span, silBtn)
    items.append(newDiv)
}

gunluk.forEach(element => {
    elaveEt(element)
})

btn.addEventListener("click", () => {
    let inpValue = inp.value
    if (inpValue == "") {
        inp.placeholder = "doldurun!"
        inp.classList.add("addinp")
        setTimeout(() => {
            inp.placeholder = "edilecekler!"
            inp.classList.remove("addinp")
        }, 2000)
    } else {
        gunluk.push(inpValue)
        localStorage.setItem("todo", JSON.stringify(gunluk))
        elaveEt(inpValue)
        inp.value = ""
    }
})