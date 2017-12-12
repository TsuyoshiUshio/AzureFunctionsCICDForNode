'use strict'

const Scheduler = require('../Scheduler/index.js')
const expect = require('chai').expect
const sinon = require('sinon');

describe('Scheduler function', () => {
    var req = {};
    var context = {};

    beforeEach(function() {
        req = {
            query: {
                name: "Azure"
            },
            body: {
                name: "taro"
            }
        };
        context = {
            res: {
                status: 200
            },
            log: function (str) {
                console.log(str); // eslint-disable-line no-console
            },
            bindings: {
                outputQueueItem: "fake_queue_value"
            },
            done: function () {

            }
        };
    });

    it('should pass query name to queue bindings', (done) => {
        sinon.spy(context, "done");
        Scheduler(context, req);
        expect(context.bindings.outputQueueItem).to.equal("Azure", "Queue isn't set");
        expect(context.done.called).to.be.true
        context.done.restore();
        done();
    }) 
    it ('should be ok if the query name has been passed', (done) => {
        Scheduler(context, req);
        expect(context.res.body).to.equal("Hello Azure");
        done();
    })
    it ('should not be ok if the query name isnt supplied', (done) => {
        req = {
            query: {
            },
            body: {
            }
        };
        Scheduler(context, req);
        expect(context.res.status).to.equal(400);
        expect(context.res.body).to.equal("Please pass a name on the query string or in the request body");
        done();
    })
})