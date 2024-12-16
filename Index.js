function pick(val) {
    document.getElementById("see").value += val;
}
function solve() {
    var x = document.getElementById("see").value;
    var y = eval(x);
    document.getElementById("see").value = y;
}
function cl() {
    document.getElementById("see").value = "";
}
