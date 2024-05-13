const { Res, ResException } = require("./responses");

function ResponseHandler(resData, req, res, next) {
  if (resData instanceof ResException) {
    res.status(resData.code).json({
      msg: resData.msg,
      statusCode: resData.code,
      error: resData.error,
      data: resData.data,
    });
  } else if (resData instanceof Res) {
    res.status(resData.code).json({
      msg: resData.msg,
      statusCode: resData.code,
      data: resData.data,
    });
  } else return;
}

module.exports = {
  ResponseHandler,
};
