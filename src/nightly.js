/**
nightly.js is a zero dependency javascript library, it makes it easy and painless
enable the "Night (Dark) mode" in your website
- TODO: Add supported browsers here -
Visit https://github.com/Fcmam5/nightly.js for more info.
Copyright (c) 2018 Fortas Abdeldjalil <dr.fcmam5[at]gmail.com>
All rights reserved.
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
**/

var Nightly = function(body = "#202020", texts = "#BDBDBD", titles = "#202020",
                       links) {
  this.isDark = false,
  this.initialTheme = null,
  /**
  * Apply the dark theme to the DOM elements
  */
  this.darkify = function() {
    this.initialTheme = {
      body: document.body.style.backgroundColor,
      texts: document.body.style.color,
    };
    document.body.style.backgroundColor = body;
    document.body.style.color = texts;
  };
  /**
  * Save the initial styles
  */
  this.lightify = function() {
    if (this.initialTheme) {
      document.body.style.backgroundColor = this.initialTheme.body;
      document.body.style.color = this.initialTheme.texts;
    }
  };
  /**
  * Toggle darkify and lightify
  */
  this.toggle = function() {
    if (this.isDark) {
      this.lightify();
    } else {
      this.darkify();
    }
  };
};
