const Course = require('../models/Course');
const { MultipleMogooseDbToObj} = require('../../ultilities/GetFromDbHandle');



class UserStoreController {
    // get [me/store/myCourses]
    
    
    CouresesStore(req, res,next) {
    
        Promise.all([Course.find({}).sortable(req), Course.countDocumentsWithDeleted({deleted:true})])
            .then(([course, deletedCount])=> 
                res.render('User/MyCourses',{
                    course: MultipleMogooseDbToObj(course),
                    deletedCount,
                })
            )
            .catch(next)
        ;

    }

    CouresesTrash(req, res,next) {
        Course.findWithDeleted({deleted:true})
            .then((course)=> res.render('User/MyDeletedCourse',{
                course: MultipleMogooseDbToObj(course),

            }))
            .catch(next)
        ;
        
    }
}
module.exports = new UserStoreController();
