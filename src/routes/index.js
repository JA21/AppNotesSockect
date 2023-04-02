module.exports = function (app) {
    app.use('/api/notes', require('./notes.route.js'))
}
