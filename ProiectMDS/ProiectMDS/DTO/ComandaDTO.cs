using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.ProiectMDS.Models;

namespace ProiectMDS.ProiectMDS.DTO
{
    public class ComandaDTO
    {
        public int Cost { get; set; }

        public string ModPlata { get; set; }

        public int MasaId { get; set; }

        public int ChelnerId { get; set; }
   
        public int ClientId { get; set; }


    }
}
