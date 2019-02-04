'use strict';

jQuery(document).ready(function ($) {
  // @TODO allow sr users to set a cookie that will stop the insanity
    $('.give-me-sanity').on('click, keypress', function () {
        //fix the following:
        //Wrong language identified for the content
        //Random focus shift
        //Takes too long to load examples
        //Random refresh
        //Random dialog advertisement
        //Random heading levels
        //Random tab order

    });

  // @TODO log snarky messages to console to taunt our adversaries

  // @TODO randomly shift focus to an unexpected part of the page after some random amount of time

  // @TODO load the content. display a loading icon for a while *before* loading content


  // @TODO The number of examples should be chosen from random and the examples themselves should be shuffled
  $('.put-overlay-vendors-out-of-business').each(function () {

  });

  // @TODO randomly add meta refresh and randomize the timing as well
  //  <meta http-equiv="refresh" content="30">

  // @TODO display a randomly timed dialog for an advertisement

  // @TODO randomize heading levels (do not do this for H1s. We don't want to be too evil)
  $('h2, h3, h4, h5, h6').each(function () {

  });

  // @TODO randomize tab order and/ or remove tabindex from actionable items
  $('a[href], button, input, textarea, select').each(function () {

  });

  /**
   * BEGIN THE JS FOR THE ACTUAL EXAMPLES
   */

  $('.disc').each(function () {
      $('disc p').hide();

     // @TODO make the H2 react to click event and show the 'p' under it
  });


  $('.cme').each(function () {
    // @TODO toggle its appearance via click and keydown
  });

});
