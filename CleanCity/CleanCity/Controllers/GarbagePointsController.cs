using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CleanCity.Models;
using CleanCity.Data;

namespace CleanCity.Controllers
{
    [RoutePrefix("api/garbagePoints")]
    public class GarbagePointsController : ApiController
    {
        private readonly IGenericRepository<GarbagePoint> _repository;

        //ToDo: Add dependency injection
        GarbagePointsController()
            : this(new GenericRepository<GarbagePoint>(new DataContext()))
        {
        }

        GarbagePointsController(IGenericRepository<GarbagePoint> repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<GarbagePoint> GetGarbagePoints()
        {
            return _repository.All();
        }

        [HttpGet]
        [Route("{id}")]
        public GarbagePoint GetGarbagePoint(int id)
        {
            return _repository.GetById(id);
        }

        [HttpPost]
        [Route("")]
        public HttpResponseMessage AddGarbagePoint(GarbagePoint garbagePoint)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var createdObject = _repository.Add(garbagePoint);
                    _repository.Save();
                    return Request.CreateResponse(HttpStatusCode.Created, createdObject);                                        
                }
                catch (Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e.Message);
                }
            }
            return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ModelState.Values.SelectMany(v=>v.Errors).ToString());
        }

        [HttpPut]
        [Route("")]
        public HttpResponseMessage UpdateGarbagePoint(GarbagePoint garbagePoint)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    _repository.Update(garbagePoint);
                    return Request.CreateResponse(HttpStatusCode.NoContent);
                }
                catch (Exception e)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e.Message);
                }
            }
            return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ModelState.Values.SelectMany(v => v.Errors).ToString());
        }

        [HttpDelete]
        [Route("{id}")]
        public HttpResponseMessage RemoveGarbagePoint(int id)
        {
            if (id > 0)
            {
                var point = _repository.GetById(id);
                if (point != null)
                {
                    try
                    {
                        _repository.Delete(point);
                        _repository.Save();
                        return Request.CreateResponse(HttpStatusCode.OK);
                    }
                    catch (Exception e)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e.Message);
                    }
                }
            }
            throw new HttpResponseException(HttpStatusCode.NotFound);
        }
    }
}