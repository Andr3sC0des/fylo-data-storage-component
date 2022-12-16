const bar = document.querySelector("#bar")
const storage = document.querySelector(".fylo__text span")
const left = document.querySelector(".fylo__left h2")

left.innerText = `${1000 - bar.value}`
storage.innerHTML = `${bar.value} GB`

bar.oninput = () => {
    left.innerText = `${1000 - bar.value}`
    storage.innerHTML = `${bar.value} GB`
}


