var cesit = "Cesitlerimiz iste bunlardır";
var satir = "<div class='kav font-effect-anaglyph'>Kavacık!</div>";
function renkli() {
    $(".tel").addClass("font-effect-anaglyph");
}
function ekle() {
    $("#logoMado > img").after(satir); $(".kav").fadeTo(2000,0.9); $(".kav").animate({"margin-top":"-110px"}, 100, "linear"); setTimeout(renkli,2000);
}
function cesitler() {
    $("#yedek").append($("#cerceveOrta").contents());
    $("#cerceveOrta").load("urun.html");
}

function home() {
    var isim = $("#yedek > div:first").attr("class");
    if(isim == "sak") {
    $("#cerceveOrta").empty();
    $("#cerceveOrta").append($("#yedek").contents());
    } 
}
