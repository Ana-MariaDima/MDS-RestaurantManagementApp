using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.ProiectMDS.Repositories.ComandaMancareRepository;
using ProiectMDS.ProiectMDS.Repositories.ComandaRepository;
using ProiectMDS.ProiectMDS.Repositories.ClientRepository;
using ProiectMDS.ProiectMDS.Repositories.ChelnerRepository;
using ProiectMDS.ProiectMDS.Repositories.MasaRepository;


using ProiectMDS.ProiectMDS.DTO;
using ProiectMDS.ProiectMDS.Models;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProiectMDS.ProiectMDS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComandaController : ControllerBase
    {

        IComandaRepository IComandaRepository { get; set; }
    

        public ComandaController(IComandaRepository icr)  
        {
           
            IComandaRepository = icr;

        }

        // GET: api/<ComandaController>
        [HttpGet]
        public ActionResult<List<Comanda>> Get()
        {
            return IComandaRepository.GetAll();
        }

        // GET: api/<ComandaController>
        [HttpGet("{id}")]
        public ActionResult<Comanda> Get(int id)
        {
            return IComandaRepository.Get(id);
        }


        // POST api/<ComandaController>
        [HttpPost]
        public Comanda Post(ComandaDTO value)
        {         

            Comanda model = new Comanda()
            {
                ClientId = value.ClientId,
                ChelnerId = value.ChelnerId,
                ModPlata = value.ModPlata,
                MasaId = value.MasaId,
                Cost = value.Cost,
                
            };
            return IComandaRepository.Create(model);

        }

        // PUT api/<ComandaController>/5
        [HttpPut("{id}")]
        public Comanda Put(int id, ComandaDTO value)
        {
            Comanda c = IComandaRepository.Get(id);

            c.Id = id;

            if(value.MasaId != 0)
            {
                c.MasaId = value.MasaId;
              

            }
            if (value.ChelnerId != 0)
            {
                c.ChelnerId = value.ChelnerId;

            }

            if (value.ClientId != 0)
            {
                c.ClientId = value.ClientId;

            }

            if (value.Cost != 0)
            {
                c.Cost = value.Cost;
            }

            if (!string.IsNullOrEmpty(value.ModPlata))
            {
                c.ModPlata = value.ModPlata;
            }

            return IComandaRepository.Update(c);

        }

        // DELETE api/<AlbumController>/5
        [HttpDelete("{id}")]
        public Comanda Delete(int id)
        {
            Comanda c = IComandaRepository.Get(id);
            return IComandaRepository.Delete(c);
        }
    }
}
