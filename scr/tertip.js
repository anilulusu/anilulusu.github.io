var cesit = "Cesitlerimiz iste bunlardır";
var satir = "<div class='kav font-effect-anaglyph'>Kavacık!</div>";
function renkli() {$(".tel").addClass("font-effect-anaglyph");}
function ekle() {$("#logoMado > img").after(satir); $(".kav").fadeTo(2000,0.9); $(".kav").animate({"margin-top":"-110px"}, 100, "linear"); setTimeout(renkli,2000);}

function cesitlero() {
    var sak = document.getElementsByClassName("sak"), i = sak.length;
    while(i--) {$("#yedek").append(sak[i]);
    $("#cerceveOrta").load("urun.html");}
}
function cesitler() {
    $("#yedek").append($("#cerceveOrta").contents());
    $("#cerceveOrta").load("urun.html");
}

function homeo() {
    $("#cerceveOrta").empty();
    var sak = document.getElementsByClassName("sak"), i = sak.length;
    while (i--) {$("#cerceveOrta").append(sak[i]);}
}
function home() {
    $("#cerceveOrta").empty();
    $("#cerceveOrta").append($("#yedek").contents());
}
