using System.Text.Json.Serialization;

namespace RT_Backend.Models;

public class Visit
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string SpotNumber { get; set; } = string.Empty;
    public string WashTime { get; set; } = string.Empty;
    public string Cost { get; set; } = string.Empty;
    public DateTime Timestamp { get; set; } = DateTime.Now;

    [JsonIgnore]
    public User User { get; set; } = null!;
}