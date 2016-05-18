$(document).ready(function(){
    $("header .logo_container .lhr").show().addClass("animated slideInLeft");
    $("header .logo_container .rhr").show().addClass("animated slideInRight");
    $("header .logo_container .logo").show().addClass("animated zoomInDown");
    $("#main .content h2").delay(3000).show(3000);
    $("#main .content p").delay(3000).show(3000);
    
    /*判断浏览器类型*/
    var browerType = window.navigator.userAgent.indexOf("Chrome") !== -1;
    if(browerType){
    	/*显示img*/
    	$(".big_bg_img img").show();
    }else{
    	    /*添加brower-noChrome*/
   		$("#big_container").addClass("brower-noChrome");
    }
})