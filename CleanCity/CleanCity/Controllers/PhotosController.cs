using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using CleanCity.Data;
using CleanCity.Models;
using Newtonsoft.Json;

namespace CleanCity.Controllers
{
    public class PhotosController : ApiController
    {
        private const string ServerUploadFolder = "c:\\tmp\\uploads";
        private readonly IGenericRepository<GarbagePoint> garbagePointRepository = new GenericRepository<GarbagePoint>(new DataContext());
        private readonly IGenericRepository<Photo> photoRepository = new GenericRepository<Photo>(new DataContext());

        //[HttpPost]
        //[Route("api/garbagePoints/{garbagePointId}/photo")]
        //public async Task<IEnumerable<Photo>> UploadPhoto(int garbagePointId)
        //{
        //    // Verify that this is an HTML Form file upload request
        //    if (!Request.Content.IsMimeMultipartContent("form-data"))
        //    {
        //        throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.UnsupportedMediaType));
        //    }

        //    var garbagePoint = garbagePointRepository.GetById(garbagePointId);

        //    if (garbagePoint == null)
        //        throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));

            
        //    // Create a stream provider for setting up output streams
        //    var streamProvider = new MultipartFormDataStreamProvider(ServerUploadFolder);

        //    // Read the MIME multipart asynchronously content using the stream provider we just created.
        //    await Request.Content.ReadAsMultipartAsync(streamProvider);

        //    var result = new List<Photo>();
        //    foreach (var file in streamProvider.FileData)
        //    {
        //        var info = new FileInfo(file.LocalFileName);
        //        var fileId = Convert.ToInt32((from h in file.Headers where h.Key == "id" select h.Value.First()).FirstOrDefault());
        //        var actualFileName = (from h in file.Headers where h.Key == "ActualFileName" select h.Value.First()).FirstOrDefault();
        //        var path = Path.GetFileName(file.LocalFileName);
        //        var newPhoto = new Photo()
        //        {
        //            Target = garbagePoint,
        //            ActualFileName = actualFileName,
        //            FilePath = file.LocalFileName
        //        };
        //        photoRepository.Add(newPhoto);
        //        result.Add(newPhoto);
        //    }

        //    photoRepository.Save();

        //    return result;
        //}

        [HttpPost] // This is from System.Web.Http, and not from System.Web.Mvc
        [Route("api/garbagePoints/{garbagePointId}/photo")]
        public async Task<HttpResponseMessage> Upload()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
                this.Request.CreateResponse(HttpStatusCode.UnsupportedMediaType);
            }

            var provider = GetMultipartProvider();
            var result = await Request.Content.ReadAsMultipartAsync(provider);

            // On upload, files are given a generic name like "BodyPart_26d6abe1-3ae1-416a-9429-b35f15e6e5d5"
            // so this is how you can get the original file name
            var originalFileName = GetDeserializedFileName(result.FileData.First());

            // uploadedFileInfo object will give you some additional stuff like file length,
            // creation time, directory name, a few filesystem methods etc..
            var uploadedFileInfo = new FileInfo(result.FileData.First().LocalFileName);

            // Remove this line as well as GetFormData method if you're not
            // sending any form data with your upload request
            var fileUploadObj = GetFormData(result);

            // Through the request response you can return an object to the Angular controller
            // You will be able to access this in the .success callback through its data attribute
            // If you want to send something to the .error callback, use the HttpStatusCode.BadRequest instead
            var returnData = "ReturnTest";
            return this.Request.CreateResponse(HttpStatusCode.OK, new { returnData });
        }

        // You could extract these two private methods to a separate utility class since
        // they do not really belong to a controller class but that is up to you
        private MultipartFormDataStreamProvider GetMultipartProvider()
        {
            // IMPORTANT: replace "(tilde)" with the real tilde character
            // (our editor doesn't allow it, so I just wrote "(tilde)" instead)
            var uploadFolder = "(tilde)/App_Data/Tmp/FileUploads"; // you could put this to web.config
            var root = HttpContext.Current.Server.MapPath(uploadFolder);
            Directory.CreateDirectory(root);
            return new MultipartFormDataStreamProvider(root);
        }

        // Extracts Request FormatData as a strongly typed model
        private object GetFormData(MultipartFormDataStreamProvider result)
        {
            if (result.FormData.HasKeys())
            {
                var unescapedFormData = Uri.UnescapeDataString(result.FormData
                    .GetValues(0).FirstOrDefault() ?? String.Empty);
                if (!String.IsNullOrEmpty(unescapedFormData))
                    return JsonConvert.DeserializeObject(unescapedFormData);
            }

            return null;
        }

        private string GetDeserializedFileName(MultipartFileData fileData)
        {
            var fileName = GetFileName(fileData);
            return JsonConvert.DeserializeObject(fileName).ToString();
        }

        public string GetFileName(MultipartFileData fileData)
        {
            return fileData.Headers.ContentDisposition.FileName;
        }
    }
}
