using LivrariaModel;
using LivrariaStorage.Persistencia;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace LivrariaWeb.Controllers
{
    [Route("api/[controller]")]
    public class LivrosController : Controller
    {
        private readonly IRepository<Livro> _repo;

        public LivrosController(IRepository<Livro> repository)
        {
            _repo = repository;
        }

        [HttpGet("[action]")]
        public IActionResult ListarTodos()
        {
            return Json(_repo.All.OrderBy(a => a.Titulo));
        }
    }
}
