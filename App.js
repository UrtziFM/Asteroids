window.gui = new Gui();

window.onload = function() {
    console.log("loading...");
}
window.onresize = function() {
    console.log("resizing...");
    window.gui.resize();
}