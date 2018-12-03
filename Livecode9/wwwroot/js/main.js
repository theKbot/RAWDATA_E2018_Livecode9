// configure requirejs
require.config({
    baseUrl: 'js',
    paths: {
        knockout: 'lib/knockout/dist/knockout',
        jquery: 'lib/jQuery/dist/jquery.min',
        text: 'lib/requirejs-text/text',
        jqcloud: 'lib/jqcloud2/dist/jqcloud'
    },
    shim: {
        // set default deps
        'jqcloud': ['jquery']
    }
});


// start application
require(['knockout', 'app', 'jqcloud'], function(ko, app) {
    ko.applyBindings(app);
});