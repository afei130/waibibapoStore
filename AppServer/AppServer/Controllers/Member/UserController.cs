using AppServer.Models;
using AppServerModels;
using AppServerModels.DataBaseModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppServer.Controllers.Member
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppServerEntities _ase;
        public UserController(AppServerEntities ase)
        {
            _ase = ase;
        }

        /// <summary>
        /// 登录
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public Result Login()
        {
            Result result = new Result();
            try
            {
                User new_user = JsonConvert.DeserializeObject<User>(Request.Form["user"]);
                User old_user = _ase.User.FirstOrDefault(u => u.UserId.Equals(new_user.UserId) && u.Password.Equals(new_user.Password));
                if (old_user == null) { result.Msg = "用户或密码错误"; return result; }
                result.Code = 100;
                result.Msg = "登录成功";
            }
            catch (Exception e)
            {
                result.Msg = "登录错误";
            }
            return result;
        }

        public Dictionary<string, string> CreateDic(User user)
        {
            Dictionary<string, string> dic = new Dictionary<string, string>();
            dic.Add("Id", user.Id.ToString());
            dic.Add("UserId", user.UserId);
            dic.Add("UserName", user.UserName);
            dic.Add("UserTel", user.UserTel);
            dic.Add("CodeId", user.CodeId);
            dic.Add("NickName", user.NickName);
            dic.Add("UserAvatar", user.UserAvatar);
            dic.Add("CreateTime", user.CreateTime.ToString());
            return dic;
        }
    }
}
