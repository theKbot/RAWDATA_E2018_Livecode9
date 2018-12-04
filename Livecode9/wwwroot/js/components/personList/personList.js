define(['knockout'], function(ko) {
    return function(params) {
        var persons = ko.observableArray([{ name: 'peter' }, { name: 'joe' }]);

        return {
            persons
        };
    };
});