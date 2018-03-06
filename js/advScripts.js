$(function(){
    var all_adverts = $('#adverts > div');

    all_adverts.each(function(index, elem) {
        $.get('php/adv.php', {adv_n: all_adverts.length, adv_crnt: index}, function(data) {
            $(elem).html(data);
        });
    });
});