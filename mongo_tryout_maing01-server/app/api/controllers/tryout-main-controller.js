"use strict";
const UserMainAbl = require("../../abl/tryout-main-abl.js");

class UserMainController {
  init(ucEnv) {
    return UserMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new UserMainController();
