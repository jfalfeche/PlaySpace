$(function(){
    boxRollovers();
    fog();
});

function boxRollovers()
{
    $selector = $("body");
    XAngle = 0;
    YAngle = 0;
    Z = 0; // zoom
    
    $selector.on("mousemove",function(e){
        var $this = $(this);
        var XRel = e.pageX - $this.offset().left;
        var YRel = e.pageY - $this.offset().top;
        var width = $this.width();
    
        YAngle = (0.5 - (XRel / width)) * 5; 
        XAngle = -(0.5 - (YRel / width)) * 5;
        updateView($this.children("div"));
    });
    
    $selector.on("mouseleave",function(){
        oLayer = $(this).children("div");
        oLayer.css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
        oLayer.find("img").css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
    });
}

function updateView(oLayer)
{
    oLayer.css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
    oLayer.find(".bg").css({"transform":"perspective(1525px) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
    oLayer.find(".fog0").css({"transform":"perspective(0) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
    oLayer.find(".fog1").css({"transform":"perspective(0) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
    oLayer.find(".fog2").css({"transform":"perspective(0) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
}

function fog()
{
    var w = 0;
    setInterval(function(){
        w-=1;
        $('.fog').css('background-position', w + 'px 0');
    }, 80);

    var w1 = 0;
    setInterval(function(){
        w1-=1;
        $('.fog_f1').css('background-position', w1 + 'px 0');
    }, 50);

    var x = 0;
    setInterval(function(){
        x-=1;
        $('.fog0').css('background-position', x + 'px 0');
    }, 15);

    var y = 0;
    setInterval(function(){
        y+=1;
        $('.fog1').css('background-position', y + 'px 0');
    }, 10);

    var z = 0;
    setInterval(function(){
        z-=1;
        $('.fog2').css('background-position', z + 'px 0');
    }, 30);
}