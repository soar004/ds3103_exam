namespace Formula1API.Contexts;


using Microsoft.EntityFrameworkCore;
using Formula1API.Models;
    
public class Formula1DbContext : DbContext
{
    public Formula1DbContext(DbContextOptions<Formula1DbContext> options): base(options)
    {
    }

    public DbSet<Driver> Drivers {get; set;}
    public DbSet<Team> Teams {get; set;}
    public DbSet<Race> Races {get; set;}

}
