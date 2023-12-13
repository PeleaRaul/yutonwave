//    Intellectual Property Notice: © 2023 by Author: Pelea Raul-Daniel. All Rights Reserved.
//     License Nr: PRD-PR-GIT-#0032-2023
//     Created on: © 2023/12/12 12:05
//
//     Understanding the License:
//     > P-First Name Initial
//     > R-Last Name Initial
//     > D-Middle Name Initial
//     > PR-Private Work
//     > GIT-GITHUB Integrated Lincese For Private Works (12/12/2023);
//     > #0032-Indentification Number (not important, used to keep track of all my licenses given so far.)
//     > 2023-Creation Year
//
//     Content of Copyright:
//     Do Not Redistribute, Share, Use on any other Domain name. This copy of the website shall be used only
//     by yutonwave.Com and its subdomains (ex: www.yutonwave.com, sub.yutonwave.com)
//     Any Unauthorised Use of The Files may lead to legal dispute. 
//
//     Any DNS changes are charge free, but must be told beforehand.
//     The content is copyright protected, so I will have to change the
//     domain name under this template/website model!
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%(((////*///*/#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%/((##(######%###//##//*///@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###%%#(%%#####%&#%#%&&#%##%%(//#@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@((##%#%%&&%%(##%#%%%&%%%&%%%%%%%%#(%@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%/(%%%%%##%#(((((((##%%&&&&%&&&&&&&%%%#@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#####%%#(((*,.,,..,**/#%%%%%&&&&&&&%%%%(@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&(#####((/,.......,,,*//##%%%%%%&&&%%%%%%@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@######(/*,.........,,,**///((((((#%%&&%@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@###(((/*...,*///(((/***********///(%%@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#((((/.....*/(((##((////*/(#####(//%&@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##((/,...,/##(&%(#%#*,.,*(#%%###((#%@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/.,,,**......,**/(/***,...,/(##&%%#(#@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#/,.,(,.............,,,.....,////(((((%@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@/.//(,..,.........,***....,********//(&@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(,...,.,........,,,,,,,**/(##/(/***/(@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(*,/,........,/(,,,*////(/////*/#(@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(.........,,,,,,,*////(#%(/////&@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&.............,,,,*//////////@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.....,,..,,,,,**//(///////(@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&........,,,**/(#######((%@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ /(.. ....,,,,,,***///////%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   /*......,,,,,,,*//((////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@,     .*,...,,,,..,,*/////*/*%&%%(/%&@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@&,           ,****,**,,,****/***//*. .,,,.. .%&&@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@,                   .**********//////(/**, .,....           .       (
// @@@@@@@@@@@@@@@#                            *****/////////%/***,..................... .   
// @@@@@@@@@#                                   .,***///////(,**,..**..............,.........
// @@@@@,                                  .,*,*,,.,////*/*/*..,,*,***............,...,,.....
// @@,                                ,,,,,,,,,,****..*****(.....,,,,,,......,.,,,,.*,..   . 
// %              ...............................,,,,,,..,*,... ,,..,,,,... ..***. ....      
//            .    .......................................,.  .,,...........,,......... .... 
//           ..      .....                      ............ .,.............*....   . .......
//           ..   ... .......               ..............  ...............,,.......  ....   
//          ....  .,, ......          .....................................,,.........   ... 
//          ....  .,,. . .         .......... .............................,,............    
(function($) {
    $.fn.menumaker = function(options) {
        var cssmenu = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function() {
            $(this).find(".button").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
            multiTg = function() {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function() {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideToggle();
                    } else {
                        $(this).siblings('ul').addClass('open').slideToggle();
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            resizeFix = function() {
                var mediasize = 1000;
                if ($(window).width() > mediasize) {
                    cssmenu.find('ul').show();
                }
                if ($(window).width() <= mediasize) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);

(function($) {
    $(document).ready(function() {
        $("#cssmenu").menumaker({
            format: "multitoggle"
        });
    });
})(jQuery);

$(document).ready(function() {
    // Disable text selection
    $('body').css({
        '-webkit-touch-callout': 'none',
        '-webkit-user-select': 'none',
        '-khtml-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none'
    });

    // For older versions of Firefox
    $('body').attr('unselectable', 'on')
        .css({
            '-moz-user-select': 'none',
            'cursor': 'default'
        });

    // For IE
    document.onselectstart = function() {
        return false;
    };

    // Handle additional events that may affect text selection
    $('body').on('selectstart dragstart', function(e) {
        e.preventDefault();
        return false;
    });
});

$(document).on('keyup keydown', function(e) {
    if (e.keyCode === 121 && e.shiftKey === true) {
      console.log('shift-f10 detected');
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  });

$(document).ready(function() {
    // Prevent right-click using jQuery
    $(document).on('contextmenu', function(e) {
        e.preventDefault();
    });
});

$("input[name='yourinput']").keypress(function(event) {
    if ( event.keyCode == 17 ) {
         event.preventDefault();
    }
});

$(document).ready(function() {
    var currentYear = new Date().getFullYear();
    $('#currentYear').text(currentYear);
});