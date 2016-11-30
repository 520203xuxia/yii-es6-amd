define(['require'], function(require) {
    return function(el) {
        var $ = require('jquery');
        $(el).html('Hello, World!');
    }
})