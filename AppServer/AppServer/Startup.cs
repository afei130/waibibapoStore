
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Models.DataBaseModels;
using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Utils.ReadFile;

namespace AppServer
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            //����ǰ��ʱ�ֶν����˴�Сдһ��
            //services.AddMvc().AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);


#if DEBUG
            string url = ReadFileMethod.Configuration["AppServer:ServerOutside"];
#else
            string url = ReadFileMethod.Configuration["AppServer:ServerLocal"];
#endif
            string MySqlDataBaseLink = string.Format("server={0};user id={1};password={2};database={3};allow zero datetime = true"
                , url
                , ReadFileMethod.Configuration["AppServer:MySqlDataBaseName"]
                , ReadFileMethod.Configuration["AppServer:MySqlDataBasePassword"]
                , ReadFileMethod.Configuration["AppServer:MySqlDataBaseName"]);
            services.AddDbContext<AppServerEntities>(options => options.UseMySql(MySqlDataBaseLink, x => x.ServerVersion("5.7.32-mysql")), ServiceLifetime.Transient);

            //#1�������
            services.AddCors(options =>
            {
                options.AddPolicy("any", builder =>
                {
                    builder.WithMethods("GET", "POST", "HEAD", "PUT", "DELETE", "OPTIONS")
                    //.AllowCredentials()//ָ������cookie
                .AllowAnyOrigin(); //�����κ���Դ����������
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //app.UseHttpsRedirection();//ǿ��https���ض���https��

            app.UseRouting();

            app.UseAuthorization();

            //#2�������
            app.UseCors("any");//�������app.UseEndpoints֮ǰ
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers().RequireCors("any");
            });
            app.UseStaticFiles();
        }
    }

}
