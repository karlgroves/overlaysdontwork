'use strict';

jQuery(document).ready(function ($) {

    /**
     *
     * Generates random number from 0 to max
     * @param {number} max maximum value
     * @returns {number}
     */
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // load the problems
    if ($('#put-overlay-vendors-out-of-business') !== undefined) {

        $.getJSON('problems.json', function (data) {
            var len = data.problems.length;

            for (var i = 0; i < len; i++) {
                $.get('problems/' + data.problems[i] + '.html', function (data) {
                    $('#put-overlay-vendors-out-of-business').append('<div class="problem">' + data + '</div>');
                });
            }
        });
    }

    // mess up heading levels (do not do this for H1s. We don't want to be too evil)
    $('h2, h3, h4, h5, h6').not('footer h2').each(function () {
        $(this).replaceWith(function () {
            return $('<h' + getRandomInt(6) + '>', {html: $(this).html()});
        });
    });

    // Open all off-site links in a new window
    $('a').each(function () {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
            $(this).click(function (event) {
                event.preventDefault();
                event.stopPropagation();
                window.open($(this).attr('href'));
                return false;
            });
        }
    });

    /**
     * BEGIN THE JS FOR THE ACTUAL EXAMPLES
     */

    var waitForEl = function (selector, callback) {
        if (jQuery(selector).length) {
            callback();
        } else {
            setTimeout(function () {
                waitForEl(selector, callback);
            }, 100);
        }
    };

    waitForEl('.disc', function () {
        $('.disc').each(function () {
            var $self = $(this);
            var $p = $self.find('p');

            $p.hide();

            $self.find('h2').on('click', function () {
                $p.toggle();
            });
        });

    });

    waitForEl('.theForm span', function () {
        $('.theForm span').on('click', function () {
            document.theForm.submit();
        });
    });
});
