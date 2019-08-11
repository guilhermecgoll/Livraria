using System.ComponentModel.DataAnnotations;

namespace LivrariaModel
{
    public class LivroUpload
    {
        public int Id { get; set; }
        [Required]
        public string Titulo { get; set; }
    }
}
