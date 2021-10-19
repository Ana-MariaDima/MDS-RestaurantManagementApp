using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProiectMDS.Migrations
{
    public partial class m2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Chelneri",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nume = table.Column<string>(nullable: true),
                    Prenume = table.Column<string>(nullable: true),
                    Salariu = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Chelneri", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Clienti",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nume = table.Column<string>(nullable: true),
                    Prenume = table.Column<string>(nullable: true),
                    NrTelefon = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clienti", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Mese",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    NrLocuri = table.Column<int>(nullable: false),
                    Locatie = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mese", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Comenzi",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Cost = table.Column<int>(nullable: false),
                    ModPlata = table.Column<string>(nullable: true),
                    MasaId = table.Column<int>(nullable: false),
                    ChelnerId = table.Column<int>(nullable: false),
                    ClientId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comenzi", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Comenzi_Chelneri_ChelnerId",
                        column: x => x.ChelnerId,
                        principalTable: "Chelneri",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Comenzi_Clienti_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Clienti",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Comenzi_Mese_MasaId",
                        column: x => x.MasaId,
                        principalTable: "Mese",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ComenziMancare",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    NrPortii = table.Column<int>(nullable: false),
                    ComandaId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ComenziMancare", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ComenziMancare_Comenzi_ComandaId",
                        column: x => x.ComandaId,
                        principalTable: "Comenzi",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Mancaruri",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Nume = table.Column<string>(nullable: true),
                    Cantitate = table.Column<int>(nullable: false),
                    ComandaMancareId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mancaruri", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Mancaruri_ComenziMancare_ComandaMancareId",
                        column: x => x.ComandaMancareId,
                        principalTable: "ComenziMancare",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Comenzi_ChelnerId",
                table: "Comenzi",
                column: "ChelnerId");

            migrationBuilder.CreateIndex(
                name: "IX_Comenzi_ClientId",
                table: "Comenzi",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_Comenzi_MasaId",
                table: "Comenzi",
                column: "MasaId");

            migrationBuilder.CreateIndex(
                name: "IX_ComenziMancare_ComandaId",
                table: "ComenziMancare",
                column: "ComandaId");

            migrationBuilder.CreateIndex(
                name: "IX_Mancaruri_ComandaMancareId",
                table: "Mancaruri",
                column: "ComandaMancareId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Mancaruri");

            migrationBuilder.DropTable(
                name: "ComenziMancare");

            migrationBuilder.DropTable(
                name: "Comenzi");

            migrationBuilder.DropTable(
                name: "Chelneri");

            migrationBuilder.DropTable(
                name: "Clienti");

            migrationBuilder.DropTable(
                name: "Mese");
        }
    }
}
