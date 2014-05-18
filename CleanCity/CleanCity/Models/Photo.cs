using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace CleanCity.Models
{
    public class Photo
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int GarbagePointId { get; set; }
        [ForeignKey("GarbagePointId")]
        [IgnoreDataMember]
        public GarbagePoint Target { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        [IgnoreDataMember]
        public string ActualFileName { get; set; }
        [IgnoreDataMember]
        public string FilePath { get; set; }        
    }
}