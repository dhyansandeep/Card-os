# CardOS

CardOS is a lightweight, web-based desktop environment (WebOS) themed around card tricks and sleight of hand. Built HTML5, CSS3, and JavaScript, it features a glassmorphic user interface,floating desktop windows, smooth drag-and-drop mechanics, and desktop utility applications including a notes and interactive calendar that gives you the option to show the future/past date.Stay tuned since im planning to add more apps and windows to the card os and plan on making another app generator.

Live Demo: https://dhyansandeep.github.io/Card-os/

## Key Features

* Glassmorphic UI: crimson and black aesthetic with backdrop blur filters, glowing borders, and drop shadows designed around standard playing card themes.
* Interactive Window Management: JavaScript drag and drop system that allows users to reposition windows across the screen by dragging their headers.
* Taskbar: Fixed bottom bar containing app launcher buttons, a info panel button, and a live updating digital clock.
* Calendar App: Dynamic date grid rendering engine with current day highlighting and previous/next month navigation buttons.
* Card Trick Notes App: Dedicated floating text workspace allowing users to write down trick ideas or mentalism notes.
  
## File Architecture

Card-os/
index.html      # Structure for desktop windows, taskbar elements, and DOM hierarchy
style.css       # Layout styles, glassmorphism filters, animations, and color schemes
script.js       # Window drag mechanics, window stacking logic, clock, and calendar engine
README.md       # Project documentation

## Built With

* HTML
* CSS
* JavaScript 

## Usage Guide

* Dragging Windows: Click and hold the header bar (DRAG HERE, NOTES, CALENDAR) on any window to move it around the desktop.
* Opening Apps: Click the Calendar or Notes button in the taskbar to display or focus the window.
* Closing Windows: Click the red X in the upper-right corner of any header to hide that window.
* Changing Months: Open the Calendar app and click the < or > buttons to cycle through different months.

## Author

* DSK (Dhyan Sandeep)
  * GitHub: https://github.com/dhyansandeep/Card-os
  * Hack Club Showcase:https://stardance.hackclub.com/@DSK/projects
