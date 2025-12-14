const centerDiv = document.querySelector(".center")

centerDiv.addEventListener("mousemove", (para) => {
    console.log(para.clientX, para.clientY)
})