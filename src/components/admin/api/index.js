import request from "@/api/request";

export function getAllDataProducts() {
  return request({
    url: "product/getProducts",
    method: "get",
  });
}
export function createDataProducts(dataCreateProducts) {
  return request({
    url: "product/create",
    method: "post",
    data: dataCreateProducts,
  });
}
export function editDataProducts(dataEditProducts, id) {
  return request({
    url: "product/update/" + id,
    method: "post",
    data: dataEditProducts,
  });
}
export function detailDataProducts(id) {
  return request({
    url: "product/detail?id=" + id,
    method: "get",
  });
}
export function deleteDataProducts(id) {
  return request({
    url: "product/delete/" + id,
    method: "delete",
  });
}
export function getAllDataUsers() {
  return request({
    url: "user/getUsers",
    method: "get",
  });
}
export function createDataUsers(dataCreateUsers) {
  return request({
    url: "user/create",
    method: "post",
    data: dataCreateUsers,
  });
}
export function editDataUsers(dataEditUsers, id) {
  return request({
    url: "user/update/" + id,
    method: "post",
    data: dataEditUsers,
  });
}
export function detailDataUsers(id) {
  return request({
    url: "user/detail?id=" + id,
    method: "get",
  });
}
export function deleteDataUsers(id) {
  return request({
    url: "user/delete/" + id,
    method: "delete",
  });
}
