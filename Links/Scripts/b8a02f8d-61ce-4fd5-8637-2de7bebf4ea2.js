//ADAPTLOGIC LOCAL STORAGE API START
window.adtlgc = window.adtlgc || {};
adtlgc.util = adtlgc.util || {};

adtlgc.util.send = function (u) {
  var i = new Image();
  i.src = u;
};

adtlgc.util.newGuid = function () {
  var r = '';
  for (var i = 0; i < 32; i++)
    r += Math.floor(Math.random() * 0xF).toString(0xF) + (i == 8 || i == 12 || i == 16 || i == 20 ? '-' : '');
  return r;
};

var adapt_Cookie={
	set:function(n,v,c){var d,e="";if(c){d=new Date();d.setTime(d.getTime()+c*24*60*60*1000);e="; expires="+d.toGMTString()}document.cookie=escape(n)+"="+v+e+"; path=/";return v},
	get:function(n){var e,b,p,c=document.cookie;p=n+"=";b=c.indexOf(";"+" "+p);if(b==-1){b=c.indexOf(p);if(b!=0)return ""}else b+=2;e=c.indexOf(";",b);if(e==-1)e=c.length;return unescape(c.substring(b+p.length,e))},
	unset:function(n){return this.set(n,"",1)}
};

function CrossDomainStorage(origin, path){
    this.origin = origin;
    this.path = path;
    this._iframe = null;
    this._iframeReady = false;
    this._queue = [];
    this._requests = {};
    this._id = 0;
}

CrossDomainStorage.prototype = {

    //restore constructor
    constructor: CrossDomainStorage,

    //public interface methods

    init: function(){

        var that = this;

        if (!this._iframe){
            if (window.postMessage && window.JSON && window.localStorage){
                this._iframe = document.createElement("iframe");
                this._iframe.style.cssText = "position:absolute;width:1px;height:1px;left:-9999px;";
                document.body.appendChild(this._iframe);

                if (window.addEventListener){
                    this._iframe.addEventListener("load", function(){ that._iframeLoaded(); }, false);
                    window.addEventListener("message", function(event){ that._handleMessage(event); }, false);
                } else if (this._iframe.attachEvent){
                    this._iframe.attachEvent("onload", function(){ that._iframeLoaded(); }, false);
                    window.attachEvent("onmessage", function(event){ that._handleMessage(event); });
                }
            //} else {
            //    throw new Error("Unsupported browser.");
            }
        }
        if (this._iframe){
			this._iframe.src = this.origin+this.path;
		}
    },
    
    remove: function(key){
    	var request = {
			action: "remove",
			key: key
		},
		data = {
			request: request
		};

        this._processRequest(data);
    },
    
    storeValue: function(key, value){
    	var request = {
			action: "put",
			key: key,
			value: value
		},
		data = {
			request: request
		};

        this._processRequest(data);
    },

    requestValue: function(key, defaultValue, callback){
        var request = {
    		action: "get",
            key: key,
            defaultValue: defaultValue,
            id: ++this._id
        },
        data = {
            request: request,
            callback: callback
        };

        this._processRequest(data);
    },

    //private methods
    
    _processRequest: function(data){
    	if (this._iframeReady){
            this._sendRequest(data);
        } else {
            this._queue.push(data);
        }   

        if (!this._iframe){
            this.init();
        }
    },

    _sendRequest: function(data){
    	if("get"==data.request.action) this._requests[data.request.id] = data;
        this._iframe.contentWindow.postMessage(JSON.stringify(data.request), this.origin);
    },

    _iframeLoaded: function(){
        this._iframeReady = true;
        if (this._queue.length){
            for (var i=0, len=this._queue.length; i < len; i++){
                this._sendRequest(this._queue[i]);
            }
            this._queue = [];
        }
    },

    _handleMessage: function(event){
        if (event.origin == this.origin){
            var data = JSON.parse(event.data);
            this._requests[data.id].callback(data.key, data.value);
            delete this._requests[data.id];
        }
    }

};
//ADAPTLOGIC LOCAL STORAGE API END

var adapt_userGuidName = "v3rd";
var adapt_userGuidValue="";
if(window.localStorage){
	var remoteStorage = new CrossDomainStorage((("https:" == document.location.protocol) ? "https://" : "http://")+"files.snstatic.fi", "/weba/js/ls/ls.html");
	
	remoteStorage.requestValue(adapt_userGuidName, "LS"+adtlgc.util.newGuid(), function(key, value){
		adapt_userGuidValue = value;
	});
}else{
	adapt_userGuidValue = adapt_Cookie.get(adapt_userGuidName);
	if(!adapt_userGuidValue){
		adapt_userGuidValue = "LS"+adtlgc.util.newGuid();
		adapt_Cookie.set(adapt_userGuidName, adapt_userGuidValue, 365);
	}
}

//REFERENCE PAGE TAG
// CONSTANTS
var tracProto = (("https:" == document.location.protocol) ? "https://" : "http://");
var ct = "<img src=";
var cd = tracProto + "analytics.sanoma.fi";
var cu = "/zag.gif?Log=1";
var ce = ">";

//TMSEC
var sp_e0;
if(typeof(sp_e0)!="undefined") { var tm="&tmsec="+sp_e0.s+"/"+sp_e0.cp; }
else { var tm="&tmsec=undefined"; }
//END TMSEC 

//THEMETAG
var articleUpperTags;
if (typeof(articleUpperTags) != 'undefined') {  
    var v_zig = {};
	v_zig["themetags"] = encodeURI(articleUpperTags.toLowerCase()); }
//END THEMETAG
			
//STD
var c_zig = {};
c_zig["sw"] = screen.width;
c_zig["sh"] = screen.height;
c_zig["cd"] = screen.colorDepth;
c_zig["cb"] = new Date().getTime(); 
var co = "";

for ( cKey in c_zig ) {
	co = co+"&"+cKey+"="+escape1(c_zig[cKey]);
}

var d_zig = {};
d_zig["dt"] = enco(document.title);
d_zig["dr"] = document.referrer;
var vo = "";

for ( dKey in d_zig ) {
	vo = vo+"&"+dKey+"="+escape2(d_zig[dKey]);
}

if (typeof v_zig != "undefined") {
	for ( vKey in v_zig ) {
		vo = vo+"&"+vKey+"="+escape1(v_zig[vKey]);
	}
} 
//else if (typeof v != "undefined") {
//		for ( vKey in v ) {
//			vo = vo+"&"+vKey+"="+escape1(v[vKey]);
//		}
//}

//TAGSEND
setTimeout(function(){
	var aug = "&"+adapt_userGuidName+"="+adapt_userGuidValue;
	adtlgc.util.send(cd+cu+vo+tm+co);
	}, 1000);
	
//ESCAPES
function escape1(s)
{ return escape(s).replace(/\+/g,"%20") }

function escape2(s)
{ return escape(s).replace(/\+/g, "%2B") }

function enco(en)
{ return encodeURI(en)}

/*
 * Ajax tracking request
 */
window.sanoma = window.sanoma || {};
sanoma.ajax = sanoma.ajax || {};

sanoma.ajax.track = function( opts ) {
	var aug = "&"+adapt_userGuidName+"="+adapt_userGuidValue;

	var opts_e = '';
	if (typeof opts != "undefined") {
		for ( oKey in opts ) {
			opts_e = opts_e+"&"+oKey+"="+escape1(opts[oKey]);
		}
	}
	var uniq = "&"+Math.floor(Math.random() * 99999).toString(0xF);
	var url = cd+cu+opts_e+tm+co+uniq;
	adtlgc.util.send( url );

	return true;
};

sanoma.ajax.linkTrack = function( e, opts ) {
	var url = e.href;
	this.track( opts );
	setTimeout( "document.location='"+url+"';", 100 );
	
	return false;
};