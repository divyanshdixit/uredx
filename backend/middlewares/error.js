const multer = require('multer');

const errorMiddleware = (error, req, res, next) => {
    console.log('first 1')
    if(error instanceof multer.MulterError){
        console.log('first')
        if(error.code === 'LIMIT_UNEXPECTED_FILE'){
            return res.status(400).json({
                message: 'Submiited file type not supported!'
            })
        }
    }
    next();
  }

module.exports = errorMiddleware