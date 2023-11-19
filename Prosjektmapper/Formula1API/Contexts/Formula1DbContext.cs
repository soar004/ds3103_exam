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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Team>()
            .HasOne(t => t.Driver1)
            .WithMany()
            .HasForeignKey(t => t.Driver1Id); 

        modelBuilder.Entity<Team>()
            .HasOne(t => t.Driver2)
            .WithMany()
            .HasForeignKey(t => t.Driver2Id); 
    }
}
