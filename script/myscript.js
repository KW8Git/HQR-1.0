$(document).ready(function(){
    $("header .logo_container .lhr").show().addClass("animated slideInLeft");
    $("header .logo_container .rhr").show().addClass("animated slideInRight");
    $("header .logo_container .logo").show().addClass("animated zoomInDown");
    $("#main .content h2").delay(3000).show(3000);
    $("#main .content p").delay(3000).show(3000);
})