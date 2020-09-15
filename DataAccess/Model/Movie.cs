using Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DataAccess.Model
{
    public class Movie : IEntity
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Director { get; set; }

        public int GenreId { get; set; }

        [ForeignKey("GenreId")]
        public virtual Genre Genre { get; set; }

        public string Synopsis { get; set; }

        public int Year { get; set; }
    }
}
