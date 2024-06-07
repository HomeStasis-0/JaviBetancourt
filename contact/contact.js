$(document).ready(function() {
    $('.trapdoor').on('touchstart', function() {
        var $this = $(this);
        $this.addClass('active');

        setTimeout(function() {
            $this.removeClass('active');
        }, 3000);
    });
});

$(document).ready(function() {
    $('.trapdoor2').on('touchstart', function() {
        var $this = $(this);
        $this.addClass('active');

        setTimeout(function() {
            $this.removeClass('active');
        }, 3000);
    });
});

$(document).ready(function() {
    $('.trapdoor3').on('touchstart', function() {
        var $this = $(this);
        $this.addClass('active');

        setTimeout(function() {
            $this.removeClass('active');
        }, 3000);
    });
});