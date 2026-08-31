# CardOS

CardOS is a lightweight, web-based desktop environment (WebOS) themed around card tricks and sleight of hand. Built using vanilla HTML5, CSS3, and JavaScript, it features a glassmorphic user interface, customizable floating desktop windows, smooth drag-and-drop mechanics, and desktop utility applications including a notes editor and interactive calendar.

Live Demo: https://dhyansandeep.github.io/Card-os/

---

## Key Features

* Glassmorphic UI: Custom crimson-and-black aesthetic with backdrop blur filters, glowing borders, and drop shadows designed around standard playing card themes.
* Interactive Window Management: Native JavaScript drag-and-drop system that allows users to reposition windows across the screen by dragging their headers.
* Dynamic Z-Index Elevation: Clicking or dragging any window automatically moves it to the top layer.
* Persistent Taskbar: Fixed bottom bar containing app launcher buttons, a toggleable info panel button, and a live updating digital clock.
* Interactive Calendar App: Dynamic date grid rendering engine with current day highlighting and previous/next month navigation buttons.
* Card Trick Notes App: Dedicated floating text workspace allowing users to write down trick ideas, setup sequences, or mentalism notes.

---

## File Architecture

Card-os/
│
├── index.html      # Structure for desktop windows, taskbar elements, and DOM hierarchy
├── style.css       # Layout styles, glassmorphism filters, animations, and color schemes
├── script.js       # Window drag mechanics, window stacking logic, clock, and calendar engine
└── README.md       # Project documentation

---

## Built With

* HTML5: Semantic structural layout for desktop windows and taskbar elements.
* CSS3: CSS Grid, Flexbox, custom variables, keyframe animations, and backdrop-filter glass effects.
* JavaScript (ES6): Vanilla DOM manipulation, mouse movement event listeners, date object manipulation, and time interval handling.

---

## Local Setup

### Prerequisites

No build tools, package managers, or local server runtimes (such as Node.js) are required. The project runs natively in all standard modern web browsers.

### Installation

1. Clone the repository:
   git clone https://github.com/dhyansandeep/Card-os.git

2. Navigate to the project directory:
   cd Card-os

3. Launch the application:
   Open index.html directly in your browser or run it using a local development server like VS Code Live Server.

---

## Usage Guide

* Dragging Windows: Click and hold the header bar (DRAG HERE, NOTES, CALENDAR) on any window to move it around the desktop.
* Opening Apps: Click the Calendar or Notes button in the taskbar to display or focus the window.
* Closing Windows: Click the red X in the upper-right corner of any header to hide that window.
* Changing Months: Open the Calendar app and click the < or > buttons to cycle through different months.

---

## Author

* DSK (Dhyan Sandeep)
  * GitHub: https://github.com/dhyansandeep
  * Hack Club Showcase: https://stardance.hackclub.com/@dhyansandeep2008/projects
