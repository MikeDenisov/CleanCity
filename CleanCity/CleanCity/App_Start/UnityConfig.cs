using System;
using CleanCity.Controllers;
using CleanCity.Data;
using CleanCity.Models;
using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;

namespace CleanCity
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            
            // e.g. container.RegisterType<ITestService, TestService>();
            // new GenericRepository<SpaceObject>(new DataContext());
            //container.RegisterType(IGenericRepository<GarbagePoint>, GenericRepository<GarbagePoint>);
            //container.RegisterType(typeof (GenericRepository<>), typeof(DataContext));
            //container.RegisterType(typeof (IGenericRepository<GarbagePoint>), typeof (GenericRepository<>), );
            //container.RegisterType<IGenericRepository<GarbagePoint>>(
            //    new InjectionFactory(c => c.Resolve<GenericRepository<GarbagePoint>>()));
            //container.RegisterType<IGenericRepository<GarbagePoint>,
            //    GenericRepository<GarbagePoint>>();//(new InjectionConstructor(typeof(DataContext)));
            //container.Resolve<GarbagePointsController>();
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}