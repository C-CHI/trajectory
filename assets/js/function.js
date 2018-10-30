var BIKE = BIKE || {};

BIKE.TRAJECTORY = {};

BIKE.TRAJECTORY.MAXHEIGHT_BG = {
    opt : function(){
        this.$window = $(window);
    },

    init : function(){
        this.opt();
        this.setParamerters();
        this.bindEvent();
        this.extendHeight();
    },

    setParamerters : function(){
        this.$contents = $('.jsc-contents-wrapper');
    },

    bindEvent(){
        this.$window.on('resize', this.extendHeight.bind(this));
    },

    extendHeight : function(){
        var maxHeight = this.$window.height();

        if(this.$contents.outerHeight() < maxHeight ){
            this.$contents.css({
                'height': maxHeight
            });
        }
    }
};

$(window).on('load',function(){
    BIKE.TRAJECTORY.MAXHEIGHT_BG.init();
});