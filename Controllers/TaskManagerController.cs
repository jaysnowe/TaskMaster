using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace TaskManager.Controllers
{
    public class TaskManagerController : Controller
    {
        // 
        // GET: /TaskManager/

        public IActionResult Index()
        {
            return View();
        }

        // 
        // GET: /TaskManager/Welcome/ 

        public string Welcome()
        {
            return "This is the Welcome action method...";
        }

        public IActionResult Contact(){
            ViewData["Message"] = "Hello from implicit Contact() action.";
            return View();
        }
    }
}