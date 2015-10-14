var alive = true;
process.once('SIGINT', function() {
	alive = false;
});

module.exports = function(req, res, next) {
	if (!alive)
		res.sendStatus(503);
	else
		next();
};
