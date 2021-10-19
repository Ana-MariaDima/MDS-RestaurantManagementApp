using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProiectMDS.ProiectMDS.Models;

namespace ProiectMDS.Contexts
{
    public class Context : DbContext
    {
        public DbSet<Masa> Mese { get; set; }
        public DbSet<Chelner> Chelneri { get; set; }
        public DbSet<Client> Clienti { get; set; }
        public DbSet<Comanda> Comenzi { get; set; }
        public DbSet<ComandaMancare> ComenziMancare { get; set; }
        public DbSet<Mancare> Mancaruri { get; set; }

        public static bool isMigration = true;

       /* protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (isMigration)
                optionsBuilder.UseSqlServer(@"Server=.\;Database=DBProiectMDS2021;Trusted_Connection=True");
        }*/

        public Context()
        {

        }

        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
    }
}
