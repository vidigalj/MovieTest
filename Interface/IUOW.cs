using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Interface
{
    interface IUOW : IDisposable
    {
        IGenreRepository Genre { get; }
        IMovieRepository Movie{ get; }
        Task<int> CommitAsync();
    }
}
