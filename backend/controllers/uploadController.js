const { uploadFileService, deleteFileService, getFileService } = require("../services/uploadService")
const upload = require("../multer")
const responseHandler = require("../cors/ResponseHandler")
const { messages, statusCode } = require("../cors/constant")
const uploadFileController = (req, res) => {


  const maxsize = 10 * 1024 * 1024
  const { size } = req.file;

  if (size > maxsize) {
    return responseHandler({
      statusCode: statusCode.BAD_STATUS,
      error: true,
      res,
      message: messages.FILE_SIZE_EXCEEDS
    })
  }


  uploadFileService(req, res)

}

const deleteFileController = (req, res) => {
  deleteFileService(req, res)
}

const getFileController = async (req, res) => {
  return await getFileService(req, res)
}
module.exports = { uploadFileController, deleteFileController, getFileController }