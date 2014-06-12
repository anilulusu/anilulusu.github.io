var cesit = "Cesitlerimiz iste bunlardır";
var satir = "<div class='kav font-effect-anaglyph'>Kavacık!</div>";
var ana;
function renkli() {$(".tel").addClass("font-effect-anaglyph");}
function ekle() {$("#logoMado > img").after(satir); $(".kav").fadeTo(2000,0.9); $(".kav").animate({"margin-top":"-110px"}, 100, "linear"); setTimeout(renkli,2000);}
function cesitler() {$(".sak").hide();
                    $("#cerceveOrta").append(document.getElementById("baslik"));}
function home() {$("#yedek").append(document.getElementById("baslik")); $(".sak").show();}