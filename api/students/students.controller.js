var Students = require('./students.dao');

exports.createstudent = function (req, res, next) {
    var student = {
        name: req.body.name,
        description: req.body.description
    };

    Students.create(student, function(err, student) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "student created successfully"
        })
    })
}

exports.getstudents = function(req, res, next) {
    Students.get({}, function(err, students) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            students: students
        })
    })
}

exports.getstudent = function(req, res, next) {
    Students.get({name: req.params.name}, function(err, students) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            students: students
        })
    })
}

exports.updatestudent = function(req, res, next) {
    var student = {
        name: req.body.name,
        description: req.body.description
    }
    Students.update({_id: req.params.id}, student, function(err, student) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "student updated successfully"
        })
    })
}

exports.removestudent = function(req, res, next) {
    Students.delete({_id: req.params.id}, function(err, student) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "student deleted successfully"
        })
    })
}