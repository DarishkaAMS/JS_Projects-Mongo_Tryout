"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class UserMongo extends UuObjectDao {

  async createSchema(){
    await super.createIndex({awid: 1, _id:1}, {unique:true})
    await super.createIndex({awid: 1, name:1}, {unique:true})
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async get(awid, id) {
    return await super.findOne({ awid, _id: id });
  }

  async getByCode(awid, code) {
    return await super.findOne({ awid, code });
  }

  async update({ awid, id, ...uuObject }) {
    return await super.findOneAndUpdate({ awid, _id: id }, uuObject, null, null);
  }

  async delete(awid, id) {
    return await super.deleteOne({ awid, id });
  }

  async deleteByCode(awid, code) {
    return await super.deleteOne({ awid, code });
  }

  async list(awid, pageInfo = {}, orderBy = {}) {
    return await super.find({ awid }, pageInfo, orderBy);
  }

  async listByGender(awid, gender, pageInfo = {}, orderBy = {}) {
    const filter = { awid, gender };
    return await super.find(filter, pageInfo, orderBy);
  }

}

module.exports = UserMongo;
