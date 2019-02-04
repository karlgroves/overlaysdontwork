# CONTRIBUTING

Contributions very welcome and encouraged.

## General flow

The general flow for contributing is very similar to other open source repositories you may be familiar with:

* Do not commit to master branch
* Create an issue in the repository
* Write your code
* Create a pull request against that specific issue.

## Creating Problems

* Use `/src/problems/boilerplate.html` as your guide to structuring the example problem
* "Problems" are specific instances of inaccessible code meant to choke overlays.
* A great source of potential Problems can be found in the wishlist.md file.  If you take an example from there, please remove it from the wishlist when you submit your pull request.
* The HTML for the Problems should be in their own standalone .html files within `/src/problems`.  The name should reflect what it is demonstrating. This makes for easier maintenance.
* The CSS for the Problems should be put into sass files. Generally, the `/sass/_custom.scss` file would be the best place. Properly scoping your CSS will help avoid problems
* The JavaScript for the Problems should go in `/js/main.js` unless it is large enough to require its own file.
* Provide a clear explanation of your example it should describe why it is an accessibility problem and why an overlay product can't fix it.
* Make sure you add your name to the list of contributors in the footer!

Feel free to really put messed up code in your Problem files. Please make sure the Problem is realistic, though. The goal here is to demonstrate why overlays are bullshit using realistic examples.

## Coding standards - LOL

* No unit tests necessary this is garbage code anyway, right?
* It shouldn't choke any Grunt tasks
* Do not put anything in `/dist`. The contents of this folder are removed and populated fresh from Grunt
* Do not put anything inside the `<main>` element of the index.html file. The content in there will be written via JavaScript.
* Do not use `id` attributes on any Problem code and don't do anything that depends on  `id` attributes. They're going to get wiped out.
* Do not create any examples that flash or blink! We want to be cruel to overlay developers, not real people.


