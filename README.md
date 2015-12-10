Vanilla Javascript replacement for `<select>`
-------

Vanilla Javascript replacement for `<select>` element makes the styling easy and consistent.

#### Demo

[http://zoltantothcom.github.io/vanilla-js-select](http://zoltantothcom.github.io/vanilla-js-select)

#### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
elem | string | customselect | The _id_ of the select container in the HTML markup.
openClass | string  | b-select_open | CSS class for the open select.
titleClass | string | b-select__title | CSS class for select's main and always visible element.
result | string  | result | The _id_ of the hidden input field to write the selected option value into.
openSelect | boolean | false | Defines if the select is opened upon rendering.

#### Methods

Methods are called on the select:

```javascript
// Initialize the select
var select = new CustomSelect({
  elem: "select"
});

// Open the select
select.open();
```

Method | Description
------ | -----------
toggle | Opens the select if closed and vice-versa
close | Closes the select
open | Opens the select

#### Example

Initialize:

```javascript
var customSelect = new CustomSelect({
    elem: 'select',
    result: 'select-result',
    openSelect: true
});
```

#### Browser support and dependencies

Browser | Support | Dependencies
------ | -------- | -----------
Chrome | yes | -
Firefox | yes | -
Safari | yes | -
Opera | yes | -
IE | yes* | [Polyfill](http://cdn.polyfill.io/v2/polyfill.js?features=CustomEvent) for `CustomEvent()` in IE9

\* _IE9 and up_

#### License

Free. [Unlicense](http://unlicense.org).
