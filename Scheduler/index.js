const express = require('express');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.log('Large import sample');
    var app = express(); // eslint-disable-line no-unused-vars

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
        context.bindings.outputQueueItem = req.query.name;
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};