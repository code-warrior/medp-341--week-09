const { watch } = require(`gulp`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

/*
    Note: In WebStorm, the following paths might need to point to the parent in order
    for the watch function and the server object to work.
 */
module.exports = serve = () => {
    browserSync({
        notify: true,
        server: `./`
    });

    watch([
        `./**/*.html`,
        `./**/*.css`,
        `./**/*.js`
    ]).on(`change`, reload);
};

exports.serve;
