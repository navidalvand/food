class Res {
  data;
  msg;
  code;
  constructor(msg, data, code) {
    this.msg = msg;
    this.data = data;
    this.code = code;
  }
}

class ResOk extends Res {
  constructor(msg, data, code) {
    msg = msg || "OK";
    data = data || null;
    code = code || 200;
    super(msg, data, code);
  }
}

class ResCreated extends Res {
  constructor(msg, data, code) {
    msg = msg || "Created";
    data = data || null;
    code = code || 201;
    super(msg, data, code);
  }
}

class ResDev extends Res {
  constructor(msg, data, code) {
    msg = msg || "Dev Rsponse";
    data = data || null;
    code = code || 200;
    super(msg, data, code);
  }
}

class ResException extends Res {
  error;
  constructor(msg, data, error, code) {
    msg = msg || "Error";
    data = data || null;
    code = code || 400;
    super(msg, data, code);
    this.error = error || "Error";
  }
}

class BadRequestException extends ResException {
  constructor(msg, data, error, code) {
    data = data || null;
    msg = msg || "BadRequest";
    code = code || 400;
    error = error || "BadRequest";
    super(msg, data, error, code);
  }
}
class NotFoundException extends ResException {
  constructor(msg, data, error, code) {
    msg = msg || "NotFound";
    data = data || null;
    code = code || 404;
    error = error || "NotFound";
    super(msg, data, error, code);
  }
}

module.exports = {
  Res,
  ResException,
  Response: {
    ResOk,
    ResCreated,
    ResDev,
    BadRequestException,
    NotFoundException,
  },
};
