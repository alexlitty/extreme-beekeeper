var _ = require('underscore');
var fs = require('fs');
var path = require('path');

var config = require('./config');
var db = {
    session: { }
};

/**
 * Validate a value.
 *
 * Database values must always be an object.
 */
db.isValidValue = function(value) {
    return _.isObject(value) && !_.isArray(value);
}

/**
 * Sets the value of a database item.
 *
 * Value must always be an object.
 */
db.set = function(category, item, value, cb) {

    // Value must be an object.
    if (!db.isValidValue) {
        cb(new Error('db set ' + category + '/' + item + ': bad value'));
        return;
    }

    // Write new value.
    var filename = path.join(config.path.db, category, item + '.json');
    fs.writeFile(filename, JSON.stringify(value), 'utf8', cb);
}

/**
 * Retrieves the value of a database item.
 *
 * Always returns an object.
 */
db.get = function(category, item, cb) {
    var filename = path.join(config.path.db, category, item + '.json');
    fs.readFile(filename, 'utf8', function(err, data) {

        // Item retrieved.
        if (!err) {
            cb(null, db.isValidValue(data) ? JSON.parse(data) : { });
        }

        // Item has no file, so item has no value.
        else if (err.code === 'ENOENT') {
            cb(null, { });
        }

        // Error.
        else {
            cb(err, null);
        }

    });
}

module.exports = db;
