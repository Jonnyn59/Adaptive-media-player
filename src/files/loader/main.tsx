import "../css/index.css"
import {build} from "../Html";
import {addChosser} from  "../ChosserBuild/main"

export function load(){
    console.log("cssLoaded")
    loadScripts()
}
export function loadScripts() {
    console.log("scriptsLoaded")
    build()
    addChosser()
}