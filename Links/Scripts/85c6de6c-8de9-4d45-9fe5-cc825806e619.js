$(document).ready(function() {
    if ($('body').hasClass('entertainment') || $('body').hasClass('news') ) {
		// Page category
		var puluPageUrl = $("link[rel|='canonical']").attr("href");
		var puluPageCat = puluPageUrl.split("/")[3];

		// Generate button
        $('#header .section-bg').append('<a id="iltapulu-hdr-button" href="http://www.iltapulu.fi/?ref=is-top-nav-banner" target="_blank"><span>TV-ohjelmat<br />Iltapulusta!</span></a>');
        $('#header .section-bg').css({'position' : 'relative'});
        $('#iltapulu-hdr-button').css({'display' : 'block', 'width' : '270px', 'height' : '60px','background' : 'transparent url(http://files.snstatic.fi/IS/2014/1/iltapulu/iltapulu_hdr2.png) no-repeat top left', 'position' : 'absolute', 'top' : '0px', 'right' : '0px'});
        $('#iltapulu-hdr-button span').css({'display' : 'block', 'margin' : '16px 50px', 'text-transform' : 'uppercase', 'font' : '12px/1.3 bold Arial,Helvetica,sans-serif', 'color' : '#fff', 'text-shadow' : '1px 1px 3px #169ad8'});
		$("#iltapulu-hdr-button").hover(function () {
		    $(this).css({'text-decoration' : 'none', 'opacity' : '0.85' });
		}, function () {
		    $(this).css({'text-decoration' : 'none', 'opacity' : '1' });
		});

		// Hide on these pages
		var puluBlockList = new Array("tanssiitahtienkanssa", "tyoelama", "dokumentti");
		if (puluBlockList.indexOf(puluPageCat) > -1) {
			$("#iltapulu-hdr-button").hide();
		}

    }
});