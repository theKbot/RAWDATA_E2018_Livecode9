using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Livecode9.Controllers
{
    [Route("api/words")]
    public class WordsController : Controller
    {

        [HttpGet]
        public IActionResult GetWords()
        {
            var words = new List<object> {
                new { Text = "Lorem", Weight = 13.0},
                new { Text = "Ipsum", Weight = 10.5 },
                new { Text = "Dolor", Weight = 9.4 },
                new { Text = "Sit", Weight = 8.0 },
                new { Text = "Amet", Weight = 6.2 },
                new { Text = "Consectetur", Weight = 5.0 },
                new { Text = "Adipiscing", Weight = 5.0 }
            };
            return Ok(words);
        }
    }
}
