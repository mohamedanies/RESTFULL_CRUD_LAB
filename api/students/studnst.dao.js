var mongoose = require('mongoose');
var studentsSchema = require('./students.model');

studentsSchema.statics = {
    create : function(data, cb) {
        var student = new this(data);
        student.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var studentsModel = mongoose.model('Students', studentsSchema);
module.exports = studentsModel;