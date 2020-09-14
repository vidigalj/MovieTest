using DataAccess.Context;
using DataAccess.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Business.Repository
{
    public class GenreRepository : BusinessRepository<Genre, DatabaseContext>
    {
        public GenreRepository(DatabaseContext context) : base(context)
        {
        }
    }
}
