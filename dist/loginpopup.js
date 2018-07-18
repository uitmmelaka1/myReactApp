
var modal = document.getElementById('myModal');
var btn   = document.getElementById("myBtn1");
var span  = document.getElementsByClassName("close")[0];

btn.onClick = function() {
    modal.style.display = "block";
}

span.onClick = function() {
    modal.style.display = "none";
}

window.onClick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
