using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RT_backend.Migrations
{
    /// <inheritdoc />
    public partial class AddVisitDetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Cost",
                table: "Visits",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SpotNumber",
                table: "Visits",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "WashTime",
                table: "Visits",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cost",
                table: "Visits");

            migrationBuilder.DropColumn(
                name: "SpotNumber",
                table: "Visits");

            migrationBuilder.DropColumn(
                name: "WashTime",
                table: "Visits");
        }
    }
}
