namespace Formula1API.Contexts;

using Formula1API.Models;
using Microsoft.EntityFrameworkCore;

public class MediaContext : DbContext
{
    public MediaContext(DbContextOptions<MediaContext> options): base(options){}

    public DbSet<Team> Teams {get; set;}
    public DbSet<Driver> Drivers {get; set;}
    public DbSet<Race> Races {get; set;}
}