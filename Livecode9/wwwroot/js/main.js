// configure requirejs
require.config({
    baseUrl: 'js',
    paths: {
        knockout: 'lib/knockout/dist/knockout',
        jquery: 'lib/jQuery/dist/jquery.min',
        text: 'lib/text/text',
        jqcloud: 'lib/jqcloud2/dist/jqcloud',
        dataService: 'services/ds',
        postman: 'services/postman'
    },
    shim: {
        // set default deps
        'jqcloud': ['jquery']
    }
});

// register components
require(['knockout'], function (ko) {
    ko.components.register("person-list",
        {
            viewModel: { require: 'components/personList/personList'},
            template: { require: 'text!components/personList/personListView.html'}
        });

    ko.components.register("person",
        {
            viewModel: { require: 'components/persons/person' },
            template: { require: 'text!components/persons/personView.html' }
        });

});


// start application
require(['knockout', 'app', 'jqcloud'], function(ko, app) {
    ko.applyBindings(app);
});