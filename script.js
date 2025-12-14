// concept of throttling - reduce the number of function executions

const throttleFunction = (func, delay) => {
    let prev = 0;
    return(...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    };
};

const mainDiv = document.querySelector(".main")
// throttleFunction will be run when mousemove on centerDiv in between the delay of 400 
const centerDiv = document.querySelector(".center");
centerDiv.addEventListener("mousemove", throttleFunction((el) => {
// less repeated code (the element we want to create on mouse move)
   var div = document.createElement("div");
   div.classList.add("card")

   var img = document.createElement("img")
   img.setAttribute("src", "https://i.pinimg.com/1200x/e9/e7/9c/e9e79ca4e809255eb48e2fa43bc69637.jpg")
   div.appendChild(img)

   div.style.left = el.clientX +'px';
   div.style.top = el.clientY +'px';

   mainDiv.appendChild(div)
   setTimeout(function() {
    div.remove();
   }, 2000)

}, 400)
);
