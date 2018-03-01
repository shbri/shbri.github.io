// ŠTO JE UNUTRI:
// jQuery-Migrate.js
// jquery-easing-1.3.js - OVOGA NEMA JER NE TREBA
// jquery-scrolltofixed-min.js
// superfish.min.js
// jquery.slicknav.min.js
// jquery.touchSwipe.min.js 
// jquery.hoverIntent.minified.js
// jquery.fullsizable.js

// jquery-transit-modified.js
// layerslider.transitions.js
// layerslider.kreaturamedia.jquery.js

// var functions call KOKE - OVOGA NEMA JER SAM PREBACIO U HTMLS:::::
	// removeAttr('width height') KOKE
	// getElementById('formreset').reset()
	// slick call 
	// fullsiz call 
// custom.js
// (Google) Universal Analytics: - OVO JE IZBAČENO I STAVLJENO NA SVAKU STRANU
//*******************************


// jQuery-Migrate.js
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);


// jquery-scrolltofixed-min.js KOKE

(function(a){a.isScrollToFixed=function(b){return a(b).data("ScrollToFixed")!==undefined};a.ScrollToFixed=function(d,g){var j=this;j.$el=a(d);j.el=d;j.$el.data("ScrollToFixed",j);var c=false;var z=j.$el;var A;var x=0;var n=0;var h=-1;var e=-1;var p=null;var u;function q(){z.trigger("preUnfixed");i();z.trigger("unfixed");e=-1;x=z.offset().top;n=z.offset().left;if(j.options.offsets){n+=(z.offset().left-z.position().left)}if(h==-1){h=n}A=z.css("position");c=true;if(j.options.bottom!=-1){z.trigger("preFixed");s();z.trigger("fixed")}}function k(){var B=j.options.limit;if(!B){return 0}if(typeof(B)==="function"){return B()}return B}function m(){return A==="fixed"}function t(){return A==="absolute"}function f(){return !(m()||t())}function s(){if(!m()){p.css({display:z.css("display"),width:z.outerWidth(true),height:z.outerHeight(true),"float":z.css("float")});z.css({width:z.width(),position:"fixed",top:j.options.bottom==-1?o():"",bottom:j.options.bottom==-1?"":j.options.bottom});A="fixed"}}function b(){z.css({width:z.width(),position:"absolute",top:k(),left:n});A="absolute"}function i(){if(!f()){e=-1;p.css("display","none");z.css({width:"",position:"",left:"",top:""});A=null}}function r(B){if(B!=e){z.css("left",n-B);e=B}}function o(){return j.options.marginTop}function v(){var D=c;if(!c){q()}var B=a(window).scrollLeft();var E=a(window).scrollTop();var C=k();if(j.options.minWidth&&a(window).width()<j.options.minWidth){if(!f()||!D){l();z.trigger("preUnfixed");i();z.trigger("unfixed")}}else{if(j.options.bottom==-1){if(C>0&&E>=C-o()){if(!t()||!D){l();z.trigger("preAbsolute");b();z.trigger("unfixed")}}else{if(E>=x-o()){if(!m()||!D){l();z.trigger("preFixed");s();e=-1;z.trigger("fixed")}r(B)}else{if(!f()||!D){l();z.trigger("preUnfixed");i();z.trigger("unfixed")}}}}else{if(C>0){if(E+a(window).height()-z.outerHeight(true)>=C-o()){if(m()){l();z.trigger("preUnfixed");i();z.trigger("unfixed")}}else{if(!m()){l();z.trigger("preFixed");s()}r(B);z.trigger("fixed")}}else{r(B)}}}}function l(){var B=z.css("position");if(B=="absolute"){z.trigger("postAbsolute")}else{if(B=="fixed"){z.trigger("postFixed")}else{z.trigger("postUnfixed")}}}var w=function(B){if(z.is(":visible")){c=false;v()}};var y=function(B){v()};j.init=function(){j.options=a.extend({},a.ScrollToFixed.defaultOptions,g);if(navigator.platform==="iPad"||navigator.platform==="iPhone"||navigator.platform==="iPod"){if(!navigator.userAgent.match(/OS 5_.*\ like Mac OS X/i)){return}}j.$el.css("z-index",j.options.zIndex);p=a("<div />");A=z.css("position");if(f()){j.$el.after(p)}a(window).bind("resize.ScrollToFixed",w);a(window).bind("scroll.ScrollToFixed",y);if(j.options.preFixed){z.bind("preFixed.ScrollToFixed",j.options.preFixed)}if(j.options.postFixed){z.bind("postFixed.ScrollToFixed",j.options.postFixed)}if(j.options.preUnfixed){z.bind("preUnfixed.ScrollToFixed",j.options.preUnfixed)}if(j.options.postUnfixed){z.bind("postUnfixed.ScrollToFixed",j.options.postUnfixed)}if(j.options.preAbsolute){z.bind("preAbsolute.ScrollToFixed",j.options.preAbsolute)}if(j.options.postAbsolute){z.bind("postAbsolute.ScrollToFixed",j.options.postAbsolute)}if(j.options.fixed){z.bind("fixed.ScrollToFixed",j.options.fixed)}if(j.options.unfixed){z.bind("unfixed.ScrollToFixed",j.options.unfixed)}if(j.options.spacerClass){p.addClass(j.options.spacerClass)}z.bind("resize",function(){p.height(z.height())});z.bind("scroll.ScrollToFixed",function(){z.trigger("preUnfixed");i();z.trigger("unfixed");v()});z.bind("remove.ScrollToFixed",function(){z.trigger("preUnfixed");i();z.trigger("unfixed");a(window).unbind("resize",w);a(window).unbind("scroll",y);z.unbind(".ScrollToFixed");j.$el.removeData("ScrollToFixed")});w()};j.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);




// jquery.touchSwipe.min.js KOKE

// TouchSwipe v1.6.4
// https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false)}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){return J[a7].distance}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}})(jQuery);




// superfish.min.js KOKE

/*
 * jQuery Superfish Menu Plugin - v1.7.6
 * Copyright (c) 2015 
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;(function(e,s){"use strict";var n=function(){var n={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},o=function(){var n=/iPhone|iPad|iPod/i.test(navigator.userAgent);return n&&e(s).load(function(){e("body").children().on("click",e.noop)}),n}(),t=function(){var e=document.documentElement.style;return"behavior"in e&&"fill"in e&&/iemobile/i.test(navigator.userAgent)}(),i=function(){return!!s.PointerEvent}(),r=function(e,s){var o=n.menuClass;s.cssArrows&&(o+=" "+n.menuArrowClass),e.toggleClass(o)},a=function(s,o){return s.find("li."+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+" "+n.bcClass).filter(function(){return e(this).children(o.popUpSelector).hide().show().length}).removeClass(o.pathClass)},l=function(e){e.children("a").toggleClass(n.anchorClass)},h=function(e){var s=e.css("ms-touch-action"),n=e.css("touch-action");n=n||s,n="pan-y"===n?"auto":"pan-y",e.css({"ms-touch-action":n,"touch-action":n})},u=function(s,n){var r="li:has("+n.popUpSelector+")";e.fn.hoverIntent&&!n.disableHI?s.hoverIntent(c,f,r):s.on("mouseenter.superfish",r,c).on("mouseleave.superfish",r,f);var a="MSPointerDown.superfish";i&&(a="pointerdown.superfish"),o||(a+=" touchend.superfish"),t&&(a+=" mousedown.superfish"),s.on("focusin.superfish","li",c).on("focusout.superfish","li",f).on(a,"a",n,p)},p=function(s){var n=e(this),o=m(n),t=n.siblings(s.data.popUpSelector);return o.onHandleTouch.call(t)===!1?this:(t.length>0&&t.is(":hidden")&&(n.one("click.superfish",!1),"MSPointerDown"===s.type||"pointerdown"===s.type?n.trigger("focus"):e.proxy(c,n.parent("li"))()),void 0)},c=function(){var s=e(this),n=m(s);clearTimeout(n.sfTimer),s.siblings().superfish("hide").end().superfish("show")},f=function(){var s=e(this),n=m(s);o?e.proxy(d,s,n)():(clearTimeout(n.sfTimer),n.sfTimer=setTimeout(e.proxy(d,s,n),n.delay))},d=function(s){s.retainPath=e.inArray(this[0],s.$path)>-1,this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(v(this)),s.$path.length&&e.proxy(c,s.$path)())},v=function(e){return e.closest("."+n.menuClass)},m=function(e){return v(e).data("sf-options")};return{hide:function(s){if(this.length){var n=this,o=m(n);if(!o)return this;var t=o.retainPath===!0?o.$path:"",i=n.find("li."+o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector),r=o.speedOut;if(s&&(i.show(),r=0),o.retainPath=!1,o.onBeforeHide.call(i)===!1)return this;i.stop(!0,!0).animate(o.animationOut,r,function(){var s=e(this);o.onHide.call(s)})}return this},show:function(){var e=m(this);if(!e)return this;var s=this.addClass(e.hoverClass),n=s.children(e.popUpSelector);return e.onBeforeShow.call(n)===!1?this:(n.stop(!0,!0).animate(e.animation,e.speed,function(){e.onShow.call(n)}),this)},destroy:function(){return this.each(function(){var s,o=e(this),t=o.data("sf-options");return t?(s=o.find(t.popUpSelector).parent("li"),clearTimeout(t.sfTimer),r(o,t),l(s),h(o),o.off(".superfish").off(".hoverIntent"),s.children(t.popUpSelector).attr("style",function(e,s){return s.replace(/display[^;]+;?/g,"")}),t.$path.removeClass(t.hoverClass+" "+n.bcClass).addClass(t.pathClass),o.find("."+t.hoverClass).removeClass(t.hoverClass),t.onDestroy.call(o),o.removeData("sf-options"),void 0):!1})},init:function(s){return this.each(function(){var o=e(this);if(o.data("sf-options"))return!1;var t=e.extend({},e.fn.superfish.defaults,s),i=o.find(t.popUpSelector).parent("li");t.$path=a(o,t),o.data("sf-options",t),r(o,t),l(i),h(o),u(o,t),i.not("."+n.bcClass).superfish("hide",!0),t.onInit.call(this)})}}}();e.fn.superfish=function(s){return n[s]?n[s].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof s&&s?e.error("Method "+s+" does not exist on jQuery.fn.superfish"):n.init.apply(this,arguments)},e.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:e.noop,onBeforeShow:e.noop,onShow:e.noop,onBeforeHide:e.noop,onHide:e.noop,onIdle:e.noop,onDestroy:e.noop,onHandleTouch:e.noop}})(jQuery,window);



// jquery.slicknav.min.js KOKE

/*!
 * SlickNav Responsive Mobile Menu v1.0.4
 * (c) 2015 Josh Cope
 * licensed under MIT
 */
;(function ($, document, window) {
    var
    // default settings object.
        defaults = {
            label: 'MENU',
            duplicate: true,
            duration: 200,
            easingOpen: 'swing',
            easingClose: 'swing',
            closedSymbol: '&#9658;',
            openedSymbol: '&#9660;',
            prependTo: 'body',
            parentTag: 'a',
            closeOnClick: false,
            allowParentLinks: false,
            nestedParentLinks: true,
            showChildren: false,
            removeIds: false,
            removeClasses: false,
			brand: '',
            init: function () {},
            beforeOpen: function () {},
            beforeClose: function () {},
            afterOpen: function () {},
            afterClose: function () {}
        },
        mobileMenu = 'slicknav',
        prefix = 'slicknav';

    function Plugin(element, options) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = mobileMenu;

        this.init();
    }

    Plugin.prototype.init = function () {
        var $this = this,
            menu = $(this.element),
            settings = this.settings,
            iconClass,
            menuBar;

        // clone menu if needed
        if (settings.duplicate) {
            $this.mobileNav = menu.clone();
            //remove ids from clone to prevent css issues
            $this.mobileNav.removeAttr('id');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('id');
            });
        } else {
            $this.mobileNav = menu;

            // remove ids if set
            $this.mobileNav.removeAttr('id');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('id');
            });
        }

        // remove classes if set
        if (settings.removeClasses) {
            $this.mobileNav.removeAttr('class');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('class');
            });
        }

        // styling class for the button
        iconClass = prefix + '_icon';

        if (settings.label === '') {
            iconClass += ' ' + prefix + '_no-text';
        }

        if (settings.parentTag == 'a') {
            settings.parentTag = 'a href="#"';
        }

        // create menu bar
        $this.mobileNav.attr('class', prefix + '_nav');
        menuBar = $('<div class="' + prefix + '_menu"></div>');
		if (settings.brand !== '') {
			var brand = $('<div class="' + prefix + '_brand">'+settings.brand+'</div>');
			$(menuBar).append(brand);
		}
        $this.btn = $(
            ['<' + settings.parentTag + ' aria-haspopup="true" tabindex="0" class="' + prefix + '_btn ' + prefix + '_collapsed">',
                '<span class="' + prefix + '_menutxt">' + settings.label + '</span>',
                '<span class="' + iconClass + '">',
                    '<span class="' + prefix + '_icon-bar"></span>',
                    '<span class="' + prefix + '_icon-bar"></span>',
                    '<span class="' + prefix + '_icon-bar"></span>',
                '</span>',
            '</' + settings.parentTag + '>'
            ].join('')
        );
        $(menuBar).append($this.btn);
        $(settings.prependTo).prepend(menuBar);
        menuBar.append($this.mobileNav);
		
		// KOKE ja dodao:
		// var slickhead = $("<p></p>").text("dr.sc. Mirano Hess, Pomorski fakultet u Rijeci"); 
		// $(slickhead).addClass('slickheader'); 
		// $(menuBar).prepend(slickhead); 
		// $(menuBar).prepend("dr.sc.Mirano Hess, PFRI").addClass('slickheader'); 

        // iterate over structure adding additional structure
        var items = $this.mobileNav.find('li');
        $(items).each(function () {
            var item = $(this),
                data = {};
            data.children = item.children('ul').attr('role', 'menu');
            item.data('menu', data);

            // if a list item has a nested menu
            if (data.children.length > 0) {

                // select all text before the child menu
                // check for anchors

                var a = item.contents(),
                    containsAnchor = false,
                    nodes = [];

                $(a).each(function () {
                    if (!$(this).is('ul')) {
                        nodes.push(this);
                    } else {
                        return false;
                    }

                    if($(this).is("a")) {
                        containsAnchor = true;
                    }
                });

                var wrapElement = $(
                    '<' + settings.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + prefix + '_item"/>'
                );

                // wrap item text with tag and add classes unless we are separating parent links
                if ((!settings.allowParentLinks || settings.nestedParentLinks) || !containsAnchor) {
                    var $wrap = $(nodes).wrapAll(wrapElement).parent();
                    $wrap.addClass(prefix+'_row');
                } else
                    $(nodes).wrapAll('<span class="'+prefix+'_parent-link '+prefix+'_row"/>').parent();

                if (!settings.showChildren) {
                    item.addClass(prefix+'_collapsed');
                } else {
                    item.addClass(prefix+'_open');
                }

                item.addClass(prefix+'_parent');

                // create parent arrow. wrap with link if parent links and separating
                var arrowElement = $('<span class="'+prefix+'_arrow">'+(settings.showChildren?settings.openedSymbol:settings.closedSymbol)+'</span>');

                if (settings.allowParentLinks && !settings.nestedParentLinks && containsAnchor)
                    arrowElement = arrowElement.wrap(wrapElement).parent();

                //append arrow
                $(nodes).last().after(arrowElement);


            } else if ( item.children().length === 0) {
                 item.addClass(prefix+'_txtnode');
            }

            // accessibility for links
            item.children('a').attr('role', 'menuitem').click(function(event){
                //Ensure that it's not a parent
                if (settings.closeOnClick && !$(event.target).parent().closest('li').hasClass(prefix+'_parent')) {
                        //Emulate menu close if set
                        $($this.btn).click();
                    }
            });

            //also close on click if parent links are set
            if (settings.closeOnClick && settings.allowParentLinks) {
                item.children('a').children('a').click(function (event) {
                    //Emulate menu close
                    $($this.btn).click();
                });

                item.find('.'+prefix+'_parent-link a:not(.'+prefix+'_item)').click(function(event){
                    //Emulate menu close
                        $($this.btn).click();
                });
            }
        });

        // structure is in place, now hide appropriate items
        $(items).each(function () {
            var data = $(this).data('menu');
            if (!settings.showChildren){
                $this._visibilityToggle(data.children, null, false, null, true);
            }
        });

        // finally toggle entire menu
        $this._visibilityToggle($this.mobileNav, null, false, 'init', true);

        // accessibility for menu button
        $this.mobileNav.attr('role','menu');

        // outline prevention when using mouse
        $(document).mousedown(function(){
            $this._outlines(false);
        });

        $(document).keyup(function(){
            $this._outlines(true);
        });

        // menu button click
        $($this.btn).click(function (e) {
            e.preventDefault();
            $this._menuToggle();
        });

        // click on menu parent
        $this.mobileNav.on('click', '.' + prefix + '_item', function (e) {
            e.preventDefault();
            $this._itemClick($(this));
        });

        // check for enter key on menu button and menu parents
        $($this.btn).keydown(function (e) {
            var ev = e || event;
            if(ev.keyCode == 13) {
                e.preventDefault();
                $this._menuToggle();
            }
        });

        $this.mobileNav.on('keydown', '.'+prefix+'_item', function(e) {
            var ev = e || event;
            if(ev.keyCode == 13) {
                e.preventDefault();
                $this._itemClick($(e.target));
            }
        });

        // allow links clickable within parent tags if set
        if (settings.allowParentLinks && settings.nestedParentLinks) {
            $('.'+prefix+'_item a').click(function(e){
                    e.stopImmediatePropagation();
            });
        }
    };

    //toggle menu
    Plugin.prototype._menuToggle = function (el) {
        var $this = this;
        var btn = $this.btn;
        var mobileNav = $this.mobileNav;

        if (btn.hasClass(prefix+'_collapsed')) {
            btn.removeClass(prefix+'_collapsed');
            btn.addClass(prefix+'_open');
        } else {
            btn.removeClass(prefix+'_open');
            btn.addClass(prefix+'_collapsed');
        }
        btn.addClass(prefix+'_animating');
        $this._visibilityToggle(mobileNav, btn.parent(), true, btn);
    };

	// KOKE ja izbacio:
    // toggle clicked items
    // Plugin.prototype._itemClick = function (el) {
        // var $this = this;
        // var settings = $this.settings;
        // var data = el.data('menu');
        // if (!data) {
            // data = {};
            // data.arrow = el.children('.'+prefix+'_arrow');
            // data.ul = el.next('ul');
            // data.parent = el.parent();
            // //Separated parent link structure
            // if (data.parent.hasClass(prefix+'_parent-link')) {
                // data.parent = el.parent().parent();
                // data.ul = el.parent().next('ul');
            // }
            // el.data('menu', data);
        // }
        // if (data.parent.hasClass(prefix+'_collapsed')) {
            // data.arrow.html(settings.openedSymbol);
            // data.parent.removeClass(prefix+'_collapsed');
            // data.parent.addClass(prefix+'_open');
            // data.parent.addClass(prefix+'_animating');
            // $this._visibilityToggle(data.ul, data.parent, true, el);
        // } else {
            // data.arrow.html(settings.closedSymbol);
            // data.parent.addClass(prefix+'_collapsed');
            // data.parent.removeClass(prefix+'_open');
            // data.parent.addClass(prefix+'_animating');
            // $this._visibilityToggle(data.ul, data.parent, true, el);
        // }
    // };

	// KOKE ja dodao umjesto ovog gore:	
	Plugin.prototype._itemClick = function (el) {
		var $this = this;
		var settings = $this.settings;
		var data = el.data('menu');
		if (!data) {
			data = {};
			data.arrow = el.children('.' + prefix + '_arrow');
			data.ul = el.next('ul');
			data.parent = el.parent();
			//Separated parent link structure
			if (data.parent.hasClass(prefix + '_parent-link')) {
				data.parent = el.parent().parent();
				data.ul = el.parent().next('ul');
			}
			el.data('menu', data);
		}

		if (data.parent.hasClass(prefix + '_collapsed')) {

			//  **** Begin custom code ****
			data.parent.siblings('.slicknav_open').each(function () {
				var $li = $(this);
				var $el = $li.children('a');
				var $ul = $el.next('ul');
				$el.children('.' + prefix + '_arrow').html(settings.closedSymbol);
				$li.addClass(prefix + '_collapsed').addClass(prefix + '_animating').removeClass(prefix + '_open');
				$this._visibilityToggle($ul, $li, true, $el);
			});
			//  **** End custom code ****

			data.arrow.html(settings.openedSymbol);
			data.parent.removeClass(prefix + '_collapsed');
			data.parent.addClass(prefix + '_open');
			data.parent.addClass(prefix + '_animating');
			$this._visibilityToggle(data.ul, data.parent, true, el);
		} else {
			data.arrow.html(settings.closedSymbol);
			data.parent.addClass(prefix + '_collapsed');
			data.parent.removeClass(prefix + '_open');
			data.parent.addClass(prefix + '_animating');
			$this._visibilityToggle(data.ul, data.parent, true, el);
		}
	};

    // toggle actual visibility and accessibility tags
    Plugin.prototype._visibilityToggle = function(el, parent, animate, trigger, init) {
        var $this = this;
        var settings = $this.settings;
        var items = $this._getActionItems(el);
        var duration = 0;
        if (animate) {
            duration = settings.duration;
        }

        if (el.hasClass(prefix+'_hidden')) {
            el.removeClass(prefix+'_hidden');
             //Fire beforeOpen callback
                if (!init) {
                    settings.beforeOpen(trigger);
                }
            el.slideDown(duration, settings.easingOpen, function(){

                $(trigger).removeClass(prefix+'_animating');
                $(parent).removeClass(prefix+'_animating');

                //Fire afterOpen callback
                if (!init) {
                    settings.afterOpen(trigger);
                }
            });
            el.attr('aria-hidden','false');
            items.attr('tabindex', '0');
            $this._setVisAttr(el, false);
        } else {
            el.addClass(prefix+'_hidden');

            //Fire init or beforeClose callback
            if (!init){
                settings.beforeClose(trigger);
            }

            el.slideUp(duration, this.settings.easingClose, function() {
                el.attr('aria-hidden','true');
                items.attr('tabindex', '-1');
                $this._setVisAttr(el, true);
                el.hide(); //jQuery 1.7 bug fix

                $(trigger).removeClass(prefix+'_animating');
                $(parent).removeClass(prefix+'_animating');

                //Fire init or afterClose callback
                if (!init){
                    settings.afterClose(trigger);
                } else if (trigger == 'init'){
                    settings.init();
                }
            });
        }
    };

    // set attributes of element and children based on visibility
    Plugin.prototype._setVisAttr = function(el, hidden) {
        var $this = this;

        // select all parents that aren't hidden
        var nonHidden = el.children('li').children('ul').not('.'+prefix+'_hidden');

        // iterate over all items setting appropriate tags
        if (!hidden) {
            nonHidden.each(function(){
                var ul = $(this);
                ul.attr('aria-hidden','false');
                var items = $this._getActionItems(ul);
                items.attr('tabindex', '0');
                $this._setVisAttr(ul, hidden);
            });
        } else {
            nonHidden.each(function(){
                var ul = $(this);
                ul.attr('aria-hidden','true');
                var items = $this._getActionItems(ul);
                items.attr('tabindex', '-1');
                $this._setVisAttr(ul, hidden);
            });
        }
    };

    // get all 1st level items that are clickable
    Plugin.prototype._getActionItems = function(el) {
        var data = el.data("menu");
        if (!data) {
            data = {};
            var items = el.children('li');
            var anchors = items.find('a');
            data.links = anchors.add(items.find('.'+prefix+'_item'));
            el.data('menu', data);
        }
        return data.links;
    };

    Plugin.prototype._outlines = function(state) {
        if (!state) {
            $('.'+prefix+'_item, .'+prefix+'_btn').css('outline','none');
        } else {
            $('.'+prefix+'_item, .'+prefix+'_btn').css('outline','');
        }
    };

    Plugin.prototype.toggle = function(){
        var $this = this;
        $this._menuToggle();
    };

    Plugin.prototype.open = function(){
        var $this = this;
        if ($this.btn.hasClass(prefix+'_collapsed')) {
            $this._menuToggle();
        }
    };

    Plugin.prototype.close = function(){
        var $this = this;
        if ($this.btn.hasClass(prefix+'_open')) {
            $this._menuToggle();
        }
    };

    $.fn[mobileMenu] = function ( options ) {
        var args = arguments;

        // Is the first parameter an object (options), or was omitted, instantiate a new instance
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {

                // Only allow the plugin to be instantiated once due to methods
                if (!$.data(this, 'plugin_' + mobileMenu)) {

                    // if it has no instance, create a new one, pass options to our plugin constructor,
                    // and store the plugin instance in the elements jQuery data object.
                    $.data(this, 'plugin_' + mobileMenu, new Plugin( this, options ));
                }
            });

        // If is a string and doesn't start with an underscore or 'init' function, treat this as a call to a public method.
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

            // Cache the method call to make it possible to return a value
            var returns;

            this.each(function () {
                var instance = $.data(this, 'plugin_' + mobileMenu);

                // Tests that there's already a plugin-instance and checks that the requested public method exists
                if (instance instanceof Plugin && typeof instance[options] === 'function') {

                    // Call the method of our plugin instance, and pass it the supplied arguments.
                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }
            });

            // If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;
        }
    };
}(jQuery, document, window));



// jquery.hoverIntent.minified.js" KOKE

/**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 **/
(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);




// jquery.fullsizable.js KOKE

/*
jQuery fullsizable plugin v2.1.0 <https://github.com/MSchmidt/jquery-fullsizable>
(c) 2011-2015 Matthias Schmidt <http://m-schmidt.eu/>
*/
(function(){var e,n,l,t,u,o,i,r,c,d,s,a,f,h,p,g,v,m,w,b,z,_,k,F,S,x,q,y;e=jQuery,o="#jquery-fullsizable",d="#fullsized_image_holder",S="fullsized_spinner",n=e('<div id="jquery-fullsizable"><div id="fullsized_image_holder"></div></div>'),s=[],i=0,m=null,x=null,_=function(){var n;return n=s[i],null==n.ratio&&(n.ratio=(n.naturalHeight/n.naturalWidth).toFixed(2)),e(window).height()/n.ratio>e(window).width()?(e(n).width(e(window).width()),e(n).height(e(window).width()*n.ratio),e(n).css("margin-top",(e(window).height()-e(n).height())/2)):(e(n).height(e(window).height()),e(n).width(e(window).height()/n.ratio),e(n).css("margin-top",0))},a=function(e){return 27===e.keyCode&&u(),37===e.keyCode&&z(!0),39===e.keyCode?g(!0):void 0},z=function(e){return null==e&&(e=!1),i>0?F(s[i-1],-1,e):m.loop?F(s[s.length-1],-1,e):void 0},g=function(e){return null==e&&(e=!1),i<s.length-1?F(s[i+1],1,e):m.loop?F(s[0],1,e):void 0},F=function(n,l,t){return null==l&&(l=1),null==t&&(t=!1),i=n.index,e(d).hide(),e(d).html(n),m.navigation&&(t===!0?c():k()),null!=n.loaded?(e(o).removeClass(S),_(),e(d).fadeIn("fast"),w(l)):(e(o).addClass(S),n.onload=function(){return _(),e(d).fadeIn("slow",function(){return e(o).removeClass(S)}),this.loaded=!0,w(l)},n.src=n.buffer_src)},w=function(e){var n;if(1===e&&i<s.length-1)n=s[i+1];else{if(-1!==e&&i!==s.length-1||!(i>0))return;n=s[i-1]}return n.onload=function(){return this.loaded=!0},""===n.src?n.src=n.buffer_src:void 0},v=function(t,u){return e("body").append(n),e(window).bind("resize",_),F(t),e(o).hide().fadeIn(function(){return null!=m.detach_id&&(x=e(window).scrollTop(),e("#"+m.detach_id).css("display","none"),_()),l(),e(document).trigger("fullsizable:opened",u)})},u=function(){return null!=m.detach_id&&(e("#"+m.detach_id).css("display","block"),e(window).scrollTop(x)),e(o).fadeOut(function(){return n.remove()}),t(),e(o).removeClass(S),y(),e(window).unbind("resize",_)},f=function(){return s.length=0,e(m.selector).each(function(){var n;return n=new Image,n.buffer_src=e(this).attr("href"),n.index=s.length,s.push(n),m.openOnClick?e(this).click(function(e){return e.preventDefault(),m.reloadOnOpen&&f(),v(n,this)}):void 0})},b=function(){switch(m.navigation&&(n.append('<a id="fullsized_go_prev" href="#prev"></a><a id="fullsized_go_next" href="#next"></a>'),e(document).on("click","#fullsized_go_prev",function(e){return e.preventDefault(),e.stopPropagation(),z()}),e(document).on("click","#fullsized_go_next",function(e){return e.preventDefault(),e.stopPropagation(),g()})),m.closeButton&&(n.append('<a id="fullsized_close" href="#close"></a>'),e(document).on("click","#fullsized_close",function(e){return e.preventDefault(),e.stopPropagation(),u()})),m.fullscreenButton&&r()&&(n.append('<a id="fullsized_fullscreen" href="#fullscreen"></a>'),e(document).on("click","#fullsized_fullscreen",function(e){return e.preventDefault(),e.stopPropagation(),q()})),m.clickBehaviour){case"close":return e(document).on("click",o,u);case"next":return e(document).on("click",o,function(){return g(!0)});default:return e(document).on("click",o,m.clickBehaviour)}},l=function(){return e(document).bind("keydown",a),e(document).bind("fullsizable:next",function(){return g(!0)}),e(document).bind("fullsizable:prev",function(){return z(!0)}),e(document).bind("fullsizable:close",u)},y=function(){return e(document).unbind("keydown",a),e(document).unbind("fullsizable:next"),e(document).unbind("fullsizable:prev"),e(document).unbind("fullsizable:close")},c=function(){var e;return e=n.find("a"),e.is(":visible")===!0?(e.toggle(!1),n.bind("mousemove",h)):void 0},p=null,h=function(e){var l;return null===p&&(p=[e.clientX,e.clientY]),l=Math.round(Math.sqrt(Math.pow(p[1]-e.clientY,2)+Math.pow(p[0]-e.clientX,2))),l>=10?(n.unbind("mousemove",h),p=null,k()):void 0},k=function(){return e("#fullsized_close, #fullsized_fullscreen").toggle(!0),m.loop?(e("#fullsized_go_prev").show(),e("#fullsized_go_next").show()):(e("#fullsized_go_prev").toggle(0!==i),e("#fullsized_go_next").toggle(i!==s.length-1))},e.fn.fullsizable=function(n){return m=e.extend({selector:this.selector,detach_id:null,navigation:!0,closeButton:!0,fullscreenButton:!0,openOnClick:!0,clickBehaviour:"close",preload:!0,reloadOnOpen:!1,loop:!1},n||{}),b(),m.preload&&f(),e(document).bind("fullsizable:reload",f),e(document).bind("fullsizable:open",function(n,l){var t,u,o,i;for(m.reloadOnOpen&&f(),i=[],u=0,o=s.length;o>u;u++)t=s[u],i.push(t.buffer_src===e(l).attr("href")?v(t,l):void 0);return i}),this},r=function(){var e;return e=n.get(0),e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen?!0:!1},t=function(){return q(!0)},q=function(e){var l;return l=n.get(0),l.requestFullScreen?document.fullScreen||e?document.exitFullScreen():l.requestFullScreen():l.webkitRequestFullScreen?document.webkitIsFullScreen||e?document.webkitCancelFullScreen():l.webkitRequestFullScreen():l.mozRequestFullScreen?document.mozFullScreen||e?document.mozCancelFullScreen():l.mozRequestFullScreen():void 0}}).call(this);



// jquery-transit-modified.js

/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
/*!
 * modified for LayerSlider
 */
eval(function(h,b,j,f,g,i){g=function(a){return(a<b?"":g(parseInt(a/b)))+((a=a%b)>35?String.fromCharCode(a+29):a.toString(36))};while(j--){if(f[j]){h=h.replace(new RegExp("\\b"+g(j)+"\\b","g"),f[j])}}return h}('(j(e){j r(e){7(e J t.F)q e;k n=["2W","2V","O","1U"];k r=e.2U(0).2X()+e.2Y(1);7(e J t.F){q e}1k(k i=0;i<n.31;++i){k s=n[i]+r;7(s J t.F){q s}}}j i(){t.F[n.C]="";t.F[n.C]="Y(30)";q t.F[n.C]!==""}j f(e){7(E e==="1D"){4.2a(e)}q 4}j l(e,t,n){7(t===K){e.12(n)}L 7(t){e.12(t,n)}L{n()}}j c(t){k n=[];e.1j(t,j(t){t=e.2Z(t);t=e.H.1C[t]||e.2T[t]||t;t=d(t);7(e.2S(t,n)===-1){n.X(t)}});q n}j h(t,n,r,i){k s=c(t);7(e.1b[r]){r=e.1b[r]}k o=""+m(n)+" "+r;7(1B(i,10)>0){o+=" "+m(i)}k u=[];e.1j(s,j(e,t){u.X(t+" "+o)});q u.1n(", ")}j p(t,r){7(!r){e.2M[t]=K}e.H.1C[t]=n.C;e.W[t]={Q:j(n){k r=e(n).16("H:C");q r.Q(t)},G:j(n,r){k i=e(n).16("H:C");i.1u(t,r);e(n).16({"H:C":i})}}}j d(e){q e.1W(/([A-Z])/g,j(e){q"-"+e.21()})}j v(e,t){7(E e==="1D"&&!e.2L(/^[\\-0-9\\.]+$/)){q e}L{q""+e+t}}j m(t){k n=t;7(e.1H.1x[n]){n=e.1H.1x[n]}q v(n,"1U")}e.H={2K:"0.9.9",2N:K,1C:{2O:"1m",2R:"1m",2Q:"1m",2P:"1m",33:"1l",34:"1l",3j:"1l",3i:"1l"},20:K,1Y:27};k t=3h.3k("3l");k n={};k s=3o.3n.21().3m("3g")>-1;n.I=r("I");n.2b=r("2b");n.C=r("C");n.U=r("U");n.1Z=i();k o={I:"1N",2J:"3f",37:"36",35:"38",3a:"3e"};k u=n.1N=o[n.I]||D;1k(k a J n){7(n.1X(a)&&E e.1L[a]==="B"){e.1L[a]=n[a]}}t=D;e.1b={1F:"1d","J":"1d-J",1h:"1d-1h","J-1h":"1d-J-1h",3c:"w-z(0,1,.5,1)",3b:"w-z(.18, .3p, .2d, .19)",2h:"w-z(.2g,.2f,.1V,1)",2e:"w-z(.2I,.24,.1V,1)",2B:"w-z(.6,.2A,.2i,.2z)",2x:"w-z(.2y,.2C,.1Q,1)",2D:"w-z(.2H,.2G,.15,.1O)",2F:"w-z(.29,.1r,.2E,.2w)",2v:"w-z(.19,1,.22,1)",2n:"w-z(1,0,0,1)",2m:"w-z(.18,.2l,.1R,.2j)",2k:"w-z(.25,.46,.45,.2o)",2p:"w-z(.2u,.2c,.2t,.2s)",2q:"w-z(.2r,.2c,.3w,.22)",3W:"w-z(.1Q,.43,.44,1)",42:"w-z(.41,0,.26,1)",40:"w-z(.3Z,.1r,.3V,.3U)",4a:"w-z(.23,1,.32,1)",3X:"w-z(.1O,0,.3Y,1)",49:"w-z(.47,0,.4c,.4f)",4d:"w-z(.39,.4b,.4e,1)",48:"w-z(.3S,.1r,.18,.29)",3A:"w-z(.6,-.28,.3z,.24)",3B:"w-z(.26, .3C,.32,1.3D)",3q:"w-z(.1R,-.18,.3x,1.18)"};e.W["H:C"]={Q:j(t){q e(t).1P("C")||1S f},G:j(t,r){k i=r;7(!(i 3s f)){i=1S f(i)}7(n.C==="3r"&&!s){t.F[n.C]=i.1t(K)}L{t.F[n.C]=i.1t()}e(t).1P("C",i)}};e.W.C={G:e.W["H:C"].G};7(e.1y.3t<"1.8"){e.W.U={Q:j(e){q e.F[n.U]},G:j(e,t){e.F[n.U]=t}};e.W.I={Q:j(e){q e.F[n.I]},G:j(e,t){e.F[n.I]=t}}}p("1q");p("1s");p("N");p("1z");p("R");p("S");p("17");p("1i");p("Y");p("1o");p("1c");p("1p");p("1v");p("x",K);p("y",K);f.1E={1u:j(e,t){k n=E t==="1D"?t.1a(","):t.3u===1T?t:[t];n.3T(e);f.1E.G.V(4,n)},G:j(e){k t=1T.1E.3v.V(3E,[1]);7(4.1A[e]){4.1A[e].V(4,t)}L{4[e]=t.1n(",")}},Q:j(e){7(4.1w[e]){q 4.1w[e].V(4)}L{q 4[e]||0}},1A:{1s:j(e){4.17=v(e,"M")},1q:j(e,t){7(t===B){t=e}4.N=e+","+t},17:j(e){4.17=v(e,"M")},1i:j(e){4.1i=v(e,"M")},Y:j(e){4.Y=v(e,"M")},N:j(e,t){7(t===B){t=e}4.N=e+","+t},1z:j(e,t,n){7(t===B){t=e}7(n===B){n=e}4.1z=e+","+t+","+n},1p:j(e){4.1p=v(e,"M")},1v:j(e){4.1v=v(e,"M")},1c:j(e){4.1c=v(e,"T")},x:j(e){4.G("R",e,D)},y:j(e){4.G("R",D,e)},3F:j(e){4.G("S",e,D,D)},3O:j(e){4.G("S",D,e,D)},3N:j(e){4.G("S",D,D,e)},R:j(e,t){7(4.14===B){4.14=0}7(4.13===B){4.13=0}7(e!==D&&e!==B){4.14=v(e,"T")}7(t!==D&&t!==B){4.13=v(t,"T")}4.R=4.14+","+4.13},S:j(e,t,n){7(4.1f===B){4.1f=0}7(4.1g===B){4.1g=0}7(4.1e===B){4.1e=0}7(e!==D&&e!==B){4.1f=v(e,"T")}7(t!==D&&t!==B){4.1g=v(t,"T")}7(n!==D&&n!==B){4.1e=v(n,"T")}4.S=4.1f+","+4.1g+","+4.1e}},1w:{1s:j(){k e=4.17||"1M".1a("M")[0];q v(e,"M")},1q:j(){k e=(4.N||"1,1,1").1a(",");7(e[0]){e[0]=P(e[0])}7(e[1]){e[1]=P(e[1])}7(e[2]){e[2]=P(e[2])}q e[0]===e[1]===e[2]?e[0]:e},x:j(){q 4.14||0},y:j(){q 4.13||0},N:j(){k e=(4.N||"1,1,1").1a(",");7(e[0]){e[0]=P(e[0])}7(e[1]){e[1]=P(e[1])}7(e[2]){e[2]=P(e[2])}q e[0]===e[1]===e[2]?e[0]:e},1o:j(){k e=(4.1o||"0,0,0,1M").1a(",");1k(k t=0;t<=3;++t){7(e[t]){e[t]=P(e[t])}}7(e[3]){e[3]=v(e[3],"M")}q e}},2a:j(e){k t=4;e.1W(/([a-3P-3Q-9]+)\\((.*?)\\)/g,j(e,n,r){t.1u(n,r)})},1t:j(e){k t=[];1k(k r J 4){7(4.1X(r)){7(!n.1Z&&(r==="1i"||r==="Y"||r==="1c"||r==="U")){3R}7(r[0]!=="3M"){7(e&&r==="N"){t.X(r+"3d("+4[r]+",1)")}L 7(e&&r==="R"){t.X(r+"3d("+4[r]+",0)")}L{t.X(r+"("+4[r]+")")}}}}q t.1n(" ")}};e.1y.I=e.1y.H=j(t,r,i,s){k o=4;k a=0;k f=K;7(E r==="j"){s=r;r=B}7(E i==="j"){s=i;i=B}7(E t.1J!=="B"){i=t.1J;11 t.1J}7(E t.1I!=="B"){r=t.1I;11 t.1I}7(E t.1G!=="B"){s=t.1G;11 t.1G}7(E t.12!=="B"){f=t.12;11 t.12}7(E t.1K!=="B"){a=t.1K;11 t.1K}7(E r==="B"){r=e.1H.1x.1F}7(E i==="B"){i=e.1b.1F}r=m(r);k c=h(t,r,i,a);k p=e.H.20&&n.I;k d=p?1B(r,10)+1B(a,10):0;7(d===0){k v=j(e){o.16(t);7(s){s.V(o)}7(e){e()}};l(o,f,v);q o}k g={};k y=j(r){k i=27;k a=j(){7(i){o.3L(u,a)}7(d>0){o.1j(j(){4.F[n.I]=g[4]||D})}7(E s==="j"){s.V(o)}7(E r==="j"){r()}};7(d>0&&u&&e.H.1Y){i=K;o.3H(u,a)}L{3G.3I(a,d)}o.1j(j(){7(d>0){4.F[n.I]=c}e(4).16(t)})};k b=j(e){4.3J;y(e)};l(o,f,b);q 4};e.H.3K=h})(3y)',62,264,"||||this|||if||||||||||||function|var||||||return||||||cubic|||bezier||undefined|transform|null|typeof|style|set|transit|transition|in|true|else|deg|scale||parseFloat|get|translate|translate3d|px|transformOrigin|apply|cssHooks|push|rotateY|||delete|queue|_translateY|_translateX||css|rotate|55||split|cssEase|perspective|ease|_translate3dZ|_translate3dX|_translate3dY|out|rotateX|each|for|padding|margin|join|rotate3d|skewX|kmScale|05|kmRotate|toString|setFromString|skewY|getter|speeds|fn|scale3d|setter|parseInt|propertyMap|string|prototype|_default|complete|fx|duration|easing|delay|support|0deg|transitionEnd|86|data|165|68|new|Array|ms|355|replace|hasOwnProperty|useTransitionEnd|transform3d|enabled|toLowerCase|||045||175|false||95|parse|transitionDelay|03|675|easeInOutCubic|61|215|easeOutCubic|98|53|easeOutQuad|085|easeInQuad|easeInOutExpo|94|easeInOutQuad|easeInQuart|895|955|515|455|easeOutExpo|035|easeOutCirc|075|335|04|easeInCirc|82|easeInOutCirc|795|easeInExpo|135|785|645|MozTransition|version|match|cssNumber|modifiedForLayerSlider|marginLeft|marginTop|marginBottom|marginRight|inArray|cssProps|charAt|Webkit|Moz|toUpperCase|substr|camelCase|90deg|length||paddingLeft|paddingRight|WebkitTransition|oTransitionEnd|OTransition|webkitTransitionEnd||msTransition|easeInCubic|snap||MSTransitionEnd|transitionend|chrome|document|paddingTop|paddingBottom|createElement|div|indexOf|userAgent|navigator|055|easeInOutBack|WebkitTransform|instanceof|jquery|constructor|slice|685|265|jQuery|735|easeInBack|easeOutBack|885|275|arguments|t3dx|window|bind|setTimeout|offsetWidth|getTransitionValue|unbind|_|t3dz|t3dy|zA|Z0|continue|445|unshift|06|855|easeOutQuart|easeInOutQuint|07|755|easeInQuint|77|easeInOutQuart|84|||||easeInOutSine|easeInSine|easeOutQuint|575|745|easeOutSine|565|715".split("|")));


// layerslider.transitions.js

eval(function(h,b,j,f,g,i){g=function(a){return(a<b?"":g(parseInt(a/b)))+((a=a%b)>35?String.fromCharCode(a+29):a.toString(36))};while(j--){if(f[j]){h=h.replace(new RegExp("\\b"+g(j)+"\\b","g"),f[j])}}return h}('23 26={1W:[{j:"13 M E",d:1,g:1,f:{e:0,i:"n"},c:{o:"X",a:"1e",b:F,h:"r"}},{j:"13 M r",d:1,g:1,f:{e:0,i:"n"},c:{o:"X",a:"1e",b:F,h:"E"}},{j:"13 M N",d:1,g:1,f:{e:0,i:"n"},c:{o:"X",a:"1e",b:F,h:"K"}},{j:"13 M K",d:1,g:1,f:{e:0,i:"n"},c:{o:"X",a:"1e",b:F,h:"N"}},{j:"20",d:1,g:1,f:{e:0,i:"n"},c:{o:"14",a:"1e",b:F,h:"r"}},{j:"Z R n",d:[2,4],g:[4,7],f:{e:1j,i:"n"},c:{o:"14",a:"z",b:F,h:"r"}},{j:"Z R B",d:[2,4],g:[4,7],f:{e:1j,i:"B"},c:{o:"14",a:"z",b:F,h:"r"}},{j:"Z R 1k-n",d:[2,4],g:[4,7],f:{e:1j,i:"1k-n"},c:{o:"14",a:"z",b:F,h:"r"}},{j:"Z R 1k-B",d:[2,4],g:[4,7],f:{e:1j,i:"1k-B"},c:{o:"14",a:"z",b:F,h:"r"}},{j:"Z R (k)",d:[2,4],g:[4,7],f:{e:1j,i:"k"},c:{o:"14",a:"z",b:F,h:"r"}},{j:"1x 1G M E",d:1,g:1r,f:{e:25,i:"B"},c:{o:"14",a:"22",b:T,h:"r"}},{j:"1x 1G M r",d:1,g:1r,f:{e:25,i:"n"},c:{o:"14",a:"v",b:T,h:"r"}},{j:"1x 1G M N",d:1r,g:1,f:{e:25,i:"1k-B"},c:{o:"14",a:"v",b:T,h:"r"}},{j:"1x 1G M K",d:1r,g:1,f:{e:25,i:"1k-n"},c:{o:"14",a:"v",b:T,h:"r"}},{j:"1x Y M E",d:1,g:25,f:{e:1j,i:"B"},c:{o:"X",a:"v",b:1g,h:"r"}},{j:"1x Y M r",d:1,g:25,f:{e:1j,i:"n"},c:{o:"X",a:"v",b:1g,h:"E"}},{j:"1x 1U M N",d:25,g:1,f:{e:1j,i:"1k-B"},c:{o:"X",a:"v",b:1g,h:"K"}},{j:"1x Y M K",d:25,g:1,f:{e:1j,i:"1k-n"},c:{o:"X",a:"v",b:1g,h:"N"}},{j:"13 R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{o:"X",a:"z",b:1l,h:"E"}},{j:"13 R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{o:"X",a:"z",b:1l,h:"r"}},{j:"13 R m N (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{o:"X",a:"z",b:1l,h:"N"}},{j:"13 R m K (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{o:"X",a:"z",b:1l,h:"K"}},{j:"13 k R m k 1P",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{o:"X",a:"z",b:1l,h:"k"}},{j:"13 d m E (n)",d:[7,11],g:1,f:{e:1a,i:"n"},c:{o:"X",a:"v",b:p,h:"E"}},{j:"13 d m E (B)",d:[7,11],g:1,f:{e:1a,i:"B"},c:{o:"X",a:"v",b:p,h:"E"}},{j:"13 d m E (k)",d:[7,11],g:1,f:{e:1a,i:"k"},c:{o:"X",a:"v",b:p,h:"E"}},{j:"13 d m r (n)",d:[7,11],g:1,f:{e:1a,i:"n"},c:{o:"X",a:"v",b:p,h:"r"}},{j:"13 d m r (B)",d:[7,11],g:1,f:{e:1a,i:"B"},c:{o:"X",a:"v",b:p,h:"r"}},{j:"13 d m r (k)",d:[7,11],g:1,f:{e:1a,i:"k"},c:{o:"X",a:"v",b:p,h:"r"}},{j:"13 d M K m N (n)",d:[7,11],g:1,f:{e:1a,i:"n"},c:{o:"X",a:"v",b:p,h:"N"}},{j:"13 d M K m N (k)",d:[7,11],g:1,f:{e:1a,i:"k"},c:{o:"X",a:"v",b:p,h:"N"}},{j:"13 d M N m K (B)",d:[7,11],g:1,f:{e:1a,i:"B"},c:{o:"X",a:"v",b:p,h:"K"}},{j:"13 d M N m K (k)",d:[7,11],g:1,f:{e:1a,i:"k"},c:{o:"X",a:"v",b:p,h:"K"}},{j:"13 O m N (n)",d:1,g:[12,16],f:{e:q,i:"n"},c:{o:"X",a:"v",b:p,h:"N"}},{j:"13 O m N (B)",d:1,g:[12,16],f:{e:q,i:"B"},c:{o:"X",a:"v",b:p,h:"N"}},{j:"13 O m N (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{o:"X",a:"v",b:p,h:"N"}},{j:"13 O m K (n)",d:1,g:[12,16],f:{e:q,i:"n"},c:{o:"X",a:"v",b:p,h:"K"}},{j:"13 O m K (B)",d:1,g:[12,16],f:{e:q,i:"B"},c:{o:"X",a:"v",b:p,h:"K"}},{j:"13 O m K (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{o:"X",a:"v",b:p,h:"K"}},{j:"13 O M r m E (n)",d:1,g:[12,16],f:{e:q,i:"n"},c:{o:"X",a:"v",b:p,h:"E"}},{j:"13 O M r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{o:"X",a:"v",b:p,h:"E"}},{j:"13 O M E m r (B)",d:1,g:[12,16],f:{e:q,i:"B"},c:{o:"X",a:"v",b:p,h:"r"}},{j:"13 O M E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{o:"X",a:"v",b:p,h:"r"}},{j:"Z u Y R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{o:"Q",a:"z",b:1l,h:"E"}},{j:"Z u Y R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{o:"Q",a:"z",b:1l,h:"r"}},{j:"Z u Y R m N (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{o:"Q",a:"z",b:1l,h:"N"}},{j:"Z u Y R m K (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{o:"Q",a:"z",b:1l,h:"K"}},{j:"Z u Y k R m k 1P",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{o:"Q",a:"z",b:1l,h:"k"}},{j:"Z u Y R M K-r (n)",d:[2,4],g:[4,7],f:{e:1f,i:"n"},c:{o:"Q",a:"z",b:1l,h:"1Y"}},{j:"Z u Y R M N-E (B)",d:[2,4],g:[4,7],f:{e:1f,i:"B"},c:{o:"Q",a:"z",b:1l,h:"24"}},{j:"Z u Y R M K-E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{o:"Q",a:"z",b:1l,h:"1T"}},{j:"Z u Y R M N-r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{o:"Q",a:"z",b:1l,h:"1X"}},{j:"Z u Y d m E (n)",d:[7,11],g:1,f:{e:1a,i:"n"},c:{o:"Q",a:"v",b:p,h:"E"}},{j:"Z u Y d m E (B)",d:[7,11],g:1,f:{e:1a,i:"B"},c:{o:"Q",a:"v",b:p,h:"E"}},{j:"Z u Y d m E (k)",d:[7,11],g:1,f:{e:1a,i:"k"},c:{o:"Q",a:"v",b:p,h:"E"}},{j:"Z u Y d m r (n)",d:[7,11],g:1,f:{e:1a,i:"n"},c:{o:"Q",a:"v",b:p,h:"r"}},{j:"Z u Y d m r (B)",d:[7,11],g:1,f:{e:1a,i:"B"},c:{o:"Q",a:"v",b:p,h:"r"}},{j:"Z u Y d m r (k)",d:[7,11],g:1,f:{e:1a,i:"k"},c:{o:"Q",a:"v",b:p,h:"r"}},{j:"Z u Y d M K m N (n)",d:[7,11],g:1,f:{e:1a,i:"n"},c:{o:"Q",a:"v",b:p,h:"N"}},{j:"Z u Y d M K m N (k)",d:[7,11],g:1,f:{e:1a,i:"k"},c:{o:"Q",a:"v",b:p,h:"N"}},{j:"Z u Y d M N m K (B)",d:[7,11],g:1,f:{e:1a,i:"B"},c:{o:"Q",a:"v",b:p,h:"K"}},{j:"Z u Y d M N m K (k)",d:[7,11],g:1,f:{e:1a,i:"k"},c:{o:"Q",a:"v",b:p,h:"K"}},{j:"Z u Y O m N (n)",d:1,g:[12,16],f:{e:q,i:"n"},c:{o:"Q",a:"v",b:p,h:"N"}},{j:"Z u Y O m N (B)",d:1,g:[12,16],f:{e:q,i:"B"},c:{o:"Q",a:"v",b:p,h:"N"}},{j:"Z u Y O m N (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{o:"Q",a:"v",b:p,h:"N"}},{j:"Z u Y O m K (n)",d:1,g:[12,16],f:{e:q,i:"n"},c:{o:"Q",a:"v",b:p,h:"K"}},{j:"Z u Y O m K (B)",d:1,g:[12,16],f:{e:q,i:"B"},c:{o:"Q",a:"v",b:p,h:"K"}},{j:"Z u Y O m K (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{o:"Q",a:"v",b:p,h:"K"}},{j:"Z u Y O M r m E (n)",d:1,g:[12,16],f:{e:q,i:"n"},c:{o:"Q",a:"v",b:p,h:"E"}},{j:"Z u Y O M r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{o:"Q",a:"v",b:p,h:"E"}},{j:"Z u Y O M E m r (B)",d:1,g:[12,16],f:{e:q,i:"B"},c:{o:"Q",a:"v",b:p,h:"r"}},{j:"Z u Y O M E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{o:"Q",a:"v",b:p,h:"r"}},{j:"1t",d:1,g:1,f:{e:0,i:"n"},c:{o:"Q",a:"1e",b:T,h:"r",1h:.5}},{j:"1t d",d:4,g:1,f:{e:1f,i:"n"},c:{o:"Q",a:"1e",b:T,h:"r",1h:.5}},{j:"1t g",d:1,g:4,f:{e:1f,i:"n"},c:{o:"Q",a:"1e",b:T,h:"r",1h:.5}},{j:"1t R A",d:3,g:4,f:{e:1r,i:"n"},c:{o:"Q",a:"1e",b:T,h:"r",1h:.5,y:w}},{j:"1t R G",d:3,g:4,f:{e:1r,i:"n"},c:{o:"Q",a:"1e",b:T,h:"K",1h:.5,x:-w}},{j:"1t-1H R A",d:3,g:4,f:{e:15,i:"n"},c:{o:"Q",a:"1e",b:T,h:"r",1h:.5,y:w}},{j:"1t-1H R G",d:3,g:4,f:{e:15,i:"n"},c:{o:"Q",a:"1e",b:T,h:"K",1h:.5,x:-w}},{j:"1t 1H d",d:4,g:1,f:{e:1f,i:"n"},c:{o:"Q",a:"1e",b:T,h:"E",1h:.5}},{j:"1t 1H g",d:1,g:4,f:{e:1f,i:"n"},c:{o:"Q",a:"1e",b:T,h:"r",1h:.5}},{j:"1b f M r",d:1,g:1,f:{e:0,i:"n"},c:{o:"X",a:"z",b:T,h:"E",y:w}},{j:"1b f M E",d:1,g:1,f:{e:0,i:"n"},c:{o:"X",a:"z",b:T,h:"r",y:-w}},{j:"1b f M K",d:1,g:1,f:{e:0,i:"n"},c:{o:"X",a:"z",b:T,h:"N",x:-w}},{j:"1b f M N",d:1,g:1,f:{e:0,i:"n"},c:{o:"X",a:"z",b:T,h:"K",x:w}},{j:"1b R M r",d:[3,4],g:[3,4],f:{e:19,i:"n"},c:{o:"14",a:"z",b:T,h:"r",y:w}},{j:"1b R M E",d:[3,4],g:[3,4],f:{e:19,i:"B"},c:{o:"14",a:"z",b:T,h:"r",y:-w}},{j:"1b R M K",d:[3,4],g:[3,4],f:{e:19,i:"n"},c:{o:"14",a:"z",b:T,h:"r",x:-w}},{j:"1b R M N",d:[3,4],g:[3,4],f:{e:19,i:"B"},c:{o:"14",a:"z",b:T,h:"r",x:w}},{j:"1b d M K",d:[6,12],g:1,f:{e:19,i:"n"},c:{o:"14",a:"z",b:T,h:"r",x:w}},{j:"1b d M N",d:[6,12],g:1,f:{e:19,i:"B"},c:{o:"14",a:"z",b:T,h:"r",x:-w}},{j:"1b g M r",d:1,g:[6,12],f:{e:19,i:"n"},c:{o:"14",a:"z",b:T,h:"r",y:-w}},{j:"1b g M E",d:1,g:[6,12],f:{e:19,i:"B"},c:{o:"14",a:"z",b:T,h:"r",y:w}},{j:"1u d M r",d:[3,10],g:1,f:{e:19,i:"n"},c:{o:"14",a:"z",b:T,h:"r",y:w}},{j:"1u d M E",d:[3,10],g:1,f:{e:19,i:"B"},c:{o:"14",a:"z",b:T,h:"r",y:-w}},{j:"1u g M K",d:1,g:[3,10],f:{e:19,i:"n"},c:{o:"14",a:"z",b:T,h:"r",x:-w}},{j:"1u g M N",d:1,g:[3,10],f:{e:19,i:"B"},c:{o:"14",a:"z",b:T,h:"r",x:w}},{j:"1u u 1z f M r",d:1,g:1,f:{e:q,i:"n"},c:{o:"Q",a:"z",b:T,h:"E",1h:.1,1y:-w,y:w}},{j:"1u u 1z f M E",d:1,g:1,f:{e:q,i:"n"},c:{o:"Q",a:"z",b:T,h:"r",1h:.1,1y:w,y:-w}},{j:"1u u 1z R M r",d:[3,4],g:[3,4],f:{e:19,i:"n"},c:{o:"Q",a:"z",b:T,h:"E",1y:-1v}},{j:"1u u 1z R M E",d:[3,4],g:[3,4],f:{e:19,i:"n"},c:{o:"Q",a:"z",b:T,h:"r",1y:-1v}},{j:"1u u 1z R M k",d:[3,4],g:[3,4],f:{e:19,i:"k"},c:{o:"Q",a:"z",b:T,h:"k",1y:-1v}},{j:"D f 1M",d:1,g:1,f:{e:0,i:"n"},c:{o:"14",a:"z",b:T,h:"r",1h:.1}},{j:"D f M 1L",d:1,g:1,f:{e:0,i:"n"},c:{o:"14",a:"z",b:T,h:"r",1h:2}},{j:"D R k",d:[3,4],g:[3,4],f:{e:1r,i:"k"},c:{o:"14",a:"z",b:T,h:"r",1h:.1}},{j:"D R M 1L k",d:[3,4],g:[3,4],f:{e:1r,i:"k"},c:{o:"14",a:"z",b:T,h:"r",1h:2}},{j:"D 1M u 1z R k",d:[3,4],g:[3,4],f:{e:1r,i:"k"},c:{o:"14",a:"z",b:T,h:"r",1h:.1,1y:w}},{j:"D u 1z R M 1L k",d:[3,4],g:[3,4],f:{e:1r,i:"k"},c:{o:"14",a:"z",b:T,h:"r",1h:2,1y:-w}},{j:"1B-Y R 21",d:3,g:4,f:{e:15,i:"n"},c:{o:"X",a:"v",b:1Z,h:"1T"}},{j:"1B-Y d A",d:6,g:1,f:{e:0,i:"n"},c:{o:"Q",a:"z",b:T,h:"r"}},{j:"1B-Y d G",d:6,g:1,f:{e:0,i:"n"},c:{o:"Q",a:"z",b:T,h:"K"}},{j:"1B-Y g A",d:1,g:8,f:{e:0,i:"n"},c:{o:"Q",a:"z",b:T,h:"r"}},{j:"1B-Y g G",d:1,g:8,f:{e:0,i:"n"},c:{o:"Q",a:"z",b:T,h:"K"}}],1V:[{j:"1c f m E (l&#t;)",d:1,g:1,f:{e:q,i:"n"},s:{c:{y:1E},a:"1K",b:F,h:"A"},C:{c:{y:l},a:"z",b:F,h:"A"}},{j:"1c f m r (l&#t;)",d:1,g:1,f:{e:q,i:"n"},s:{c:{y:-1E},a:"1K",b:F,h:"A"},C:{c:{y:-l},a:"z",b:F,h:"A"}},{j:"1c f m N (l&#t;)",d:1,g:1,f:{e:q,i:"n"},s:{c:{x:-1E},a:"1K",b:1w,h:"G"},C:{c:{x:-l},a:"z",b:1w,h:"G"}},{j:"1c f m K (l&#t;)",d:1,g:1,f:{e:q,i:"n"},s:{c:{x:1E},a:"1K",b:1w,h:"G"},C:{c:{x:l},a:"z",b:1w,h:"G"}},{j:"1c R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"n"},s:{c:{y:l},a:"v",b:F,h:"A"}},{j:"1c R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"B"},s:{c:{y:-l},a:"v",b:F,h:"A"}},{j:"1c R m N (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1k-n"},s:{c:{x:-l},a:"v",b:F,h:"G"}},{j:"1c R m K (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1k-B"},s:{c:{x:l},a:"v",b:F,h:"G"}},{j:"1D S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{y:l},a:"v",b:1I,h:"A"}},{j:"1C S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{x:l},a:"v",b:1I,h:"G"}},{j:"D u S R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"n"},L:{c:{I:.1A},b:1m,a:"18"},s:{c:{y:l},a:"H",b:F,h:"A"},C:{b:1g,a:"H"}},{j:"D u S R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"B"},L:{c:{I:.1A},b:1m,a:"18"},s:{c:{y:-l},a:"H",b:F,h:"A"},C:{b:1g,a:"H"}},{j:"D u S R m N (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1k-n"},L:{c:{I:.1A},b:1m,a:"18"},s:{c:{x:-l},a:"H",b:F,h:"G"},C:{b:1g,a:"H"}},{j:"D u S R m K (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1k-B"},L:{c:{I:.1A},b:1m,a:"18"},s:{c:{x:l},a:"H",b:F,h:"G"},C:{b:1g,a:"H"}},{j:"D u A S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},L:{c:{I:.1A,x:1j},b:1m,a:"18"},s:{c:{y:l},a:"H",b:1I,h:"A"},C:{c:{x:0},b:1g,a:"H"}},{j:"D u G S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},L:{c:{I:.1A,y:-15},b:1m,a:"18"},s:{c:{x:l},a:"H",b:1I,h:"G"},C:{c:{y:0},b:1g,a:"H"}},{j:"1c d m E (l&#t;)",d:[5,9],g:1,f:{e:q,i:"n"},s:{c:{y:l},a:"v",b:1d,h:"A"}},{j:"1c d m r (l&#t;)",d:[5,9],g:1,f:{e:q,i:"n"},s:{c:{y:-l},a:"v",b:1d,h:"A"}},{j:"1c d m N (l&#t;)",d:[5,9],g:1,f:{e:q,i:"n"},s:{c:{x:-l},a:"v",b:F,h:"G"}},{j:"1c d m K (l&#t;)",d:[5,9],g:1,f:{e:q,i:"B"},s:{c:{x:l},a:"v",b:F,h:"G"}},{j:"1D S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:l},a:"v",b:1d,h:"A"}},{j:"1C S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{x:-l},a:"v",b:1d,h:"G"}},{j:"1C S d k (1F&#t;)",d:[3,7],g:1,f:{e:1S,i:"k"},s:{c:{x:-1F},a:"v",b:1Q,h:"G"}},{j:"D u S d m E (l&#t;)",d:[5,9],g:1,f:{e:19,i:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:l},a:"H",b:1n,h:"A"},C:{c:{e:W},a:"J",b:p}},{j:"D u S d m r (l&#t;)",d:[5,9],g:1,f:{e:19,i:"B"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:-l},a:"H",b:1n,h:"A"},C:{c:{e:W},a:"J",b:p}},{j:"D u S d m N (l&#t;)",d:[5,9],g:1,f:{e:19,i:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"v",b:p,h:"G"},C:{c:{e:W},a:"J",b:p}},{j:"D u S d m K (l&#t;)",d:[5,9],g:1,f:{e:19,i:"B"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:l},a:"v",b:p,h:"G"},C:{c:{e:W},a:"J",b:p}},{j:"D u A S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:l},a:"H",b:1n,h:"A"},C:{c:{e:W},a:"J",b:p}},{j:"D u G S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"H",b:p,h:"G"},C:{c:{e:W},a:"J",b:p}},{j:"1c O m E (l&#t;)",d:1,g:[5,9],f:{e:q,i:"n"},s:{c:{y:l},a:"v",b:1d,h:"A"}},{j:"1c O m r (l&#t;)",d:1,g:[5,9],f:{e:q,i:"n"},s:{c:{y:-l},a:"v",b:1d,h:"A"}},{j:"1c O m N (l&#t;)",d:1,g:[5,9],f:{e:q,i:"n"},s:{c:{x:-l},a:"v",b:F,h:"G"}},{j:"1c O m K (l&#t;)",d:1,g:[5,9],f:{e:q,i:"B"},s:{c:{x:l},a:"v",b:F,h:"G"}},{j:"1D S O k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{y:l},a:"v",b:1d,h:"A"}},{j:"1C S O k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{x:-l},a:"v",b:1d,h:"G"}},{j:"1D S O k (1F&#t;)",d:1,g:[4,9],f:{e:1S,i:"k"},s:{c:{y:1F},a:"v",b:1Q,h:"A"}},{j:"D u S O m E (l&#t;)",d:1,g:[7,11],f:{e:19,i:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:l},a:"v",b:p,h:"A"},C:{c:{e:W},a:"J",b:p}},{j:"D u S O m r (l&#t;)",d:1,g:[7,11],f:{e:19,i:"B"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:-l},a:"v",b:p,h:"A"},C:{c:{e:W},a:"J",b:p}},{j:"D u S O m N (l&#t;)",d:1,g:[7,11],f:{e:19,i:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"H",b:1n,h:"G"},C:{c:{e:W},a:"J",b:p}},{j:"D u S O m K (l&#t;)",d:1,g:[7,11],f:{e:q,i:"B"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:l},a:"H",b:1n,h:"G"},C:{c:{e:W},a:"J",b:p}},{j:"D u A S O k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:l},a:"H",b:p,h:"A"},C:{c:{e:W},a:"J",b:p}},{j:"D u G S O k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"H",b:1n,h:"G"},C:{c:{e:W},a:"J",b:p}},{j:"1R 1N 1O u S m E (l&#t;)",d:1,g:[7,11],f:{e:q,i:"n"},L:{c:{I:.P,x:-1j},b:p,a:"z"},s:{c:{x:1j,y:l},a:"v",b:F,h:"A"},C:{c:{x:0,e:W},a:"z",b:p}},{j:"1R 1N 1O u S m r (l&#t;)",d:1,g:[7,11],f:{e:q,i:"B"},L:{c:{I:.P,x:-1j},b:p,a:"z"},s:{c:{x:1j,y:-l},a:"v",b:F,h:"A"},C:{c:{x:0,e:W},a:"z",b:p}},{j:"1b 1s m E (w&#t;)",d:1,g:1,f:{e:q,i:"n"},s:{c:{y:w},a:"v",b:1d,h:"A"}},{j:"1b 1s m r (w&#t;)",d:1,g:1,f:{e:q,i:"n"},s:{c:{y:-w},a:"v",b:1d,h:"A"}},{j:"1b 1s m N (w&#t;)",d:1,g:1,f:{e:q,i:"n"},s:{c:{x:-w},a:"v",b:1d,h:"G"}},{j:"1b 1s m K (w&#t;)",d:1,g:1,f:{e:q,i:"n"},s:{c:{x:w},a:"v",b:1d,h:"G"}},{j:"D u 17 1s m E (w&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,x:1j,y:1v},a:"1e",b:1w,h:"A"},C:{c:{x:0,y:w},b:1w,a:"1e"}},{j:"D u 17 1s m r (w&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,x:1j,y:-1v},a:"1e",b:1w,h:"A"},C:{c:{x:0,y:-w},b:1w,a:"1e"}},{j:"D u 17 1o m E (w&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"n"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{y:w},a:"H",b:F,h:"A"},C:{b:1g,a:"H"}},{j:"D u 17 1o m r (w&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"B"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{y:-w},a:"H",b:F,h:"A"},C:{b:1g,a:"H"}},{j:"D u 17 1o m N (w&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1k-n"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{x:-w},a:"H",b:F,h:"G"},C:{b:1g,a:"H"}},{j:"D u 17 1o m K (w&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1k-B"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{x:w},a:"H",b:F,h:"G"},C:{b:1g,a:"H"}},{j:"D u A 17 1o k (w&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},L:{c:{I:.1i,x:-15},b:1p,a:"18"},s:{c:{y:q},a:"H",b:1p,h:"A"},C:{c:{y:w,x:0},b:1p,a:"H"}},{j:"D u G 17 1o k (w&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},L:{c:{I:.1i,y:15},b:1p,a:"18"},s:{c:{x:q},a:"H",b:1p,h:"G"},C:{c:{x:w,y:0},b:1p,a:"H"}},{j:"1b d m E (w&#t;)",d:[5,9],g:1,f:{e:q,i:"n"},s:{c:{y:w},a:"v",b:1d,h:"A"}},{j:"1b d m r (w&#t;)",d:[5,9],g:1,f:{e:q,i:"n"},s:{c:{y:-w},a:"v",b:1d,h:"A"}},{j:"1D 17 d k (w&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:w},a:"v",b:1d,h:"A"}},{j:"D u 17 d m E (w&#t;)",d:[5,9],g:1,f:{e:q,i:"n"},L:{c:{I:.P,x:3},b:p,a:"J"},s:{c:{y:w},a:"H",b:F,h:"A"},C:{c:{e:W,x:0},a:"J",b:p}},{j:"D u 17 d m r (w&#t;)",d:[5,9],g:1,f:{e:q,i:"B"},L:{c:{I:.P,x:3},b:p,a:"J"},s:{c:{y:-w},a:"H",b:F,h:"A"},C:{c:{e:W,x:0},a:"J",b:p}},{j:"D u 17 d m N (w&#t;)",d:[5,9],g:1,f:{e:q,i:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-w},a:"H",b:F,h:"G"},C:{c:{e:W},a:"J",b:p}},{j:"D u 17 d m K (w&#t;)",d:[5,9],g:1,f:{e:q,i:"B"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:w},a:"H",b:F,h:"G"},C:{c:{e:W},a:"J",b:p}},{j:"D u A 17 d k (w&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},L:{c:{I:.P,x:3},b:p,a:"J"},s:{c:{y:w},a:"H",b:F,h:"A"},C:{c:{e:W,x:0},a:"J",b:p}},{j:"D u G 17 d k (w&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-w},a:"H",b:F,h:"G"},C:{c:{e:W},a:"J",b:p}},{j:"D u A 17 1J d m E (w&#t;)",d:[7,11],g:1,f:{e:q,i:"n"},s:{c:{I:.P,x:5,y:1v},a:"18",b:F,h:"A"},C:{c:{x:0,y:w},a:"18",b:F}},{j:"D u A 17 1J d m r (w&#t;)",d:[7,11],g:1,f:{e:q,i:"B"},s:{c:{I:.P,x:5,y:-1v},a:"18",b:F,h:"A"},C:{c:{x:0,y:-w},a:"18",b:F}},{j:"1b O m N (w&#t;)",d:1,g:[5,9],f:{e:q,i:"n"},s:{c:{x:-w},a:"v",b:F,h:"G"}},{j:"1b O m K (w&#t;)",d:1,g:[5,9],f:{e:q,i:"B"},s:{c:{x:w},a:"v",b:F,h:"G"}},{j:"1C 17 O k (w&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{x:-w},a:"v",b:F,h:"G"}},{j:"D u 17 O m N (w&#t;)",d:1,g:[7,11],f:{e:q,i:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-w},a:"H",b:F,h:"G"},C:{c:{e:W},a:"J",b:p}},{j:"D u 17 O m K (w&#t;)",d:1,g:[7,11],f:{e:q,i:"B"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:w},a:"H",b:F,h:"G"},C:{c:{e:W},a:"J",b:p}},{j:"D u 17 O m E (w&#t;)",d:1,g:[7,11],f:{e:q,i:"n"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:w},a:"H",b:F,h:"A"},C:{c:{e:W},a:"J",b:p}},{j:"D u 17 O m r (w&#t;)",d:1,g:[7,11],f:{e:q,i:"B"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:-w},a:"H",b:F,h:"A"},C:{c:{e:W},a:"J",b:p}},{j:"D u A 17 O k (w&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:w},a:"H",b:F,h:"A"},C:{c:{e:W},a:"J",b:p}},{j:"D u G 17 O k (w&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-w},a:"H",b:F,h:"G"},C:{c:{e:W},a:"J",b:p}},{j:"D u G 17 1J O m E (w&#t;)",d:1,g:[7,11],f:{e:q,i:"n"},s:{c:{I:.P,x:1v,y:-5},a:"18",b:F,h:"G"},C:{c:{x:w,y:0},a:"18",b:F}},{j:"D u G 17 1J O m r (w&#t;)",d:1,g:[7,11],f:{e:q,i:"B"},s:{c:{I:.P,x:-1v,y:-5},a:"18",b:F,h:"G"},C:{c:{x:-w,y:0},a:"18",b:F}},{j:"1c 1s m E (l&#t;, U V)",d:1,g:1,f:{e:q,i:"n",V:"U"},s:{c:{y:l},a:"v",b:1d,h:"A"}},{j:"1c 1s m r (l&#t;, U V)",d:1,g:1,f:{e:q,i:"n",V:"U"},s:{c:{y:-l},a:"v",b:1d,h:"A"}},{j:"1c 1s m N (l&#t;, U V)",d:1,g:1,f:{e:q,i:"n",V:"U"},s:{c:{x:-l},a:"v",b:1d,h:"G"}},{j:"1c 1s m K (l&#t;, U V)",d:1,g:1,f:{e:q,i:"n",V:"U"},s:{c:{x:l},a:"v",b:1d,h:"G"}},{j:"D u S 1o m E (l&#t;, U V)",d:[2,4],g:[4,7],f:{e:q,i:"n",V:"U"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{y:l},a:"H",b:F,h:"A"},C:{b:1g,a:"H"}},{j:"D u S 1o m r (l&#t;, U V)",d:[2,4],g:[4,7],f:{e:q,i:"B",V:"U"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{y:-l},a:"H",b:F,h:"A"},C:{b:1g,a:"H"}},{j:"D u S 1o m N (l&#t;, U V)",d:[2,4],g:[4,7],f:{e:q,i:"1k-n",V:"U"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{x:-l},a:"H",b:F,h:"G"},C:{b:1g,a:"H"}},{j:"D u S 1o m K (l&#t;, U V)",d:[2,4],g:[4,7],f:{e:q,i:"1k-B",V:"U"},L:{c:{I:.P},b:1m,a:"18"},s:{c:{x:l},a:"H",b:F,h:"G"},C:{b:1g,a:"H"}},{j:"D u A S 1o k (l&#t;, U V)",d:[2,4],g:[4,7],f:{e:q,i:"k",V:"U"},L:{c:{I:.1i},b:1p,a:"18"},s:{c:{y:l},a:"H",b:1p,h:"A"},C:{b:1p,a:"H"}},{j:"D u G S 1o k (l&#t;, U V)",d:[2,4],g:[4,7],f:{e:q,i:"k",V:"U"},L:{c:{I:.1i},b:1p,a:"18"},s:{c:{x:l},a:"H",b:1p,h:"G"},C:{b:1p,a:"H"}},{j:"D u S d m E (l&#t;, U V)",d:[5,9],g:1,f:{e:1i,i:"n",V:"U"},L:{c:{I:.P,x:3},b:p,a:"J"},s:{c:{y:l},a:"v",b:1n,h:"A"},C:{c:{e:W,x:0},a:"z",b:1q}},{j:"D u S d m r (l&#t;, U V)",d:[5,9],g:1,f:{e:1i,i:"B",V:"U"},L:{c:{I:.P,x:3},b:p,a:"J"},s:{c:{y:-l},a:"v",b:1n,h:"A"},C:{c:{e:W,x:0},a:"z",b:1q}},{j:"D u S d m N (l&#t;, U V)",d:[5,9],g:1,f:{e:1i,i:"n",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"H",b:F,h:"G"},C:{c:{e:W},a:"z",b:1q}},{j:"D u S d m K (l&#t;, U V)",d:[5,9],g:1,f:{e:1i,i:"B",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:l},a:"H",b:F,h:"G"},C:{c:{e:W},a:"z",b:1q}},{j:"D u A S d k (l&#t;, U V)",d:[5,9],g:1,f:{e:1i,i:"k",V:"U"},L:{c:{I:.P,x:3},b:p,a:"J"},s:{c:{y:l},a:"v",b:1n,h:"A"},C:{c:{e:W,x:0},a:"z",b:1q}},{j:"D u G S d k (l&#t;, U V)",d:[5,9],g:1,f:{e:1i,i:"k",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"H",b:F,h:"G"},C:{c:{e:W},a:"z",b:1q}},{j:"D u S O m N (l&#t;, U V)",d:1,g:[7,11],f:{e:1i,i:"n",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"v",b:1n,h:"G"},C:{c:{e:W},a:"z",b:1q}},{j:"D u S O m K (l&#t;, U V)",d:1,g:[7,11],f:{e:1i,i:"B",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:l},a:"v",b:1n,h:"G"},C:{c:{e:W},a:"z",b:1q}},{j:"D u S O m E (l&#t;, U V)",d:1,g:[7,11],f:{e:1i,i:"n",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:l},a:"H",b:F,h:"A"},C:{c:{e:W},a:"z",b:1q}},{j:"D u S O m r (l&#t;, U V)",d:1,g:[7,11],f:{e:1i,i:"B",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:-l},a:"H",b:F,h:"A"},C:{c:{e:W},a:"z",b:1q}},{j:"D u A S O k (l&#t;, U V)",d:1,g:[7,11],f:{e:1i,i:"k",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{y:l},a:"H",b:F,h:"A"},C:{c:{e:W},a:"z",b:1q}},{j:"D u G S O k (l&#t;, U V)",d:1,g:[7,11],f:{e:1i,i:"k",V:"U"},L:{c:{I:.P},b:p,a:"J"},s:{c:{x:-l},a:"v",b:1n,h:"G"},C:{c:{e:W},a:"z",b:1q}}]}',62,131,"||||||||||easing|duration|transition|rows|delay|tile|cols|direction|sequence|name|random|180|to|forward|type|600|75|left|animation|176|and|easeInOutQuart|90|rotateX|rotateY|easeOutQuart|horizontal|reverse|after|Scaling|right|1e3|vertical|easeInOutBack|scale3d|easeOutBack|top|before|from|bottom|columns|85|mixed|tiles|spinning|750|large|depth|200|slide|sliding|Fading||||Sliding|fade|||turning|easeInOutQuint|55|100|Turning|Spinning|1500|easeInOutQuad|50|350|scale|65|30|col|500|450|1200|cuboids|700|400|35|cuboid|Carousel|Flying|45|800|Smooth|rotate|rotating|95|Mirror|Vertical|Horizontal|91|540|fading|mirror|1300|drunk|easeInQuart|out|in|colums|scaling|directions|2e3|Drunk|150|topright|sliging|t3d|t2d|bottomleft|topleft|850|Crossfading|diagonal|linear|var|bottomright||layerSliderTransitions".split("|")));


// layerslider.kreaturamedia.jquery.js

eval(function(h,b,j,f,g,i){g=function(a){return(a<b?"":g(parseInt(a/b)))+((a=a%b)>35?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){while(j--){i[g(j)]=f[j]||g(j)}f=[function(a){return i[a]}];g=function(){return"\\w+"};j=1}while(j--){if(f[j]){h=h.replace(new RegExp("\\b"+g(j)+"\\b","g"),f[j])}}return h}('16 9E(e,t,n){10(28 e=="aE"){12 r=34("#"+e)}19 10(28 e=="9B"){12 r=e}12 i,s;2I(t){1j"78":i="bq 34 55";s="6J 6N 6O aS 4F 36 3k 7e 7d 4V 3k 7I aZ 9O an 8I 8m 36 2o 34 5X 5a 7G a aM d6 4t 3e 5O 5R\'t 2Q 3k 6I. <1T>9X ae 5r 3k 4g 6Q a4 2W a2 14 6I 4t 9R 2o \\"a5 7b a6 2W 3l\\" ag 3p 2o ac 9Q 9n 2o 9e 6P.</1T><br><br>4x 14 dd\'t 6K 3k 8T, 7M 9L 2W dg d4 7e 5k 4F-by-4F 2W 18 9M 5a 4F 7G 14 55. 4x 3R cS ak 2o dQ 5k, 7M 8Y 6V 2o 5k 8d 2W 6K 14 1j. 4x 1F 36 3k 7d 7G 14 8T, 7x dq be 3k 7I 4t 3R dv 8Y 6V 2o 8d 36 2o 7I. dt af 4Y c0 2W 5w c8 bJ 36 2o 34 5X.<br><br>4x bG 41 bF 4F 2W af 3R, 7M 9f a cb 3p 2o cc 6P 36 2o cB 5r ah.";1k;1j"9F":i="5F 34 55";s="6J 6N 6O 3R 9j 9J an 5F 2v ("+n+\') 36 2o 34 5X. 3e cC at cA 2v 1.7.0 4V cz. 4x 3R 9j 9J 2o 4g 2v 36 3e, 3R 5R 9L 9M 2o "34 cD" 5k 4Y 2o 5O 5k cI. 4x 3R cG\\\'t cH cv 2W do, 3R 5R 9f cj a ch cg 4Y ce ah cf cr. cs cp a a9 5O 6Q 9Y (4V a a9 cn 9Y 3p cl cd) 2W 6K 14 55.\';1k;1j"80":i="34 9N 55";s=\'6J 6N 6O 4F 36 3k 7e 7d cu cF 34 9N 4t 9O an 8I 8m 36 14 5X 5a 5R am cZ. 9X ae 5r 3k 4g 6Q a4 2W a2 14 6I 4t 9R 2o "a5 7b a6 2W 3l" ag 3p 3k ac 9Q 9n 2o 9e 6P.\';1k}r.1t("11-7q");r.3z(\'<p 1n="11-aH">!</p>\');r.3z(\'<p 1n="11-7q-aG">3e: \'+i+"</p>");r.3z(\'<p 1n="11-7q-6T">\'+s+"</p>")}(16(e){e.9x.2M=16(n){12 r="1.7.0";12 i=e.9x.78;12 s=e(14);12 o=16(e,t){12 n=e.1Y(".");12 r=t.1Y(".");2u(12 i=0;i<n.1o;++i){10(r.1o==i){1P 1e}10(1c(n[i])==1c(r[i])){aD}19 10(1c(n[i])>1c(r[i])){1P 1e}19{1P 1a}}10(n.1o!=r.1o){1P 1a}1P 1a};10(!o("1.8.0",i)){s.1t("11-9H")}10(!o(r,i)){9E(s,"9F",i)}19{10((28 n).3s("9B|3c")){1P 14.1X(16(e){3m t(14,n)})}19{10(n=="13"){12 u=e(14).13("3e").g;10(u){1P u}}19{1P 14.1X(16(t){12 r=e(14).13("3e");10(r){10(!r.g.2Y&&!r.g.3C){10(28 n=="3M"){10(n>0&&n<r.g.2E+1&&n!=r.g.2a){r.4k(n)}}19{2I(n){1j"1O":r.o.5B(r.g);r.1O("5P");1k;1j"1R":r.o.5K(r.g);r.1R("5P");1k;1j"23":10(!r.g.2G){r.o.a7(r.g);r.g.2V=1a;r.23()}1k}}}10(n=="4G"){r.d.6k()}10((r.g.2G||!r.g.2G&&r.g.2V)&&n=="1h"){r.o.a0(r.g);r.g.2V=1e;r.g.1H.18(\'2e[1l*="5c.4u"], 2e[1l*="5d.4v"]\').1X(16(){3a(e(14).13("5D"))});r.1h()}10(n=="9u 1h"){r.8D()}}})}}}};12 t=16(s,o){12 u=14;u.$9A=e(s).1t("11-2h");u.$9A.13("3e",u);u.2Q=16(){u.o=e.4I({},t.8Q,o);u.g=e.4I({},t.5J);u.g.4i=e(s).43("11-9H")?1e:1a;10(28 9K!="3c"){u.t=e.4I({},9K)}10(28 9w!="3c"){u.ct=e.4I({},9w)}10(!u.g.9k){u.g.9k=1a;u.4G();10(e("4e").18(\'9h[7g*="4g"]\').1o){u.g.6R=e("4e").18(\'9h[7g*="4g"]\').1f("7g").1Y("4g")[1]}10(e("4e").18(\'7a[1l*="5W"]\').1o){10(e("4e").18(\'7a[1l*="5W"]\').1f("1l").1w("?")!=-1){u.g.7c=e("4e").18(\'7a[1l*="5W"]\').1f("1l").1Y("?")[1].1Y("=")[1]}}u.d.aT("3e bu");u.d.aU(\'<a 2f="#">1O</a> | <a 2f="#">1R</a> | <a 2f="#">23</a> | <a 2f="#">1h</a> | <a 2f="#">9u 1h</a>\');u.d.3A.18("a").1X(16(){e(14).2k(16(t){t.38();e(s).2M(e(14).6T())})});u.d.aT("3e 2v bb");u.d.aU("7b 2v: <1T>"+u.g.2v+"</1T>");10(u.g.7c){u.d.aL("5O 2v: <1T>"+u.g.7c+"</1T>")}10(u.g.6R){u.d.aL("4g 2v: <1T>"+u.g.6R+"</1T>")}u.d.aL("34 2v: <1T>"+e().78+"</1T>");10(e(s).1f("4n")){u.d.aT("3e 2h");u.d.aU("#"+e(s).1f("4n"))}10(!u.o.2H||u.o.2H==""||!u.o.3O||u.o.3O==""){u.d.aT("aX aR 2H. aQ: aP 2H 4t / 4V 3O.");u.4A()}19{u.d.aT("b8 2W 2Q 6V 2H: "+u.o.2H,1a);e(s).1t("11-"+u.o.2H);12 n=u.o.3O+u.o.2H+"/2H.17";70=e("ad");10(!e("ad").1o){70=e("3l")}10(e(\'6w[2f="\'+n+\'"]\').1o){u.d.aU(\'b5 "\'+u.o.2H+\'" 41 b1 3w.\');r=e(\'6w[2f="\'+n+\'"]\');10(!u.g.3w){u.g.3w=1a;2i(16(){u.4A()},5v)}}19{10(2p.a8){2p.a8(n);12 r=e(\'6w[2f="\'+n+\'"]\')}19{12 r=e(\'<6w 5I="b3" 2f="\'+n+\'" 4d="6T/17" />\').1q(70)}}r.2Q(16(){10(!u.g.3w){u.d.aU("8j.2Q(); 73");u.g.3w=1a;2i(16(){u.4A()},5v)}});e(2Z).2Q(16(){10(!u.g.3w){u.d.aU("$(2Z).2Q(); 73");u.g.3w=1a;2i(16(){u.4A()},5v)}});2i(16(){10(!u.g.3w){u.d.aT("b2 b0: b4 8j.2Q(); 4V $(2Z).2Q(); b9 73");u.g.3w=1a;u.4A()}},3S)}}};u.4A=16(){10(!e("4e").1f("4n")){e("4e").1f("4n","11-5J")}19 10(!e("3l").1f("4n")){e("3l").1f("4n","11-5J")}u.g.1D=16(){10(u.g.4o&&u.g.3X){1P u.g.4o}19{1P e(s).1b()}};u.g.1G=16(){10(u.g.4J&&u.g.3X){1P u.g.4J}19{1P e(s).1d()}};10(e(s).18(".11-1Q").1o==1){u.o.6f=1e;u.o.7S=1e;u.o.6t=1e;u.o.63=1e;u.o.3Y=0;u.o.5U=1e;u.o.3Q=1a;u.o.2g=1;u.o.32="b7"}10(u.o.1b){u.g.6L=u.g.2C=""+u.o.1b}19{u.g.6L=u.g.2C=e(s)[0].1J.1b}10(u.o.1d){u.g.3W=""+u.o.1d}19{u.g.3W=e(s)[0].1J.1d}10(u.g.2C.1w("%")==-1&&u.g.2C.1w("1A")==-1){u.g.2C+="1A"}10(u.g.3W.1w("%")==-1&&u.g.3W.1w("1A")==-1){u.g.3W+="1A"}10(u.o.9b&&u.g.2C.1w("1A")!=-1&&u.g.3W.1w("1A")!=-1){u.g.3x=1a}19{u.g.3x=1e}e(s).18(\'*[1n*="11-s"], *[1n*="11-bg"]\').1X(16(){10(!e(14).2s().43("11-1Q")){e(14).b6(e(14).2s())}});e(s).18(".11-1Q").1X(16(){e(14).30(\':8b([1n*="11-"])\').1X(16(){e(14).5w()})});e(s).18(\'.11-1Q, *[1n*="11-s"]\').1X(16(){10(e(14).1f("5I")||e(14).1f("1J")){10(e(14).1f("5I")){12 t=e(14).1f("5I").3b().1Y(";")}19{12 t=e(14).1f("1J").3b().1Y(";")}2u(x=0;x<t.1o;x++){3j=t[x].1Y(":");10(3j[0].1w("3N")!=-1){3j[1]=u.8F(3j[1])}12 n="";10(3j[2]){n=":"+e.54(3j[2])}10(3j[0]!=" "&&3j[0]!=""){e(14).13(e.54(3j[0]),e.54(3j[1])+n)}}}12 r=e(14);r.13("4a",r[0].1J.1i);r.13("3P",r[0].1J.1u);10(e(14).41("a")&&e(14).30().1o>0){r=e(14).30()}12 i=r.1b();12 s=r.1d();10(r[0].1J.1b&&r[0].1J.1b.1w("%")!=-1){i=r[0].1J.1b}10(r[0].1J.1d&&r[0].1J.1d.1w("%")!=-1){s=r[0].1J.1d}r.13("31",i);r.13("33",s);r.13("77",r.17("26-1i"));r.13("74",r.17("26-1I"));r.13("71",r.17("26-1u"));r.13("72",r.17("26-1s"));10(!u.g.1N){12 o=28 3Z(r.17("2B"))=="3M"?1x.5s(3Z(r.17("2B"))*1Z)/1Z:1;e(14).13("6l",o)}10(r.17("3h-1i-1b").1w("1A")==-1){r.13("6y",r[0].1J.8x)}19{r.13("6y",r.17("3h-1i-1b"))}10(r.17("3h-1I-1b").1w("1A")==-1){r.13("6C",r[0].1J.8s)}19{r.13("6C",r.17("3h-1I-1b"))}10(r.17("3h-1u-1b").1w("1A")==-1){r.13("5N",r[0].1J.8h)}19{r.13("5N",r.17("3h-1u-1b"))}10(r.17("3h-1s-1b").1w("1A")==-1){r.13("65",r[0].1J.8t)}19{r.13("65",r.17("3h-1s-1b"))}r.13("8e",r.17("8c-88"));r.13("8a",r.17("89-1d"))});10(2p.7m.8v){2u(12 t=0;t<e(s).18(".11-1Q").1o;t++){10(e(s).18(".11-1Q").3G(t).13("aY")==2p.7m.8v.1Y("#")[1]){u.o.2g=t+1}}}e(s).18(\'*[1n*="11-7k-"]\').1X(16(){12 t=e(14).1f("1n").1Y(" ");2u(12 n=0;n<t.1o;n++){10(t[n].1w("11-7k-")!=-1){12 r=1c(t[n].1Y("11-7k-")[1]);e(14).17({aO:"aN"}).2k(16(t){t.38();e(s).2M(r)})}}});u.g.2E=e(s).18(".11-1Q").1o;10(u.o.5S&&u.g.2E>2){u.o.2g=="2t";u.o.7Z=1e}19{u.o.5S=1e}10(u.o.2g=="2t"){u.o.2g=1x.29(1x.2t()*u.g.2E+1)}u.o.2g=u.o.2g<u.g.2E+1?u.o.2g:1;u.o.2g=u.o.2g<1?1:u.o.2g;u.g.47=1;10(u.o.4r){u.g.47=0}12 n=2p.7m.2f.1w("aW:")==-1?"":"aV:";e(s).18(\'2e[1l*="5c.4u"], 2e[1l*="4u.be"]\').1X(16(){e(14).2s().1t("11-6s-1Q");10(e(14).2s(\'[1n*="11-s"]\')){12 t=e(14);e.8y(n+"//bt.8V.6E/bs/99/bv/"+e(14).1f("1l").1Y("92/")[1].1Y("?")[0]+"?v=2&bw=98&97=?",16(e){t.13("6o",1c(e["bA"]["bz$bx"]["bp$2l"]["bo"])*3S)});12 r=e("<1g>").1t("11-5g").1q(e(14).2s());e("<22>").1q(r).1t("11-3U").1f("1l",n+"//22.8V.6E/aK/"+e(14).1f("1l").1Y("92/")[1].1Y("?")[0]+"/"+u.o.8R);e("<1g>").1q(r).1t("11-94");e(14).2s().17({1b:e(14).1b(),1d:e(14).1d()}).2k(16(){u.g.2Y=1a;10(u.g.3q){10(u.o.3Q!=1e){u.g.3q=1e}u.g.2V=1a}19{u.g.2V=u.g.2G}10(u.o.3Q!=1e){u.1h()}u.g.52=1a;e(14).18("2e").1f("1l",e(14).18("2e").13("4m"));e(14).18(".11-5g").1C(u.g.v.d).2U(u.g.v.7z,16(){10(u.o.3Q=="1U"&&u.g.2V==1a){12 e=2i(16(){u.23()},t.13("6o")-u.g.v.d);t.13("5D",e)}u.g.2Y=1e;10(u.g.3g==1a){u.3L(u.g.1H,16(){u.g.3g=1e})}})});12 i="&";10(e(14).1f("1l").1w("?")==-1){i="?"}10(e(14).1f("1l").1w("3u=0")!=-1){e(14).13("4m",e(14).1f("1l").2j("3u=0","3u=1"))}19 10(e(14).1f("1l").1w("3u")==-1){e(14).13("4m",e(14).1f("1l")+i+"3u=1")}e(14).13("31",e(14).1f("1b"));e(14).13("33",e(14).1f("1d"));e(14).1f("1l","")}});e(s).18(\'2e[1l*="5d.4v"]\').1X(16(){e(14).2s().1t("11-6s-1Q");10(e(14).2s(\'[1n*="11-s"]\')){12 t=e(14);12 r=e("<1g>").1t("11-5g").1q(e(14).2s());e.8y(n+"//4v.6E/99/bh/6s/"+e(14).1f("1l").1Y("6s/")[1].1Y("?")[0]+".98?97=?",16(n){e("<22>").1q(r).1t("11-3U").1f("1l",n[0]["bf"]);t.13("6o",1c(n[0]["2l"])*3S);e("<1g>").1q(r).1t("11-94")});e(14).2s().17({1b:e(14).1b(),1d:e(14).1d()}).2k(16(){u.g.2Y=1a;10(u.g.3q){10(u.o.3Q!=1e){u.g.3q=1e}u.g.2V=1a}19{u.g.2V=u.g.2G}10(u.o.3Q!=1e){u.1h()}u.g.52=1a;e(14).18("2e").1f("1l",e(14).18("2e").13("4m"));e(14).18(".11-5g").1C(u.g.v.d).2U(u.g.v.7z,16(){10(u.o.3Q=="1U"&&u.g.2V==1a){12 e=2i(16(){u.23()},t.13("6o")-u.g.v.d);t.13("5D",e)}u.g.2Y=1e;10(u.g.3g==1a){u.3L(u.g.1H,16(){u.g.3g=1e})}})});12 i="&";10(e(14).1f("1l").1w("?")==-1){i="?"}10(e(14).1f("1l").1w("3u=0")!=-1){e(14).13("4m",e(14).1f("1l").2j("3u=0","3u=1"))}19 10(e(14).1f("1l").1w("3u")==-1){e(14).13("4m",e(14).1f("1l")+i+"3u=1")}e(14).13("31",e(14).1f("1b"));e(14).13("33",e(14).1f("1d"));e(14).1f("1l","")}});10(u.o.4r){u.o.2g=u.o.2g-1==0?u.g.2E:u.o.2g-1}u.g.2a=u.o.2g;u.g.1H=e(s).18(".11-1Q:3G("+(u.g.2a-1)+")");e(s).18(".11-1Q").bi(\'<1g 1n="11-27"></1g>\');e("<1g>").1t("11-3E-bj").5G(e(s));10(u.o.8r){u.g.3K=e("<1g>").1t("11-bn-4M").1q(e(s).18(".11-27"))}10(u.o.9d&&!u.g.1N){u.g.2R=e("<1g>").1t("11-bm-4M").1q(e(s).18(".11-27"));u.g.2R.3z(e(\'<1g 1n="11-ct-1i"><1g 1n="11-ct-3t"><1g 1n="11-ct-95"><1g 1n="11-ct-96"></1g></1g></1g></1g><1g 1n="11-ct-1I"><1g 1n="11-ct-3t"><1g 1n="11-ct-95"><1g 1n="11-ct-96"></1g></1g></1g></1g><1g 1n="11-ct-bl"></1g>\'))}u.g.3f=e("<1g>").17({9V:-1,1y:"1F"}).1t("11-8S-2h").1q(e(s));e("<1g>").1t("11-8S-bk").1q(u.g.3f);10(e(s).17("3i")=="bB"){e(s).17("3i","8G")}10(u.o.5Q){e(s).18(".11-27").17({aw:"4P("+u.o.5Q+")"})}19{e(s).18(".11-27").17({ap:u.o.82})}10(u.o.82=="7U"&&u.o.5Q==1e){e(s).18(".11-27").17({48:"1F 7U !ao"})}10(u.g.3x&&u.g.7L()!=1a&&u.o.93&&(28 4l(2p,"8B")!="3c"||28 4l(2p,"8A")!="3c")){12 r=e("<a>").17("1y","1F").1t("11-6B").2k(16(){u.8H()}).1q(e(s).18(".11-27"));e(s).1M(16(){10(u.g.1N){r.17({1y:"2b"})}19{r.1h(1a,1a).2x(2n)}},16(){10(u.g.1N){r.17({1y:"1F"})}19{r.1h(1a,1a).2U(2n)}});2p.6D("aq",16(){10(!2p.6B){u.58()}19{}},1e);2p.6D("ar",16(){10(!2p.as){u.58()}19{}},1e);2p.6D("au",16(){10(!2p.al){u.58()}19{}},1e)}10(u.o.7S){e(\'<a 1n="11-1m-1O" 2f="#" />\').2k(16(t){t.38();e(s).2M("1O")}).1q(e(s));e(\'<a 1n="11-1m-1R" 2f="#" />\').2k(16(t){t.38();e(s).2M("1R")}).1q(e(s));10(u.o.8n){e(s).18(".11-1m-1O, .11-1m-1R").17({1y:"1F"});e(s).1M(16(){10(!u.g.6X){10(u.g.1N){e(s).18(".11-1m-1O, .11-1m-1R").17("1y","2b")}19{e(s).18(".11-1m-1O, .11-1m-1R").1h(1a,1a).2x(2n)}}},16(){10(u.g.1N){e(s).18(".11-1m-1O, .11-1m-1R").17("1y","1F")}19{e(s).18(".11-1m-1O, .11-1m-1R").1h(1a,1a).2U(2n)}})}}10(u.o.6t||u.o.63){12 i=e(\'<1g 1n="11-1s-1m-2J" />\').1q(e(s));u.g.2S=i;10(u.o.32=="4j"){i.1t("11-8P-4B")}10(u.o.63&&u.o.32!="4j"){e(\'<5n 1n="11-1s-4f" />\').1q(e(s).18(".11-1s-1m-2J"));10(u.o.32=="1M"){12 o=e(\'<1g 1n="11-1z-1M"><1g 1n="11-1z-1M-27"><1g 1n="11-1z-1M-bg"></1g><1g 1n="11-1z-1M-22"><22></1g><5n></5n></1g></1g>\').1q(e(s).18(".11-1s-4f"))}2u(x=1;x<u.g.2E+1;x++){12 a=e(\'<a 2f="#" />\').1q(e(s).18(".11-1s-4f")).2k(16(t){t.38();e(s).2M(e(14).5u()+1)});10(u.o.32=="1M"){e(s).18(".11-1z-1M, .11-1z-1M-22").17({1b:u.o.7H,1d:u.o.5m});12 f=e(s).18(".11-1z-1M");12 l=f.18("22").17({1d:u.o.5m});12 c=e(s).18(".11-1z-1M-27").17({21:"2O",1y:"2b"});a.1M(16(){12 t=e(s).18(".11-1Q").3G(e(14).5u());10(t.18(".11-6b").1o){12 n=t.18(".11-6b").1f("1l")}19 10(t.18(".11-3U").1o){12 n=t.18(".11-3U").1f("1l")}19 10(t.18(".11-bg").1o){12 n=t.18(".11-bg").1f("1l")}19{12 n=u.o.3O+u.o.2H+"/6Z.5T"}e(s).18(".11-1z-1M-22").17({1i:1c(f.17("26-1i")),1u:1c(f.17("26-1u"))});l.2Q(16(){10(e(14).1b()==0){l.17({3i:"8G",2T:"0 1U",1i:"1U"})}19{l.17({3i:"av",2z:-e(14).1b()/2,1i:"50%"})}}).1f("1l",n);f.17({1y:"2b"}).1h().20({1i:e(14).3i().1i+(e(14).1b()-f.4S())/2},7f,"5Z");c.17({1y:"1F",21:"2A"}).1h().2x(7f)},16(){c.1h().2U(7f,16(){f.17({21:"2O",1y:"2b"})})})}}10(u.o.32=="1M"){o.1q(e(s).18(".11-1s-4f"))}e(s).18(".11-1s-4f a:3G("+(u.o.2g-1)+")").1t("11-1m-1S")}10(u.o.6t){12 h=e(\'<a 1n="11-1m-23" 2f="#" />\').2k(16(t){t.38();e(s).2M("23")}).5G(e(s).18(".11-1s-1m-2J"));12 p=e(\'<a 1n="11-1m-1h" 2f="#" />\').2k(16(t){t.38();e(s).2M("1h")}).1q(e(s).18(".11-1s-1m-2J"))}19 10(u.o.32!="4j"){e(\'<5n 1n="11-1m-8z 11-1m-aI" />\').5G(e(s).18(".11-1s-1m-2J"));e(\'<5n 1n="11-1m-8z 11-1m-aB" />\').1q(e(s).18(".11-1s-1m-2J"))}10(u.o.6c&&u.o.32!="4j"){i.17({1y:"1F"});e(s).1M(16(){10(!u.g.6X){10(u.g.1N){i.17("1y","2b")}19{i.1h(1a,1a).2x(2n)}}},16(){10(u.g.1N){i.17("1y","1F")}19{i.1h(1a,1a).2U(2n)}})}}10(u.o.32=="4j"){u.g.3B=e(\'<1g 1n="11-1z-2J"></1g>\').1q(e(s));12 o=e(\'<1g 1n="11-1z"><1g 1n="11-1z-27"><1g 1n="11-1z-1K-2h"><1g 1n="11-1z-1K"></1g></1g></1g></1g>\').1q(u.g.3B);u.g.4B=e(s).18(".11-1z-1K-2h");10(!("64"3p 2Z)){u.g.4B.1M(16(){e(14).1t("11-1z-1K-1M")},16(){e(14).2X("11-1z-1K-1M");u.79()}).aA(16(t){12 n=1c(t.az-e(14).8o().1i)/e(14).1b()*(e(14).1b()-e(14).18(".11-1z-1K").1b());e(14).18(".11-1z-1K").1h().17({2z:n})})}19{u.g.4B.1t("11-ay")}e(s).18(".11-1Q").1X(16(){12 t=e(14).5u()+1;10(e(14).18(".11-6b").1o){12 n=e(14).18(".11-6b").1f("1l")}19 10(e(14).18(".11-3U").1o){12 n=e(14).18(".11-3U").1f("1l")}19 10(e(14).18(".11-bg").1o){12 n=e(14).18(".11-bg").1f("1l")}10(n){12 r=e(\'<a 2f="#" 1n="11-3v-\'+t+\'"><22 1l="\'+n+\'"></a>\')}19{12 r=e(\'<a 2f="#" 1n="11-6Z 11-3v-\'+t+\'"><22 1l="\'+u.o.3O+u.o.2H+\'/6Z.5T"></a>\')}r.1q(e(s).18(".11-1z-1K"));10(!("64"3p 2Z)){r.1M(16(){e(14).30().1h().5V(2n,u.o.7w/1Z)},16(){10(!e(14).30().43("11-3v-1S")){e(14).30().1h().5V(2n,u.o.7v/1Z)}})}r.2k(16(n){n.38();e(s).2M(t)})});10(h&&p){12 d=u.g.2S=e(\'<1g 1n="11-1s-1m-2J 11-aC-4B"></1g>\').1q(e(s));h.81().2k(16(t){t.38();e(s).2M("23")}).1q(d);p.81().2k(16(t){t.38();e(s).2M("1h")}).1q(d)}10(u.o.6c){u.g.3B.17("1y","1F");10(d){u.g.2S=d.17("1y")=="2b"?d:e(s).18(".11-8P-4B");u.g.2S.17("1y","1F")}e(s).1M(16(){e(s).1t("11-1M");10(!u.g.6X){10(u.g.1N){u.g.3B.17("1y","2b");10(u.g.2S){u.g.2S.17("1y","2b")}}19{u.g.3B.1h(1a,1a).2x(2n);10(u.g.2S){u.g.2S.1h(1a,1a).2x(2n)}}}},16(){e(s).2X("11-1M");10(u.g.1N){u.g.3B.17("1y","1F");10(u.g.2S){u.g.2S.17("1y","1F")}}19{u.g.3B.1h(1a,1a).2U(2n);10(u.g.2S){u.g.2S.1h(1a,1a).2U(2n)}}})}}u.g.3y=e(\'<1g 1n="11-3y"></1g>\').1q(e(s));10(u.g.3y.17("1y")=="2b"&&!u.g.3y.18("22").1o){u.g.67=16(){u.g.3y.17({1y:"1F",21:"2A"}).2x(3I,16(){u.g.67=1e})};u.g.4p=e("<22>").1f("1l",u.o.3O+u.o.2H+"/3y.5T").1q(u.g.3y);u.g.8u=28 1c(e(s).17("26-1s"))=="3M"?1c(e(s).17("26-1s")):0}u.7i();10(u.o.8M&&e(s).18(".11-1Q").1o>1){e("3l").6a("aJ",16(e){10(!u.g.2Y&&!u.g.3C){10(e.5a==37){u.o.5B(u.g);u.1O("5P")}19 10(e.5a==39){u.o.5K(u.g);u.1R("5P")}}})}10("64"3p 2Z&&e(s).18(".11-1Q").1o>1&&u.o.8C){e(s).18(".11-27").6a("db",16(e){12 t=e.4D?e.4D:e.8K.4D;10(t.1o==1){u.g.6g=u.g.5t=t[0].8J}});e(s).18(".11-27").6a("dc",16(e){12 t=e.4D?e.4D:e.8K.4D;10(t.1o==1){u.g.5t=t[0].8J}10(1x.40(u.g.6g-u.g.5t)>45){e.38()}});e(s).18(".11-27").6a("d9",16(t){10(1x.40(u.g.6g-u.g.5t)>45){10(u.g.6g-u.g.5t>0){u.o.5K(u.g);e(s).2M("1R")}19{u.o.5B(u.g);e(s).2M("1O")}}})}10(u.o.8L==1a&&e(s).18(".11-1Q").1o>1){e(s).18(".11-27").1M(16(){u.o.a1(u.g);10(u.g.2G){u.g.3q=1a;u.1h();10(u.g.3K){u.g.3K.1h()}10(u.g.2R){u.g.2R.18(".11-ct-3t").1h()}u.g.3F=(3m 4H).4E()}},16(){10(u.g.3q==1a){u.23();u.g.3q=1e}})}u.7h();10(u.o.1p){u.g.1p=e("<22>").1t("11-d7").1q(e(s)).1f("1J",u.o.8N).17({21:"2O",1y:"d8"}).2Q(16(){12 t=0;10(!u.g.1p){t=3S}2i(16(){u.g.1p.13("31",u.g.1p.1b());u.g.1p.13("33",u.g.1p.1d());10(u.g.1p.17("1i")!="1U"){u.g.1p.13("4a",u.g.1p[0].1J.1i)}10(u.g.1p.17("1I")!="1U"){u.g.1p.13("4X",u.g.1p[0].1J.1I)}10(u.g.1p.17("1u")!="1U"){u.g.1p.13("3P",u.g.1p[0].1J.1u)}10(u.g.1p.17("1s")!="1U"){u.g.1p.13("5p",u.g.1p[0].1J.1s)}10(u.o.7W!=1e){e("<a>").1q(e(s)).1f("2f",u.o.7W).1f("de",u.o.8O).17({dj:"1F",dk:"1F"}).3z(u.g.1p)}u.g.1p.17({1y:"1F",21:"2A"});u.6M()},t)}).1f("1l",u.o.1p)}e(2Z).3g(16(){u.g.3g=1a;10(!u.g.2Y){u.3L(u.g.1H,16(){10(u.g.2w){u.g.2w.5e()}u.g.3g=1e});10(u.g.1p){u.6M()}}});u.g.8W=1a;10(u.o.4r==1a){10(u.o.6f){u.g.2G=1a;e(s).18(".11-1m-23").1t("11-1m-23-1S")}19{e(s).18(".11-1m-1h").1t("11-1m-1h-1S")}u.1R()}19{u.59(u.g.1H,16(){u.g.1H.2x(3S,16(){u.g.3C=1e;e(14).1t("11-1S");10(u.o.7R){e(14).1C(e(14).13("4Q")+25).di(16(){e(14).18(".11-3U").2k();e(14).7p()})}u.g.1H.18(\' > *[1n*="11-s"]\').1X(16(){10(e(14).13("6m")>0){12 t=e(14);t.13("66",2i(16(){u.7K(t)},t.13("6m")))}})});u.7l(u.g.2a);10(u.o.6f){u.g.3C=1e;u.23()}19{e(s).18(".11-1m-1h").1t("11-1m-1h-1S")}})}u.o.9I(e(s))};u.8H=16(){10(!u.g.2Y&&!u.g.3C){10(4l(2p,"8B")||4l(2p,"8A")){4l(2p,"dh");u.58()}19{u.g.4o=u.g.1D();u.g.4J=u.g.1G();u.g.53=u.g.1B;4l(e(s)[0],"df");e(s).1t("11-2h-6B")}}};u.58=16(){u.g.3X=1a;e(s).2X("11-2h-6B")};u.23=16(){10(u.g.2G){10(u.g.2c=="1O"&&u.o.7Z){u.1O()}19{u.1R()}}19{u.g.2G=1a;10(!u.g.2Y&&!u.g.3C){u.4M()}}e(s).18(".11-1m-23").1t("11-1m-23-1S");e(s).18(".11-1m-1h").2X("11-1m-1h-1S")};u.4M=16(){12 t=e(s).18(".11-1S").13("6u")?1c(e(s).18(".11-1S").13("6u")):u.o.7F;10(!u.o.4r&&!e(s).18(".11-1S").13("6u")){12 n=e(s).18(".11-1Q:3G("+(u.o.2g-1)+")").13("6u");t=n?n:u.o.7F}3a(u.g.3T);10(u.g.3F){10(!u.g.49){u.g.49=(3m 4H).4E()}10(u.g.49>u.g.3F){u.g.3F=(3m 4H).4E()}10(!u.g.2P){u.g.2P=t}u.g.2P-=u.g.3F-u.g.49;u.g.3F=1e;u.g.49=(3m 4H).4E()}19{u.g.2P=t;u.g.49=(3m 4H).4E()}u.g.2P=1c(u.g.2P);u.g.3T=2Z.2i(16(){u.g.49=u.g.3F=u.g.2P=1e;u.23()},u.g.2P);10(u.g.3K){u.g.3K.20({1b:u.g.1D()},u.g.2P,"61",16(){e(14).17({1b:0})})}10(u.g.2R){12 r=u.g.2R.18(".11-ct-1I .11-ct-3t");12 i=u.g.2R.18(".11-ct-1i .11-ct-3t");10(u.g.2R.17("1y")=="1F"){r.17({1L:0});i.17({1L:0});u.g.2R.2x(d5)}12 o=16(){i.20({1L:62},t/2,"61")};12 a=r;12 f=u.g.2P-t/2;10(u.g.2P<t/2){a=i;f=u.g.2P;o=16(){}}a.1h(1a,1a).20({1L:62},f,"61",16(){o()})}};u.1h=16(){u.g.3F=(3m 4H).4E();10(u.g.3K){u.g.3K.1h()}10(u.g.2R){u.g.2R.18(".11-ct-3t").1h()}10(!u.g.3q&&!u.g.2V){e(s).18(".11-1m-1h").1t("11-1m-1h-1S");e(s).18(".11-1m-23").2X("11-1m-23-1S")}3a(u.g.3T);u.g.2G=1e};u.8D=16(){e(s).18("*").1h(1a,1e).7p();10(!u.g.3q&&!u.g.2V){e(s).18(".11-1m-1h").1t("11-1m-1h-1S");e(s).18(".11-1m-23").2X("11-1m-23-1S")}3a(u.g.3T);u.g.2G=1e};u.cT=16(){e(s).18("*").1h();3a(u.g.3T);u.4k(u.g.2a,u.g.2c)};u.8F=16(t){10(e.54(t.3b())=="cU"||e.54(t.3b())=="61"){1P t.3b()}19{1P t.2j("cR","cO").2j("cP","cQ").2j("cV","cW").2j("d2","d3").2j("d1","d0").2j("cX","cY").2j("bC","dm").2j("dl","dK").2j("dL","dI").2j("dF","dG").2j("dH","dM").2j("56","dN").2j("dS","dT")}};u.1O=16(e){10(u.g.2a<2){u.g.47+=1}10(u.g.47>u.o.3Y&&u.o.3Y>0&&!e){u.g.47=0;u.1h();10(u.o.5U==1e){u.o.3Y=0}}19{12 t=u.g.2a<2?u.g.2E:u.g.2a-1;u.g.2c="1O";u.4k(t,u.g.2c)}};u.1R=16(e){10(!u.o.5S){10(!(u.g.2a<u.g.2E)){u.g.47+=1}10(u.g.47>u.o.3Y&&u.o.3Y>0&&!e){u.g.47=0;u.1h();10(u.o.5U==1e){u.o.3Y=0}}19{12 t=u.g.2a<u.g.2E?u.g.2a+1:1;u.g.2c="1R";u.4k(t,u.g.2c)}}19 10(!e){12 t=u.g.2a;12 n=16(){t=1x.29(1x.2t()*u.g.2E)+1;10(t==u.g.2a){n()}19{u.g.2c="1R";u.4k(t,u.g.2c)}};n()}19 10(e){12 t=u.g.2a<u.g.2E?u.g.2a+1:1;u.g.2c="1R";u.4k(t,u.g.2c)}};u.4k=16(t,n){u.g.49=u.g.3F=u.g.2P=1e;10(u.g.3K){u.g.3K.1h().1C(2n).20({1b:0},8U)}10(u.g.2R){u.g.2R.1C(2n).2U(3I).18(".11-ct-3t").1h().1C(2n).20({1L:0},8U)}10(u.g.52==1a){u.g.52=1e;u.g.2G=u.g.2V;u.g.1H.18(\'2e[1l*="5c.4u"], 2e[1l*="5d.4v"]\').1X(16(){e(14).2s().18(".11-5g").2x(u.g.v.83,16(){e(14).2s().18("2e").1f("1l","")})})}e(s).18(\'2e[1l*="5c.4u"], 2e[1l*="5d.4v"]\').1X(16(){3a(e(14).13("5D"))});3a(u.g.3T);u.g.5x=t;u.g.1v=e(s).18(".11-1Q:3G("+(u.g.5x-1)+")");10(!n){10(u.g.2a<u.g.5x){u.g.2c="1R"}19{u.g.2c="1O"}}12 r=0;10(e(s).18(\'2e[1l*="5c.4u"], 2e[1l*="5d.4v"]\').1o>0){r=u.g.v.83}3a(u.g.7n);u.g.7n=2i(16(){12 e=16(){10(u.g.3X){2i(16(){e()},3I)}19{u.59(u.g.1v,16(){u.20()})}};e()},r)};u.59=16(t,n){u.g.3C=1a;10(u.g.8W){e(s).17({21:"2A"})}10(u.o.59){12 r=[];12 i=0;10(t.17("48-4w")!="1F"&&t.17("48-4w").1w("4P")!=-1){12 o=t.17("48-4w");o=o.3s(/4P\\((.*)\\)/)[1].2j(/"/91,"");r.4y(o)}t.18("22").1X(16(){r.4y(e(14).1f("1l"))});t.18("*").1X(16(){10(e(14).17("48-4w")!="1F"&&e(14).17("48-4w").1w("4P")!=-1){12 t=e(14).17("48-4w");t=t.3s(/4P\\((.*)\\)/)[1].2j(/"/91,"");r.4y(t)}});10(r.1o==0){e(".11-1z-2J, .11-1m-1R, .11-1m-1O, .11-1s-1m-2J").17({21:"2A"});u.3L(t,n)}19{10(u.g.1N){u.g.3f.17("1y","2b")}19{u.g.3f.1C(dw).2x(2n)}2u(x=0;x<r.1o;x++){e("<22>").2Q(16(){10(++i==r.1o){u.g.3f.1h(1a,1a).17({1y:"1F"});e(".11-1z-2J, .11-1m-1R, .11-1m-1O, .11-1s-1m-2J").17({21:"2A"});u.3L(t,n)}}).1f("1l",r[x])}}}19{e(".11-1z-2J, .11-1m-1R, .11-1m-1O, .11-1s-1m-2J").17({21:"2A"});u.3L(t,n)}};u.3L=16(t,n){t.17({21:"2O",1y:"2b"});10(u.g.67){u.g.67()}u.7h();10(u.o.32=="4j"){u.8g()}t.30().1X(16(){12 t=e(14);12 n=t.13("4a")?t.13("4a"):"0";12 r=t.13("3P")?t.13("3P"):"0";10(t.41("a")&&t.30().1o>0){t.17({1y:"2b"});t=t.30()}12 i="1U";12 s="1U";10(t.13("31")){10(28 t.13("31")=="3M"){i=1c(t.13("31"))*u.g.1B}19 10(t.13("31").1w("%")!=-1){i=t.13("31")}}10(t.13("33")){10(28 t.13("33")=="3M"){s=1c(t.13("33"))*u.g.1B}19 10(t.13("33").1w("%")!=-1){s=t.13("33")}}12 o=t.13("77")?1c(t.13("77"))*u.g.1B:0;12 a=t.13("74")?1c(t.13("74"))*u.g.1B:0;12 f=t.13("71")?1c(t.13("71"))*u.g.1B:0;12 l=t.13("72")?1c(t.13("72"))*u.g.1B:0;12 c=t.13("6y")?1c(t.13("6y"))*u.g.1B:0;12 h=t.13("6C")?1c(t.13("6C"))*u.g.1B:0;12 p=t.13("5N")?1c(t.13("5N"))*u.g.1B:0;12 d=t.13("65")?1c(t.13("65"))*u.g.1B:0;12 v=t.13("8e");12 m=t.13("8a");10(u.g.3x||u.o.4h>0){10(t.41("22")&&!t.43("11-bg")){t.17({1b:"1U",1d:"1U"});10((i==0||i=="1U")&&28 s=="3M"&&s!=0){i=s/t.1d()*t.1b()}10((s==0||s=="1U")&&28 i=="3M"&&i!=0){s=i/t.1b()*t.1d()}10(i=="1U"){i=t.1b()*u.g.1B}10(s=="1U"){s=t.1d()*u.g.1B}t.17({1b:i,1d:s})}10(!t.41("22")){t.17({1b:i,1d:s,"8c-88":1c(v)*u.g.1B+"1A","89-1d":1c(m)*u.g.1B+"1A"})}10(t.41("1g")&&t.18("2e").13("4m")){12 g=t.18("2e");g.1f("1b",1c(g.13("31"))*u.g.1B).1f("1d",1c(g.13("33"))*u.g.1B);t.17({1b:1c(g.13("31"))*u.g.1B,1d:1c(g.13("33"))*u.g.1B})}t.17({26:f+"1A "+a+"1A "+l+"1A "+o+"1A ",8x:c+"1A",8s:h+"1A",8h:p+"1A",8t:d+"1A"})}10(!t.43("11-bg")){12 y=t;10(t.2s().41("a")){t=t.2s()}12 b=u.o.7N>0?(u.g.1D()-u.o.7N)/2:0;b=b<0?0:b;10(n.1w("%")!=-1){t.17({1i:u.g.1D()/1Z*1c(n)-y.1b()/2-o-c})}19 10(b>0||u.g.3x||u.o.4h>0){t.17({1i:b+1c(n)*u.g.1B})}10(r.1w("%")!=-1){t.17({1u:u.g.1G()/1Z*1c(r)-y.1d()/2-f-p})}19 10(u.g.3x||u.o.4h>0){t.17({1u:1c(r)*u.g.1B})}}19{t.17({1b:"1U",1d:"1U"});i=t.1b();s=t.1d();12 w=u.g.1B;10(u.g.2C.1w("%")!=-1){10(u.g.1D()>i){w=u.g.1D()/i;10(u.g.1G()>s*w){w=u.g.1G()/s}}19 10(u.g.1G()>s){w=u.g.1G()/s;10(u.g.1D()>i*w){w=u.g.1D()/i}}}t.17({1b:1x.5s(i*w),1d:1x.5s(s*w),2z:-1x.5s(i*w)/2+"1A",2N:-1x.5s(s*w)/2+"1A"})}});t.17({1y:"1F",21:"2A"});u.7i();n();e(14).7p();10(u.g.4o&&u.g.3X){u.g.4o=1e;u.g.4J=1e;u.g.53=1e;u.g.3X=1e}};u.7i=16(){10(u.g.4p){12 e=16(){10(u.g.4p.1d()>0){10(u.g.8u>0){u.g.3y.17({1d:u.g.4p.1d()/2})}19{u.g.3y.17({1d:u.g.4p.1d(),2N:-u.g.4p.1d()/2})}}19{2i(16(){e()},50)}};e()}};u.7h=16(){10(u.o.4h>0){10(e(2Z).1b()<u.o.4h){u.g.3x=1a;u.g.2C=u.o.4h+"1A"}19{u.g.3x=1e;u.g.2C=u.g.6L;u.g.1B=1}}10(u.g.3x){12 t=e(s).2s();10(u.g.53&&u.g.3X){e(s).17({1b:u.g.4o});u.g.1B=u.g.53;e(s).17({1d:u.g.4J})}19{e(s).17({1b:t.1b()-1c(e(s).17("26-1i"))-1c(e(s).17("26-1I"))});u.g.1B=e(s).1b()/1c(u.g.2C);e(s).17({1d:u.g.1B*1c(u.g.3W)})}}19{u.g.1B=1;e(s).17({1b:u.g.2C,1d:u.g.3W})}10(e(s).5y(".11-5o-5q-2h").1o){e(s).5y(".11-5o-5q-8k").17({1d:e(s).5l(1a)});e(s).5y(".11-5o-5q-2h").17({1d:e(s).5l(1a)});e(s).5y(".11-5o-5q-8k").17({1b:e(2Z).1b(),1i:-e(s).5y(".11-5o-5q-2h").8o().1i});10(u.g.2C.1w("%")!=-1){12 n=1c(u.g.2C);12 r=e("3l").1b()/1Z*n-(e(s).4S()-e(s).1b());e(s).1b(r)}}e(s).18(".11-27, .11-7j-2h").17({1b:u.g.1D(),1d:u.g.1G()});10(u.g.1H&&u.g.1v){u.g.1H.17({1b:u.g.1D(),1d:u.g.1G()});u.g.1v.17({1b:u.g.1D(),1d:u.g.1G()})}19{e(s).18(".11-1Q").17({1b:u.g.1D(),1d:u.g.1G()})}};u.6M=16(){u.g.1p.17({1b:u.g.1p.13("31")*u.g.1B,1d:u.g.1p.13("33")*u.g.1B});10(u.g.1N){u.g.1p.17("1y","2b")}19{u.g.1p.2x(2n)}12 t=6x=6q=5z="1U";10(u.g.1p.13("4a")&&u.g.1p.13("4a").1w("%")!=-1){t=u.g.1D()/1Z*1c(u.g.1p.13("4a"))-u.g.1p.1b()/2+1c(e(s).17("26-1i"))}19{t=1c(u.g.1p.13("4a"))*u.g.1B}10(u.g.1p.13("4X")&&u.g.1p.13("4X").1w("%")!=-1){6x=u.g.1D()/1Z*1c(u.g.1p.13("4X"))-u.g.1p.1b()/2+1c(e(s).17("26-1I"))}19{6x=1c(u.g.1p.13("4X"))*u.g.1B}10(u.g.1p.13("3P")&&u.g.1p.13("3P").1w("%")!=-1){6q=u.g.1G()/1Z*1c(u.g.1p.13("3P"))-u.g.1p.1d()/2+1c(e(s).17("26-1u"))}19{6q=1c(u.g.1p.13("3P"))*u.g.1B}10(u.g.1p.13("5p")&&u.g.1p.13("5p").1w("%")!=-1){5z=u.g.1G()/1Z*1c(u.g.1p.13("5p"))-u.g.1p.1d()/2+1c(e(s).17("26-1s"))}19{5z=1c(u.g.1p.13("5p"))*u.g.1B}u.g.1p.17({1i:t,1I:6x,1u:6q,1s:5z})};u.8g=16(){u.7o("5r");12 t=u.g.2C.1w("%")==-1?1c(u.g.2C):u.g.1D();e(s).18(".11-1z-1K a").17({1b:1c(u.o.7H*u.g.1B),1d:1c(u.o.5m*u.g.1B)});e(s).18(".11-1z-1K a:42").17({2T:0});e(s).18(".11-1z-1K").17({1d:1c(u.o.5m*u.g.1B)});12 n=e(s).18(".11-1z");12 r=u.o.5C.1w("%")==-1?1c(u.o.5C):1c(t/1Z*1c(u.o.5C));n.17({1b:r*1x.29(u.g.1B*1Z)/1Z});10(n.1b()>e(s).18(".11-1z-1K").1b()){n.17({1b:e(s).18(".11-1z-1K").1b()})}u.7o("9W")};u.7l=16(t){12 n=t?t:u.g.5x;e(s).18(".11-1z-1K a:8b(.11-3v-"+n+")").30().1X(16(){e(14).2X("11-3v-1S").1h().5V(7Q,u.o.7v/1Z)});e(s).18(".11-1z-1K a.11-3v-"+n).30().1t("11-3v-1S").1h().5V(7Q,u.o.7w/1Z)};u.79=16(){10(!e(s).18(".11-1z-1K-2h").43("11-1z-1K-1M")){12 t=e(s).18(".11-3v-1S").1o?e(s).18(".11-3v-1S").2s():1e;10(t){12 n=t.3i().1i+t.1b()/2;12 r=e(s).18(".11-1z-1K-2h").1b()/2-n;r=r<e(s).18(".11-1z-1K-2h").1b()-e(s).18(".11-1z-1K").1b()?e(s).18(".11-1z-1K-2h").1b()-e(s).18(".11-1z-1K").1b():r;r=r>0?0:r;e(s).18(".11-1z-1K").20({2z:r},7T,"5Z")}}};u.7o=16(t){10(u.o.6c&&!e(s).43("11-1M")){2I(t){1j"5r":u.g.3B.17({21:"2O",1y:"2b"});1k;1j"9W":u.g.3B.17({21:"2A",1y:"1F"});1k}}};u.20=16(){10(e(s).18(".11-1Q").1o>1){u.g.2Y=1a}u.g.3C=1e;3a(u.g.3T);3a(u.g.7n);u.g.ab=u.g.1H;u.o.9U(u.g);10(u.o.32=="4j"){u.7l();10(!("64"3p 2Z)){u.79()}}u.g.1v.1t("11-9P");12 t=6Y=6n=6W=6d=76=6e=75=6v=bD=6z=bE="1U";12 o=6S=u.g.1D();12 a=6U=u.g.1G();12 f=u.g.2c=="1O"?u.g.1H:u.g.1v;12 l=f.13("3n")?f.13("3n"):u.o.7P;12 c=u.g.7t[u.g.2c][l];10(c=="1i"||c=="1I"){o=6n=6S=6e=0;6z=0}10(c=="1u"||c=="1s"){a=t=6U=6d=0;6v=0}2I(c){1j"1i":6Y=6d=0;6v=-u.g.1D();1k;1j"1I":t=76=0;6v=u.g.1D();1k;1j"1u":6W=6e=0;6z=-u.g.1G();1k;1j"1s":6n=75=0;6z=u.g.1G();1k}u.g.1H.17({1i:t,1I:6Y,1u:6n,1s:6W});u.g.1v.17({1b:6S,1d:6U,1i:6d,1I:76,1u:6e,1s:75});12 h=u.g.1H.13("6j")?1c(u.g.1H.13("6j")):u.o.7Y;12 p=u.g.1H.13("4C")?1c(u.g.1H.13("4C")):u.o.5A;12 d=u.g.1H.13("4z")?u.g.1H.13("4z"):u.o.5H;12 v=u.g.1v.13("4Q")?1c(u.g.1v.13("4Q")):u.o.87;12 m=u.g.1v.13("6h")?1c(u.g.1v.13("6h")):u.o.7s;12 g=u.g.1v.13("6i")?u.g.1v.13("6i"):u.o.7A;12 y=16(){u.g.1H.1C(h+p/15).20({1b:o,1d:a},p,d,16(){b()})};12 b=16(){u.g.ab.18(\' > *[1n*="11-s"]\').1h(1a,1a);u.o.7O(u.g);u.g.1H=u.g.1v;u.g.2a=u.g.5x;e(s).18(".11-1Q").2X("11-1S");e(s).18(".11-1Q:3G("+(u.g.2a-1)+")").1t("11-1S").2X("11-9P");e(s).18(".11-1s-4f a").2X("11-1m-1S");e(s).18(".11-1s-4f a:3G("+(u.g.2a-1)+")").1t("11-1m-1S");10(u.g.2G){u.4M()}u.g.2Y=1e;10(u.g.3g==1a){u.3L(u.g.1H,16(){u.g.3g=1e})}};12 w=16(t){u.g.1H.18(\' > *[1n*="11-s"]\').1X(16(){12 n=e(14).13("3n")?e(14).13("3n"):c;12 r,i;2I(n){1j"1i":r=-u.g.1D();i=0;1k;1j"1I":r=u.g.1D();i=0;1k;1j"1u":i=-u.g.1G();r=0;1k;1j"1s":i=u.g.1G();r=0;1k}12 s=e(14).13("6r")?e(14).13("6r"):1e;2I(s){1j"1i":r=u.g.1D();i=0;1k;1j"1I":r=-u.g.1D();i=0;1k;1j"1u":i=u.g.1G();r=0;1k;1j"1s":i=-u.g.1G();r=0;1k}12 o=1c(e(14).1f("1n").1Y("11-s")[1]);10(o==-1){12 a=1c(e(14).17("1i"));12 f=1c(e(14).17("1u"));10(i<0){i=-(u.g.1G()-f+1)}19 10(i>0){i=f+e(14).5l()+1}10(r<0){r=-(u.g.1D()-a+1)}19 10(r>0){r=a+e(14).4S()+1}12 l=1}19{12 h=u.g.1H.13("6p")?1c(u.g.1H.13("6p")):u.o.7J;12 l=o*h}12 p=e(14).13("6j")?1c(e(14).13("6j")):u.o.7Y;12 d=e(14).13("4C")?1c(e(14).13("4C")):u.o.5A;12 v=e(14).13("4z")?e(14).13("4z"):u.o.5H;10(t){p=0;d=t}12 m="1F";10(!u.g.1N&&u.g.4i){m=e(14).13("69")?e(14).13("69"):0}12 g="1F";10(!u.g.1N&&u.g.4i){g=e(14).13("68")?e(14).13("68"):1}10(e(14).13("66")){3a(e(14).13("66"))}10(s=="4c"||!s&&n=="4c"){10(!u.g.1N){e(14).1h(1a,1e).1C(p).20({2B:0,1L:m,1W:g},d,v,16(){e(14).17({21:"2O",2B:e(14).13("6l")})})}19{e(14).1h(1a,1a).1C(p).2U(d,v,16(){e(14).17({21:"2O",1y:"2b"})})}}19{e(14).1h(1a,1e).1C(p).20({1L:m,1W:g,2z:-r*l,2N:-i*l},d,v)}})};12 E=16(){u.g.1v.1C(h+v).20({1b:u.g.1D(),1d:u.g.1G()},m,g)};12 S=16(){10(u.g.3o){h=0}u.g.1v.18(\' > *[1n*="11-s"]\').1X(16(){12 t=e(14).13("3n")?e(14).13("3n"):c;12 n,r;2I(t){1j"1i":n=-u.g.1D();r=0;1k;1j"1I":n=u.g.1D();r=0;1k;1j"1u":r=-u.g.1G();n=0;1k;1j"1s":r=u.g.1G();n=0;1k;1j"4c":r=0;n=0;1k}12 i=1c(e(14).1f("1n").1Y("11-s")[1]);10(i==-1){12 s=1c(e(14).17("1i"));12 o=1c(e(14).17("1u"));10(r<0){r=-(o+e(14).5l()+1)}19 10(r>0){r=u.g.1G()-o+1}10(n<0){n=-(s+e(14).4S()+1)}19 10(n>0){n=u.g.1D()-s+1}12 a=1}19{12 f=u.g.1v.13("9r")?1c(u.g.1v.13("9r")):u.o.9v;12 a=i*f}12 l=e(14).13("4Q")?1c(e(14).13("4Q")):u.o.87;12 p=e(14).13("6h")?1c(e(14).13("6h")):u.o.7s;12 d=e(14).13("6i")?e(14).13("6i"):u.o.7A;12 m=e(14);12 g=16(){10(u.o.7R==1a){m.18(".11-3U").2k()}10(m.13("6m")>0){m.13("66",2i(16(){u.7K(m)},m.13("6m")))}};12 y="1F";10(!u.g.1N&&u.g.4i){y=e(14).13("9t")?e(14).13("9t"):0}12 b="1F";10(!u.g.1N&&u.g.4i){b=e(14).13("9g")?e(14).13("9g"):1}10(t=="4c"){10(!u.g.1N){e(14).17({1V:"1L("+y+"1E) 1W("+b+")","-4R-1V":"1L("+y+"1E) 1W("+b+")","-3E-1V":"1L("+y+"1E) 1W("+b+")","-o-1V":"1L("+y+"1E) 1W("+b+")","-4U-1V":"1L("+y+"1E) 1W("+b+")",2B:0,21:"2A",2z:0,2N:0}).1h().1C(h+v+l).20({1W:1,1L:0,2B:e(14).13("6l")},p,d,16(){g()})}19{e(14).17({1y:"1F",21:"2A",2z:0,2N:0}).1h(1a,1a).1C(h+v+l).2x(p,d,16(){g()})}}19{10(!u.g.1N){e(14).17({2B:e(14).13("6l")})}e(14).17({1V:"1L("+y+"1E) 1W("+b+")","-4R-1V":"1L("+y+"1E) 1W("+b+")","-3E-1V":"1L("+y+"1E) 1W("+b+")","-o-1V":"1L("+y+"1E) 1W("+b+")","-4U-1V":"1L("+y+"1E) 1W("+b+")",2z:n*a,2N:r*a,1y:"2b",21:"2A"});e(14).1h().1C(h+v+l).20({2z:0,2N:0,1W:1,1L:0},p,d,16(){g()})}})};12 x=16(){10(n(e(s))&&28 e.80!="3c"&&(u.g.1v.13("4q")||u.g.1v.13("5i"))){10(u.g.1v.13("4q")&&u.g.1v.13("5i")){12 t=1x.29(1x.2t()*2);12 r=[["3d",u.g.1v.13("4q")],["9i",u.g.1v.13("5i")]];N(r[t][0],r[t][1])}19 10(u.g.1v.13("4q")){N("3d",u.g.1v.13("4q"))}19{N("9i",u.g.1v.13("5i"))}}19{10(u.g.1v.13("5h")&&u.g.1v.13("5j")){12 t=1x.29(1x.2t()*2);12 r=[["2d",u.g.1v.13("5h")],["9l",u.g.1v.13("5j")]];N(r[t][0],r[t][1])}19 10(u.g.1v.13("5h")){N("2d",u.g.1v.13("5h"))}19 10(u.g.1v.13("5j")){N("9l",u.g.1v.13("5j"))}19{N("2d","6A")}}};12 T=16(){10(n(e(s))&&4N.1w("3d")!=-1){N("3d",4N.1Y(":")[1])}19{10(4N.1w("3d")!=-1){N("2d","6A")}19{N("2d",4N.1Y(":")[1])}}};12 N=16(e,t){12 n=e.1w("cw")==-1?u.t:u.ct;12 r="3d",s,o;10(e.1w("2d")!=-1){r="2d"}10(t.1w("42")!=-1){o=n["t"+r].1o-1;s="42"}19 10(t.1w("6A")!=-1){o=1x.29(1x.2t()*i(n["t"+r]));s="2t 4Y 6A"}19{12 a=t.1Y(",");12 f=a.1o;o=1c(a[1x.29(1x.2t()*f)])-1;s="2t 4Y cx"}C(r,n["t"+r][o])};12 C=16(t,n){12 i=e(s).18(".11-27");12 o=u.g.1H.18(\'*[1n*="11-s"]\').1o>0?3S:0;12 a=n.86.3b().1w("cy")==-1?1e:1a;12 f=28 n.4O=="3M"?n.4O:1x.29(1x.2t()*(n.4O[1]-n.4O[0]+1))+n.4O[0];12 l=28 n.4T=="3M"?n.4T:1x.29(1x.2t()*(n.4T[1]-n.4T[0]+1))+n.4T[0];10(u.g.7L()==1a&&u.o.8l==1a||u.g.1N&&u.o.8i==1a){10(f>=15){f=7}19 10(f>=5){f=4}19 10(f>=4){f=3}19 10(f>2){f=2}10(l>=15){l=7}19 10(l>=5){l=4}19 10(l>=4){l=3}19 10(l>2){l=2}10(l>2&&f>2){l=2;10(f>4){f=4}}}12 c=e(s).18(".11-27").1b()/f;12 h=e(s).18(".11-27").1d()/l;10(!u.g.2w){u.g.2w=e("<1g>").1t("11-7j-2h").1t("11-3V-2O").17({1b:i.1b(),1d:i.1d()}).5G(i)}19{u.g.2w.5e().17({1b:i.1b(),1d:i.1d()})}12 p=i.1b()-1x.29(c)*f;12 d=i.1d()-1x.29(h)*l;12 v=[];v.9y=16(){12 e=14.1o,t,n,r;10(e==0)1P 1e;8Z(--e){t=1x.29(1x.2t()*(e+1));n=14[e];r=14[t];14[e]=r;14[t]=n}1P 14};2u(12 m=0;m<f*l;m++){v.4y(m)}2I(n.3H.cE){1j"5M":v.5M();1k;1j"9z-7D":v=r(l,f,"7D");1k;1j"9z-5M":v=r(l,f,"5M");1k;1j"2t":v.9y();1k}12 g=u.g.1H.18(".11-bg");12 y=u.g.1v.18(".11-bg");10(g.1o==0&&y.1o==0){t="2d";n=e.4I(1a,{},u.t["cK"][0]);n.1r.2l=1;n.3H.1C=0}10(t=="3d"){u.g.3o=o+(f*l-1)*n.3H.1C;12 E=0;10(n.2K&&n.2K.2l){E+=n.2K.2l}10(n.24&&n.24.2l){E+=n.24.2l}10(n.3r&&n.3r.2l){E+=n.3r.2l}u.g.3o+=E;12 x=0;10(n.2K&&n.2K.1C){x+=n.2K.1C}10(n.24&&n.24.1C){x+=n.24.1C}10(n.3r&&n.3r.1C){x+=n.3r.1C}u.g.3o+=x}19{u.g.3o=o+(f*l-1)*n.3H.1C+n.1r.2l;u.g.4s=e("<1g>").1t("11-cL").1q(u.g.2w);u.g.7V=e("<1g>").1t("11-cJ").1q(u.g.2w)}12 T=u.g.2c;2u(12 N=0;N<f*l;N++){12 C=N%f==0?p:0;12 k=N>(l-1)*f-1?d:0;12 L=e("<1g>").1t("11-7j-3H").17({1b:1x.29(c)+C,1d:1x.29(h)+k}).1q(u.g.2w);12 A,O;10(t=="3d"){L.1t("11-3d-2h");12 M=1x.29(c)+C;12 3D=1x.29(h)+k;12 D;10(n.24.57=="a3"){10(1x.40(n.24.1r.2q)>90&&n.3H.9C!="9G"){D=1x.29(M/7)+C}19{D=M}}19{10(1x.40(n.24.1r.2m)>90&&n.3H.9C!="9G"){D=1x.29(3D/7)+k}19{D=3D}}12 P=M/2;12 H=3D/2;12 B=D/2;12 j=16(t,n,r,i,s,o,u,a,f){e("<1g>").1t(t).17({1b:r,1d:i,1V:"5f("+s+"1A, "+o+"1A, "+u+"1A) 2m("+a+"1E) 2q("+f+"1E) 4Z(5b) 4K(1, 1, 1)","-o-1V":"5f("+s+"1A, "+o+"1A, "+u+"1A) 2m("+a+"1E) 2q("+f+"1E) 4Z(5b) 4K(1, 1, 1)","-4R-1V":"5f("+s+"1A, "+o+"1A, "+u+"1A) 2m("+a+"1E) 2q("+f+"1E) 4Z(5b) 4K(1, 1, 1)","-4U-1V":"5f("+s+"1A, "+o+"1A, "+u+"1A) 2m("+a+"1E) 2q("+f+"1E) 4Z(5b) 4K(1, 1, 1)","-3E-1V":"5f("+s+"1A, "+o+"1A, "+u+"1A) 2m("+a+"1E) 2q("+f+"1E) 4Z(5b) 4K(1, 1, 1)"}).1q(n)};j("11-3d-3J",L,0,0,0,0,-B,0,0);12 F=0;12 I=0;12 q=0;10(n.24.57=="ci"&&1x.40(n.24.1r.2m)>90){j("11-3d-56",L.18(".11-3d-3J"),M,3D,-P,-H,-B,62,0)}19{j("11-3d-56",L.18(".11-3d-3J"),M,3D,-P,-H,-B,0,62)}j("11-3d-1s",L.18(".11-3d-3J"),M,D,-P,H-B,0,-90,0);j("11-3d-1u",L.18(".11-3d-3J"),M,D,-P,-H-B,0,90,0);j("11-3d-9p",L.18(".11-3d-3J"),M,3D,-P,-H,B,0,0);j("11-3d-1i",L.18(".11-3d-3J"),D,3D,-P-B,-H,0,0,-90);j("11-3d-1I",L.18(".11-3d-3J"),D,3D,P-B,-H,0,0,90);A=L.18(".11-3d-9p");10(n.24.57=="a3"){10(1x.40(n.24.1r.2q)>90){O=L.18(".11-3d-56")}19{O=L.18(".11-3d-1i, .11-3d-1I")}}19{10(1x.40(n.24.1r.2m)>90){O=L.18(".11-3d-56")}19{O=L.18(".11-3d-1u, .11-3d-1s")}}12 R=o+v[N]*n.3H.1C;12 U=u.g.2w.18(".11-3d-2h:3G("+N+") .11-3d-3J");10(n.2K&&n.2K.1r){n.2K.1r.1C=n.2K.1r.1C?n.2K.1r.1C+R:R;U.1r(n.2K.1r,n.2K.2l,n.2K.3N)}19{n.24.1r.1C=n.24.1r.1C?n.24.1r.1C+R:R}U.1r(n.24.1r,n.24.2l,n.24.3N);10(n.3r){U.1r(e.4I({},{4K:1},n.3r.1r),n.3r.2l,n.3r.3N)}}19{12 z=2L=2y=2D="1U";12 W=51=1;10(n.1r.57=="2t"){12 X=["1u","1s","1I","1i"];12 V=X[1x.29(1x.2t()*X.1o)]}19{12 V=n.1r.57}10(n.86.3b().1w("9o")!=-1&&N%2==0){10(T=="1O"){T="1R"}19{T="1O"}}10(T=="1O"){2I(V){1j"1u":V="1s";1k;1j"1s":V="1u";1k;1j"1i":V="1I";1k;1j"1I":V="1i";1k;1j"6G":V="6F";1k;1j"6H":V="7r";1k;1j"7r":V="6H";1k;1j"6F":V="6G";1k}}2I(V){1j"1u":z=2y=-L.1d();2L=2D=0;1k;1j"1s":z=2y=L.1d();2L=2D=0;1k;1j"1i":z=2y=0;2L=2D=-L.1b();1k;1j"1I":z=2y=0;2L=2D=L.1b();1k;1j"6G":z=L.1d();2y=0;2L=L.1b();2D=0;1k;1j"6H":z=L.1d();2y=0;2L=-L.1b();2D=0;1k;1j"7r":z=-L.1d();2y=0;2L=L.1b();2D=0;1k;1j"6F":z=-L.1d();2y=0;2L=-L.1b();2D=0;1k}u.g.2r=n.1r.aa?n.1r.aa:1;10(a==1a&&u.g.2r!=1){z=z/2;2y=2y/2;2L=2L/2;2D=2D/2}2I(n.1r.4d){1j"4c":z=2y=2L=2D=0;W=0;51=1;1k;1j"co":W=0;51=1;10(u.g.2r==1){2y=2D=0}1k}10((n.1r.3t||n.1r.2m||n.1r.2q||u.g.2r!=1)&&!u.g.1N&&n.1r.4d!="1K"){L.17({3V:"2A"})}19{L.17({3V:"2O"})}10(a==1a){u.g.4s.17({3V:"2A"})}19{u.g.4s.17({3V:"2O"})}10(n.1r.4d=="1K"||a==1a){12 J=L.1q(u.g.4s);12 K=L.81().1q(u.g.7V);A=e("<1g>").1t("11-cm").1q(J)}19{12 K=L.1q(u.g.7V)}O=e("<1g>").1t("11-cq").1q(K).17({1u:-z,1i:-2L,ck:"2b",2B:W});12 Q=o+v[N]*n.3H.1C;10(u.g.8E&&28 e.80!="3c"){12 G=n.1r.3t?n.1r.3t:0;12 Y=n.1r.2m?n.1r.2m:0;12 Z=n.1r.2q?n.1r.2q:0;10(T=="1O"){G=-G;Y=-Y;Z=-Z}10(Y!=0||Z!=0||G!=0||u.g.2r!=1){O.17({1V:"1L("+G+"1E) 2m("+Y+"1E) 2q("+Z+"1E) 1W("+u.g.2r+","+u.g.2r+")","-o-1V":"1L("+G+"1E) 2m("+Y+"1E) 2q("+Z+"1E) 1W("+u.g.2r+","+u.g.2r+")","-4R-1V":"1L("+G+"1E) 2m("+Y+"1E) 2q("+Z+"1E) 1W("+u.g.2r+","+u.g.2r+")","-4U-1V":"1L("+G+"1E) 2m("+Y+"1E) 2q("+Z+"1E) 1W("+u.g.2r+","+u.g.2r+")","-3E-1V":"1L("+G+"1E) 2m("+Y+"1E) 2q("+Z+"1E) 1W("+u.g.2r+","+u.g.2r+")"})}O.1r({1C:Q,1u:0,1i:0,2B:51,1L:0,2m:0,2q:0,1W:1},n.1r.2l,n.1r.3N);10((n.1r.4d=="1K"||a==1a)&&n.86.3b().1w("9o")==-1){12 84=0;10(G!=0){84=-G}A.1r({1C:Q,1u:2y,1i:2D,1L:84,1W:u.g.2r,2B:W},n.1r.2l,n.1r.3N)}}19{O.1C(Q).20({1u:0,1i:0,2B:51},n.1r.2l,n.1r.3N);10(n.1r.4d=="1K"){A.1C(Q).20({1u:2y,1i:2D},n.1r.2l,n.1r.3N)}}}10(g.1o){10(t=="3d"||t=="2d"&&(n.1r.4d=="1K"||a==1a)){A.3z(e("<22>").1f("1l",g.1f("1l")).17({1b:g[0].1J.1b,1d:g[0].1J.1d,2z:i.1b()/2+3Z(g.17("2T-1i"))-1c(L.3i().1i),2N:i.1d()/2+3Z(g.17("2T-1u"))-1c(L.3i().1u)}))}19 10(u.g.4s.30().1o==0){u.g.4s.3z(e("<22>").1f("1l",g.1f("1l")).17({1b:g[0].1J.1b,1d:g[0].1J.1d,2z:i.1b()/2+3Z(g.17("2T-1i")),2N:i.1d()/2+3Z(g.17("2T-1u"))}))}}10(y.1o){O.3z(e("<22>").1f("1l",y.1f("1l")).17({1b:y[0].1J.1b,1d:y[0].1J.1d,2z:i.1b()/2+3Z(y.17("2T-1i"))-1c(L.3i().1i),2N:i.1d()/2+3Z(y.17("2T-1u"))-1c(L.3i().1u)}))}}12 7C=u.g.1H;12 2F=u.g.1v;2F.18(".11-bg").17({21:"2O"});w(o);2i(16(){7C.17({1b:0});u.g.2w.2X("11-3V-2O")},o);12 7B=1c(2F.13("5Y"))?1c(2F.13("5Y")):0;12 7x=u.g.3o+7B>0?u.g.3o+7B:0;2i(16(){10(u.g.3g==1a){u.g.2w.5e();7C.2X("11-1S");u.3L(2F,16(){u.g.3g=1e})}S();10(2F.18(".11-bg").1o<1||2F.18(".11-bg").1o>0&&2F.18(".11-bg").1f("1l").3b().1w("5T")!=-1){u.g.2w.2U(3I,16(){e(14).5e().6k()})}2F.17({1b:u.g.1D(),1d:u.g.1G()})},7x);2i(16(){u.g.2w.1t("11-3V-2O");2F.1t("11-1S");10(2F.18(".11-bg").1o){2F.18(".11-bg").17({1y:"1F",21:"2A"});10(u.g.1N){2F.18(".11-bg").17("1y","2b");2i(16(){b()},3I)}19{2F.18(".11-bg").2x(3I,16(){b()})}}19{b()}},u.g.3o)};7E=(u.g.1v.13("4q")||u.g.1v.13("5h"))&&u.t||(u.g.1v.13("5i")||u.g.1v.13("5j"))&&u.ct?"3m":"5F";10(u.o.4r&&!u.g.9D){10(u.g.2E==1){12 h=0;u.o.7O(u.g)}19{12 k=1c(u.g.1v.13("5Y"))?1c(u.g.1v.13("5Y")):0;12 L=7E=="3m"?0:p;2i(16(){b()},L+1x.40(k))}u.g.3o=1a;S();u.g.1v.17({1b:u.g.1D(),1d:u.g.1G()});10(!u.g.1N){u.g.1v.18(".11-bg").17({1y:"1F"}).2x(3I)}u.g.9D=1a;u.g.3C=1e}19{2I(7E){1j"5F":u.g.3o=1e;10(u.g.2w){u.g.2w.5e()}y();w();E();S();1k;1j"3m":10(28 4N!="3c"){T()}19{x()}1k}}};u.7K=16(e){12 t=u.g.1H;10(u.g.2c!="1O"&&u.g.1v){t=u.g.1v}12 n=t.13("3n")?t.13("3n"):u.o.7P;12 r=u.g.7t[u.g.2c][n];12 i=e.13("3n")?e.13("3n"):r;12 s,o;2I(i){1j"1i":s=-u.g.1D();o=0;1k;1j"1I":s=u.g.1D();o=0;1k;1j"1u":o=-u.g.1G();s=0;1k;1j"1s":o=u.g.1G();s=0;1k}12 a=e.13("6r")?e.13("6r"):1e;2I(a){1j"1i":s=u.g.1D();o=0;1k;1j"1I":s=-u.g.1D();o=0;1k;1j"1u":o=u.g.1G();s=0;1k;1j"1s":o=-u.g.1G();s=0;1k}12 f=1c(e.1f("1n").1Y("11-s")[1]);10(f==-1){12 l=1c(e.17("1i"));12 c=1c(e.17("1u"));10(o<0){o=-(u.g.1G()-c+1)}19 10(o>0){o=c+e.5l()+1}10(s<0){s=-(u.g.1D()-l+1)}19 10(s>0){s=l+e.4S()+1}12 h=1}19{12 p=u.g.1H.13("6p")?1c(u.g.1H.13("6p")):u.o.7J;12 h=f*p}12 d=e.13("4C")?1c(e.13("4C")):u.o.5A;12 v=e.13("4z")?e.13("4z"):u.o.5H;12 m="1F";10(!u.g.1N&&u.g.4i){m=e.13("69")?e.13("69"):0}12 g="1F";10(!u.g.1N&&u.g.4i){g=e.13("68")?e.13("68"):1}10(a=="4c"||!a&&i=="4c"){10(!u.g.1N){e.20({2B:0,1L:m,1W:g},d,v)}19{e.2U(d,v)}}19{e.20({1L:m,1W:g,2z:-s*h,2N:-o*h},d,v)}};u.4G=16(){u.d={3A:e("<1g>"),aT:16(t){e("<9s>"+t+"</9s>").1q(u.d.3A)},9q:16(){e("<4b>").1q(u.d.3A)},aU:16(t){e("<4b><3f>"+t+"</3f></4b>").1q(u.d.3A)},aL:16(t){e("<3f>"+t+"</3f>").1q(u.d.3A.18("4b:42"))},7u:16(t){e("<4b>").1q(u.d.3A.18("4b:42 3f:42"))},aF:16(e){u.d.3A.18("4b:42 3f:42").1M(16(){e.17({3h:"bO bN bM",2N:1c(e.17("2T-1u"))-2,2z:1c(e.17("2T-1i"))-2})},16(){e.17({3h:"9a",2N:1c(e.17("2T-1u"))+2,2z:1c(e.17("2T-1i"))+2})})},6k:16(){10(!e("3l").18(".11-4G-7X").1o){10(!u.d.aj){u.d.aT("bP bQ");u.d.9q();2u(12 t 3p u.o){u.d.aL(t+": <1T>"+u.o[t]+"</1T>")}u.d.aT("3e bS");u.d.aU("bR 36 bL ak: <1T>"+e(s).18(".11-1Q").1o+"</1T>");e(s).18(\'.11-27 .11-1Q, .11-27 *[1n*="11-s"]\').1X(16(){10(e(14).43("11-1Q")){u.d.aU("<1T>ai "+(e(14).5u()+1)+"</1T>");u.d.7u();u.d.aL("<1T>ai "+(e(14).5u()+1)+" 9Z:</1T><br><br>")}19{u.d.aU("    bK ( "+e(14).9T("9S")+" )");u.d.aF(e(14));u.d.7u();u.d.aL("<1T>"+e(14).9T("9S")+" 1Q 9Z:</1T><br><br>");u.d.aL("bH / 1n: <1T>"+e(14).1f("1n")+"</1T>")}e.1X(e(14).13(),16(e,t){u.d.aL(e+": <1T>"+t+"</1T>")})});u.d.aj=1a}12 n=e("<1g>").1t("11-4G-7X").17({3i:"bI",9V:"bT",1u:"4W",1I:"4W",1b:"bU",26:"c6",48:"c5","3h-c4":"4W",1d:e(2Z).1d()-60,2B:0,85:5v}).1q(e("3l")).20({85:0,2B:.9},7T,"5Z").2k(16(t){10(t.8w&&t.8q){e(14).20({85:5v,2B:0},7T,"5Z",16(){e(14).5w()})}});12 r=e("<1g>").17({1b:"1Z%",1d:"1Z%",3V:"1U"}).1q(n);12 i=e("<1g>").17({1b:"1Z%"}).1q(r).3z(u.d.3A)}},c7:16(){e("3l").18(".11-4G-7X").5w()}};e(s).2k(16(e){10(e.8w&&e.8q){u.d.6k()}})};u.2Q()};12 n=16(t){12 n=e("<1g>"),r=1e,i=1e,s=["ca","c9","c3","c2","bX"];1V=["bW","bV","bY","bZ","c1"];2u(12 o=s.1o-1;o>=0;o--){r=r?r:n[0].1J[s[o]]!=3c}2u(12 o=1V.1o-1;o>=0;o--){n.17("1V-1J","8p-3d");i=i?i:n[0].1J[1V[o]]=="8p-3d"}10(r&&n[0].1J[s[4]]!=3c){n.1f("4n","11-cN").1q(t);r=n[0].dJ===3&&n[0].dr===9;n.5w()}1P r&&i};12 r=16(e,t,n){12 r=[];10(n=="7D"){2u(12 i=0;i<e;i++){2u(12 s=0;s<t;s++){r.4y(i+s*e)}}}19{2u(12 i=e-1;i>-1;i--){2u(12 s=t-1;s>-1;s--){r.4y(i+s*e)}}}1P r};12 i=16(e){12 t=0;2u(12 n 3p e){10(e.dU(n)){++t}}1P t};12 s=16(){8f=16(e){e=e.3b();12 t=/(9c)[ \\/]([\\w.]+)/.4L(e)||/(3E)[ \\/]([\\w.]+)/.4L(e)||/(dy)(?:.*2v|)[ \\/]([\\w.]+)/.4L(e)||/(5E) ([\\w.]+)/.4L(e)||e.1w("dx")<0&&/(dz)(?:.*? dA:([\\w.]+)|)/.4L(e)||[];1P{7y:t[1]||"",2v:t[2]||"0"}};12 e=8f(44.46),t={};10(e.7y){t[e.7y]=1a;t.2v=e.2v}10(t.9c){t.3E=1a}19 10(t.3E){t.dC=1a}1P t};4l=16(e,t){12 n=["3E","dB","4U","4R","o",""];12 r=0,i,s;8Z(r<n.1o&&!e[i]){i=t;10(n[r]==""){i=i.8X(0,1).3b()+i.8X(1)}i=n[r]+i;s=28 e[i];10(s!="3c"){n=[n[r]];1P s=="16"?e[i]():e[i]}r++}};t.5J={2v:"4.6.0",7L:16(){10(44.46.3s(/dp/i)||44.46.3s(/dn/i)||44.46.3s(/ds/i)||44.46.3s(/du/i)||44.46.3s(/dD/i)||44.46.3s(/dE/i)||44.46.3s(/dP dO/i)){1P 1a}19{1P 1e}},dR:16(e){10(e.17("26-1s")=="1U"||e.17("26-1s")=="1F"||e.17("26-1s")==0||e.17("26-1s")=="9a"){1P 1a}19{1P 1e}},8E:!s().5E||s().5E&&s().2v>9?1a:1e,1N:s().5E&&s().2v<9?1a:1e,4o:1e,4J:1e,53:1e,3X:1e,3q:1e,52:1e,2G:1e,2Y:1e,2E:5L,2c:"1R",3T:5L,1D:5L,1G:5L,7t:{1O:{1i:"1I",1I:"1i",1u:"1s",1s:"1u"},1R:{1i:"1i",1I:"1I",1u:"1u",1s:"1s"}},v:{d:3I,7z:7Q,83:3I}};t.8Q={6f:1a,2g:1,7Z:1a,8M:1a,59:1a,7S:1a,6t:1a,63:1a,2H:"da",3O:"/5W/cM/",8L:1a,82:"7U",5Q:1e,4r:1a,1p:1e,8N:"1i: -4W; 1u: -4W;",7W:1e,8O:"ax",8C:1a,3Y:0,5U:1a,7R:1a,3Q:"1U",8R:"bc.bd",9b:1a,5S:1e,4h:0,7N:0,32:"1M",7H:1Z,5m:60,5C:"60%",7w:35,7v:1Z,8n:1a,6c:1e,8r:1e,9d:1a,8l:1a,8i:1a,93:1e,9I:16(e){},a7:16(e){},a0:16(e){},a1:16(e){},9U:16(e){},7O:16(e){},5B:16(e){},5K:16(e){},7P:"1I",7F:ba,9v:.45,7J:.45,7s:3S,5A:3S,7A:"9m",5H:"9m",87:0,7Y:0}})(34)',62,863,"||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||if|ls|var|data|this||function|css|find|else|true|width|parseInt|height|false|attr|div|stop|left|case|break|src|nav|class|length|yourLogo|appendTo|transition|bottom|addClass|top|nextLayer|indexOf|Math|display|thumbnail|px|ratio|delay|sliderWidth|deg|none|sliderHeight|curLayer|right|style|slide|kmRotate|hover|ie78|prev|return|layer|next|active|strong|auto|transform|kmScale|each|split|100|animate|visibility|img|start|animation||padding|inner|typeof|floor|curLayerIndex|block|prevNext||iframe|href|firstLayer|container|setTimeout|replace|click|duration|rotateX|300|the|document|rotateY|scale2D|parent|random|for|version|ltContainer|fadeIn|T2|marginLeft|visible|opacity|sliderOriginalWidth|L2|layersNum|nt|autoSlideshow|skin|switch|wrapper|before|L1|layerSlider|marginTop|hidden|curSlideTime|load|circleTimer|bottomWrapper|margin|fadeOut|originalAutoSlideshow|to|removeClass|isAnimating|window|children|originalWidth|thumbnailNavigation|originalHeight|jQuery||of||preventDefault||clearTimeout|toLowerCase|undefined||LayerSlider|li|resize|border|position|param|your|body|new|slidedirection|totalDuration|in|paused|after|match|rotate|autoplay|thumb|loaded|responsiveMode|shadow|append|history|thumbsWrapper|isLoading|_|webkit|pausedSlideTime|eq|tile|500|box|barTimer|makeResponsive|number|easing|skinsPath|originalTop|autoPauseSlideshow|you|1e3|slideTimer|videopreview|overflow|sliderOriginalHeight|goingNormal|loops|parseFloat|abs|is|last|hasClass|navigator||userAgent|nextLoop|background|startSlideTime|originalLeft|ul|fade|type|html|slidebuttons|WordPress|responsiveUnder|enableCSS3|always|change|lsPrefixes|videoSrc|id|normalWidth|shadowImg|transition3d|animateFirstLayer|curTiles|and|youtu|vimeo|image|If|push|easingout|init|thumbnails|durationout|touches|getTime|one|debug|Date|extend|normalHeight|scale3d|exec|timer|LSCustomTransition|cols|url|delayin|ms|outerWidth|rows|moz|or|10px|originalRight|from|rotateZ||O2|pausedByVideo|normalRatio|trim|issue|back|direction|escFullScreen|imgPreload|which|0deg|www|player|empty|translate3d|vpcontainer|transition2d|customtransition3d|customtransition2d|plugin|outerHeight|tnHeight|span|wp|originalBottom|fullwidth|on|round|touchEndX|index|150|remove|nextLayerIndex|closest|oB|durationOut|cbPrev|tnContainerWidth|videoTimer|msie|old|prependTo|easingOut|rel|global|cbNext|null|reverse|originalBorderTop|WP|clicked|globalBGImage|can|randomSlideshow|png|forceLoopNum|fadeTo|layerslider|library|timeshift|easeInOutQuad||linear|180|navButtons|ontouchstart|originalBorderBottom|showUntilTimer|showShadow|scaleout|rotateout|bind|tn|hoverBottomNav|nextLayerLeft|nextLayerTop|autoStart|touchStartX|durationin|easingin|delayout|show|originalOpacity|showuntil|curLayerTop|videoDuration|parallaxout|oT|slideoutdirection|video|navStartStop|slidedelay|layerMarginLeft|link|oR|originalBorderLeft|layerMarginTop|all|fullscreen|originalBorderRight|addEventListener|com|bottomright|topleft|topright|slider|It|solve|sliderOriginalWidthRU|resizeYourLogo|looks|like|section|admin|wpVersion|nextLayerWidth|text|nextLayerHeight|with|curLayerBottom|forceHideControls|curLayerRight|nothumb|cssContainer|originalPaddingTop|originalPaddingBottom|fired|originalPaddingRight|nextLayerBottom|nextLayerRight|originalPaddingLeft|jquery|scrollThumb|script|JS|lswpVersion|plugins|other|250|content|resizeSlider|resizeShadow|lt|linkto|changeThumb|location|changeTimer|bottomNavSizeHelper|dequeue|error|bottomleft|durationIn|slideDirections|aUU|tnInactiveOpacity|tnActiveOpacity|it|browser|fo|easingIn|rt|tt|forward|transitionType|slideDelay|causes|tnWidth|theme|parallaxOut|sublayerShowUntil|isMobile|please|sublayerContainer|cbAnimStop|slideDirection|750|autoPlayVideos|navPrevNext|600|transparent|nextTiles|yourLogoLink|console|delayOut|twoWaySlideshow|transit|clone|globalBGColor|fi|et|marginRight|name|delayIn|size|line|originalLineHeight|not|font|author|originalFontSize|uaMatch|resizeThumb|borderTopWidth|optimizeForIE78|curSkin|helper|optimizeForMobile|copy|hoverPrevNext|offset|preserve|altKey|showBarTimer|borderRightWidth|borderBottomWidth|shadowBtmMod|hash|shiftKey|borderLeftWidth|getJSON|sides|IsFullScreen|FullScreen|touchNav|forcestop|cssTransitions|ieEasing|relative|goFullScreen|extra|clientX|originalEvent|pauseOnHover|keybNav|yourLogoStyle|yourLogoTarget|above|options|youtubePreview|loading|problem|450|youtube|showSlider|substr|contact|while||gi|embed|allowFullScreenMode|playvideo|hider|half|callback|json|api|0px|responsive|chrome|showCircleTimer|Troubleshooting|write|scalein|meta|custom3d|are|initialized|custom2d|easeInOutQuint|under|mirror|front|aeU|parallaxin|h1|rotatein|force|parallaxIn|layerSliderCustomTransitions|fn|randomize|col|el|object|depth|firstLayerAnimated|lsShowNotice|oldjquery|large|norotate|cbInit|using|layerSliderTransitions|try|out|Transit|loads|animating|Settings|enable|tagName|prop|cbAnimStart|zIndex|off|Please|account|properties|cbStop|cbPause|edit|horizontal|area|Put|includes|cbStart|createStyleSheet|temporary|scale|stopLayer|Global|head|navigate|help|option|CodeCanyon|SLIDE|putData|found|webkitIsFullScreen|cause||important|backgroundColor|fullscreenchange|mozfullscreenchange|mozFullScreen||webkitfullscreenchange|absolute|backgroundImage|_blank|touchscroll|pageX|mousemove|sideright|below|continue|string||title|exclam|sideleft|keydown|vi||Javascript|pointer|cursor|mistyped|Possibilities|without|that|||http|file|Loading|deeplink|itself|mode|already|Fallback|stylesheet|Neither|Skin|insertBefore|disabled|Trying|were|4e3|information|maxresdefault|jpg||thumbnail_large||v2|wrapAll|hack|indicator|center|circle|bar|seconds|yt|multiple||feeds|gdata|controls|videos|alt|group||media|entry|static|quint|layerMarginRight|layerMarginBottom|no|there|distance|fixed|duplicates|Layer|slides|red|solid|2px|Init|code|Number|Content|10000000000|300px|OTransformStyle|transformStyle|WebkitPerspective|msTransformStyle|MozTransformStyle|them|WebkitTransformStyle|MozPerspective|msPerspective|radius|black|20px|hide|any|OPerspective|perspective|comment|comments|cases|our|profile|message|private|vertical|us|dispay|some|curtile|FTP|mixed|need|nexttile|page|We||also|what|custom|specified|carousel|newer|least|item|requires|Updater|sequence|uses|don|know|depository|nexttiles|t2d|curtiles|skins|test3d|easeInOut|easein|easeIn|easeinout|have|restart|swing|easeout|easeOut|cubic|Cubic|issues|Quart|quart|quad|Quad|every|350|conflict|yourlogo|bock|touchend|glass|touchstart|touchmove|doesn|target|RequestFullScreen|disable|CancelFullScreen|queue|textDecoration|outline|sine|Quint|webOS||Android|must|offsetLeft|iPhone|Ask|iPad|should|400|compatible|opera|mozilla|rv|khtml|safari|iPod|BlackBerry|circ|Circ|elastic|Expo|offsetHeight|Sine|expo|Elastic|Back|Phone|Windows|corresponding|isHideOn3D|bounce|Bounce|hasOwnProperty".split("|"),0,{}));


// custom.js KOKE

jQuery(document).ready(function ($) {

    /* Alert Messages - alert("Koke"); */
	
    $(".alert-msg .close").click(function () {
        $(this).parent().animate({
            "opacity": "0"
        }, 400).slideUp(400);
        return false;
    });

    /* Accordions */

    $(".accordion-title").click(function () {
        $(".accordion-title").removeClass("active");
        $(".accordion-content").slideUp("normal");
        if ($(this).next().is(":hidden") == true) {
            $(this).addClass("active");
            $(this).next().slideDown("normal");
        }
    });
    $(".accordion-content").hide();

    /* Toggles */

    $(".toggle-title").click(function () {
        $(this).toggleClass("active").next().slideToggle("fast");
        return false;
    });

    /* Tabs */

    $(".tab-wrapper").tabs({
        event: "click"
    })

    /* Vertically Centre Text On Images */

    $.fn.flexVerticalCenter = function (onAttribute) {
        return this.each(function () {
            var $this = $(this);
            var attribute = onAttribute || 'margin-top';
            var resizer = function () {
                $this.css(
                attribute, (($this.parent().height() - $this.height()) / 2));
            };
            resizer();
            $(window).resize(resizer);
        });
    };

    // To run the function:
    $('.viewit').flexVerticalCenter();

});

/*!
* GateKeeper function
*/
function gateKeeper(Ggk,kol) {
var locUPL="Upl.html"
Gk=Ggk;
var Cook = readCookie(kol);
var CookBARR = readCookie('BARR');
if (Cook || CookBARR){
var loc=chkQ(Gk);
window.location = loc;
}

else if (Gk=="40" && kol=="UPL") {
// if (readCookie('ORU') || ('ORUs') || ('PB') || ('TPR') || ('PUB') || ('UP') || ('UOP') || ('OPB') || ('DPL') || ('BARR')){window.location = locUPL}
if (readCookie('TPP')){window.location = locUPL}
else if (readCookie('ORU')){window.location = locUPL}
else if (readCookie('ORUs')){window.location = locUPL}
else if (readCookie('PB')){window.location = locUPL}
else if (readCookie('TPR')){window.location = locUPL}
else if (readCookie('PUB')){window.location = locUPL}
else if (readCookie('UP')){window.location = locUPL}
else if (readCookie('UOP')){window.location = locUPL}
else if (readCookie('OPB')){window.location = locUPL}
else if (readCookie('DPL')){window.location = locUPL}
else if (readCookie('BARR')){window.location = locUPL}
else {
alert("Za pristup ovom sadržaju, potrebno je učiniti Prijavu korisnika u donjem djelu ove strane !!");
scrollToAnchor('anchPrijava');
}
}

else {
alert("Za pristup ovom sadržaju, potrebno je učiniti Prijavu korisnika u donjem djelu ove strane !!");
scrollToAnchor('anchPrijava');
}}

function chkQ(Gk) {
var query = Gk;
if (query !== "") {
loc = "docs/" + query + ".pdf"
if (query == "40") {loc = "Upl.html"}
else if (query == "30"){loc = "Dow.html"}
else if (query == "10"){loc = "Dpl.html"}
else if (query == "50"){loc = "https://www.bimco.org/Authentication/Members-Only?returnUrl=%2fcontracts-and-clauses%2fbimco-contracts"}
}
else {loc = ""}
var lo=loc;
return lo;
}

//Encrypted Password script
function submitentry(){
var loc
username = document.prijava.korisnik.value.toLowerCase()
password = document.prijava.zaporka.value.toLowerCase()
passcode = 1
usercode = 1
for(i = 0; i < password.length; i++) {
passcode *= password.charCodeAt(i);
}
for(x = 0; x < username.length; x++) {
usercode *= username.charCodeAt(x);
}

if( typeof Gk == 'undefined' ) {
	if (usercode==32670000&&passcode==37454144){chkOK("TPP")} // goForit(loc,'TPP')
  else if (usercode==92236816&&passcode==92236816){chkOK("BARR")} // goForit(loc,'BARR') 
	else{
	document.getElementById("ok").setAttribute("class", "osx-err-hiden");
	document.getElementById("er").setAttribute("class", "osx-err-active");
	}		
}
else {
//CHANGE THE NUMBERS BELOW TO REFLECT YOUR USERNAME/PASSWORD
  // Check that there is a querystring, return "" if not
  if (Gk.length == 0)
  {
    return "";
  }
  // Then find the querystring, everything after the ?
loc=chkQ(Gk);
var query = Gk;
// var Gkk=Gk.split("-",1);
var n=query.indexOf("-");
var Gkk=query.slice(n+1); 

if (((usercode==32670000&&passcode==37454144)||(usercode==92236816&&passcode==92236816))&&(Gkk=='Tpp')){scrollToAnchor('anchVrh'); goForit(loc,'TPP')}
else{
document.getElementById("ok").setAttribute("class", "osx-err-hiden");
document.getElementById("er").setAttribute("class", "osx-err-active");
}
}
}

function goForit(loc, CookName) {
if (usercode==92236816){
	createCookie('BARR',1,300) //name, value (1 - positive), days
}
else if (CookName=="DOW"  ||  CookName=="UPL" ){
	createCookie(CookName,1,1) //name, value (1 - positive), days;
}
else {
	createCookie(CookName,1,15) //name, value (1 - positive), days
}
	fetch(loc)
  /*theKeeper=window.close()*/
}

function fetch(loc) {
/*window.open(loc);*/
/*this.location.href = loc;*/
/*opener.location = loc;*/
/*setTimeout ("openLoc()", 5000 );*/
window.location = loc;
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function scrollToAnchor(anch){
    var aTag = $("a[name='"+ anch +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}


function scrollToAnchorSlike(anch){
if ($(window).width() < 599) {
    var aTag = $("a[name='"+ anch +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
}

function clickEr() {
	document.getElementById("er").setAttribute("class", "osx-err-hiden");
	document.getElementById("ok").setAttribute("class", "osx-err-hiden");
}

function chkOK(CookName) {
	if (CookName=='BARR') {
		createCookie(CookName,1,300) //name, value (1 - positive), days
	}
	else{
		createCookie(CookName,1,3) //name, value (1 - positive), days
	}
	document.getElementById("ok").setAttribute("class", "osx-err-active-2");
}

/* Dynamic top menu positioning */
    $(document).ready(function() {
        $('#topnav').scrollToFixed();
		// $('.row2').scrollToFixed();
		$('.slickm').scrollToFixed();
		
        // $('#copyright').scrollToFixed({
            // bottom: 0,
            // // limit: $('#footnotes').offset().top,
			// limit: $('#copyright').offset().bottom,
        // });
	});

// easyResponsiveTabs function
// $("#ertabs").easyResponsiveTabs({
	// type: 'default', //Types: default, vertical, accordion           
	// width: 'auto', //auto or any custom width
	// fit: true   // 100% fits in a container
// });

(function($){ //create closure so we can safely use $ as alias for jQuery
	$(document).ready(function(){
		// initialise plugin
		var topnavv = $('#topnav').superfish({
			delay:       200,                            // one second delay on mouseout
			// animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
			speed:       'fast',                          // faster animation speed
			// animationOut:  {opacity:'hide',height:'hide'},
			speedOut:      'fast',
			cssArrows:  false                            // disable generation of arrow mark-up
		});
	});
})(jQuery);

unhidediv = function(sho, hid1, hid2, hid3, hid4, hid5, hid6){ 
	$(sho).removeClass('downdiv');
	$(hid1).addClass('downdiv');
	$(hid2).addClass('downdiv');
	$(hid3).addClass('downdiv');
	$(hid4).addClass('downdiv');
	$(hid5).addClass('downdiv');
	$(hid6).addClass('downdiv');
};

/*** Simple jQuery Slideshow Script, Released by Jon Raasch (jonraasch.com) ***/

function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

function slick() {
/* $(document).ready(function(){ */
	$('#topnav').slicknav({
	duration: 500,
	prependTo:'.slickm',
	closeOnClick: true,
	brand: 'dr.sc.Svjetlana Hess, PFRI',
	closedSymbol: '&#9658;',
	openedSymbol: '&#9660;'
});
	/* $('.slicknav_menu').scrollToFixed();	//nije potrebno kada je gore iznad prepandTo korišteno */
};

/* close slicknav menu on outside click*/
$("html").on("click", function (event) {
    if ($(".slicknav_menu").has(event.target).length === 0)
        $("#topnav").slicknav('close');
});

function fullsiz() {
	$('#fscontain a').fullsizable({
		detach_id: 'fscontain',
		navigation: true,
		closeButton: true,
		clickBehaviour: 'close',
		loop: true
	});
};


function replaceBgRow3(args) {
  var images = new Array();
  var sources = new Array();
  sources = args
  if (typeof args === 'undefined') {
    sources = ('bg3.jpg, bg4.jpg, bg5.jpg, bg6.jpg, bg7.jpg, bg8.jpg, bg9.jpg, bg10.jpg, bg11.jpg, bg12.jpg, bg13.jpg, bg14.jpg, bg15.jpg, bg16.jpg, bg17.jpg, bg18.jpg');
  }
  sources = sources.split(', ');
  $('.row3').css({'background': 'url(styles/images/wall/' + sources[Math.floor(Math.random() * sources.length)] + ') no-repeat center center' });
  $('.row3').css('background-size','cover');
  $('.row3').css('background-attachment','fixed');
  // setTimeout(function(){
    // $('body').css('backgroundColor','#232323');
  // }, 5000);
  // $('body').css('backgroundColor','#232323');
}

function replaceBgRow1(args) {
  var images = new Array();
  var sources = new Array();
  sources = args
  if (typeof args === 'undefined') {
    sources = ('h.jpg, h2.jpg, h3.jpg, h4.jpg, h5.jpg, h6.jpg, h7.jpg, h8.jpg, h9.jpg, h10.jpg, h11.jpg, h12.jpg, h13.jpg, h14.jpg, h15.jpg');
  } 
  sources = sources.split(', ');
  // $('.row1').css({'background': 'url(images/Venus.gif) no-repeat center center, url(styles/images/wall/bg10.jpg) no-repeat center center' });
  $('.row1').css({'background': 'url(styles/images/wall/' + sources[Math.floor(Math.random() * sources.length)] + ') no-repeat center center' });
  $('.row1').css('background-size','cover');
}

function replaceBgRow7(args) {
  var images = new Array();
  var sources = new Array();
  sources = args
  if (typeof args === 'undefined') {
    sources = ('f.jpg, f2.jpg, f3.jpg, f4.jpg, f5.jpg, f6.jpg, f7.jpg, f8.jpg, f9.jpg, f10.jpg, f11.jpg, f12.jpg, f13.jpg, f14.jpg');
  } 
  sources = sources.split(', ');
  $('.row7').css({'background': 'url(styles/images/wall/' + sources[Math.floor(Math.random() * sources.length)] + ') no-repeat center center' });
  $('.row7').css('background-size','cover');
}

function addListener(event, obj, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(event, fn, false);   // modern browsers
    } else {
        obj.attachEvent("on"+event, fn);          // older versions of IE
    }
}

// function preloadBg(sources){
  // var images = new Array();
  // for (var i = 0; i < sources.length; i++) {
    // images[i] = new Image();
    // images[i].src = sources[i];
  // }
// }

function preloadBg(args){
  var images = new Array();
  var sources = new Array();
  sources = args
  if (typeof args === 'undefined') {
    sources = ('bg3.jpg, bg4.jpg, bg5.jpg, bg6.jpg, bg7.jpg, bg8.jpg, bg9.jpg, bg10.jpg, bg11.jpg, bg12.jpg, h3.jpg, h4.jpg, h5.jpg, h6.jpg, h7.jpg, h8.jpg, h9.jpg, h10.jpg, h11.jpg, h12.jpg, h13.jpg, h14.jpg, h15.jpg,  f3.jpg, f4.jpg, f5.jpg, f6.jpg, f7.jpg, f8.jpg, f9.jpg, f10.jpg, f11.jpg, f12.jpg, f13.jpg');
  }
  sources = sources.split(', ');
  for (var i = 0; i < sources.length; i++) {
    images[i] = new Image();
    images[i].src = 'styles/images/wall/' + sources[i];
    // $('.row3').css({'background': 'url(' + images[0].src + ') no-repeat center center' });
  }
  // console.log(images[1]);
}

function preloadGal(args){
  var images = new Array();
  var sources = new Array();
  sources = args
  if (typeof args === 'undefined') {
    sources = ('1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg, 10.jpg, 11.jpg, 12.jpg, 13.jpg, 14.jpg, 15.jpg');
  }
  sources = sources.split(', ');
  for (var i = 0; i < sources.length; i++) {
    images[i] = new Image();
    images[i].src = 'slideshow/pom/' + sources[i];
  }
}









// function bounces() {
// $('#row3id').removeClass('row3');
// $('#row3id').addClass('row3js');
// $(function() {
    // var images = ['bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg', 'bg8.jpg'];
    // $('#row3id').css({'background': 'url(../styles/images/wall/' + images[Math.floor(Math.random() * images.length)] + ') no-repeat center center fixed' });
    // $('#row3id').css('background-size','cover');
   // });
// };


// // (Google) Universal Analytics:
  // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  // })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  // ga('create', 'UA-20331217-1', 'auto');
  // ga('send', 'pageview');

// // background image rotator

// function wall(crow) {
// $('document').ready(function(){
	// var images = ['bg.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg', 'bg8.jpg', 'bg9.jpg', 'bg10.jpg', 'bg11.jpg', 'bg12.jpg', 'bg13.jpg', 'bg14.jpg', 'bg15.jpg', 'bg16.jpg'];
	// $('.row3').css({'background-image': 'url(styles/images/wall/' + images[Math.floor(Math.random() * images.length)] + ')'});
// });
// }

// // preload background imags on index page

// function preload(images) {
    // if (document.images) {
        // var i = 0;
        // var imageArray = new Array();
        // imageArray = images.split(',');
        // var imageObj = new Image();
        // for(i=0; i<=imageArray.length-1; i++) {
            // //document.write('<img src="' + imageArray[i] + '" />');// Write to page (uncomment to check images)
            // imageObj.src=imageArray[i];
        // }
    // }
// }


