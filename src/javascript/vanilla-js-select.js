/**
* @fileOverview
* @author Zoltan Toth
* @version 1.0.0
*/

/**
* @description
* Tiny (~500 bytes gzipped) vanilla JavaScript select replacement.
*
* @class
* @param {string} options.elem - HTML id of the elect.
* @param {boolean} [options.openSelect=false] - Show the select opened or closed.
*/
var CustomSelect = function(options) {
    var elem       = document.getElementById(options.elem),
        openClass  = 'b-select_open',
        titleClass = 'b-select__title',
        selectOptions = elem.querySelectorAll('option'),
        optionsLength = selectOptions.length;

    // creating the pseudo-select container
    var selectContainer = document.createElement('div');

    selectContainer.className = 'b-select';
    selectContainer.id = 'custom-' + options.elem;

    // creating the always visible main button
    var button = document.createElement('button');

    button.className = titleClass;
    button.textContent = selectOptions[0].textContent;

    selectContainer.appendChild(button);

    // creating the UL
    var ul = document.createElement('ul');
    ul.className ='b-select__list';

    for (var i = 0; i < optionsLength; i++) {
        var li = document.createElement('li');

        li.innerText = selectOptions[i].textContent;
        li.setAttribute('data-value', selectOptions[i].value);
        li.setAttribute('data-index', i);

        if (selectOptions[i].getAttribute('selected') !== null) {
            li.classList.add('b-select__list-item--selected');
            button.textContent = selectOptions[i].textContent;
        }

        ul.appendChild(li);
    }

    selectContainer.appendChild(ul);
    selectContainer.addEventListener('click', onClick);

    // append the pseudo-select and hide the original
    elem.parentNode.insertBefore(selectContainer, elem);
    elem.style.display = 'none';


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
        var t = e.target || e.srcElement;

        if (t.className === titleClass) {
            toggle();
        } else if (t.tagName === 'LI') {
            selectContainer.querySelector('.' + titleClass).innerText = t.innerText;
            elem.options.selectedIndex = t.getAttribute('data-index');

            // highlight the selected
            for (var i = 0; i < optionsLength; i++) {
                ul.querySelectorAll('li')[i].classList.remove('b-select__list-item--selected');
            }
            t.classList.add('b-select__list-item--selected');
            
            close();
        }
    }

    /**
    * Toggles the open/close state of the select on title's clicks.
    *
    * @public
    */
    function toggle() {
        selectContainer.classList.toggle(openClass);
    }

    /**
    * Opens the select.
    *
    * @public
    */
    function open() {
        selectContainer.classList.add(openClass);
    }

    /**
    * Closes the select.
    *
    * @public
    */
    function close() {
        selectContainer.classList.remove(openClass);
    }

    return {
        toggle: toggle,
        close:  close,
        open:   open
    };
};