export function addChosser(): void {
    const box = document.createElement("div") as HTMLElement;
    const page = document.getElementById("too") as HTMLElement;

    if (page) {
        box.classList.add("tro");
        page.appendChild(box);
        console.log("chosserReady");
    } else {
        console.error("Element with id 'too' not found.");
    }
}