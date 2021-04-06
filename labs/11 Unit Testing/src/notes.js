var notes = (function () {
    var list = [];

    return {
        add: function (note) {
            if (typeof (note) === 'string') {

                if (note.length > 0) {
                    if (!note.replace(/\s/g, '').length) {
                        return false;
                    }
                    var item = { timestamp: Date.now(), text: note };
                    list.push(item);
                    return true;
                }
            }

            return false;
        },
        remove: function (index) {
            if (index > -1) {
                if (index > (list.length - 1)) {
                    return false;
                }
                list.splice(index, 1);
                return true;
            } else {
                return false;
            }
        },
        count: function () {
            return list.length;
        },
        list: function () {
            return list;
        },
        find: function (str) {
            let index = list.findIndex(item => item.text === str);
            if (index != -1) {
                if (!str.replace(/\s/g, '').length) {
                    return false;
                }
                return index;
            } else {
                return false;
            }
        },
        clear: function () {
            list.splice(0, list.length);
        }
    }
}());