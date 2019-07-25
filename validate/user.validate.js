module.exports.postCreate = function(req, res, next) {
    var errors = [];
    if (!req.body.name) {
        errors.push('Name required');
    }

    if (!req.body.phone) {
        errors.push('Phone required')
    }

    if (errors.length) {
        res.render('users/create', {
            errors: errors,
            value: req.body
        });
        return;
    }
    // res.locals.demo = 'hello';
    next()
}