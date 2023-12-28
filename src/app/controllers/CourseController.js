const Course = require('../models/Course');
const {SingleMogooseDbToObj} = require('../../ultilities/GetFromDbHandle');
class CourseController {
    // Course controller
    show(req, res, next) {

        //req.params.slug: sẽ lấy ra query trên url
        Course.findOne({slug: req.params.slug})
            .then(course=> 
            res.render('Courses/ShowCourse', {course: SingleMogooseDbToObj(course)})
            )
            .catch(next)
    }
    // tạo ra khóa học 
    create(req, res, next) {
        res.render('Courses/CreateCourse')
    }


    // sau khi tạo xong khóa học thì data sẽ lưu ở đây

    store(req, res, next) {
        const formData =req.body;
        formData.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const requestSave = new Course(formData);
        requestSave.save()
            .then(() =>res.redirect('/'))
            .catch(next)
    }

    // edit khóa học 

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => res.render('Courses/UpdateCourse', {
                course : SingleMogooseDbToObj(course)
            }))
            .catch(next)
       
    }

    update(req, res, next) {
        Course.updateOne({_id:req.params.id}, req.body)
            .then(()=> res.redirect('/me/store/myCourse'))
            .catch(next)
    }


    delete(req, res, next) {
        Course.delete({_id:req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }

    hardDelete(req, res, next) {
        Course.deleteOne({_id:req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }

    restore(req, res, next) {
        Course.restore({_id:req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CourseController();
