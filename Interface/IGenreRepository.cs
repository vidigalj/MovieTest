using DataAccess.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Interface
{
    interface IGenreRepository : IBaseModel<Genre>
    {
        Task<IEnumerable<Genre>> GetAllWithGenreAsync();
        Task<Genre> GetWithGenreByIdAsync(int id);
        Task<IEnumerable<Genre>> GetAllWithMoviebyGenreIdAsync(int genreId);
    }
}
