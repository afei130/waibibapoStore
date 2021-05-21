//跳转页面
import router from "@/router";
function toView(viewName, params = {}) {
  router.push({
    name: viewName,
    query: params,
  });
}

//格式化日期
function dateFormat(date, fmt = "yyyy-mm-dd HH:MM:SS") {
  date = new Date(date);
  let ret;
  const opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
}

//封装storage存取
const namespace = "waibibapoStore"; //命名空间，用来区分不一样项目的storage
function saveItem(key, value) {
  let storage = localStorage.getItem(namespace);
  if (!storage) {
    storage = {};
  } else {
    storage = JSON.parse(storage);
  }
  storage[key] = value;
  localStorage.setItem(namespace, JSON.stringify(storage));
}

function loadItem(key, def) {
  let storage = localStorage.getItem(namespace);
  if (!storage) {
    return def;
  }
  storage = JSON.parse(storage);
  let result = storage[key];
  return result;
}
//封装storage存取end

export default {
  toView,
  dateFormat,
  saveItem,
  loadItem
};
