using Microsoft.AspNetCore.Mvc;
using ProiectMDS.ProiectMDS.DTO;
using ProiectMDS.ProiectMDS.Models;

using ProiectMDS.ProiectMDS.Repositories.MancareRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProiectMDS.ProiectMDS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MancareController : ControllerBase
    {

        public IMancareRepository IMancareRepository { get; set; }
        public MancareController(IMancareRepository repository)
        {
            IMancareRepository = repository;
        }
        // GET: api/<MancareController>
        [HttpGet]
        public IEnumerable<Mancare> Get()
        {
            return IMancareRepository.GetAll();
        }

        // GET api/<MancareController>/5
        [HttpGet("{id}")]
        public ActionResult<Mancare> Get(int id)
        {
            return IMancareRepository.Get(id);
        }

        // POST api/<MancareController>
        [HttpPost]
        public Mancare Post(MancareDTO value)
        {

            Mancare model = new Mancare()
            {
                Nume = value.Nume,
                Cantitate = value.Cantitate
            
            };
            return IMancareRepository.Create(model);
        }

        // PUT api/<MancareController>/5
        [HttpPut("{id}")]
        public Mancare Put(int id, MancareDTO value)
        {
            Mancare model = IMancareRepository.Get(id);
            if (value.Nume != null)
            {
                model.Nume = value.Nume;
            }

            if (value.Cantitate >= 0)
            {
                model.Cantitate = value.Cantitate;

            }

            model.Id = id;


            return IMancareRepository.Update(model);
        }

        // DELETE api/<MancareController>/5
        // DELETE api/<ChelnerController>/5
        [HttpDelete("{id}")]
        public Mancare Delete(int id)
        {
            Mancare mancare = IMancareRepository.Get(id);
            return IMancareRepository.Delete(mancare);
        }
    }
}
