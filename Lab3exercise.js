// Exercise 1
function validate() {
    var pw1 = document.getElementById("password1").value;
    var pw2 = document.getElementById("password2").value;
    if (pw1 != pw2) {
        alert("The passwords entered don't match");
    } else if (pw1.length <= 8 || pw2.length <= 8) {
        alert("The passwords are not at least 8 characters long");
    } else {
        alert("Good");
    }
}

// Exercise 2
var image1 = new Image()
image1.src = "http://www.iconarchive.com/download/i91425/icons8/windows-8/Numbers-1-Black.ico"
var image2 = new Image()
image2.src = "http://atlasmetalfab.com/main/wp-content/uploads/2015/12/2.png"
var image3 = new Image()
image3.src = "http://www.clker.com/cliparts/U/4/Y/A/Y/6/number-3-button-hi.png"
var image4 = new Image()
image4.src = "http://static1.squarespace.com/static/52eff584e4b0407116225b69/t/5489f437e4b0a171f6b02543/1418327095701/"
var image5 = new Image()
image5.src = "http://simplythemag.com/dev/wp-content/uploads/2015/07/5.jpg"

var i = 1;

function preImg() {
    if (i == 1) {
        i = 5
    } else if (i > 1) {
        i--;
    }
    document.images.slide.src = eval("image" + i + ".src");
}

function nextImg() {
    if (i == 5) {
        i = 1
    } else if (i < 5) {
        i++;
    }
    document.images.slide.src = eval("image" + i + ".src");
}

// Exercise 4
function change() {
    var bR = document.getElementById("borderRed").value;
    var bG = document.getElementById("borderGreen").value;
    var bB = document.getElementById("borderBlue").value;
    var bgR = document.getElementById("backgroundRed").value;
    var bgG = document.getElementById("backgroundGreen").value;
    var bgB = document.getElementById("backgroundBlue").value;
    var bw = document.getElementById("width").value;

    document.getElementById("theTagsId").style.borderStyle = "solid";
    document.getElementById("theTagsId").style.backgroundColor = "rgb(" + bgR + ", " + bgG + ", " + bgB + ")";
    document.getElementById("theTagsId").style.borderColor = "rgb(" + bR + ", " + bG + ", " + bB + ")";
    document.getElementById("theTagsId").style.borderWidth = bw + "px";
}
