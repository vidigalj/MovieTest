﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Interfaces;

namespace DataAccess.Model
{
    public class Genre : IEntity
    {
        [Key]
        public int Id { get; set; }

        public string Description { get; set; }

        public bool Active { get; set; }

        public Genre()
        {
            Active = true;
        }
    }
}
