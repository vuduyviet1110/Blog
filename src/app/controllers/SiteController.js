const Course = require('../models/Course');
const {MultipleMogooseDbToObj} = require('../../ultilities/GetFromDbHandle');
class SiteController {
    //home controller
    home(req, res,next) {
        Course.find({})
            .then(courses=> {
                res.render('home',{
                    courses: MultipleMogooseDbToObj(courses)
                })

            })
            .catch(next);
    }

    // search controller
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
