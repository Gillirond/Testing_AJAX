function setEqualHight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function()
        {
            var currentHeight = $(this).height();
            if(currentHeight > tallestcolumn)
            {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}


$(function() {

    $('#leftsidebar div').bind('click', function() {
        $.get('php/news.php', {query: this.textContent}, function(data) {
            var i=0;
            $('#content').empty();
            for(var news in data) {
                $('#content').append("<div><h3>"+data[i].newstitle+"</h3><h5>Date: "+data[i].date+"</h5>"+"<p>"+data[i].text+"</p><div class=shareBTN>Share on Facebook</div></div>");
                var shrbtn = $('#content').children(i).children('div');

                shrbtn.bind('click', function() {
                        var quoteText = shrbtn.parent().children('h5').text()+":   "+shrbtn.parent().children('h3').text();
                        FB.ui({
                            method: 'share',
                            display: 'popup',
                            quote: quoteText,
                            href: window.location.href
                        }, function(response){});
                    });

                i++;
            }
        }, 'json');
        setEqualHight($("#main > div"));
    });

    /*$('.shareBTN').each(function(index, element) {
        element.bind('click', function() {
            var quoteText = element.parent().children('h5').text()+":   "+element.parent().children('h3').text();
            FB.ui({
                method: 'share',
                display: 'popup',
                quote: quoteText,
                href: window.location.href
            }, function(response){});
        });
    });*/


    var all_adverts = $('#adverts > div');

    all_adverts.each(function(index, elem) {
        $.get('php/adv.php', {adv_n: all_adverts.length, adv_crnt: index}, function(data) {
            $(elem).html(data);
            });
        });

});
