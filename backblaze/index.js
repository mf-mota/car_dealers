const B2 = require('backblaze-b2')
const multer = require('multer')

module.exports.uploadMulter = multer({storage: multer.memoryStorage()}).any();

module.exports.uploadB2 = async (req, res, next) => {
    const b2 = new B2({
        applicationKeyId: process.env.BACKBLAZE_KEY_ID,
        applicationKey: process.env.BACKBLAZE_APP_KEY
    });
    const urls = [];
    const uploadPromises = req.files.map(async (file) => {
        const authRes = await b2.authorize();
        const { downloadUrl } = authRes.data;
        const response = await b2.getUploadUrl(process.env.BACKBLAZE_BUCKET_ID);
        const { authorizationToken, uploadUrl } = response.data;
        const uploadConfig = {
            uploadUrl: uploadUrl,
            uploadAuthToken: authorizationToken,
            fileName: file.originalname,
            data: file.buffer
        }
        const fileInfo = await b2.uploadFile(uploadConfig);
        const url = `${downloadUrl}/b2api/v1/b2_download_file_by_id?fileId=${fileInfo.data.fileId}`
        urls.push(url)
    })
    await Promise.all(uploadPromises);
    res.locals.urls = urls;
    next();
}