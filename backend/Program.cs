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
var port = Environment.GetEnvironmentVariable("PORT") ?? "10000";

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

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
}

app.UseCors();

// API Key middleware
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

app.MapPost("/api/visits", async (CreateVisitDto dto, AppDbContext db) =>
{
    var newVisit = new Visit
    {
        UserId = dto.UserId,
        SpotNumber = dto.SpotNumber.ToString(),
        WashTime = dto.WashTime.ToString(),
        Cost = dto.Cost.ToString(),
        Timestamp = DateTime.Now
    };

    db.Visits.Add(newVisit);
    await db.SaveChangesAsync();
    return Results.Created($"/api/visits/{newVisit.Id}", newVisit);
});

app.Run();