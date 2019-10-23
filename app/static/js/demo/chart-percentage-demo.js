function getPercentage(){
    var value = 50
    document.getElementById("percentage").innerHTML = "<span style='color:red;'>"+ value + "%</span>";
    // document.getElementById("percentage-bar").innerHTML = "<div class='progress-bar bg-danger' role='progressbar' style='width: "+ value +"%' aria-valuenow='" + value + "' aria-valuemin='0' aria-valuemax='100'></div>"
    // document.getElementById("percentage-bar").innerHTML = `<div class='progress-bar bg-danger' role='progressbar' style='width: ${value}%' aria-valuenow='${value}' aria-valuemin='0' aria-valuemax='100'></div>`
    document.getElementById("percentage-bar").setAttribute("style", `width: ${value}%`);
    document.getElementById("percentage-bar").setAttribute("aria-valuenow",` ${value}`);
}

window.addEventListener('DOMContentLoaded', getPercentage);
