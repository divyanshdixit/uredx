const router = require("express").Router();
const TeacherController = require('../controllers/teachers');
const refreshTokenMiddleware = require("../middlewares/refreshtoken");
const uploadFile = require('../middlewares/uploads');

router.get('/', refreshTokenMiddleware, TeacherController.getAllTeachers);
router.post('/register', TeacherController.registerTeacher);
// for the single file upload
router.post('/checkupload', uploadFile.uploadImage.single("file"), TeacherController.fileupload);
// for the multiple file upload , max files 2
router.post('/checkuploads', uploadFile.uploadImage.array("file", 2), TeacherController.fileupload);
// for 2 different fields 
router.post('/uploadfields', uploadFile.multiUploads, TeacherController.fileupload);
// for single image upload:
router.post('/singleupload', uploadFile.uploadImage.single("file"), TeacherController.fileupload);
// for multiple video upload:
router.post('/multiuploads', uploadFile.uploadVideo.array("file"), TeacherController.multiFileuploads);
// for single video upload:
router.post('/singlevideoupload', uploadFile.uploadVideo.single("file"), TeacherController.fileupload);
router.get('/getfiles/:attributes', TeacherController.getFile);

router.get('/verifyemail/:token', TeacherController.verifyEmail);
router.post('/resendverifyemail', TeacherController.resendVerificationEmail);

router.post('/login', TeacherController.loginTeacher);
// call this api when the user clicks on refresh button:
// router.post('/refreshtoken', TeacherController.refreshToken);
router.post('/forgetpassword', TeacherController.forgetPassword);

router.post('/createcourse', refreshTokenMiddleware, TeacherController.createCourse);
router.put('/updatecourse/:courseid', refreshTokenMiddleware, TeacherController.updateCourse);
router.delete('/deletecourse/:courseid/teacher/:teacherid', refreshTokenMiddleware, TeacherController.deleteCourse);

router.post('/createtopic', [refreshTokenMiddleware, uploadFile.uploadVideo.single("file")], TeacherController.createTopic);
router.put('/updatetopic/:topicid', refreshTokenMiddleware, TeacherController.updateTopic);
router.delete('/deletetopic/:topicid/course/:courseid', refreshTokenMiddleware, TeacherController.deleteTopic);

router.patch('/editprofile', TeacherController.editTeacherProfile);

module.exports = router;