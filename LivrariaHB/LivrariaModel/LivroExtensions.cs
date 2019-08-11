namespace LivrariaModel
{
    public static class LivroExtensions
    {
        public static Livro ToLivro(this LivroUpload model)
        {
            return new Livro
            {
                Id = model.Id,
                Titulo = model.Titulo
            };
        }

        public static LivroUpload ToModel(this Livro livro)
        {
            return new LivroUpload
            {
                Id = livro.Id,
                Titulo = livro.Titulo
            };
        }

    }
}
