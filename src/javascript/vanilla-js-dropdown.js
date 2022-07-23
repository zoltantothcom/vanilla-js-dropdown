/**
 * @fileOverview
 * @author Zoltan Toth
 * @version 2.2.0
 */

/**
 * @description
 * Vanilla JavaScript dropdown - a tiny (~600 bytes gzipped) select tag replacement.
 *
 * @class
 * @param {(string|Object)} options.elem - HTML id of the select or the DOM element.
 */
var CustomSelect = function(options) {
    var elem = typeof options.elem === 'string' ? document.getElementById(options.elem) : options.elem;
    var bubbles = typeof options.bubbles === 'boolean' ? true : false,
    mainClass = 'js-Dropdown',
    titleClass = 'js-Dropdown-title',
    listClass = 'js-Dropdown-list',
    optgroupClass = 'js-Dropdown-optgroup',
    selectedClass = 'is-selected',
    disabledClass = 'is-disabled',
    openClass = 'is-open',
    selectOpgroups = elem.getElementsByTagName('optgroup'),
    selectOptions = elem.options,
    optionsLength = selectOptions.length,
    index = 0;

  // creating the pseudo-select container
  var selectContainer = document.createElement('div');

  selectContainer.className = mainClass;

  if (elem.id) {
    selectContainer.id = 'custom-' + elem.id;
  }

  // creating the always visible main button
  var button = document.createElement('button');

  button.className = titleClass;
  button.textContent = selectOptions[0].textContent;

  // creating the UL
  var ul = document.createElement('ul');
  ul.className = listClass;

  // dealing with optgroups
  if (selectOpgroups.length) {
    for (var i = 0; i < selectOpgroups.length; i++) {
      var div = document.createElement('div');
      div.innerText = selectOpgroups[i].label;
      div.classList.add(optgroupClass);

      ul.appendChild(div);
      generateOptions(selectOpgroups[i].getElementsByTagName('option'));
    }
  } else {
    generateOptions(selectOptions);
  }

  // appending the button and the list
  selectContainer.appendChild(button);
  selectContainer.appendChild(ul);

  selectContainer.addEventListener('click', onClick);

  // pseudo-select is ready - append it and hide the original
  elem.parentNode.insertBefore(selectContainer, elem);
  elem.style.display = 'none';

  /**
   * Generates a list from passed options.
   *
   * @param {object} options - options for the whole select or for an optgroup.
   */
  function generateOptions(options) {
    for (var i = 0; i < options.length; i++) {
      var li = document.createElement('li');

      li.innerText = options[i].textContent;
      li.setAttribute('data-value', options[i].value);
      li.setAttribute('data-index', index++);

      if (selectOptions[elem.selectedIndex].textContent === options[i].textContent) {
        li.classList.add(selectedClass);
        button.textContent = options[i].textContent;
      }
      if (options[i].disabled) {
        li.classList.add(disabledClass);
      }

      ul.appendChild(li);
    }
  }

  /**
   * Closes the current select on any click outside of it.
   *
   */
  document.addEventListener('click', function(e) {
    if (!selectContainer.contains(e.target)) close();
  });

  /**
   * Handles the clicks on current select.
   *
   * @param {object} e - The item the click occured on.
   */
  function onClick(e) {
    e.preventDefault();

    var t = e.target; // || e.srcElement; - uncomment for IE8

    if (t.className === titleClass) {
      toggle();
    }

    if (t.tagName === 'LI' && !t.classList.contains(disabledClass)) {
      selectContainer.querySelector('.' + titleClass).innerText = t.innerText;
      elem.options.selectedIndex = t.getAttribute('data-index');

      //trigger 'change' event
      var evt = bubbles ? new CustomEvent('change', {bubbles: true}) : new CustomEvent('change');
      elem.dispatchEvent(evt);

      // highlight the selected
      for (var i = 0; i < optionsLength; i++) {
        ul.querySelectorAll('li')[i].classList.remove(selectedClass);
      }
      t.classList.add(selectedClass);

      close();
    }
  }

  /**
   * Toggles the open/close state of the select on title's clicks.
   *
   * @public
   */
  function toggle() {
    ul.classList.toggle(openClass);
  }

  /**
   * Opens the select.
   *
   * @public
   */
  function open() {
    ul.classList.add(openClass);
  }

  /**
   * Closes the select.
   *
   * @public
   */
  function close() {
    ul.classList.remove(openClass);
  }

  return {
    toggle: toggle,
    close: close,
    open: open,
  };
};
