var async = require('async');
var db = require('./db');

/**
 * Retrieve the current session, or start a new one.
 */
var Session = function(req) {
    this.id = req.cookies.sessionId;

    // Start a new session.
    if (!this.id) {
        this._generateId();
        res.cookie('sessionId', this.id);
    }
};

/**
 * Generates a new session ID.
 */
Session.prototype._generateId = function() {
    this.id = 'abcdefg';
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
