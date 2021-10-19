using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Contexts;
using ProiectMDS.ProiectMDS.Models;

namespace ProiectMDS.ProiectMDS.Repositories.ChelnerRepository
{
    public class ChelnerRepository:IChelnerRepository
    {

        public Context _context { get; set; }

        public ChelnerRepository(Context context)
        {
            _context = context;
        }

        public Chelner Create(Chelner chelner)
        {
            var result = _context.Add<Chelner>(chelner);
            _context.SaveChanges();
            return result.Entity;
        }

        public Chelner Get(int Id)
        {
            return _context.Chelneri.SingleOrDefault(x => x.Id == Id);
        }

        public List<Chelner> GetAll()
        {
            return _context.Chelneri.ToList();
        }

        public Chelner Update(Chelner chelner)
        {
            _context.Entry(chelner).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            Console.WriteLine("editiing " + chelner.Id.ToString() + " " + chelner.Nume.ToString());
            _context.SaveChanges();
            return chelner;
        }

        public Chelner Delete(Chelner chelner)
        {
            var result = _context.Remove(chelner);
            _context.SaveChanges();
            return result.Entity;
        }
    }
}
