var _ = require('underscore');
var async = require('async');
var moment = require('moment');
var uuid = require('uuid');

var config = require('./config');
var db = require('./db');
var Instance = require('./instance');

/**
 * Setup the current session or start a new one.
 */
var Session = function(req, res) {
    this.id = req.cookies.sessionId;

    // Validate session ID.
    if (this.id) {
        if (!_.isString(this.id) || !Session.regex.id.test(this.id) || this.id != uuid.unparse(uuid.parse(this.id))) {
            console.warn('Ignoring bad session ID:', this.id);
            this.id = null;
        }
    }

    // Start a new session.
    if (!this.id) {
        this._generateId();
        res.cookie('sessionId', this.id, { expires: config.cookieExpiration });
    }
};

/**
 * Regular expressions used by session mechanics.
 */
Session.regex = {
    id: /^[A-Za-z0-9-]+$/,
    timeItem: /Time$/
};

/**
 * Generates a new session ID.
 */
Session.prototype._generateId = function() {
    this.id = uuid.v4();
};

/**
 * Initializes the data for this session.
 */
Session.prototype.init = function(cb) {
    var self = this;

    db.get('session', self.id, function(err, data) {
        self.data = data;
        if (!self.data.honey) {
            self.data.honey = 1;
        }

        self.instance = new Instance(self.data);
        cb(err);
    });
};

/**
 * Saves the state of this session.
 */
Session.prototype.save = function(cb) {
    this.set('previousTime', moment());

    this.set('honey', this.instance.getHoney());
    this.set('hives', this.instance.getHives());

    db.set('session', this.id, this.data, cb);
};

/**
 * Gets the value of a session item.
 */
Session.prototype.get = function(item) {
    var value = this.data[item];

    // Unserialize time value.
    if (Session.regex.timeItem.test(item)) {
        if (!value) {
            return moment();
        }

        // Error while unserializing. Return current time.
        var parsedMoment = moment(value);
        if (!parsedMoment.isValid()) {
            console.warn("session moment is invalid:", value);
            return moment();
        }

        // Return unserialized time.
        return parsedMoment;
    }

    // Return normal value.
    return value;
};

/**
 * Sets the value of a session item.
 */
Session.prototype.set = function(item, value) {

    // Serialize time value.
    if (moment.isMoment(value)) {
        this.data[item] = value.toISOString();
    }

    // Set normal value.
    else {
        this.data[item] = value;
    }
}

module.exports = Session;
