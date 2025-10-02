using System.Text.Json.Serialization;

namespace RT_Backend.Models;

public class Visit
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public int SpotNumber { get; set; }
    public int WashTime { get; set; }
    public decimal Cost { get; set; }
    public DateTime Timestamp { get; set; } = DateTime.Now;

    [JsonIgnore]
    public User User { get; set; } = null!;
}