var Students = require('./students.controller');

module.exports = function(router) {
    router.post('/create', Students.createstudent);
    router.get('/get', Students.getStudents);
    router.get('/get/:name', Students.getstudent);
    router.put('/update/:id', Students.updatestudent);
    router.delete('/remove/:id', Students.removestudent);