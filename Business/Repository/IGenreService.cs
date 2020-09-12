using DataAccess.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Business.Repository
{
    public interface IGenreService
    {
        Task<IEnumerable<Genre>> GetAllWithgenre();
        Task<Genre> GetgenreById(int id);
        Task<IEnumerable<Genre>> GetMusicsByArtistId(int genreId);
        Task<Genre> Creategenre(Genre newgenre);
        Task Updategenre(Genre musicToBeUpdated, Genre genre);
        Task Deletegenre(Genre genre);
    }
}
