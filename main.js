var index = 0;

function hel(){
    var colors = ["red","blue","black","yellow","gray","pink","purple"];
    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if(index > colors.lenght -1)
        index = 0;
}