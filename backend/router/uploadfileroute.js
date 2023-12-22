const {uploadFileController,deleteFileController, getFileController}=require('../controllers/uploadController')
const app=require("../index")
const uploadMiddleware=require("../multer")
app.post("/uploadFile",uploadMiddleware,uploadFileController)

app.delete("/deletefile",deleteFileController)
app.get("/getFile",getFileController)
