using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactJSDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public JsonResult SaveData(string firstName)
        {
            bool status = false;
            string message = firstName;
            if (ModelState.IsValid)
            {

            }
            else
            {
                message = "Failed! Please try again";
            }
            return new JsonResult { Data = new { status = status, message = message } };
        }
    }
}