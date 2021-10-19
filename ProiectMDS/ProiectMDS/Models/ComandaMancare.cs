using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectMDS.ProiectMDS.Models
{
    public class ComandaMancare
    {
        public int Id { get; set; }
        public int NrPortii { get; set; }

        public int ComandaId { get; set; }
        public int MancareId { get; set; }

    }
}
