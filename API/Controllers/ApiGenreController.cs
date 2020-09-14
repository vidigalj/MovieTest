using Business.Repository;
using DataAccess.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApiGenreController : ApiController<Genre, GenreRepository>
    {
        public ApiGenreController(GenreRepository repository) : base(repository)
        {
        }
    }
}
