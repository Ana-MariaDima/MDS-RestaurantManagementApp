using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.ProiectMDS.Models;
namespace ProiectMDS.ProiectMDS.Repositories.ComandaMancareRepository
{
    public interface IComandaMancareRepository
    {
        List<ComandaMancare> GetAll();
        ComandaMancare Get(int Id);
        ComandaMancare Create(ComandaMancare ComandaMancare);
        ComandaMancare Update(ComandaMancare ComandaMancare);
        ComandaMancare Delete(ComandaMancare ComandaMancare);
    }
}
