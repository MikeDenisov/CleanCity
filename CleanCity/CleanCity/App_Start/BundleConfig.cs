using System.Web;
using System.Web.Optimization;

namespace CleanCity
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Client/sripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Client/scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Client/scripts/bootstrap.js",
                      "~/Client/scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Client/content/css").Include(
                      "~/Client/content/bootstrap.css",
                      "~/Client/content/site.css"));
        }
    }
}
