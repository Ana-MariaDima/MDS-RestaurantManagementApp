using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.Contexts;
using ProiectMDS.ProiectMDS.Models;

namespace ProiectMDS.ProiectMDS.Repositories.ClientRepository
{
    public class ClientRepository:IClientRepository
    {

        public Context _context { get; set; }

        public ClientRepository(Context context)
        {
            _context = context;
        }

        public Client Create(Client client)
        {
            var result = _context.Add<Client>(client);
            _context.SaveChanges();
            return result.Entity;
        }

        public Client Get(int Id)
        {
            return _context.Clienti.SingleOrDefault(x => x.Id == Id);
        }

        public List<Client> GetAll()
        {
            return _context.Clienti.ToList();
        }

        public Client Update(Client client)
        {
            _context.Entry(client).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return client;
        }

        public Client Delete(Client client)
        {
            var result = _context.Remove(client);
            _context.SaveChanges();
            return result.Entity;
        }

    }
}
