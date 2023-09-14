import request from "@/api/request";

export function loginAccount(payload) {
  return request({
    url: "login",
    method: "post",
    data: payload,
  });
}

export function logoutAccount() {
  return request({
    url: "logout",
    method: "post",
  });
}

export function registerAccount(payload) {
  return request({
    url: "register",
    method: "post",
    data: payload,
  });
}
