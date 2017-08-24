# Vanilla JavaScript dropdown - replacement for `<select>`

[![Build Status](https://travis-ci.org/zoltantothcom/vanilla-js-dropdown.svg?branch=master)](https://travis-ci.org/zoltantothcom/vanilla-js-dropdown) [![Coverage Status](https://coveralls.io/repos/github/zoltantothcom/vanilla-js-dropdown/badge.svg?branch=master)](https://coveralls.io/github/zoltantothcom/vanilla-js-dropdown?branch=master) [![Code Climate](https://codeclimate.com/github/zoltantothcom/vanilla-js-dropdown/badges/gpa.svg)](https://codeclimate.com/github/zoltantothcom/vanilla-js-dropdown) ![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)

Tiny (*~600 bytes gzipped*) JavaScript replacement for `<select>` makes styling easy and consistent.

*— Inspired by the blazing fast, lightweight, cross-platform and crazy popular [Vanilla JS](http://vanilla-js.com/)  framework.*


## How it works

Reads the original `<select>` element's options (*with respect of `selected`, if any*), creates and attaches the pseudo-select just before the original one, and hides the original. 

Upon selection it updates the original `<select>`, so when you submit your form the value will be there.

JavaScript disabled? No problem! Nicely degrades to original `<select>`.


## Demo

[**Select**](http://zoltantothcom.github.io/vanilla-js-dropdown)


## Options

Option | Type | Required | Description
------ | ---- | ------- | -----------
elem | string | yes | _id_ of the select you want to replace


## Methods

Method | Description
------ | -----------
.toggle() | Opens the select if closed and vice-versa
.close() | Closes the select
.open() | Opens the select


## Usage example

```javascript
var select = new CustomSelect({
    elem: 'select'
});

// open it for the user
select.open();
```


## Run the tests

```
npm test
```


## Browser support and dependencies

Browser | Support | Dependencies
------ | -------- | -----------
Chrome | yes | -
Firefox | yes | -
Safari | yes | -
Opera | yes | -
IE | yes* | [Polyfill](//cdn.jsdelivr.net/classlist/2014.01.31/classList.min.js) for `.classList` in IE9

\* _IE9 and up_


## License

Free to use and modify. [Unlicense](http://unlicense.org).
