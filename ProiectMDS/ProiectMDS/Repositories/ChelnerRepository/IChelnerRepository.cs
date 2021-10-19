using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.ProiectMDS.Models;
namespace ProiectMDS.ProiectMDS.Repositories.ChelnerRepository
{
   public interface IChelnerRepository
    {
        List<Chelner> GetAll();
        Chelner Get(int Id);
        Chelner Create(Chelner Chelner);
        Chelner Update(Chelner Chelner);
        Chelner Delete(Chelner Chelner);
    }
}
