using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DataAccess.Model
{
    public class Genre
    {
        [Key]
        public int GenreId { get; set; }
        public string Description { get; set; }
        public bool Active { get; set; }

        public Genre()
        {
            Active = true;
        }
    }
}
