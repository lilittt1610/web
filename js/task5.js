const image_1 = document.querySelector("#image_1")
const image_2 = document.querySelector("#image_2")
const image_3 = document.querySelector("#image_3")
const image_4 = document.querySelector("#image_4")
const image_5 = document.querySelector("#image_5")
const bigImage = document.querySelector("#big-image")

image_1.addEventListener("click", () => {
    bigImage.src = image_1.src
})
image_2.addEventListener("click", () => {
    bigImage.src = image_2.src
})
image_3.addEventListener("click", () => {
    bigImage.src = image_3.src
})
image_4.addEventListener("click", () => {
    bigImage.src = image_4.src
})
image_5.addEventListener("click", () => {
    bigImage.src = image_5.src
})