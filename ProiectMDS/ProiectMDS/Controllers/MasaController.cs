using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.ProiectMDS.Models;
using ProiectMDS.ProiectMDS.Repositories.MasaRepository;
using ProiectMDS.ProiectMDS.DTO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProiectMDS.ProiectMDS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MasaController : ControllerBase
    {
        public IMasaRepository IMasaRepository { get; set; }
        public MasaController(IMasaRepository repository)
        {
            IMasaRepository = repository;
        }
        public ActionResult<List<Masa>> Get()
        {
            return IMasaRepository.GetAll();
        }

        // GET api/<ChelnerController>/5
        [HttpGet("{id}")]
        public ActionResult<Masa> Get(int id)
        {
            return IMasaRepository.Get(id);
        }


        // POST api/<ChelnerController>
        [HttpPost]
        public Masa Post(MasaDTO value)
        {
            Masa model = new Masa()
            {
               Locatie = value.Locatie,
               NrLocuri = value.NrLocuri
            };
            return IMasaRepository.Create(model);
        }

        // PUT api/<ChelnerController>/5
        [HttpPut("{id}")]
        public Masa Put(int id, MasaDTO value)
        {
            Masa masa = IMasaRepository.Get(id);
        
            if (value.NrLocuri != null)
            {
                masa.NrLocuri = value.NrLocuri;
            }

            if (value.Locatie != null)
            {
                masa.Locatie = value.Locatie;

            }

            return IMasaRepository.Update(masa);
        }


        // DELETE api/<ChelnerController>/5
        [HttpDelete("{id}")]
        public Masa Delete(int id)
        {
            Masa provider = IMasaRepository.Get(id);
            return IMasaRepository.Delete(provider);
        }
    }
}
