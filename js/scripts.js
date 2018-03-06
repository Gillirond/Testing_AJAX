/*Changing columns height to be equal*/
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
//creation of interaction between menu and central part of the site
    $('#leftsidebar div').bind('click', function() {
        $.get('php/news.php', {query: this.textContent}, function(data) {
            var i=0;
            $('#content').empty();
            for(var news in data) {
                $('#content').append("<div><h3>"+data[i].newstitle+"</h3><h5>Date: "+data[i].date+"</h5>"+"<p>"+data[i].text+"</p><div class=shareBTN>Share on Facebook</div></div>");
                var shrbtn = $('#content').children(i).children('div');
//each news needs own custom Facebook share button
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
        //set columns height equal
        setEqualHight($("#main > div"));
    });
});
