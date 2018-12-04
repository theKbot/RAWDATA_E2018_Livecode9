define(['knockout', 'dataService', 'postman'], function(ko, ds, postman) {
    return function(params) {
        var persons = ko.observableArray();

        ds.getPersons(function(data) {
            persons(data);
        });

        postman.subscribe("deletePerson", function(id) {
                persons.remove(function(x) {
                    return x.id === id;
                });
            });

        return {
            persons
        };
    };
});