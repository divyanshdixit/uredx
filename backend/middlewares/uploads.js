
const multer = require('multer');
const uuid = require('uuid').v4;
// const upload = multer({dest: 'uploads/'});

// customizing the file name in uploads folder:
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const {originalname} = file;
        cb(null, `${uuid()}_${originalname}`)
    }
});

const memoryStorage = multer.memoryStorage();

const imageFileFilter = (req, file, cb) => {
    if(file.mimetype.split('/')[0] === 'image'){
        cb(null, true);
    }else{
        cb(new Error('File type is not supported!'), false)
    }
}

const videoFileFilter = (req, file, cb) => {
    console.log(file)
    if(file.mimetype.split('/')[0] === 'video'){
        cb(null, true);
    }else{
        cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'), false)
    }
}

const uploadImage = multer({storage:memoryStorage, fileFilter: imageFileFilter, limits: {fileSize: 2000000, files: 1}});
const uploadVideo = multer({storage: memoryStorage, fileFilter: videoFileFilter});

// for the 2 or more different fields:
const multiUploads = uploadImage.fields([{name: 'avatar', maxCount:1}, {name: 'course_thumbnail', maxCount:1}])

module.exports = {uploadImage, uploadVideo, multiUploads};
