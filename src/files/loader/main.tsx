import "../css/index.css"
import {build} from "../Html";

export function load(){
    console.log("cssLoaded")
    loadScripts()
}
export function loadScripts() {
    console.log("scriptsLoaded")
    build()
}