using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Linq;
using System.Web;
using CleanCity.Models;
using CleanCity.Types;

namespace CleanCity.Data
{
        public class DataContext : DbContext, IDbContext
        {
            public DbSet<GarbagePoint> GarbagePoints { get; set; }
            public DbSet<Comment> Comments { get; set; }
            public DbSet<User> Users { get; set; }
            public DbSet<Photo> Photos { get; set; }

            public static string ConnectionStringName
            {
                get
                {
                    if (ConfigurationManager.AppSettings["ConnectionStringName"]
                        != null)
                    {
                        return ConfigurationManager.
                            AppSettings["ConnectionStringName"];
                    }

                    return "DefaultConnection";
                }
            }

            static DataContext()
            {
                Database.SetInitializer(new CleanCityDatabaseInitializer());
            }

            public DataContext()
                : base(ConnectionStringName)
            {
            }
        }

        public class CleanCityDatabaseInitializer : DropCreateDatabaseIfModelChanges<DataContext>
        {
            protected override void Seed(DataContext context)
            {
                var garbagePoints = new List<GarbagePoint>()
                {
                    new GarbagePoint()
                    {
                        Description = "yoyoyo",
                        Location = new GpsLocation(50.4020355,30.5326905),
                        Rate = 3
                    }
                };

                context.GarbagePoints.AddRange(garbagePoints);

                base.Seed(context);
                context.SaveChanges();
            }
        }
}