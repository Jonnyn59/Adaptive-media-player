import "../css/index.css";
import { build } from "../Html";
import { addChosser } from "../ChosserBuild/main";

/**
 * Initializes the application by loading CSS and scripts.
 */
export function load() {
  console.log("CSS loaded");
  loadScripts();
}

/**
 * Loads and executes scripts required for the application.
 */
export function loadScripts() {
  console.log("Scripts loaded");
  build();
  addChosser();
}