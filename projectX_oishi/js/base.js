$(window).load(function(){
    $("#loading").fadeOut(1000);
    });
    $(function(){
        $(".s_menu").click(function(){
            $("#mainnavi").fadeToggle();
            $(this).toggleClass("select");
        });
    });
    
    $(function(){
        $('a[href^=#]').click(function(){
            var speed = 500;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
    });
    
    $(function(){
        var retinaCheck = window.devicePixelRatio;
        if(retinaCheck >= 2) { // Retina繝�ぅ繧ｹ繝励Ξ繧､縺ｮ縺ｨ縺阪ｒ蛻�ｲ舌＆縺帙※縺�ｋ
            $('img.retina').each( function() {
                var retinaimg = $(this).attr('src').replace(/\.(?=(?:png|jpg|jpeg)$)/i, '@2x.');
                $(this).attr('srcset', retinaimg + " 2x");
            });
        }
    });
    
    if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
     $('body').on("mousewheel", function () {
     event.preventDefault();
     var wd = event.wheelDelta;
     var csp = window.pageYOffset;
     window.scrollTo(0, csp - wd);
     });
     }
     
      $(window).load(function(){
        $('.photo_carousel').carouFredSel({
            circular:true,
            width: '100%',
            height: '100%',
            items: {
            visible: 13,
            start: 0
            },
            scroll: {
            items: 1,
            duration:3000,
            timeoutDuration:1000,
            easing: 'easeInOutQuint'
            }
        });
    });