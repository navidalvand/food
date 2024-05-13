const { Res } = require("./responses");

function ResponseHandler(resData, req, res, next) {
  if (resData instanceof Res === false) return;
  res.status(resData.code).json({
    msg: resData.msg,
    statusCode: resData.code,
    data: resData.data,
  });
}

module.exports = {
  ResponseHandler,
};
