define([], function() {

    var subscribers = [];

    var subscribe = function (event, callback) {
        var subscriber = { event, callback };
        console.log(subscriber);
        subscribers.push(subscriber);

        return function() {
            subscribers = subscribers.filter(function(x) {
                return x !== subscriber;
            });
        }

    };

    var publish = function (event, data) {
        console.log({ event, data });
        subscribers.forEach(function(s) {
            if (event === s.event) s.callback(data);
        });
    }

    return {
        subscribe,
        publish
    };
});