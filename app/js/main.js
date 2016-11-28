var isMobile = false,
    scrollTop;
function getBrowser() {
    var ua = navigator.userAgent;
    var bName = function () {
        if (ua.search(/Edge/) > -1) return "edge";
        if (ua.search(/MSIE/) > -1) return "ie";
        if (ua.search(/Trident/) > -1) return "ie11";
        if (ua.search(/Firefox/) > -1) return "firefox";
        if (ua.search(/Opera/) > -1) return "opera";
        if (ua.search(/OPR/) > -1) return "operaWebkit";
        if (ua.search(/YaBrowser/) > -1) return "yabrowser";
        if (ua.search(/Chrome/) > -1) return "chrome";
        if (ua.search(/Safari/) > -1) return "safari";
        if (ua.search(/maxHhon/) > -1) return "maxHhon";
    }();
                                                                                                                                                                      
    var version;
    switch (bName) {
        case "edge":
            version = (ua.split("Edge")[1]).split("/")[1];
            break;
        case "ie":
            version = (ua.split("MSIE ")[1]).split(";")[0];
            break;
        case "ie11":
            bName = "ie";
            version = (ua.split("; rv:")[1]).split(")")[0];
            break;
        case "firefox":
            version = ua.split("Firefox/")[1];
            break;
        case "opera":
            version = ua.split("Version/")[1];
            break;
        case "operaWebkit":
            bName = "opera";
            version = ua.split("OPR/")[1];
            break;
        case "yabrowser":
            version = (ua.split("YaBrowser/")[1]).split(" ")[0];
            break;
        case "chrome":
            version = (ua.split("Chrome/")[1]).split(" ")[0];
            break;
        case "safari":
            version = ua.split("Safari/")[1].split("")[0];
            break;
        case "maxHhon":
            version = ua.split("maxHhon/")[1];
            break;
    }
    var platform = 'desktop';
    if (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) platform = 'mobile';
    var browsrObj;
    try {
        browsrObj = {
            platform: platform,
            browser: bName,
            versionFull: version,
            versionShort: version.split(".")[0]
        };
    } catch (err) {
        browsrObj = {
            platform: platform,
            browser: 'unknown',
            versionFull: 'unknown',
            versionShort: 'unknown'
        };
    }
    return browsrObj;
};
var browserYou = getBrowser();
if (browserYou.platform == 'mobile') { isMobile = true; }
if ((browserYou.browser == 'ie' &&  browserYou.versionShort < +'9') || ((browserYou.browser == 'opera' || browserYou.browser == 'operaWebkit') && browserYou.versionShort < +'18') || (browserYou.browser == 'firefox' &&  browserYou.versionShort < +'30')) {
    alert('Обновите браузер','')
};
// input animation
(function() {
  if (!String.prototype.trim) {
    (function() {
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }
  [].slice.call( document.querySelectorAll( '.input-anim' ) ).forEach( function( inputEl ) {
    if( inputEl.value.trim() !== '' ) {
      inputEl.parentNode.classList.add('input--filled' );
    }
    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );
  function onInputFocus( ev ) {
    ev.target.parentNode.classList.add('input--filled' );
  }
  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      ev.target.parentNode.classList.remove('input--filled' );
    }
  }
})();
// input animation
window.onload = function() {
  // PRELOADER
  var body = document.querySelector('body');
  body.classList.remove('noscroll')
  body.classList.add('loading')
  if (isMobile == true) {body.parentNode.classList.add('mobile'); }
  setTimeout(function(){body.classList.add('loaded')},1000)
  setTimeout(function(){document.querySelector('.preloader').style.display = 'none';},1500)
  // //PRELOADER
  var swiper = new Swiper('.project-slider .swiper-container', {
      loop:false,
      nextButton: '.project-slider .swiper-button-next',
      prevButton: '.project-slider .swiper-button-prev',
      parallax:true,
      effect: 'fade'
  });
  var swiper2 = new Swiper('.central-white-slider.swiper-container', {
      loop:false,
      nextButton: '.central-white-gallery .swiper-button-next',
      prevButton: '.central-white-gallery .swiper-button-prev',
  });
  if (document.querySelector('.support-slider') != undefined) {
    [].slice.call( document.querySelectorAll( '.support-slider .swiper-slide img' ) ).forEach( function( suppImg ) {
      var imgWidth = suppImg.clientWidth;
      suppImg.parentNode.style.width = imgWidth + 'px';

    });
  }
  var swiper3 = new Swiper('.support-slider .swiper-container', {
      loop:true,
      slidesPerView: 'auto',
      spaceBetween: 50,
      nextButton: '.support-slider .swiper-button-next',
      prevButton: '.support-slider .swiper-button-prev',
  });
  // mobile menu
  document.querySelector('.js_open_mob_menu').addEventListener('click',function(){
    document.querySelector('.mobile-menu').style.display = 'block';
    document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
    document.body.classList.add('noscroll');
    
    setTimeout(function(){document.querySelector('.mobile-menu').className = 'mobile-menu visible vis-li'},100);
  })
  document.querySelector('.js_close_mob_nav').addEventListener('click',function(){
    document.querySelector('.mobile-menu').classList.remove('vis-li')
    setTimeout(function(){
        document.querySelector('.mobile-menu').classList.remove('visible');
        document.body.classList.remove('noscroll');
        document.body.style.paddingRight = 0;
    },1000);
    setTimeout(function(){document.querySelector('.mobile-menu').style.display = 'none'},2500);
  })
  // mobile menu
    // map
    if(document.querySelector('#map') != undefined) {
        initialize()
    }
    // map
    if(document.querySelector('.map-area') != undefined) {
        // map region
        document.querySelector('.map-area').addEventListener('click',function(e){
            var area = e.target.getAttribute('id');
            if(area != undefined) {
                [].slice.call(document.querySelectorAll( '.map-area path' ) ).forEach( function(it) {
                    it.classList.remove('active');
                });
                e.target.classList.add('active');
                $('select').material_select('destroy');
                for (var i = 0; i < document.querySelectorAll('.js_region option').length; i++) {
                    document.querySelectorAll('.js_region option')[i].removeAttribute('selected');
                }
                document.querySelector('.js_region option[data-region="'+ area +'"]').setAttribute('selected','selected');
                $('select').material_select();
            }
        });
        document.querySelector('.map-area').addEventListener('mousemove',function(e){
            var areaTitle = e.target.getAttribute('title');
            if(areaTitle != undefined) {
                document.querySelector('.title-map').innerText = areaTitle;
                document.querySelector('.title-map').style.display = "block";
                document.querySelector('.title-map').style.top = e.clientY + "px";
                document.querySelector('.title-map').style.left = e.pageX + 20 + "px";
            }else {
                document.querySelector('.title-map').innerText = "";
                document.querySelector('.title-map').style.display = "none";
            }
        });
        // map region
    }
    if (document.querySelector('.support-name') != undefined) {
      heightBlock('.support-name b')
    }
    if (document.querySelector('.banner-gen') != undefined) {
      bannerWidth()
    }
}
window.onresize = function() {
  if (document.querySelector('.support-name') != undefined) {
    heightBlock('.support-name b')
  }
  if (document.querySelector('.banner-gen') != undefined) {
    bannerWidth()
  }
}
window.onscroll = function() {
  scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}
function bannerWidth() {
  document.querySelector('.banner-gen').style.width = window.innerWidth + 'px';
}
function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};
function initialize() {
  var myLatlng = new google.maps.LatLng(50, 35);
  var myCenter = new google.maps.LatLng(50, 35);
  var mapOptions = {
    zoom: 15,
    center: myCenter,
    scrollwheel: false,
    disableDefaultUI: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: 'images/marker.png'
  });
};
function heightBlock(ell){
  var elem = document.querySelectorAll(ell);
  var maxH = 0;
  for (var i = 0; i < elem.length; ++i) {
    elem[i].style.height = "";
    elem[i].removeAttribute("style");
    if (maxH < elem[i].offsetHeight) {
      maxH = elem[i].offsetHeight; 
    }
  }
  for (var i = 0; i < elem.length; ++i) {
    elem[i].style.height = maxH + "px";
  }
}
$(document).ready(function() {
    if(isMobile == false){
        $('.team-face').hover(
            function() {
                var anIndex = 0,
                    _this = $(this),
                    animateInterval = setInterval(function() {
                        TweenMax.to(_this.find('img'), 0.01, {
                                x: -_this.width() * anIndex
                            }),
                            anIndex++;
                        if (anIndex > 27) {
                            clearInterval(animateInterval);
                            anIndex = 29
                        }
                    }, 10)
            },
            function() {
                var anIndex = 29,
                    _this = $(this),
                    animateInterval = setInterval(function() {
                        TweenMax.to(_this.find('img'), 0.01, {
                                x: -_this.width() * anIndex
                            }),
                            anIndex--;
                        if (anIndex <= 0) {
                            clearInterval(animateInterval);
                            anIndex = 0
                        }
                    }, 10)
            }
        );
      $('.animated').appear(function() {
        var elem = $(this);
        var animation = elem.data('animation');
        if (!elem.hasClass('visible')) {
          var animationDelay = elem.data('animation-delay');
          if (animationDelay) {
            setTimeout(function() {
                elem.addClass(animation + " visible");
            }, animationDelay);
          } else {
            elem.addClass(animation + " visible");
          }
        }
      },{accX: 0, accY: -250});
    } else {
      $('.animated').each(function(){
        var animation = $(this).data('animation');
        $(this).addClass(animation + " visible");                                                                                                                                                                
      });
    }
    if($('.filter').length) {
      var $isotope = $('.filter-container');
      $isotope.isotope({
        itemSelector: '.project-report',
        layoutMode: 'fitRows'
      });
      $('.project-report-page .filter a').click(function(){
        var filter = $(this).attr('data-filter');
        $isotope.isotope({ filter: filter });
        $('.project-report-page .filter a').removeClass('active');
        $(this).addClass('active');
        return false;
      });
    }
    $('input[data-validate="phone"]').mask("+38(999)999 99 99"); 
    $('.sub-head-menu--partner ul, .tab-list').autocolumnlist({
        columns: 2
    });
    $('.js_validate button[type="submit"]').on("click", function(){
      return validate($(this).parent(".js_validate"));
    }); 
    $('.dropdown-button').dropdown();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.collapsible').collapsible();
    if (browserYou.browser !== 'safari') {
      $('.parallax').parallax();
    }
    $('.modal').modal({
        opacity: 1,
    });
});
// validate form
function validate(form){
    var error_class = "error";
    var norma_class = "pass";
    var item        = form.find("[required]");
    var e           = 0;
    var reg         = undefined;
    var pass        = form.find('.password').val();
    var pass_1      = form.find('.password_1').val();
    var email       = false;
    var password    = false;
    var phone       = false;
    function mark (object, expression) {
        if (expression) {
            object.parents('.field-form').addClass(error_class).removeClass(norma_class).find('.error_text').show();
            e++;
        } else
            object.parents('.field-form').addClass(norma_class).removeClass(error_class).find('.error_text').hide();
    }
    form.find("[required]").each(function(){
        switch($(this).attr("data-validate")) {
            case undefined:
                mark ($(this), $.trim($(this).val()).length === 0);
            break;
            case "email":
                email = true;
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                email = false;
            break;
            case "phone":
                phone = true;
                reg = /[0-9 -()+]{10}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                phone = false;
            break;
            case "pass":
                password = true;
                reg = /^[a-zA-Z0-9_-]{6,}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                password = false;
            break;
            case "pass1":
                mark ($(this), (pass_1 !== pass || $.trim($(this).val()).length === 0));
            break;
            default:
                reg = new RegExp($(this).attr("data-validate"), "g");
                mark ($(this), !reg.test($.trim($(this).val())));
            break;
        }
    })
    $('.js_valid_radio').each(function(){
        var inp = $(this).find('input.required');
        var rezalt = 0;
        for (var i = 0; i < inp.length; i++) {
            if ($(inp[i]).is(':checked') === true) {
                rezalt = 1;
                break;
            } else {
                rezalt = 0;
            }
        }
        if (rezalt === 0) {
           $(this).addClass(error_class).removeClass(norma_class);
            e=1;
        } else {
            $(this).addClass(norma_class).removeClass(error_class);
        }
    })
    if (e == 0) {
     return true;
    }
    else {
        form.find("."+error_class+" input:first").focus();
        return false;
    }
}
// validate form 
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;$(function(window, document, $) {
 // Opera Mini v7 doesn t support placeholder although its DOM seems to indicate so
 var isOperaMini = Object.prototype.toString.call(window.operamini) == '[object OperaMini]';
 var isInputSupported = 'placeholder' in document.createElement('input') && !isOperaMini;
 var isTextareaSupported = 'placeholder' in document.createElement('textarea') && !isOperaMini;
 var prototype = $.fn;
 var valHooks = $.valHooks;
 var propHooks = $.propHooks;
 var hooks;
 var placeholder;
 if (isInputSupported && isTextareaSupported) {
  placeholder = prototype.placeholder = function() {
   return this;
  };
  placeholder.input = placeholder.textarea = true;
 } else {
  placeholder = prototype.placeholder = function() {
   var $this = this;
   $this
    .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
    .not('.placeholder')
    .bind({
     'focus.placeholder': clearPlaceholder,
     'blur.placeholder': setPlaceholder
    })
    .data('placeholder-enabled', true)
    .trigger('blur.placeholder');
   return $this;
  };
  placeholder.input = isInputSupported;
  placeholder.textarea = isTextareaSupported;
  hooks = {
   'get': function(element) {
    var $element = $(element);
    var $passwordInput = $element.data('placeholder-password');
    if ($passwordInput) {
     return $passwordInput[0].value;
    }
    return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
   },
   'set': function(element, value) {
    var $element = $(element);
    var $passwordInput = $element.data('placeholder-password');
    if ($passwordInput) {
     return $passwordInput[0].value = value;
    }
    if (!$element.data('placeholder-enabled')) {
     return element.value = value;
    }
    if (value == '') {
     element.value = value;
     // Issue #56: Setting the placeholder causes problems if the element continues to have focus.
     if (element != safeActiveElement()) {
      // We can't use `triggerHandler` here because of dummy text/password inputs :(
      setPlaceholder.call(element);
     }
    } else if ($element.hasClass('placeholder')) {
     clearPlaceholder.call(element, true, value) || (element.value = value);
    } else {
     element.value = value;
    }
    // `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
    return $element;
   }
  };
  if (!isInputSupported) {
   valHooks.input = hooks;
   propHooks.value = hooks;
  }
  if (!isTextareaSupported) {
   valHooks.textarea = hooks;
   propHooks.value = hooks;
  }
  $(function() {
   // Look for forms
   $(document).delegate('form', 'submit.placeholder', function() {
    // Clear the placeholder values so they don't get submitted
    var $inputs = $('.placeholder', this).each(clearPlaceholder);
    setTimeout(function() {
     $inputs.each(setPlaceholder);
    }, 10);
   });
  });
  // Clear placeholder values upon page reload
  $(window).bind('beforeunload.placeholder', function() {
   $('.placeholder').each(function() {
    this.value = '';
   });
  });
 }
 function args(elem) {
  // Return an object of element attributes
  var newAttrs = {};
  var rinlinejQuery = /^jQuery\d+$/;
  $.each(elem.attributes, function(i, attr) {
   if (attr.specified && !rinlinejQuery.test(attr.name)) {
    newAttrs[attr.name] = attr.value;
   }
  });
  return newAttrs;
 }
 function clearPlaceholder(event, value) {
  var input = this;
  var $input = $(input);
  if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
   if ($input.data('placeholder-password')) {
    $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
    // If `clearPlaceholder` was called from `$.valHooks.input.set`
    if (event === true) {
     return $input[0].value = value;
    }
    $input.focus();
   } else {
    input.value = '';
    $input.removeClass('placeholder');
    input == safeActiveElement() && input.select();
   }
  }
 }
 function setPlaceholder() {
  var $replacement;
  var input = this;
  var $input = $(input);
  var id = this.id;
  if (input.value == '') {
   if (input.type == 'password') {
    if (!$input.data('placeholder-textinput')) {
     try {
      $replacement = $input.clone().attr({ 'type': 'text' });
     } catch(e) {
      $replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
     }
     $replacement
      .removeAttr('name')
      .data({
       'placeholder-password': $input,
       'placeholder-id': id
      })
      .bind('focus.placeholder', clearPlaceholder);
     $input
      .data({
       'placeholder-textinput': $replacement,
       'placeholder-id': id
      })
      .before($replacement);
    }
    $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
    // Note: `$input[0] != input` now!
   }
   $input.addClass('placeholder');
   $input[0].value = $input.attr('placeholder');
  } else {
   $input.removeClass('placeholder');
  }
 }
 function safeActiveElement() {
  // Avoid IE9 `document.activeElement` of death
  // https://github.com/mathiasbynens/jquery-placeholder/pull/99
  try {
   return document.activeElement;
  } catch (err) {}
 }
 
}(this, document, jQuery));
