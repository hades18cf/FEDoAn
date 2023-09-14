import { FORMAT } from "@/utils/constant";

export default {
  methods: {
    checName(rule, value, callback) {
      if (!value) {
        return callback(new Error("Không được để trống dữ liệu"));
      } else if (!value.match(FORMAT.SPECIAL)) {
        return callback(new Error("Sai dịnh dạng dữ liệu tên không được có ký tự đặc biệt"));
      } else if (value.length > 64) {
        callback(new Error("Độ dài tối đa của ô là 64"));
      } else {
        callback();
      }
    },
    checkEmail(rule, value, callback) {
      if (!value) {
        callback(new Error("Không được để trống dữ liệu"));
      } else if (value.length > 255) {
        callback(new Error("Độ dài tối đa của ô là 255"));
      } else if (!value.match(FORMAT.EMAIL)) {
        return callback(new Error("Sai dịnh dạng dữ liệu email"));
      } else {
        callback();
      }
    },
    checkPassword(rule, value, callback) {
      if (!value) {
        callback(new Error("Không được để trống dữ liệu"));
      } else {
        callback();
      }
    },
  },
};
