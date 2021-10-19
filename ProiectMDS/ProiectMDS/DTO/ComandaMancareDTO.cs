using ProiectMDS.ProiectMDS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectMDS.ProiectMDS.DTO
{
    public class ComandaMancareDTO
    {
        public int NrPortii { get; set; }

        public int ComandaId { get; set; }
        public int MancareId { get; set; }
    }
}
