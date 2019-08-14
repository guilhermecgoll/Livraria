using LivrariaModel;
using LivrariaStorage.Persistencia;
using Microsoft.AspNetCore.Mvc;

namespace LivrariaWeb.API
{
    [ApiController]
    [Route("[controller]")]
    public class LivroController : ControllerBase
    {
        private readonly IRepository<Livro> _repo;

        public LivroController(IRepository<Livro> repository)
        {
            _repo = repository;
        }

        [HttpGet("{id}")]
        public IActionResult Recuperar(int id)
        {
            var model = _repo.Find(id);
            if (model == null)
            {
                return NotFound();
            }

            return Ok(model);
        }

        [HttpPost]
        public IActionResult Criar([FromBody] Livro model)
        {
            if (ModelState.IsValid)
            {
                var livro = model;
                _repo.Incluir(livro);
                var uri = Url.Action("Recuperar", new { id = livro.Id });
                return Created(uri, livro);
            }

            return BadRequest();
        }

        [HttpPut]
        public IActionResult Alterar([FromBody] Livro model)
        {
            if(ModelState.IsValid)
            {
                var livro = model;
                _repo.Alterar(livro);
                return Ok(livro);
            }

            return BadRequest();
        }
    }
}
