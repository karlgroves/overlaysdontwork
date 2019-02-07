'use strict';

jQuery(document).ready(function ($) {

    console.log('Ready!');

    /**
     *
     * Generates random number from 0 to max
     * @param {number} max maximum value
     * @returns {number}
     */
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    // allow sr users to stop the insanity
    $('.give-me-sanity').on('click, keypress', function () {

        //Wrong language identified for the content
        $('html').attr({
            'lang': 'en'
        });

        //Remove random refresh
        $('meta[http-equiv="refresh"]').remove();

        //Random explicit tab index
        $('*[tabindex]').each(function () {
            var tVal = $(this).attr('tabindex');
            if (tVal > 0) {
                $(this).removeAttr('tabindex');
            }
        });

    });

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


    // create a random refresh
    $('head').append('<meta http-equiv="refresh" content="' + getRandomInt(90) + '">');

    // mess up heading levels (do not do this for H1s. We don't want to be too evil)
    $('h2, h3, h4, h5, h6').not('footer h2').each(function () {
        $(this).replaceWith(function () {
            return $('<h' + getRandomInt(6) + '>', {html: $(this).html()});
        });
    });

    // randomize tab order
    $('a[href], button, input, textarea, select').each(function () {
        $(this).attr({
            'tabindex': getRandomInt(1000)
        });

    });

    /**
     * BEGIN THE JS FOR THE ACTUAL EXAMPLES
     */

    $('.disc').each(function (i) {
        console.log(i);
        $('.disc p').hide();

        // @TODO make the H2 react to click event and show the 'p' under it
        $('.disc h2').on('click', function () {
            $('.disc p').toggle();
            console.log('I WAS CLICKED');
        });
    });


    $('.cme').each(function () {
        // @TODO toggle its appearance via click and keydown
    });

});