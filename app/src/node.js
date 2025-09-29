const container = document.querySelector(".content");



let images = ["./mell_1.jpg", "./mell_2.jpg", "./mell_3.jpg"]

let html = "";
setInterval(() => {
    let randImage = Math.floor(Math.random() * images.length)
    html += `<img src="${images[randImage]}" alt="images">`;
    container.innerHTML = html;
}, 300);
