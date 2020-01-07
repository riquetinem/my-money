const _ = require('lodash');

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle;

    if (bundle.errors) {
        const errors = parseErrors(budle.errors);
        res.status(500).json({ errors })
    } else {
        next()
    }
}

const parseErrirs = (nodeRestfulErrors) => {
    const erros = [];

    _.forIn(nodeRestfulErrors, error => errors.push(error.message));

    return errors;

}