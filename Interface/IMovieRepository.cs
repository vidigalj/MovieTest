using DataAccess.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Interface
{
    public interface IMovieRepository : IBaseModel<Movie>
    {
        Task<IEnumerable<Movie>> GetAllWithMovieAsync();
        Task<Movie> GetWithMovieByIdAsync(int id);
    }
}
