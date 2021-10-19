using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.ProiectMDS.Models;

namespace ProiectMDS.ProiectMDS.Repositories.ComandaRepository
{
    public interface IComandaRepository
    {
        List<Comanda> GetAll();
        Comanda Get(int Id);
        Comanda Create(Comanda Comanda);
        Comanda Update(Comanda Comanda);
        Comanda Delete(Comanda Comanda);
    }
}
