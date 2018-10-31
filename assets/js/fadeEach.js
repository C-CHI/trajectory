BIKE.TRAJECTORY.CONTENTS_DISPLAY = {
    opt : function(){
        this.delayTime = 0;
        this.fadeTime = 800;
    },

    init : function(){
        this.opt();
        this.setParamerters();
        this.fadeEach();
    },

    setParamerters : function(){
        this.$target = $('.jsc-content-link').children('li');
    },

    fadeEach : function(){
        for(var i = 0; i <= this.$target.length-1; i++){
            this.$target.eq(i).delay(this.delayTime).animate({
                'opacity': 1
            }, this.fadeTime);
            this.delayTime += 300;
        }
    }
};

$(window).on('load', function(){
    BIKE.TRAJECTORY.CONTENTS_DISPLAY.init();
});