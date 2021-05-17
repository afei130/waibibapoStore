using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Result
    {
        public int Code { get; set; } = 0;
        public string Msg { get; set; } = "未知错误";
        public object Data { get; set; } = null;
    }
}
