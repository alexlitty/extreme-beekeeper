var _ = require('underscore');
var async = require('async');
var uuid = require('uuid');

var config = require('../config');
var db = require('./db');

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
 * Regular expression to validate session IDs.
 */
Session.regex = {
    id: /^[A-Za-z0-9-]+$/
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
        cb(err);
    });
};

/**
 * Saves the state of this session.
 */
Session.prototype.save = function(cb) {
    db.set('session', this.id, this.data, cb);
};

/**
 * Gets the value of a session item.
 */
Session.prototype.get = function(item) {
    return this.data[item];
};

/**
 * Sets the value of a session item.
 */
Session.prototype.set = function(item, value) {
    this.data[item] = value;
}

module.exports = Session;
