using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProiectMDS.ProiectMDS.Models;
using ProiectMDS.ProiectMDS.Repositories.ClientRepository;
using ProiectMDS.ProiectMDS.DTO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProiectMDS.ProiectMDS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
      
            public IClientRepository IClientRepository { get; set; }
            public ClientController(IClientRepository repository)
            {
                IClientRepository = repository;
            }
            // GET: api/<ChelnerController>
            [HttpGet]
            public ActionResult<List<Client>> Get()
            {
                return IClientRepository.GetAll();
            }

            // GET api/<ChelnerController>/5
            [HttpGet("{id}")]
            public ActionResult<Client> Get(int id)
            {
                return IClientRepository.Get(id);
            }


            // POST api/<ClientController>
            [HttpPost]
            public Client Post(ClientDTO value)
            {
                Client model = new Client()
                {
                   Nume = value.Nume,
                   Prenume = value.Prenume,
                   NrTelefon = value.NrTelefon
                };
                return IClientRepository.Create(model);
            }

            // PUT api/<ClientController>/5
            [HttpPut("{id}")]
            public Client Put(int id, ClientDTO value)
            {
                Client model = IClientRepository.Get(id);
                if (value.Nume != null)
                {
                    model.Nume = value.Nume;
                }
            if (value.Prenume != null)
            {
                model.Prenume = value.Prenume;
            }

            if (value.NrTelefon != null)
            {
                model.NrTelefon = value.NrTelefon;
            }

            model.Id = id;

                return IClientRepository.Update(model);
            }


            // DELETE api/<ClientController>/5
            // DELETE api/<ChelnerController>/5
            [HttpDelete("{id}")]
            public Client Delete(int id)
            {
                Client client = IClientRepository.Get(id);
                return IClientRepository.Delete(client);
            }
        }
}
