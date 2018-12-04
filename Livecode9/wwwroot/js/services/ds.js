define(['jquery'], function ($) {

    var getPersons = function (callback) {
        $.getJSON('api/persons', function (data) {
            callback(data);
        });
    }

    return {
        getPersons

    }
});