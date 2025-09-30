using Microsoft.EntityFrameworkCore;
using RT_Backend.Models;
using RT_Backend.Data;
using DotNetEnv;

var builder = WebApplication.CreateBuilder(args);

if (builder.Environment.IsDevelopment())
{
    Env.Load();
}

var apiKey = Environment.GetEnvironmentVariable("API_KEY") ?? "default-dev-key";
var port = Environment.GetEnvironmentVariable("PORT") ?? "5000";

builder.WebHost.UseUrls($"http://0.0.0.0:{port}");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=app.db"));

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors();

app.Use(async (context, next) =>
{
    var requestApiKey = context.Request.Headers["X-API-Key"].FirstOrDefault();

    if (requestApiKey != apiKey)
    {
        context.Response.StatusCode = 401;
        await context.Response.WriteAsync("Unauthorized - Invalid API Key");
        return;
    }

    await next();
});

// User endpoints
app.MapGet("/api/users", async (AppDbContext db) =>
    await db.Users.ToListAsync());

app.MapPost("/api/users", async (User user, AppDbContext db) =>
{
    db.Users.Add(user);
    await db.SaveChangesAsync();
    return Results.Created($"/api/users/{user.Id}", user);
});

// Visit endpoints
app.MapGet("/api/visits", async (AppDbContext db) =>
    await db.Visits.Include(v => v.User).ToListAsync());

app.MapPost("/api/visits", async (Visit visit, AppDbContext db) =>
{
    var newVisit = new Visit
    {
        UserId = visit.UserId,
        SpotNumber = visit.SpotNumber,
        WashTime = visit.WashTime,
        Cost = visit.Cost,
        Timestamp = DateTime.Now
    };

    db.Visits.Add(newVisit);
    await db.SaveChangesAsync();
    return Results.Created($"/api/visits/{newVisit.Id}", newVisit);
});

app.Run();