/**
* @fileOverview
* @author Zoltan Toth
* @version 0.1
*/

/**
* @description
* Vanilla Javascript select replacement - and no more styling restrictions.
*
* @class
* @param {string} options.elem - The HTML id of the pseudo-select container.
* @param {string} [options.result="result"] - The HTML id of the hidden input field the selected option will be written into.
* @param {string} [options.openClass="b-select_open"] - The CSS class of the opened select.
* @param {string} [options.titleClass="b-select__title"] - The CSS class for select's main and always visible element.
* @param {boolean} [options.openSelect=false] - Show the select opened or closed.
*/
CustomSelect = function(options) {
    var elem       = document.getElementById(options.elem) || "customselect",
        openSelect = options.openSelect || false,
        openClass  = options.openClass || "b-select_open",
        titleClass = options.titleClass || "b-select__title",
        result     = options.result || "result",
        isOpen     = false;

    elem.addEventListener("click", onClick);
    elem.addEventListener('select', function(event) {
        document.getElementById(result).value = event.detail;
    });

    document.addEventListener("click", closeSelect);

    /**
    * Open the menu if the user requested.
    */
    if (openSelect) open();

    /**
    * Handles the clicks on current select.
    *
    * @param {object} e - The item the click occured on.
    */
    function onClick(e) {
        var t = e.target || e.srcElement;

        if (t.className == titleClass) {
            toggle();
        } else if (t.tagName === "LI") {
            elem.querySelector("." + titleClass).innerText = t.innerText;
            dispatchEvent(t.getAttribute("data-value"));
            close();
        }
    }

    /**
    * Fires a custom `select` event.
    *
    * @param {string} value - The selected item value from the `data-value` attribute.
    */
    function dispatchEvent(value) {
        var widgetEvent = new CustomEvent("select", {
            bubbles: true,
            detail: value
        });

        elem.dispatchEvent(widgetEvent);
    }

    /**
    * Closes the current select on any click outside of it.
    *
    * @param {object} e - The item the click occured on.
    */
    function closeSelect(e) {
        if (!elem.contains(e.target)) close();
    }

    /**
    * Utility function to remove the open class when the select has to be closed.
    *
    * @param {string} str - The class to be removed.
    */
    function removeClass(str) {
        var reg = new RegExp('(\ )' + openClass + '(\)', 'g');
        return str.replace(reg, '');
    }

    /**
    * Toggles the open/close state of the select on title's clicks.
    *
    * @public
    */
    function toggle() {
        if (isOpen) { close(); } else { open(); }
    }

    /**
    * Opens the select.
    *
    * @public
    */
    function open() {
        elem.className += " " + openClass;
        isOpen = true;
    }

    /**
    * Closes the select.
    *
    * @public
    */
    function close() {
        elem.className = removeClass(elem.className);
        isOpen = false;
    }

    this.toggle = toggle;
    this.close = close;
    this.open = open;
}