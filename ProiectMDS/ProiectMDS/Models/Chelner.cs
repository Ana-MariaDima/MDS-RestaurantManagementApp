using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectMDS.ProiectMDS.Models
{
    public class Chelner
    {
        public int Id { get; set; }

        public string Nume { get; set; }

        public string Prenume { get; set; }

        public int Salariu { get; set; }

        public List<Comanda> Comanda { get; set; }

    }
}
