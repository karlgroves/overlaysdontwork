# TODO

## Color
Insufficient color contrast

Avoid using color as the only visual means of conveying information

Issues in Windows High Contrast mode

## Custom Controls
Expand/ Collapse & Show/ Hide controls (disclosure controls)

Dialogs and lightboxes

Tooltips

Sliders

Custom checkboxes and radio buttons

Custom combobox

Sortable data tables

Accordion

Carousels

Inaccessible custom buttons

Progress bars

Pagination


## Document Structure
Headings: Ensure headings are marked properly, ordered properly, not used improperly
Lists markup and structure

Resize text

Document landmark roles

Dynamic Content
Dynamic updates to page content not conveyed to assistive technologies


## Error Handling
Error message handling (focus management, wording, programmatic association)

## Forms
Provide clear precise form control labels including constraints and formatting hints

Group related form controls. Provide a label for the grouping

Form buttons are not accessible

Lack of submit buttons for forms

## Frames and i-frames

Frames and iframes must have descriptive titles


## Keyboard accessibility and focus control

Incorrect or confusing focus order or reading order

Reachable and operable using the keyboard

Focus: Ensure actionable items receive programmatic focus and non-actionable ones do not. Ensure that hidden items do not get focus. Ensure focus is managed when dynamic content appears or changes

Ensure that all changes of focus and context happen as a result of a user action that is expected

Keyboard Trap

Keyboard shortcuts conflict with screen reader shortcuts

## Language and Content

Language of parts

## Multimedia

Videos and Video Player

Provide accessible alternatives for audio content

Provide accessible alternatives for video content

Lack of appropriate equivalents for media content

## Name, State, Role, Value

Buttons must be marked as buttons or with 'button' role and must operate via keyboard

Redundant title attributes

## Navigation

Ensure link text clearly and uniquely indicates the purpose or destination of the link

## Images and other non-text/ graphical content

Non-text elements with incorrect or missing text alternatives

Use of ASCII art, other character-based methods of conveying information or structure

Content provided as background images which have no text alternatives

Avoid using images of text


## Tables
Provide appropriate markup for tables and associate table headers with their data cells

Avoid using tables used for layout

## CSS

Avoid using fixed sizes for frame definitions

Avoid using fixed units in defining sizes for controls or sizes of text within those controls

Ensure text on the page can be resized up to 200% without loss of content (including overlap of text) or functionality

Avoid layouts and sizing which cause horizontal scrolling

Avoid the use of justified text

Provide a line spacing of at least a space and a half.

## Document Structure
Avoid the use of markup for purposes which they were not intended (i.e. blockquote or UL for indentation)

Avoid using shape, color, size, and location to convey information and relationships

Ensure actionable items are visually identifiable as actionable

Structure content appropriately through headings

Avoid the use of whitespace and preformatting to render content in multiple columns

Avoid the use of whitespace and preformatting to render content which should be rendered in a table

Ensure page titles are unique

Provide clear, informative TITLE elements on all pages

Ensure tab order reflects expected interaction order

Utilize valid, semantic markup; Avoid utilizing elements in manners for which they were not intended

Dynamic Content

Provide users with the ability to turn off automatic content changes

## Forms

Provide explicit labels for form fields

Ensure radio buttons are properly grouped

For radio buttons and checkboxes, position labels to the right of the control

Provide groupings for long option lists

Utilize fieldsets and legends for complex forms

Avoid the use of server-side image buttons

Group related form fields together

Avoid automatic submission of forms

Avoid use of event handlers to automatically submit forms

Ensure focus is shifted directly to the error message

Provide information regarding any automatically detected errors

Provide clear instructions for forms

Provide informative legends for fieldsets

Utilize standard controls for forms

Ensure field labels are unique

Ensure errors and alerts are indicated the same way site-wide

Provide correction cues to users when input triggers validation errors

Provide confirmation screen prior to final submission (Legal & Financial transactions)

Avoid the use of server-side image buttons

Avoid requiring responses within specified, unchangeable period of time

Provide ability for users to prevent and correct errors when submitting information

Provide alternate text for image buttons

Clearly disclose constraints for form fields

Ensure labels are clear and informative

Provide instructions for forms

## Frames
Declare blank frames as such

Provide clear, informative titles for all Frames and I-Frames

## Images

Avoid duplicating alternate text (i.e., redundant text which says the same thing)

Avoid linking directly to images

Avoid use of spacer images to control layout. Use CSS instead

Avoid use of uninformative alternate text (i.e. "spacer" on spacer gifs or the file name of the image)

Do not place important images in CSS background.

Ensure all images contain alternate text

Ensure alternate text for actionable graphics (i.e. icons, image buttons, navigational elements) clearly describes the destination or action

Ensure image alternate text is clear and informative

Ensure intentionally hidden content is not rendered through assistive technology

For images with text in them and/ or representing text, ensure the alternate text includes the text in the image

Provide "null" alt attributes (using alt="") for images which do not provide information (or do not require alternate text because the image is described in page content)

Provide a long description for complex images or graphics

Provide a text alternative for CSS images which convey content 

Provide alt attributes for all areas of an image map

Provide alternate text for ASCII art, mathematical formulas, emoticons and leetspeak

Provide an alternate means of accessing CAPTCHA information (i.e. audio CAPTCHA)

Avoid the use of server-side image maps

Ensure content or images which flash or blink do so only within a safe threshold

Provide informative alternate text for image links and image buttons

Use text instead of images of text (except when image is decorative in nature, or the text-in-image is essential)

Avoid use of title attribute as sole text alternative

Provide redundant links for each active region of a server side image map

Utilize both color and pattern within graphs and charts

## Keyboard Accessibility
Ensure the programmatic focus order matches the visual focus order

For dynaminc content: Ensure the programmatic focus order matches the intended interaction order

Avoid applying focus to items which are not actionable

Avoid the sole use of device-dependent events

Ensure all actionable elements can receive focus

Ensure simulated controls, simulated dialogs, calendar controls, embedded media content, menus and other actionable dynamic content can be accessed, operated, and closed from keyboard

Avoid opening new windows based on focus change

Avoid shifting focus automatically without user input

Avoid opening new windows without user notice

## Media


Provide alt attributes for applets

Provide an alternative for all prerecorded audio-only time-based media

Provide an alternative for all prerecorded video-only time-based media

Provide audio description for all prerecorded video content

Ensure captions are provided for all prerecorded audio content

Provide a text transcript for time-based media

Ensure that any automatically starting audio ends within 3 seconds

Ensure that controls to turn on & off sound are located in the same page(s) which 
plays the sound

Provide the ability for users to turn on sound only at their request

Provide the ability to turn off automatically starting sound

Ensure that users can navigate to, through, and past all embedded content

Provide users with the means to control multimedia content


Provide a link to a text transcript or script

Provide the ability to turn off background audio

Provide a transcript of audio content; link to the transcript adjacent to the link to the audio content

Ensure that captions are complete and do not skip dialog or important sound

In cases where the media is video-only, provide a note explaining there is no sound in the media.

Ensure all text transcripts and/ or audio description is sufficiently informative

Avoid the use of background audio 

Ensure background sounds are at least 20dB lower than the foreground speech content

## Navigation

Ensure skip link location is appropriate

Utilize the A element for links, and provide a valid hypertext reference

Provide more than one way to locate a web page in a set of pages (i.e. site map, site index, LINK elements in HEAD)

Provide consistent navigation schemes sitewide

Ensure navigational graphics & icons always go to the same destination / serve the same purpose

Provide consistent navigation structures

Provide an indication of current location within the site.

Avoid using different link text to refer to the same location

Ensure link text (and alternate text for images, when used as links) describes the destination or purpose of the link.

Avoid using the same link text for different destinations

## Site-Wide Concerns

Avoid using shape, size, location, position, or sound to convey information

Avoid using color alone to convey information, provide context, indicate selection, or to indicate the presence of errors

Provide text in addition to color cues, especially when color differences are used to convey information.


Provide ability to pause, stop, or hide content which updates automatically




Avoid referencing size, location, position, or sound in instructions or help information

Provide additional text information to support the identification of items that otherwise rely on sensory information to be understood.


## Tables

Avoid including unrelated data in the same data table

Avoid nested data tables

Avoid using header cells and other structural markup in layout tables

Avoid using tables to lay out lists

Ensure tabular data and the header cells for that data remain in the same table

Identify header cells for all data tables

If tables are used for layout, ensure content reads properly when linearized and that they have role="presentation"

Provide the markup necessary to convey relationships between header cells and data cells in data tables

Use tables to lay out tabular data

Use the caption element to associate caption information with data tables

Ensure that data table structure is appropriate for the data being included


## Text Content
Use proper markup for lists

Avoid use of ASCII art to convey content or structure

Avoid using preformatted text to convey relationships and structure

Provide appropriate markup for headings; Avoid using heading markup for text which is not a heading

Provide proper markup for emphasized text

Provide proper markup for quotes

Provide proper ordering for headings

Utilize MathML for mathematical formulas

Ensure text direction is marked (esp. for languages meant to be rendered right-to-left)

Avoid use of the blink element

Avoid use of the marquee element

Provide proper ordering for headings

Provide structure through headings 

Ensure headings are clear and informative

Ensure headings are unique

Programatically identify changes in natural language

Identify and define unusual words or phrases

Provide an alt attribute for each `img` element.

Avoid layouts and sizing that cause horizontal scrolling.

Avoid using justified text.

Set a `line-height` (leading) that is at least one and a half times the current font size.

Make sure that the tab order reflects the interaction order that you'd expect.


Don't automatically submit forms.

Make sure that field labels are unique.

Make sure that labels are clear and informative.

For radio buttons and checkboxes, position their labels to the right of the radio button or checkbox.

Provide alternate text for image buttons.

Provide an explicit label for each form field.

Use `optgroup` to group long option lists.

Provide clear and informative titles for all frames and iframes.

Avoid duplicating alternate text (that is, avoid alternate text that redundantly repeats the text that is next to the image).

Avoid linking directly to images.

Avoid using spacer images.

Make sure that the alternate text for any graphics that users can interact with (such as icons, image buttons, and navigational elements) clearly describes the action that they do or the destination that they link to.

Make sure that each image has alternate text is clear and informative.

Make sure that each area of an image map has an `alt` attribute.

Avoid applying focus to items that aren't interactive.

Avoid device-dependent events.

Don't shift focus automatically without user input.

Make sure that all interactive elements can receive focus using the keyboard.

Make sure that the keyboard focus order matches the visual focus order.

Avoid using different link text for links that point to the same destination.

Don't reuse the same link text for links that have different destinations.

Make sure that link text (and the alternate text for any images that are used as links) describes the destination or purpose of the link.

Make sure that navigational graphics consistently go to the same destination or perform the same action.

Give users a way to skip past repetitive navigation links.

Use the `a` element for links, and make sure that each link has a valid `href` attribute.

Don't apply events to elements that aren't typically able to receive focus.

Identify the natural language for the page.

Avoid nesting data tables.

Don't use header cells and other structural markup in layout tables.

Don't use tables to lay out content that isn't data.

When you're creating scrollable or sortable tables, make sure that their header cells 
are in the same table as their data cells.

Provide headers for data tables.

Provide markup to convey the relationships between header cells and data cells.

Don't use `blink` or `marquee` elements.

Don't use preformatted text to convey relationships or structure.

Make sure that headings are clear, informative, and unique.

If the page includes languages that are intended to be read right to left, identify 
which direction the text should be rendered in.

Use appropriate markup for headings. Don't use heading markup for any text that isn't a heading.

Make sure that headings are in the right order for the content.

Use list markup (such as `ol`, `ul`, and `dl`) for lists and any sub-lists.

Avoid using empty table headers.

Don't apply `role` attributes if you can convey the same information using native 
semantics.

Don't use an `id` more than once within a page.
