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
            //var livro1 = new Livro() { Titulo = "ABC" };
            //var livro2 = new Livro() { Titulo = "DEF" };

            //Livro[] lvr = new Livro[] { livro1, livro2 };
            //return Json(lvr);
        }

        [HttpPost("[action]")]
        public IActionResult Criar(Livro livro)
        {
            if (ModelState.IsValid)
            {
                _repo.Incluir(livro);
                return RedirectToAction("list-books", "Livros");
            }

            return BadRequest();
        }
    }
}
