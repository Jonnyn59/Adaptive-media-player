export function addChosser() {
    let box = document.createElement("div") as HTMLElement
    let page = document.getElementById("too") as HTMLElement
    box.classList.add("tro");
    page.appendChild(box);
    console.log("chosserReady");
}