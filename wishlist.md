# Wishlist

## Content
* Section of content uses misidentified language

## Images

* Avoid duplicating alternate text (i.e., redundant text which says the same thing)
* Ensure all images contain alternate text
* Ensure alternate text for actionable graphics (i.e. icons, image buttons, navigational elements) clearly describes the destination or action
* Ensure image alternate text is clear and informative
* Provide "null" alt attributes (using alt="") for images which do not provide information (or do not require alternate text because the image is described in page content)
* Provide a long description for complex images or graphics
* Provide a text alternative for CSS images which convey content 
* Provide alt attributes for all areas of an image map
* Provide alternate text for ASCII art, mathematical formulas, emoticons and leetspeak
* Ensure content or images which flash or blink do so only within a safe threshold
* Provide informative alternate text for image links and image buttons
* Avoid use of title attribute as sole text alternative
* Provide redundant links for each active region of a server side image map
* Utilize both color and pattern within graphs and charts

## Media

* Provide an alternative for all prerecorded audio-only time-based media
* Provide an alternative for all prerecorded video-only time-based media
* Ensure captions are provided for all prerecorded audio content
* Provide a text transcript for time-based media
* Ensure that any automatically starting audio ends within 3 seconds
* Provide the ability for users to turn on sound only at their request
* Provide the ability to turn off automatically starting sound
* Ensure that users can navigate to, through, and past all embedded content
* Provide users with the means to control multimedia content
* Provide the ability to turn off background audio

## Navigation

* Avoid using different link text to refer to the same location
* Ensure link text (and alternate text for images, when used as links) describes the destination or purpose of the link.

## Tables

* Avoid including unrelated data in the same data table
* Avoid nested data tables
* Avoid using header cells and other structural markup in layout tables
* Ensure tabular data and the header cells for that data remain in the same table
* Identify header cells for all data tables
* Provide the markup necessary to convey relationships between header cells and data cells in data tables
* Use tables to lay out tabular data
* Use the caption element to associate caption information with data tables
* Ensure that data table structure is appropriate for the data being included

## Keyboard accessibility and focus control

* Don't shift focus automatically without user input.
* Make sure that all interactive elements can receive focus using the keyboard.
* Make sure that the keyboard focus order matches the visual focus order.

## Forms

* Ambiguous form fields that lack grouping
* Clearly disclose constraints for form fields

## WCAG Failures

* F9: Failure of Success Criterion 3.2.5 due to changing the context when the user removes focus from a form element
* F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location
* F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)
* F31: Failure of Success Criterion 3.2.4 due to using two different labels for the same function on different Web pages within a set of Web pages
* F36: Failure of Success Criterion 3.2.2 due to automatically submitting a form and presenting new content without prior warning when the last field in the form is given a value
* F37: Failure of Success Criterion 3.2.2 due to launching a new window without prior warning when the selection of a radio button, check box or select list is changed
* F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them
* F39: Failure of Success Criterion 1.1.1 due to providing a text alternative that is not null (e.g., alt="spacer" or alt="image") for images that should be ignored by assistive technology
* F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit
* F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page
* F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links
* F43: Failure of Success Criterion 1.3.1 due to using structural markup in a way that does not represent relationships in the content
* F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability
* F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables
* F52: Failure of Success Criterion 3.2.1 and 3.2.5 due to opening a new window as soon as a new page is loaded
* F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received
* F58: Failure of Success Criterion 2.2.1 due to using server-side techniques to automatically redirect pages after a time-out
* F59: Failure of Success Criterion 4.1.2 due to using script to make div or span a user interface control in HTML without providing a role for the control
* F60: Failure of Success Criterion 3.2.5 due to launching a new window when a user enters text into an input field
* F61: Failure of Success Criterion 3.2.5 due to complete change of main content through an automatic update that the user cannot disable from within the content
* F63: Failure of Success Criterion 2.4.4 due to providing link context only in content that is not related to the link
* F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"
* F66: Failure of Success Criterion 3.2.3 due to presenting navigation links in a different relative order on different pages
* F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information
* F68: Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name
* F69: Failure of Success Criterion 1.4.4 when resizing visually rendered text up to 200 percent causes the text, image or controls to be clipped, truncated or obscured
* F70: Failure of Success Criterion 4.1.1 due to incorrect use of start and end tags or attribute markup
* F71: Failure of Success Criterion 1.1.1 due to using text look-alikes to represent text without providing a text alternative
* F72: Failure of Success Criterion 1.1.1 due to using ASCII art without providing a text alternative
* F73: Failure of Success Criterion 1.4.1 due to creating links that are not visually evident without color vision
* F74: Failure of Success Criterion 1.2.2 and 1.2.8 due to not labeling a synchronized media alternative to text as an alternative
* F75: Failure of Success Criterion 1.2.2 by providing synchronized media without captions when the synchronized media presents more information than is presented on the page
* F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID
* F78: Failure of Success Criterion 2.4.7 due to styling element outlines and borders in a way that removes or renders non-visible the visual focus indicator
* F79: Failure of Success Criterion 4.1.2 due to the focus state of a user interface component not being programmatically determinable or no notification of change of focus state available
* F80: Failure of Success Criterion 1.4.4 when text-based form controls do not resize when visually rendered text is resized up to 200%
* F81: Failure of Success Criterion 1.4.1 due to identifying required or error fields using color differences only
* F82: Failure of Success Criterion 3.3.2 by visually formatting a set of phone number fields but not including a text label
* F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)
* F84: Failure of Success Criterion 2.4.9 due to using a non-specific link such as "click here" or "more" without a mechanism to change the link text to specific text.
* F85: Failure of Success Criterion 2.4.3 due to using dialogs or menus that are not adjacent to their trigger control in the sequential navigation order
* F86: Failure of Success Criterion 4.1.2 due to not providing names for each part of a multi-part form field, such as a US telephone number
* F87: Failure of Success Criterion 1.3.1 due to inserting non-decorative content by using :before and :after pseudo-elements and the 'content' property in CSS
