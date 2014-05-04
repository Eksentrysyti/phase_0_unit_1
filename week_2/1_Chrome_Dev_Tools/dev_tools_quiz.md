#### Include an inline screenshot of your codeschool's points from the profile page:
<a href="http://s1285.photobucket.com/user/Steven_Leu/media/Week2CodeSchool_zps802928f6.png.html" target="_blank"><img src="http://i1285.photobucket.com/albums/a586/Steven_Leu/Week2CodeSchool_zps802928f6.png" border="0" alt=" photo Week2CodeSchool_zps802928f6.png"/></a>

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  * Javascript Debugging
  * Performance Optimization

Realtime editing ofHTML and CSS can be edited with the elements tab in Inspector.  Here, you can make HTML changes on the left window and edit the styles on the right.  The changes will show immediately in the window, though cannot be saved unless saved in the Sources tab.  Javascript debugging can be done in the Sources tab.  The sources tab allows you to control execution of script with breakpoints and allows you to test specific parts of the code.  Finally, performance optimization can be done in the Network tab.  Here, you can see the size of files as well as how fast and in what order a page loads elements, as well as any non-optimal situations happening on the page.

* What's the quick key for your OS to spawn the Dev Tools inspector?

For Windows, Ctrl+Shift+i will open up the inspector

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

  - current background color: #0b0f11
  - [URL=http://s1285.photobucket.com/user/Steven_Leu/media/Screenshot_zps9487fdf2.png.html][IMG]http://i1285.photobucket.com/albums/a586/Steven_Leu/Screenshot_zps9487fdf2.png[/IMG][/URL]
  

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

  - It appears that the text in question is a part of gif called "home_bg.gif" and is not a text item in the HTML.  If you wanted to change the color, it would need to be a modification to the gif file, not the HTML.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

  - The largest image on the page is 92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png, which is a picture of a city in celebration.
  - You can find this information by opening up inspector on the page, selecting the "Network" tab, and order the items by descending size.  The top item is the largest one.  The URL of the image: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

  - Easy items that would improve the optimization of the site would be to minify the CSS, Javascript, and HTML.  Additionally you could also pull resources from a consistent URL, optimize images so they're not downloading huge files, and take advantage to browser caching.