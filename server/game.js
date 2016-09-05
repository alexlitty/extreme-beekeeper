var moment = require('moment');

var format = require('./format');
var config = require('./config');

exports.update = function(session, params, cb) {
    var previousTime = session.get('previousTime');
    var milliseconds = moment().diff(previousTime);

    if (milliseconds > 0) {
        var ticks = milliseconds * config.ticksPerSecond / 1000;
        session.instance.tick(parseInt(ticks));
    }

    if (params.action === 'buy') {
        session.instance.addItem(params.item, 1);
    }

    cb(null, {
        honey: session.instance.getHoney(),
        honeyFriendly: format(session.instance.getHoney()),
        honeyRate: format(session.instance.getHoneyPerSecond()),

        hives: session.instance.getItemCount('A')
    });
}
