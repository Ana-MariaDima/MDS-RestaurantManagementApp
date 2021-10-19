using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.ProiectMDS.Models;
using ProiectMDS.Contexts;

namespace ProiectMDS.ProiectMDS.Repositories.ComandaMancareRepository
{
    public class ComandaMancareRepository:IComandaMancareRepository
    {

        public Context _context { get; set; }

        public ComandaMancareRepository(Context context)
        {
            _context = context;
        }

        public ComandaMancare Create(ComandaMancare comandaMancare)
        {
            var result = _context.Add<ComandaMancare>(comandaMancare);
            _context.SaveChanges();
            return result.Entity;
        }

        public ComandaMancare Get(int Id)
        {
            return _context.ComenziMancare.SingleOrDefault(x => x.Id == Id);
        }

        public List<ComandaMancare> GetAll()
        {
            return _context.ComenziMancare.ToList();
        }

        public ComandaMancare Update(ComandaMancare comandaMancare)
        {
            _context.Entry(comandaMancare).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return comandaMancare;
        }

        public ComandaMancare Delete(ComandaMancare comandaMancare)
        {
            var result = _context.Remove(comandaMancare);
            _context.SaveChanges();
            return result.Entity;
        }

    }
}
