using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.ProiectMDS.Models;

namespace ProiectMDS.ProiectMDS.DTO
{
    public class ChelnerDTO
    {

        public string Nume { get; set; }

        public string Prenume { get; set; }

        public int Salariu { get; set; }

        public List<Comanda> Comanda { get; set; }
    }
}
