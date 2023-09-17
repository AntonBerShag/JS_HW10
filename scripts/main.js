let range = document.querySelector(".slider");
var redEl = document.getElementById("redSquare");
var blueEl = document.getElementById("blueSquare");

range.oninput = function () { 
    const sliderValue = parseInt(range.value);

    document.body.style.backgroundColor = `rgb(${sliderValue * 2.55}, ${100 - sliderValue * 2.55}, 50)`;

    var rX=redEl.style.right = (+this.value) + '0' + 'px';   
    var bX=blueEl.style.left = (+this.value) + '0' + 'px';
 }


