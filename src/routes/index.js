const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const UserCourses = require('./userCourses');

function route(app) {
    app.use('/me',UserCourses)
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}
module.exports = route;
