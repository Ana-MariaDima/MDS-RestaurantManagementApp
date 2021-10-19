using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.ProiectMDS.Models;
using ProiectMDS.Contexts;

namespace ProiectMDS.ProiectMDS.Repositories.MasaRepository
{
    public interface IMasaRepository
    {
        List<Masa> GetAll();
        Masa Get(int Id);
        Masa Create(Masa Masa);
        Masa Update(Masa Masa);
        Masa Delete(Masa Masa);
    }
}
