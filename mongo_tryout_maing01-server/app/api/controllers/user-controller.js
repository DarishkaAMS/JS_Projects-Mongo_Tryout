"use strict";
const UserAbl = require("../../abl/user-abl.js");

class UserController {

  create(ucEnv) {
    return UserAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new UserController();
