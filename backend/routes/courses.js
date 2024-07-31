const router = require('express').Router();
const CourseController = require('../controllers/courses');
const refreshTokenMiddleware = require('../middlewares/refreshtoken');

router.post('/createcourse', refreshTokenMiddleware, CourseController.createCourse);

module.exports = router;