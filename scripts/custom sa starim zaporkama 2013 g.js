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
var Cook = readCookie(kol)
if (Cook){
var loc=chkQ(Gk);
window.location = loc;
}

else if (Gk=="40" && kol=="UPL") {
if (readCookie('ORU')){window.location = locUPL}
else if (readCookie('ORUs')){window.location = locUPL}
else if (readCookie('PB')){window.location = locUPL}
else if (readCookie('TPR')){window.location = locUPL}
else if (readCookie('PUB')){window.location = locUPL}
else if (readCookie('UP')){window.location = locUPL}
else if (readCookie('UOP')){window.location = locUPL}
else if (readCookie('OPB')){window.location = locUPL}
else if (readCookie('DPL')){window.location = locUPL}
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
	if (usercode==36199800&&passcode==32815800){chkOK("TPR")} // goForit(loc,'TPR')
	else if (usercode==38170496&&passcode==27315600){chkOK("UP")} //  goForit(loc,'UP')
	else if (usercode==28900476&&passcode==38524640){chkOK("PB")} // goForit(loc,'PB')
	else if (usercode==34535160&&passcode==41849172){chkOK("ORU")} // goForit(loc,'ORU')
	else if (usercode==26986752&&passcode==35415930){chkOK("ORUs")} // goForit(loc,'ORUs')
	else if (usercode==33544500&&passcode==30293760){chkOK("PUB")} // goForit(loc,'PUB')
	else if (usercode==37632000&&passcode==31427463){chkOK("DPL")} // goForit(loc,'DPL')
	else if (usercode==32208100&&passcode==28408632){chkOK("UOP")} // goForit(loc,'UOP')
	else if (usercode==39277560&&passcode==33146355){chkOK("OPB")} // goForit(loc,'OPB')
	else if (usercode==35526447&&passcode==33771600){chkOK("SEM")} // goForit(loc,'SEM')
	else if (usercode==32239200&&passcode==35224860){chkOK("DOW")} // goForit(loc,'DOW') 
	else if (usercode==35285166&&passcode==31416000){chkOK("UPL")} // goForit(loc,'UPL')
	/* else if ((usercode==35285166&&passcode==31416000) || (usercode==35526447&&passcode==33771600)){createCookie('ImeKuki','SEM',1);goForit(loc,'UPL')}
	else if ((usercode==35285166&&passcode==31416000) || (usercode==37632000&&passcode==31427463)){createCookie('ImeKuki','DPL',1);goForit(loc,'UPL')} */
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

if ((usercode==36199800&&passcode==32815800)&&(Gkk=='Tpr')){scrollToAnchor('anchVrh'); goForit(loc,'TPR')}
else if ((usercode==38170496&&passcode==27315600)&&(Gkk=='Up')){scrollToAnchor('anchVrh'); goForit(loc,'UP')}
else if ((usercode==28900476&&passcode==38524640)&&(Gkk=='Pb')){scrollToAnchor('anchVrh'); goForit(loc,'PB')}
else if ((usercode==34535160&&passcode==41849172)&&(Gkk=='Oru')){scrollToAnchor('anchVrh'); goForit(loc,'ORU')}
else if ((usercode==26986752&&passcode==35415930)&&(Gkk=='Orus')){scrollToAnchor('anchVrh'); goForit(loc,'ORUs')}
else if ((usercode==33544500&&passcode==30293760)&&(Gkk=='Pub')){scrollToAnchor('anchVrh'); goForit(loc,'PUB')}
else if ((usercode==37632000&&passcode==31427463)&&(Gkk=='10')){scrollToAnchor('anchVrh'); goForit(loc,'DPL')}
else if ((usercode==32208100&&passcode==28408632)&&(Gkk=='Uop')){scrollToAnchor('anchVrh'); goForit(loc,'UOP')}
else if ((usercode==39277560&&passcode==33146355)&&(Gkk=='Opb')){scrollToAnchor('anchVrh'); goForit(loc,'OPB')}
else if ((usercode==35526447&&passcode==33771600)&&(Gkk=='20')){scrollToAnchor('anchVrh'); goForit(loc,'SEM')}
else if ((usercode==32239200&&passcode==35224860)&&(Gkk=='30')){goForit(loc,'DOW')}
else if ((usercode==35285166&&passcode==31416000)&&(Gkk=='40')){goForit(loc,'UPL')}

else if ((usercode==36199800&&passcode==32815800)&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','TPR')}
else if ((usercode==38170496&&passcode==27315600)&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','UP')}
else if ((usercode==28900476&&passcode==38524640)&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','PB')}
else if ((usercode==34535160&&passcode==41849172)&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','ORU')}
else if ((usercode==26986752&&passcode==35415930)&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','ORUs')}
else if ((usercode==33544500&&passcode==30293760)&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','PUB')}
else if ((usercode==37632000&&passcode==31427463)&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','DPL')}
else if ((usercode==32208100&&passcode==28408632)&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','UOP')}
else if ((usercode==39277560&&passcode==33146355)&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','OPB')}
else if ((usercode==35526447&&passcode==33771600)&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','SEM')}

/* else if ((usercode==35285166&&passcode==31416000) || (usercode==35526447&&passcode==33771600)){createCookie('ImeKuki','SEM',1);goForit(loc,'UPL')}
else if ((usercode==35285166&&passcode==31416000) || (usercode==37632000&&passcode==31427463)){createCookie('ImeKuki','DPL',1);goForit(loc,'UPL')} */
else{
document.getElementById("ok").setAttribute("class", "osx-err-hiden");
document.getElementById("er").setAttribute("class", "osx-err-active");
}
}
}

function goForit(loc, CookName) {
if (CookName=="DOW"  ||  CookName=="UPL" ){
	createCookie(CookName,1,1) //name, value (1 - positive), days;
}
else {
	createCookie(CookName,1,3) //name, value (1 - positive), days
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

function clickEr() {
	document.getElementById("er").setAttribute("class", "osx-err-hiden");
	document.getElementById("ok").setAttribute("class", "osx-err-hiden");
}

function chkOK(CookName) {
	createCookie(CookName,1,3) //name, value (1 - positive), days
	document.getElementById("ok").setAttribute("class", "osx-err-active-2");
}

/* Dynamic top menu positioning */
    $(document).ready(function() {
        $('#topnav').scrollToFixed();
		$('.row2').scrollToFixed();
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


