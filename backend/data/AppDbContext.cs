namespace RT_Backend.Data;

using Microsoft.EntityFrameworkCore;
using RT_Backend.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Visit> Visits { get; set; }
}