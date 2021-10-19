using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ProiectMDS.Contexts;
using Microsoft.EntityFrameworkCore;
using ProiectMDS.ProiectMDS.Repositories.ChelnerRepository;
using ProiectMDS.ProiectMDS.Repositories.ClientRepository;
using ProiectMDS.ProiectMDS.Repositories.ComandaMancareRepository;
using ProiectMDS.ProiectMDS.Repositories.ComandaRepository;
using ProiectMDS.ProiectMDS.Repositories.MancareRepository;
using ProiectMDS.ProiectMDS.Repositories.MasaRepository;




namespace ProiectMDS
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
            
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", p =>
                {
                    p.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
                });
            });
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddDbContext<Context>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddTransient< IChelnerRepository , ChelnerRepository>();
            services.AddTransient<IClientRepository, ClientRepository>();
            services.AddTransient<IComandaRepository, ComandaRepository>();
            services.AddTransient<IComandaMancareRepository, ComandaMancareRepository>();
            services.AddTransient<IMancareRepository, MancareRepository>();
            services.AddTransient<IMasaRepository, MasaRepository>();

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });


            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

         
            app.UseHttpsRedirection();
            
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseCors(
               options => options.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin());
            app.UseMvc();
        }
    }
}
