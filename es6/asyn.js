define(['jquery'], function() {
    return function(el) {
        var $ = requirejs('jquery');
        $(el).html('Hello, World!');
    }
})