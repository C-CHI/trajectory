var BIKE = BIKE || {};

BIKE.TRAJECTORY = {};

BIKE.TRAJECTORY.WINDOW_RESIZE = {
    opt : function(){
        this.$window = $(window);
    },

    init : function(){
        this.opt();
        this.setParamerters();
        this.bindEvent();
        this.alignKeyvisual();
    },

    setParamerters : function(){
        this.$key = $('.keyvisual');
    },

    bindEvent : function(){
        this.$window.on('resize', this.alignKeyvisual.bind(this));
    },

    alignKeyvisual : function(){
        if(this.$window.width() <= 2050){
            this.$key.css({'left': (this.$key.width() - this.$window.width()) / 2 * -1});
        }
    }
};

$(window).on('load',function(){
    BIKE.TRAJECTORY.WINDOW_RESIZE.init();
});