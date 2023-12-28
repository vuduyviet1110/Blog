const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');


const Course = new Schema({
    name: {type: String, maxLength:255,required:true}, 
    description: {type: String, maxLength:600},
    img: {type: String, maxLength:255},
    videoId: {type: String,maxLength:255},
    level: {type: String},
    cost: {type: String},
    slug: {type: String, slug: 'name'},
},{
    timestamps:true
});

//Custome query helpers

Course.query.sortable= function(req){
    // Check nếu có sort thì truyền colum sort và sort type
    if(req.query.hasOwnProperty('_sort')){
        var isValidType= ['asc','desc'].includes(req.query.type)
       this.sort({
            [req.query.column]: isValidType ? req.query.type: 1
        })

    }
    return this;
}



// Add plugins
Course.plugin(
    mongoose_delete,
    { 
        overrideMethods: 'all' ,
        deletedAt : true
    }
);
mongoose.plugin(slug)

module.exports= mongoose.model('Course', Course);