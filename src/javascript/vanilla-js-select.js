/**
* @fileOverview
* @author Zoltan Toth
* @version 2.0.0
*/

/**
* @description
* Tiny (~600 bytes gzipped) vanilla JavaScript select replacement.
*
* @class
* @param {string} options.elem - HTML id of the elect.
*/
var CustomSelect = function(options) {
    var elem          = document.getElementById(options.elem),
        mainClass     = 'js-Select',
        titleClass    = 'js-Select-title',
        listClass     = 'js-Select-list',
        selectedClass = 'is-selected',
        openClass     = 'is-open',
        selectOptions = elem.querySelectorAll('option'),
        optionsLength = selectOptions.length;

    // creating the pseudo-select container
    var selectContainer = document.createElement('div');

    selectContainer.className = mainClass;
    selectContainer.id = 'custom-' + options.elem;

    // creating the always visible main button
    var button = document.createElement('button');

    button.className = titleClass;
    button.textContent = selectOptions[0].textContent;

    // creating the UL
    var ul = document.createElement('ul');
    ul.className = listClass;

    for (var i = 0; i < optionsLength; i++) {
        var li = document.createElement('li');

        li.innerText = selectOptions[i].textContent;
        li.setAttribute('data-value', selectOptions[i].value);
        li.setAttribute('data-index', i);

        if (selectOptions[i].getAttribute('selected') !== null) {
            li.classList.add(selectedClass);
            button.textContent = selectOptions[i].textContent;
        }

        ul.appendChild(li);
    }

    // appending the button and the list
    selectContainer.appendChild(button);
    selectContainer.appendChild(ul);

    selectContainer.addEventListener('click', onClick);

    // pseudo-select is ready - append it and hide the original
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
        var t = e.target; // || e.srcElement; - uncomment for IE8

        if (t.className === titleClass) {
            toggle();
        } 

        if (t.tagName === 'LI') {
            selectContainer.querySelector('.' + titleClass).innerText = t.innerText;
            elem.options.selectedIndex = t.getAttribute('data-index');

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
        close:  close,
        open:   open
    };
};