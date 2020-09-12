using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DataAccess.Model
{
    public class Movie
    {
        [Key]
        public int MovieId { get; set; }

        public string Title { get; set; }

        public int Director { get; set; }

        public int GenreId { get; set; }

        [ForeignKey("GenreId")]
        public virtual Genre Genre { get; set; }

        public string Synopsis { get; set; }

        public DateTime Year { get; set; }
    }
}
