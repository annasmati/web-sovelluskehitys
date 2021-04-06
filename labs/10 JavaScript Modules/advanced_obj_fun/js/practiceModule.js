(function (window) {
    'use strict';

    function $() {
    }

    $.prototype.id = function (id) {
        let element = document.getElementById(id);
        return element;
    }

    window.app = window.app || {};
    window.app.$ = $;

})(window);
