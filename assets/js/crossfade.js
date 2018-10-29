BIKE.TRAJECTORY.CROSSFADE = {
    opt : function(){
        this.crossTime = 6000;
        this.fadeTime = 1500;
    },

    init : function(){
        this.opt();
        this.setParamerters();
        this.bindEvent();
        this.loadFirstImage();
    },

    setParamerters : function(){
        this.$key_wrap = $('.keyvisual-wrap');
        this.$key_image = this.$key_wrap.children('li');
        this.index = 0;
    },

    bindEvent : function(){
        var myself = this;

        setInterval(function(){
            myself.crossImage();
        },  this.crossTime);
    },

    loadFirstImage : function(){
        this.$key_image.eq(this.index).fadeIn(this.fadeTime);
        this.index++;
    },

    crossImage : function(){
        var myself = this;

        this.$key_image.eq(this.index).fadeIn(this.fadeTime,function(){
            myself.$key_image.eq(myself.index-1).fadeOut(this.fadeTime);

            if(myself.index < myself.$key_image.length-1){
                myself.index++;
            }
            else {
                myself.index = 0;
            }

        });
    }
};

$(window).on('load',function(){
    BIKE.TRAJECTORY.CROSSFADE.init();
});