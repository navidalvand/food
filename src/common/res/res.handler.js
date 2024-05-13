const { Response } = require("./responses");

function ResponseHandler(resData, req, res, next) {
  if (resData instanceof Response.ResException) {
    res.status(resData.code).json({
      msg: resData.msg,
      error: resData.error,
      statusCode: resData.code,
      data: resData.data,
    });
  } else if (resData instanceof Response.Res) {
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
