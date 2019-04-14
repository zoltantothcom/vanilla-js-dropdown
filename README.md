# Vanilla JavaScript Dropdown - replacement for `<select>`

[![Build Status](https://travis-ci.org/zoltantothcom/vanilla-js-dropdown.svg?branch=master)](https://travis-ci.org/zoltantothcom/vanilla-js-dropdown) [![Coverage Status](https://coveralls.io/repos/github/zoltantothcom/vanilla-js-dropdown/badge.svg?branch=master)](https://coveralls.io/github/zoltantothcom/vanilla-js-dropdown?branch=master) ![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)

Tiny (_**0.7 KB gzipped!**_) JavaScript replacement for `<select>` that makes styling easy and consistent.

_— Inspired by the blazing fast, lightweight, cross-platform and crazy popular [Vanilla JS](http://vanilla-js.com/) framework._

## How it works

Reads the original `<select>` element's options (_with respect of `selected`, if any_), creates and attaches the pseudo-select just before the original one, and hides the original.

Upon selection it updates the original `<select>`, so when you submit your form the value will be there.

JavaScript disabled? No problem! Nicely degrades to original `<select>`.

## Demo

[**DROPDOWN**](http://zoltantothcom.github.io/vanilla-js-dropdown)

## Options

| Option | Required | Description                                                        |
| ------ | -------- | ------------------------------------------------------------------ |
| elem   | yes      | _id_ of the select you want to replace **or** a direct DOM element |

## Methods

| Method    | Description                               |
| --------- | ----------------------------------------- |
| .toggle() | Opens the select if closed and vice-versa |
| .close()  | Closes the select                         |
| .open()   | Opens the select                          |

## Usage example

```javascript
var select = new CustomSelect({
  elem: 'select',
});

// open it for the user
select.open();
```

## Running the tests

```
npm test
```

## Browser support and dependencies

| Browser | Support | Dependencies                                                                                                                                                                                                        |
| ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Chrome  | yes     | -                                                                                                                                                                                                                   |
| Firefox | yes     | -                                                                                                                                                                                                                   |
| Safari  | yes     | -                                                                                                                                                                                                                   |
| Opera   | yes     | -                                                                                                                                                                                                                   |
| Edge    | yes     | -                                                                                                                                                                                                                   |
| IE      | yes\*   | [Polyfill](//cdn.jsdelivr.net/classlist/2014.01.31/classList.min.js) for `.classList` in IE9, [Polyfill](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill) for CustomEvent in IE9+ |

\* _IE9 and up_

## Versioning

This project uses [SemVer](http://semver.org/) for versioning. For the versions available, see [the tags on this repository](https://github.com/zoltantothcom/vanilla-js-dropdown/tags).

## License

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

See [Unlicense](http://unlicense.org) for full details.

## Related

- [Vanilla JavaScript **Carousel**](https://github.com/zoltantothcom/vanilla-js-carousel)
- [Vanilla JavaScript **Tabs**](https://github.com/zoltantothcom/vanilla-js-tabs)
- [Vanilla JavaScript **Tooltip**](https://github.com/zoltantothcom/vanilla-js-tooltip)
- [Vanilla JavaScript **Accordion**](https://github.com/zoltantothcom/vanilla-js-accordion)