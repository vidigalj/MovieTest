﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MovieTest.Controllers
{
    public class GenreController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
