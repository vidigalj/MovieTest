using AngularWeb.ViewModels;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace AngularWeb.Business
{
    public class ApiService
    {
        private const string BaseUrl = "http://localhost:57414/Api/";

        private readonly HttpClient _client;

        public ApiService(HttpClient client)
        {
            _client = client;
        }

        public async Task<List<VmMovie>> GetAllMovies()
        {
            var returnData = new List<VmMovie>();

            var apiData = _client.PostAsync("ApiMovie/UpdateMesFailTests/", null).Result;

            var httpResponse = await _client.GetAsync(BaseUrl);

            if (!httpResponse.IsSuccessStatusCode)
            {
                throw new Exception("Cannot retrieve tasks");
            }

            var content = await httpResponse.Content.ReadAsStringAsync();
            var tasks = JsonConvert.DeserializeObject<List<VmMovie>>(content);

            return tasks;
        }
    }
}

