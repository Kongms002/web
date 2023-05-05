"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, pw } = UserStorage.getUserInfo(body.id);
    if (id) {
      //id가 존재하면
      if (id === body.id && pw === body.pw) {
        //비밀번호까지 같으면
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다" };
  }
}

module.exports = User;
