
let counter = 0;

function changeCount() {
    counter += +1;
    document.getElementById("counter").innerHTML = Math.max(counter);
};



let counter1 =0;
function change() {
    counter1 += -1;
    document.getElementById("counter").innerHTML = Math.min(counter1);
};