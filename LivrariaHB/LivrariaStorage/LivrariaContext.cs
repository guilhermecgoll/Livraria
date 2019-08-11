using LivrariaModel;
using Microsoft.EntityFrameworkCore;

namespace LivrariaStorage
{
    public class LivrariaContext : DbContext
    {
        public DbSet<Livro> Livros { get; set; }

        public LivrariaContext(DbContextOptions<LivrariaContext> options) 
            : base(options)
        {
            this.Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration<Livro>(new LivroConfiguration());
        }
    }
}
