BIKE.TRAJECTORY.ACCORDION = {
    opt : function(){
        this.$window = $(window);
    },

    init : function(){
        this.opt();
        this.setParamerters();
        this.bindEvent();
    },

    setParamerters : function(){
        this.$trigger = $('.album-link').children('a');
        this.$contents = $('.album-nav');
    },

    bindEvent : function(){
        var myself = this;

        this.$trigger.on('mouseover', this.showContents.bind(this));
        this.$window.on('click', this.hideContents.bind(this));
    },

    showContents : function(){
        this.$contents.slideDown();
    },

    hideContents : function(){
        this.$contents.slideUp();
    }
};

$(window).on('load', function(){
    BIKE.TRAJECTORY.ACCORDION.init();
});