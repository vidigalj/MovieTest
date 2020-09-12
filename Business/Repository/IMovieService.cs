using DataAccess.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Business.Repository
{
    public interface IMovieService
    {
        Task<IEnumerable<Movie>> GetAllMovie();
        Task<Movie> GetMovieById(int id);
        Task<Movie> CreateMovie(Movie newMovie);
        Task UpdateMovie(Movie movieToBeUpdated, Movie movie);
        Task DeleteMovie(Movie movie);
    }
}
