(function(){
    if(!window.jQuery){
        console.error("jQuery is not defined!!!");
    }else{
        $(document).on('scroll', function(){
            var height = window.innerHeight;
            if(!height){
                var mode = document.compatMode;
                if(mode){
                    height = (mode === "CSS1Compat" ? document.documentElement : document.body).clientHeight();
                }
            }
            $(".feature section, #rule, #conclusion").each(function(){
                if($(window).scrollTop() + height * 6 / 7 > $(this).offset().top && $(this).css("opacity") == 0){
                    $(this).animate({
                        opacity: 1,
                    }, {
                        duration: 400,
                        step: function(now, fx){
                            $(fx.elem).css('transform', 'translateX(' + (now - 1) * 10 + '%)');
                        }
                    });
                }
            });
        });
        $(document).ready(function(){
            $(".feature section, #rule, #conclusion").each(function(){
                $(this).css('opacity', 0).css('transform', 'translateX(-10%)');
            });
        });
        $("body").fadeIn();
    }
})();
