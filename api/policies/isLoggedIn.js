module.exports = function isLoggedIn(req, res, next) {
    var user2 = req.session.user;
    // Unexpected error occurred-- skip to the app's default error (500) handler
    if (user2==null) return res.redirect('http://' + req.get('host') + '/login');
    return next();
};