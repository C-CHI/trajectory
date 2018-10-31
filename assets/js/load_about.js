BIKE.TRAJECTORY.SHOW_PAGE = {
    opt : function(){
        this.showTime = 800;
        this.spreadTime = 1200;
        this.delay = 600;
    },

    init : function(){
        this.opt();
        this.setParamerters();
        this.materializationPage();
    },
    
    setParamerters : function(){
        this.$preview = $('.jsc-preview');
        this.$heading = $('.jsc-heading');
        this.$account = $('.jsc-account');
    },

    materializationPage : function(){
        var myself = this;
        
        this.$preview.animate({
            'opacity': 1
        },this.showTime,
        function(){
            myself.$heading.animate({
                'opacity': 1,
                'letter-spacing': 0.5+'em'
            }, myself.spreadTime)

            myself.$account.delay(myself.delay).animate({
                'opacity': 1,
                'marginTop': 30+'px'
            }, myself.spreadTime)
        });
    }
}

$(window).on('load', function(){
    BIKE.TRAJECTORY.SHOW_PAGE.init();
})