using Microsoft.EntityFrameworkCore;

namespace Formula1API.Data
{
    public class Formula1DbContext : Formula1DbContext
    {
        public Formula1DbContext(DbContextOptions<Formula1DbContext> options): base(options)
        {
        }

        public DbSet<Driver> Drivers {get; set;}
        public DbSet<Team> Teams {get; set;}
        public DbSet<Race> Races {get; set;}

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            
        }
    }
}