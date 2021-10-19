using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Contexts;
using ProiectMDS.ProiectMDS.Models;

namespace ProiectMDS.ProiectMDS.Repositories.MasaRepository
{
    public class MasaRepository:IMasaRepository
    {
        public Context _context { get; set; }

        public MasaRepository(Context context)
        {
            _context = context;
        }

        public Masa Create(Masa masa)
        {
            var result = _context.Add<Masa>(masa);
            _context.SaveChanges();
            return result.Entity;
        }

        public Masa Get(int Id)
        {
            return _context.Mese.SingleOrDefault(x => x.Id == Id);
        }

        public List<Masa> GetAll()
        {
            return _context.Mese.ToList();
        }

        public Masa Update(Masa masa)
        {
            _context.Entry(masa).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            Console.WriteLine(masa.Id.ToString()+" EDITING MASA "+masa.Locatie+" "+masa.NrLocuri.ToString());
            _context.SaveChanges();
            return masa;
        }

        public Masa Delete(Masa masa)
        {
            var result = _context.Remove(masa);
            _context.SaveChanges();
            return result.Entity;
        }

    }
}
