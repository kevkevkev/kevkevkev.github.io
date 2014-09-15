Tagging = function(context) {
  this.site = 'iltasanomat-fi';
  this.zone = 'etusivu';
  this.source_consent_cookie = '';
  this.source_default_tracking = true;
  this.protocol = window.location.protocol;
  this.autodetect_url = this.protocol + '//cts.sanoma.fi/service/detect/';
  this.context = context;
  this.positions = {};
  this.positions_weighted = {};

  this.positions['button01'] = '[{\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">ADTECH_showAd(\\"is_etusivu_btn1_165x250\\", document, true);</script>\"}]';
  this.positions_weighted['button01'] = false;
  
  this.positions['button02'] = '[{\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">ADTECH_showAd(\\"is_etusivu_btn2_165x250\\", document, true);</script>\"}]';
  this.positions_weighted['button02'] = false;
  
  this.positions['button03'] = '[{\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">ADTECH_showAd(\\"is_etusivu_btn3_165x250\\", document, true);</script>\"}]';
  this.positions_weighted['button03'] = false;
  
  this.positions['button04'] = '[{\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">ADTECH_showAd(\\"is_etusivu_btn4_165x250\\", document, true);</script>\"}]';
  this.positions_weighted['button04'] = false;
  
  this.positions['button05'] = '[{\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">ADTECH_showAd(\\"is_etusivu_btn5_165x250\\", document, true);</script>\"}]';
  this.positions_weighted['button05'] = false;
  
  this.positions['button06'] = '[{\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">ADTECH_showAd(\\"is_etusivu_btn6_165x250\\", document, true);</script>\"}]';
  this.positions_weighted['button06'] = false;
  
  this.positions['footer'] = '[{\"service_name\": \"Ilta-Sanomat\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<!-- InterQuest begin v2.1     Add the code into the end of the HTML document     just before [/BODY] and [/HTML] end tags --><script type=\\"text/javascript\\">iq_site_id=\\"54c073acd85a64d4\\";iq_sampl_max=33.33;if(1>(Math.random()*iq_sampl_max)){document.write(unescape(\'%3Cscript%20type%3D%22text/javascript%22%20\'+\'src%3D%22http://survey.interquest.fi/cgi/invite%3Fid%3D\'+iq_site_id+\'%26js20%22%3E%3C/script%3E\'));}</script><!-- InterQuest end --><script type=\\"text/javascript\\">setTimeout(function(){var a=document.createElement(\\"script\\");var b=document.getElementsByTagName(\\"script\\")[0];a.src=document.location.protocol+\\"//dnn506yrbagrg.cloudfront.net/pages/scripts/0010/8577.js?\\"+Math.floor(new Date().getTime()/3600000);a.async=true;a.type=\\"text/javascript\\";b.parentNode.insertBefore(a,b)}, 1);</script>\"}, {\"service_name\": \"Crazy Egg\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">setTimeout(function(){var a=document.createElement(\\"script\\"); var b=document.getElementsByTagName(\\"script\\")[0]; a.src=document.location.protocol+\\"//dnn506yrbagrg.cloudfront.net/pages/scripts/0010/8577.js?\\"+Math.floor(new Date().getTime()/3600000); a.async=true;a.type=\\"text/javascript\\";b.parentNode.insertBefore(a,b)}, 1);</script>\"}]';
  this.positions_weighted['footer'] = false;
  
  this.positions['head'] = '[{\"service_name\": \"Smart JS\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">(function(){    var surl = \\"files.snstatic.fi/VMM/js/smart.js\\";    var profile_src = (window.location.protocol || \\"http:\\") + \\"//\\" + surl;    document.write(\'<scr\'+\'ipt type=\\"text/javascript\\" src=\\"\'+profile_src+\'\\"></scr\'+\'ipt>\');})();</script>\"}, {\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\" src=\\"http://files.snstatic.fi/VMM/safeframe/1-0-2g/js/host.min.js\\"></script><script type=\\"text/javascript\\">var adt_url = (window.location.protocol === \\"https:\\") ? \'https://secserv.adtech.de\' : \'http://adserver.adtech.de\';var adt_tagprefix = (\'${tagprefix}\'.length>0) ? \'${tagprefix}\'.replace(/[, ]+/gi,\'+\') + \\"+\\" : \'\';var adt_tag = (\'${tags}\'.length>0) ? \'${tags}\'.replace(/[, ]+/gi,\'+\') : \'\';var adt_tags = (adt_tagprefix+adt_tag).length>0 ? (\'key=\' + adt_tagprefix + adt_tag +\';\').replace(/[, ]+/gi,\'+\') : \'\';var adt_keyval = (typeof(adptkwresp) != \'undefined\') ? window.adptkwresp : \'\';if (window.adgroupid == undefined) { window.adgroupid = Math.round(Math.random() * 1000); }document.write(\'<scr\'+\'ipt type=\\"text/javascript\\" src=\\"\'+adt_url+\'/multiad/3.0/969.1/0/0/-1/ADTECH;mode=multiad;\'+adt_tags+adt_keyval+\'grp=\'+window.adgroupid+\';misc=\'+new Date().getTime()+\';alias=is_etusivu_box3_300x250,is_etusivu_cube1_630x630,is_etusivu_jb1_980x400,is_etusivu_btn1_165x250,is_etusivu_btn2_165x250,is_etusivu_btn3_165x250,is_etusivu_btn4_165x250,is_etusivu_btn5_165x250,is_etusivu_btn6_165x250\\"></scr\'+\'ipt>\');</script>\"}]';
  this.positions_weighted['head'] = false;
  
  this.positions['head_test'] = '[{\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\" src=\\"http://files.snstatic.fi/VMM/safeframe/1-0-2g/js/host.min.js\\"></script><script type=\\"text/javascript\\">var adt_url = (window.location.protocol === \\"https:\\") ? \'https://secserv.adtech.de\' : \'http://adserver.adtech.de\';var adt_tagprefix = (\'${tagprefix}\'.length>0) ? \'${tagprefix}\'.replace(/[, ]+/gi,\'+\') + \\"+\\" : \'\';var adt_tag = (\'${tags}\'.length>0) ? \'${tags}\'.replace(/[, ]+/gi,\'+\') : \'\';var adt_tags = (adt_tagprefix+adt_tag).length>0 ? (\'key=\' + adt_tagprefix + adt_tag +\';\').replace(/[, ]+/gi,\'+\') : \'\';var adt_keyval = (typeof(adptkwresp) != \'undefined\') ? window.adptkwresp : \'\';if (window.adgroupid == undefined) { window.adgroupid = Math.round(Math.random() * 1000); }document.write(\'<scr\'+\'ipt type=\\"text/javascript\\" src=\\"\'+adt_url+\'/multiad/3.0/969.1/0/0/-1/ADTECH;mode=multiad;\'+adt_tags+adt_keyval+\'grp=\'+window.adgroupid+\';misc=\'+new Date().getTime()+\';alias=is_etusivu_box3_300x250,is_etusivu_cube1_630x630,is_etusivu_jb1_980x400,is_etusivu_btn1_165x250,is_etusivu_btn2_165x250,is_etusivu_btn3_165x250,is_etusivu_btn4_165x250,is_etusivu_btn5_165x250,is_etusivu_btn6_165x250\\"></scr\'+\'ipt>\');</script>\"}]';
  this.positions_weighted['head_test'] = false;
  
  this.positions['middlebanner02'] = '[{\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">    (function()    {        var adt_url = (window.location.protocol === \\"https:\\") ? \'https://secserv.adtech.de\' : \'http://adserver.adtech.de\';                var adt_tagprefix = (\'${tagprefix}\'.length>0) ? \'${tagprefix}\'.replace(/[, ]+/gi,\'+\') + \\"+\\" : \'\';        var adt_tag = (\'${tags}\'.length>0) ? \'${tags}\'.replace(/[, ]+/gi,\'+\') : \'\';        var adt_tags = (adt_tagprefix+adt_tag).length>0 ? (\'key=\' + adt_tagprefix + adt_tag +\';\').replace(/[, ]+/gi,\'+\') : \'\';        var adt_keyval = (typeof window.adptkwresp != \'undefined\') ? window.adptkwresp : \'\';                if (window.adgroupid == undefined) {            window.adgroupid = Math.round(Math.random() * 1000);        }        var url = adt_url + \'/addyn|3.0|969.1|2179776|0|-1|ADTECH;\' + adt_tags+adt_keyval +             \'cookie=info;alias=is_etusivu_jb3_980x400;loc=100;target=_blank;grp=\' + window.adgroupid +             \';misc=\' + new Date().getTime();        SanomaVisibleLoadingUtil.writePlacement({\'alias\':\'is_etusivu_jb3_980x400\', \'url\':url});    })();</script>\"}]';
  this.positions_weighted['middlebanner02'] = false;
  
  this.positions['rectangle1-1'] = '[{\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">ADTECH_showAd(\\"is_etusivu_cube1_630x630\\", document, true);</script>\"}]';
  this.positions_weighted['rectangle1-1'] = false;
  
  this.positions['rectangle1-2'] = '[{\"service_name\": \"Improve Digital\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">var impro_url = (window.location.protocol === \\"https:\\") ? \'https://ad.360yield.com\' : \'http://ad.360yield.com\';if (typeof(adptkwresp) == \'undefined\') window.adptkwresp = \'\';if (typeof window.impro_rnd == \'undefined\') { window.impro_rnd = Math.floor((Math.random() * 1000000) + 1); }if (!adptkw_string) {\tvar adptkw_string = window.adptkwresp.replace( /[\\;]/g, \\"&\\" );\tadptkw_string = adptkw_string.replace( /[\\:]/g, \\",\\" ); \t}document.write(\'<scr\'+\'ipt type=\\"text/javascript\\" src=\\"\'+impro_url+\'/nadj?pub=347&placement=ilta-630x630-btf-l-11-roc-etusivu&size=630x630&tz=\'+(new Date().getTimezoneOffset())+\'&t_rnd=\'+window.impro_rnd+\'&\'+adptkw_string+\'\\"><\\/scr\'+\'ipt>\');</script>\"}]';
  this.positions_weighted['rectangle1-2'] = false;
  
  this.positions['rectangle1-3'] = '[{\"service_name\": \"Improve Digital\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">    (function()    {        var impro_url = (window.location.protocol === \\"https:\\") ? \'https://ad.360yield.com\' : \'http://ad.360yield.com\';                if (typeof window.adptkwresp == \'undefined\') {            window.adptkwresp = \'\';        }\t\t        if (typeof window.impro_rnd == \'undefined\') {            window.impro_rnd = Math.floor((Math.random() * 1000000) + 1);        }                if (typeof window.adptkw_string == \'undefined\') {            var adptkw_str = window.adptkwresp.replace( /[\\;]/g, \\"&\\" );            window.adptkw_string = adptkw_str.replace( /[\\:]/g, \\",\\" );         }                var url = impro_url + \'/nadj?pub=347&placement=ilta-300x250-btf-l-13-roc-etusivu&size=300x250&tz=\'             + (new Date().getTimezoneOffset()) + \'&t_rnd=\' + window.impro_rnd + \'&\' + window.adptkw_string;        SanomaVisibleLoadingUtil.writePlacement({\'alias\':\'ilta-300x250-btf-l-13-roc-etusivu\', \'url\':url});    })();</script>\"}]';
  this.positions_weighted['rectangle1-3'] = false;
  
  this.positions['rectangle1-4'] = '[{\"service_name\": \"Improve Digital\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">    (function()    {        var impro_url = (window.location.protocol === \\"https:\\") ? \'https://ad.360yield.com\' : \'http://ad.360yield.com\';                if (typeof window.adptkwresp == \'undefined\') {            window.adptkwresp = \'\';        }\t\t        if (typeof window.impro_rnd == \'undefined\') {            window.impro_rnd = Math.floor((Math.random() * 1000000) + 1);        }                if (typeof window.adptkw_string == \'undefined\') {            var adptkw_str = window.adptkwresp.replace( /[\\;]/g, \\"&\\" );            window.adptkw_string = adptkw_str.replace( /[\\:]/g, \\",\\" );         }                var url = impro_url + \'/nadj?pub=347&placement=ilta-300x250-btf-l-14-roc-etusivu&size=300x250&tz=\'             + (new Date().getTimezoneOffset()) + \'&t_rnd=\' + window.impro_rnd + \'&\' + window.adptkw_string;        SanomaVisibleLoadingUtil.writePlacement({\'alias\':\'ilta-300x250-btf-l-14-roc-etusivu\', \'url\':url});    })();</script>\"}]';
  this.positions_weighted['rectangle1-4'] = false;
  
  this.positions['rectangle1-5'] = '[{\"service_name\": \"Improve Digital\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">var impro_url = (window.location.protocol === \\"https:\\") ? \'https://ad.360yield.com\' : \'http://ad.360yield.com\';if (typeof(adptkwresp) == \'undefined\') window.adptkwresp = \'\';if (typeof window.impro_rnd == \'undefined\') { window.impro_rnd = Math.floor((Math.random() * 1000000) + 1); }if (!adptkw_string) {\tvar adptkw_string = window.adptkwresp.replace( /[\\;]/g, \\"&\\" );\tadptkw_string = adptkw_string.replace( /[\\:]/g, \\",\\" ); \t}document.write(\'<scr\'+\'ipt type=\\"text/javascript\\" src=\\"\'+impro_url+\'/nadj?pub=347&placement=ilta-300x250-btf-l-15-roc-etusivu&size=300x250&tz=\'+(new Date().getTimezoneOffset())+\'&t_rnd=\'+window.impro_rnd+\'&\'+adptkw_string+\'\\"><\\/scr\'+\'ipt>\');</script>\"}]';
  this.positions_weighted['rectangle1-5'] = false;
  
  this.positions['rectangle1-6'] = '[{\"service_name\": \"Improve Digital\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">var impro_url = (window.location.protocol === \\"https:\\") ? \'https://ad.360yield.com\' : \'http://ad.360yield.com\';if (typeof(adptkwresp) == \'undefined\') window.adptkwresp = \'\';if (typeof window.impro_rnd == \'undefined\') { window.impro_rnd = Math.floor((Math.random() * 1000000) + 1); }if (!adptkw_string) {\tvar adptkw_string = window.adptkwresp.replace( /[\\;]/g, \\"&\\" );\tadptkw_string = adptkw_string.replace( /[\\:]/g, \\",\\" ); \t}document.write(\'<scr\'+\'ipt type=\\"text/javascript\\" src=\\"\'+impro_url+\'/nadj?pub=347&placement=ilta-300x250-btf-l-16-roc-etusivu&size=300x250&tz=\'+(new Date().getTimezoneOffset())+\'&t_rnd=\'+window.impro_rnd+\'&\'+adptkw_string+\'\\"><\\/scr\'+\'ipt>\');</script>\"}]';
  this.positions_weighted['rectangle1-6'] = false;
  
  this.positions['rectangle1-7'] = '[{\"service_name\": \"Improve Digital\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">var impro_url = (window.location.protocol === \\"https:\\") ? \'https://ad.360yield.com\' : \'http://ad.360yield.com\';if (typeof(adptkwresp) == \'undefined\') window.adptkwresp = \'\';if (typeof window.impro_rnd == \'undefined\') { window.impro_rnd = Math.floor((Math.random() * 1000000) + 1); }if (!adptkw_string) {\tvar adptkw_string = window.adptkwresp.replace( /[\\;]/g, \\"&\\" );\tadptkw_string = adptkw_string.replace( /[\\:]/g, \\",\\" ); \t}document.write(\'<scr\'+\'ipt type=\\"text/javascript\\" src=\\"\'+impro_url+\'/nadj?pub=347&placement=ilta-300x250-btf-l-17-roc-etusivu&size=300x250&tz=\'+(new Date().getTimezoneOffset())+\'&t_rnd=\'+window.impro_rnd+\'&\'+adptkw_string+\'\\"><\\/scr\'+\'ipt>\');</script>\"}]';
  this.positions_weighted['rectangle1-7'] = false;
  
  this.positions['rectangle1-8'] = '[{\"service_name\": \"Improve Digital\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">var impro_url = (window.location.protocol === \\"https:\\") ? \'https://ad.360yield.com\' : \'http://ad.360yield.com\';if (typeof(adptkwresp) == \'undefined\') window.adptkwresp = \'\';if (typeof window.impro_rnd == \'undefined\') { window.impro_rnd = Math.floor((Math.random() * 1000000) + 1); }if (!adptkw_string) {\tvar adptkw_string = window.adptkwresp.replace( /[\\;]/g, \\"&\\" );\tadptkw_string = adptkw_string.replace( /[\\:]/g, \\",\\" ); \t}document.write(\'<scr\'+\'ipt type=\\"text/javascript\\" src=\\"\'+impro_url+\'/nadj?pub=347&placement=ilta-300x250-btf-l-18-roc-etusivu&size=300x250&tz=\'+(new Date().getTimezoneOffset())+\'&t_rnd=\'+window.impro_rnd+\'&\'+adptkw_string+\'\\"><\\/scr\'+\'ipt>\');</script>\"}]';
  this.positions_weighted['rectangle1-8'] = false;
  
  this.positions['rectangle2-1'] = '[{\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">ADTECH_showAd(\\"is_etusivu_box3_300x250\\", document, true);</script>\"}]';
  this.positions_weighted['rectangle2-1'] = false;
  
  this.positions['rectangle2-2'] = '[{\"service_name\": \"Improve Digital\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">var impro_url = (window.location.protocol === \\"https:\\") ? \'https://ad.360yield.com\' : \'http://ad.360yield.com\';if (typeof(adptkwresp) == \'undefined\') window.adptkwresp = \'\';if (typeof window.impro_rnd == \'undefined\') { window.impro_rnd = Math.floor((Math.random() * 1000000) + 1); }if (!adptkw_string) {\tvar adptkw_string = window.adptkwresp.replace( /[\\;]/g, \\"&\\" );\tadptkw_string = adptkw_string.replace( /[\\:]/g, \\",\\" ); \t}document.write(\'<scr\'+\'ipt type=\\"text/javascript\\" src=\\"\'+impro_url+\'/nadj?pub=347&placement=ilta-300x250-btf-l-22-roc-etusivu&size=300x250&tz=\'+(new Date().getTimezoneOffset())+\'&t_rnd=\'+window.impro_rnd+\'&\'+adptkw_string+\'\\"><\\/scr\'+\'ipt>\');</script>\"}]';
  this.positions_weighted['rectangle2-2'] = false;
  
  this.positions['rectangle2-3'] = '[]';
  this.positions_weighted['rectangle2-3'] = false;
  
  this.positions['side01'] = '[{\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">var adt_url = (window.location.protocol === \\"https:\\") ? \'https://secserv.adtech.de\' : \'http://adserver.adtech.de\';var adt_tagprefix = (\'${tagprefix}\'.length>0) ? \'${tagprefix}\'.replace(/[, ]+/gi,\'+\') + \\"+\\" : \'\';var adt_tag = (\'${tags}\'.length>0) ? \'${tags}\'.replace(/[, ]+/gi,\'+\') : \'\';var adt_tags = (adt_tagprefix+adt_tag).length>0 ? (\'key=\' + adt_tagprefix + adt_tag +\';\').replace(/[, ]+/gi,\'+\') : \'\';var adt_keyval = (typeof(adptkwresp) != \'undefined\') ? window.adptkwresp : \'\';if (window.adgroupid == undefined) { window.adgroupid = Math.round(Math.random() * 1000); }if (JanModifiedAdCall == undefined) { var JanModifiedAdCall = 0; }if (JanModifiedAdCall != 2) { document.write(\'<scr\'+\'ipt type=\\"text/javascript\\" src=\\"\'+adt_url+\'/addyn|3.0|969.1|2179776|0|-1|ADTECH;\'+adt_tags+adt_keyval+\'cookie=info;alias=is_etusivu_st1_250x600;loc=100;target=_blank;grp=\'+window.adgroupid+\';misc=\'+new Date().getTime()+\'\\"></scri\'+\'pt>\'); }</script>\"}]';
  this.positions_weighted['side01'] = false;
  
  this.positions['side02'] = '[{\"service_name\": \"Improve Digital\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">if (JanModifiedAdCall == undefined) { var JanModifiedAdCall = 0; }if (JanModifiedAdCall < 1) { var impro_url = (window.location.protocol === \\"https:\\") ? \'https://ad.360yield.com\' : \'http://ad.360yield.com\';if (typeof(adptkwresp) == \'undefined\') window.adptkwresp = \'\';if (typeof window.impro_rnd == \'undefined\') { window.impro_rnd = Math.floor((Math.random() * 1000000) + 1); }if (!adptkw_string) {\tvar adptkw_string = window.adptkwresp.replace( /[\\;]/g, \\"&\\" );\tadptkw_string = adptkw_string.replace( /[\\:]/g, \\",\\" ); \t}document.write(\'<scr\'+\'ipt type=\\"text/javascript\\" src=\\"\'+impro_url+\'/nadj?pub=347&placement=ilta-160x600-btf-l-2-roc-etusivu&size=160x600&tz=\'+(new Date().getTimezoneOffset())+\'&t_rnd=\'+window.impro_rnd+\'&\'+adptkw_string+\'\\"><\\/scr\'+\'ipt>\');}</script>\"}]';
  this.positions_weighted['side02'] = false;
  
  this.positions['side03'] = '[]';
  this.positions_weighted['side03'] = false;
  
  this.positions['top'] = '[{\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">ADTECH_showAd(\\"is_etusivu_jb1_980x400\\", document, true);</script>\"}, {\"service_name\": \"AdTech\", \"source_non_tracking\": \"\", \"weight\": null, \"service_kind\": \"\", \"source_tracking\": \"<script type=\\"text/javascript\\">var adt_url = (window.location.protocol === \\"https:\\") ? \'https://secserv.adtech.de\' : \'http://adserver.adtech.de\';var adt_tagprefix = (\'${tagprefix}\'.length>0) ? \'${tagprefix}\'.replace(/[, ]+/gi,\'+\') : \'\';var adt_tag = (\'${tags}\'.length>0) ? \'${tags}\'.replace(/[, ]+/gi,\'+\') : \'\';var adt_tags = (adt_tagprefix+adt_tag).length>0 ? (\'key=\'+(adt_tagprefix+\' \'+adt_tag).replace(/^\\s+|\\s+$/g, \\"\\")+\';\').replace(/[, ]+/gi,\'+\') : \'\';var adt_keyval = (typeof(adptkwresp) != \'undefined\') ? window.adptkwresp : \'\';if (window.adgroupid == undefined) { window.adgroupid = Math.round(Math.random() * 1000); }document.write(\'<scr\'+\'ipt type=\\"text/javascript\\" src=\\"\'+adt_url+\'/addyn|3.0|969.1|2179776|0|16|ADTECH;\'+adt_tags+adt_keyval+\'cookie=info;alias=is_etusivu_dyn1_800x500;loc=100;target=_blank;grp=\'+window.adgroupid+\';misc=\'+new Date().getTime()+\'\\"></scri\'+\'pt>\');</script>\"}]';
  this.positions_weighted['top'] = false;
}

Tagging.prototype._has_optin = function(category) {
  var categories, i, tagging = this;
  categories = get_categories(this.source_consent_cookie);
  for (i = 0; i < categories.length; i++) {
    if (categories[i] == category) {
      return true;
    }
  }
  return false;

  function get_categories(name) {
    var split = tagging._get_cookie(name).split(":");
    if (split && typeof split[3] != "undefined") {
      return split[3].split(",");
    } else {
      return [];
    }
  }
}

Tagging.prototype._get_cookie = function(name) {
  if (document.cookie && document.cookie != "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) == (name + "=")) {
        return decodeURIComponent(cookie.substring(name.length + 1));
      }
    }
  }
  return "";

  function trim(string) {
    return string.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
}

Tagging.prototype._get_tag_source = function(tag) {
  if (this._get_cookie(this.source_consent_cookie)) {
    if (this._has_optin(tag.service_kind)) {
      return tag.source_tracking;
    } else {
      return tag.source_non_tracking;
    }
  } else {
    if (this.source_default_tracking) {
      return tag.source_tracking;
    } else {
      return tag.source_non_tracking;
    }
  }
}

Tagging.prototype.get_json = function(text) {
  return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(text.replace(/"(\\.|[^"\\])*"/g, '')))
         && eval('(' + text + ')');
}

Tagging.prototype.random_tag = function(position) {
  var tags = [];
  var weighted_tags = [];

  for (index in position) {
    tag = position[index];
    tags[index] = this._get_tag_source(tag);

    for (var i = 0; i < tag.weight; i++) {
      weighted_tags.push(index);
    }
  }

  // Pick a random tag from array based on weight
  var random_index = weighted_tags[Math.floor((Math.random() * weighted_tags.length))];
  return tags[random_index];
}

Tagging.prototype.all_tags = function(position) {
  var tags = [], index, tag;
  for (index in position) {
    tag = position[index];
    tags[index] = this._get_tag_source(tag);
  }
  return tags.join("\n");
}

Tagging.prototype.render = function(slug, context) {
    document.write(this.get_source(slug, context));
}

Tagging.prototype.get_source = function(slug, context) {
  if (typeof this.positions[slug] == 'undefined') {
    // This position doesn't exist, call the autodetect
    this._detect(slug);
  } else {
    var position = this.get_json(this.positions[slug]);
    var tag_source = "";

    if (this.positions_weighted[slug]) {
      tag_source = this.random_tag(position)
    } else {
      tag_source = this.all_tags(position);
    }

    // Replace variables
    var variables = {};
    for (variable in this.context) {
      variables[variable] = this.context[variable];
    }
    for (variable in context) {
      variables[variable] = context[variable];
    }
    tag_source = this._replace_variables(tag_source, variables);

    // Remove unset variables and return result
    return tag_source.replace(/\$\w+/g, "").replace(/\${\w+}/g, "");
  }
  return '';
}

Tagging.prototype.log = function(err) {
  //this._load(error_endpoint);
}

Tagging.prototype._load = function(url) {
  var head = document.getElementsByTagName('head')[0] || document.documentElement,
      script = document.createElement('script');

  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
}

Tagging.prototype._detect = function(position) {
  this._load(this.autodetect_url + this.site +'/'+ this.zone +'/' + position + '/');
}

Tagging.prototype._replace_variables = function(content, variables) {
  var RE_VALID_IDENT = /^[a-zA-Z_]\w*$/;
  for (variable in variables) {
    if (RE_VALID_IDENT.test(variable)) {
      var regexes = [new RegExp('\\$' + variable, 'g'), new RegExp('\\${' + variable + '}', 'g')];

      for (re in regexes) {
        content = content.replace(regexes[re], variables[variable]);
      }
    } else {
      throw "'" + variable + "' is not a valid identifier.";
    }
  }
  return content;
}



