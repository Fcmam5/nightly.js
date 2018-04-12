/**
nightly.js is a zero dependency javascript library, it makes it easy and painless
to enable the "Night (Dark) mode" in your website
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

var Nightly = function(body = "#313131", texts = "#f5f5f5",
                       inputs = {color: '#f5f5f5', backgroundColor: '#455A64'},
                       links = "#009688", classes, isTwbs3 = false) {
  this.isDark = false;
  this.initialTheme = null;
  this.linkTags = document.getElementsByTagName('a');
  this.inputTags = document.getElementsByTagName('input');

  /**
  * Apply the dark theme to the DOM elements
  */
  this.darkify = function() {
    this.isDark = true;
    this.initialTheme = {
      body: document.body.style.backgroundColor,
      texts: document.body.style.color,
      links: this.linkTags[0].style.color || '',
      inputs: {
              color: this.inputTags[0].style.color || '',
              backgroundColor: this.inputTags[0].style.color || ''
            },
    };

    document.body.style.backgroundColor = body;
    document.body.style.color = texts;
    for (a of this.linkTags) {
      a.style.color = links;
    }

    for (inp of this.inputTags) {
      inp.style.color = inputs.color;
      inp.style.backgroundColor = inputs.backgroundColor;
    }
  };
  /**
  * Save the initial styles
  */
  this.lightify = function() {
    if (this.initialTheme) {
      this.isDark = false;
      document.body.style.backgroundColor = this.initialTheme.body;
      document.body.style.color = this.initialTheme.texts;
      for (a of this.linkTags) {
        a.style.color = this.initialTheme.links;
      }
      for (inp of this.inputTags) {
        inp.style.color = this.initialTheme.inputs.color;
        inp.style.backgroundColor = this.initialTheme.inputs.backgroundColor;
      }
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
  /**
  * Twitter Bootstrap 3 configuration
  */
  this.twbs3Darkify = function() {
    // TODO
    if (isTwbs3) {
      /**
      * Get all navbars and add 'navbar-inverse'
      * https://getbootstrap.com/docs/3.3/components/#navbar-inverted
      */
      var navbars = document.getElementsByClassName('navbar');
      for(nv of navbars) {
        nv.className += " navbar-inverse";
      }

    }
  };
};
