using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWeb.ViewModels
{
    public class VmMovie
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Director { get; set; }

        public int GenreId { get; set; }

        public string Synopsis { get; set; }

        public int Year { get; set; }
    }
}
