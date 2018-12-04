// configure requirejs
require.config({
    baseUrl: 'js',
    paths: {
        knockout: 'lib/knockout/dist/knockout',
        jquery: 'lib/jQuery/dist/jquery.min',
        text: 'lib/text/text',
        jqcloud: 'lib/jqcloud2/dist/jqcloud'
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

});


// start application
require(['knockout', 'app', 'jqcloud'], function(ko, app) {
    ko.applyBindings(app);
});