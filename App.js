window.gui = new Gui();

window.onload = function() {
    console.log("Loading...");
}
window.onresize = function() {
    console.log("Resizing...");
    window.gui.resize();
}