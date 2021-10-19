using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Contexts;
using ProiectMDS.ProiectMDS.Models;

namespace ProiectMDS.ProiectMDS.Repositories.ComandaRepository
{
    public class ComandaRepository:IComandaRepository
    {

        public Context _context { get; set; }

        public ComandaRepository(Context context)
        {
            _context = context;
        }

        public Comanda Create(Comanda comanda)
        {
            var result = _context.Add<Comanda>(comanda);
            _context.SaveChanges();
            return result.Entity;
        }

        public Comanda Get(int Id)
        {
            return _context.Comenzi.SingleOrDefault(x => x.Id == Id);
        }

        public List<Comanda> GetAll()
        {
            return _context.Comenzi.ToList();
        }

        public Comanda Update(Comanda comanda)
        {
            _context.Entry(comanda).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return comanda;
        }

        public Comanda Delete(Comanda comanda)
        {
            var result = _context.Remove(comanda);
            _context.SaveChanges();
            return result.Entity;
        }

    }
}
