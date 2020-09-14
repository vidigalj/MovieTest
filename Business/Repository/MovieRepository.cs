using DataAccess.Context;
using DataAccess.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Business.Repository
{
    public class MovieRepository : BusinessRepository<Movie, DatabaseContext>
    {
        public MovieRepository(DatabaseContext context) : base(context)
        {
        }
    }
}
