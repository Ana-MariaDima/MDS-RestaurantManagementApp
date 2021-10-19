using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.ProiectMDS.Repositories.ComandaMancareRepository;
using ProiectMDS.ProiectMDS.Repositories.MancareRepository;

using ProiectMDS.ProiectMDS.Models;
using ProiectMDS.ProiectMDS.DTO;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProiectMDS.ProiectMDS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComandaMancareController : ControllerBase
    {

        IComandaMancareRepository IComandaMancareRepository { get; set; }

       public  ComandaMancareController(IComandaMancareRepository icmr)
        {
            IComandaMancareRepository = icmr;
        }
        // GET: api/<ComandaMancareController>
        [HttpGet]
        public ActionResult<List<ComandaMancare>> Get()
        {
            return IComandaMancareRepository.GetAll();
        }

        // GET api/<ComandaMancareController>/5
        [HttpGet("{id}")]
        public ComandaMancare Get(int id)
        {
            return IComandaMancareRepository.Get(id);
        }

        // POST api/<ComandaMancareController>
        [HttpPost]
        public ComandaMancare Post(ComandaMancareDTO value)
        {
            ComandaMancare c = new ComandaMancare();
            c.NrPortii = value.NrPortii;
            c.MancareId = value.MancareId;
            c.ComandaId = value.ComandaId;
            return IComandaMancareRepository.Create(c);
        }

        // PUT api/<ComandaMancareController>/5
        [HttpPut("{id}")]
        public ComandaMancare Put(int id, ComandaMancareDTO value)
        {
           ComandaMancare c = IComandaMancareRepository.Get(id);

            c.NrPortii = value.NrPortii;
            c.MancareId = value.MancareId;
            c.ComandaId = value.ComandaId;
            return IComandaMancareRepository.Update(c);

        }

        // DELETE api/<ComandaMancareController>/5
        [HttpDelete("{id}")]
        public ComandaMancare Delete(int id)
        {
            ComandaMancare provider = IComandaMancareRepository.Get(id);
            return IComandaMancareRepository.Delete(provider);
        }
    }
}
