using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectMDS.ProiectMDS.Models
{
    public class Comanda
    {
        public int Id { get; set; }

        public int Cost { get; set; }

        public string ModPlata { get; set; }

        public int MasaId { get; set; }
        public int ChelnerId { get; set; }

        public int ClientId { get; set; }

      




    }
}
