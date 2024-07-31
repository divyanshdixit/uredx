const {S3Client, PutObjectCommand, UploadPartCommand, GetObjectCommand, GetObjectAttributesCommand, ObjectAttributes} = require('@aws-sdk/client-s3');
const uuid = require('uuid').v4;
const s3Credentials = {
    region: process.env.AWS_REGION_NAME,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
};

const uploadSingleFileToS3 = async (file) => {
    const key = `uploads/${uuid()}-${file.originalname}`;

    const s3Client = new S3Client(s3Credentials);

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        Body: file.buffer,
    }
    await s3Client.send(
        new PutObjectCommand(params)
    );

    return {
        key: key,
        url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION_NAME}.amazonaws.com/${key}`
    }

}

const uploadMultiVideoFilesToS3 = async(files) => {
    try{
        const s3Client = new S3Client(s3Credentials);
        const uid = uuid();
        const params = files.map(file => {
            return {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/${uid}-${file.originalname}`,
            Body: file.buffer,
        }
        })

        const result = await Promise.all(params.map(param => s3Client.send(
            new PutObjectCommand(param)
        )));
        
        return result.map((item, idx) => {
            return {
                etag: item.ETag,
                key: `uploads/${uid}-${files[idx].originalname}`,
                url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION_NAME}.amazonaws.com/uploads/${uid}-${files[idx].originalname}`
            }
        })
        // return {
        //     key: key,
        //     url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION_NAME}.amazonaws.com/${key}`
        // }
    }catch(err){
        console.log('err', err);
    }
}

const getUploadedVideo = async(urlid) => {
    const s3Client = new S3Client({
        region: 'eu-north-1',
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        }
    });

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `uploads/${urlid}`,
        ObjectAttributes
    }

    return await s3Client.send(
        new GetObjectAttributesCommand(params)
      );
}
module.exports = {uploadSingleFileToS3, getUploadedVideo, uploadMultiVideoFilesToS3};