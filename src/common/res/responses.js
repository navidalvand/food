class Res {
  data;
  msg;
  code;
  constructor(data, msg, code) {
    this.data = data;
    this.msg = msg;
    this.code = code;
  }
}

class ResOk extends Res {
  constructor(data, msg, code) {
    data = data || null;
    msg = msg || "OK";
    code = code || 200;
    super(data, msg, code);
  }
}

class ResCreated extends Res {
  constructor(data, msg, code) {
    data = data || null;
    msg = msg || "Created";
    code = code || 201;
    super(data, msg, code);
  }
}

class ResDev extends Res {
  constructor(data, msg, code) {
    data = data || null;
    msg = msg || "Dev Rsponse";
    code = code || 200;
    super(data, msg, code);
  }
}

class ResException extends Res {
  error;
  constructor(msg, error, code) {
    data = null;
    msg = msg || "Error";
    code = code || 400;
    super(data, msg, code);
    this.error = error;
  }
}

class BadRequestException extends ResException {
  constructor(msg, error) {
    data = null;
    msg = msg || "BadRequest";
    code = code || 400;
    error = error || "BadRequest";
    super(msg, error, code);
  }
}

module.exports = {
  Response: {
    Res,
    ResOk,
    ResCreated,
    ResDev,
    ResException,
    BadRequestException,
  },
};
