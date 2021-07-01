"use strict";
const TryoutMainAbl = require("../../abl/tryout-main-abl.js");

class TryoutMainController {
  init(ucEnv) {
    return TryoutMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new TryoutMainController();
