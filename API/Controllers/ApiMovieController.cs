using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Controllers;
using Business.Repository;
using DataAccess.Model;
using Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiMovieController : ApiController<Movie, MovieRepository>
    {
        public ApiMovieController(MovieRepository repository) : base(repository)
        {
        }
    }
}
