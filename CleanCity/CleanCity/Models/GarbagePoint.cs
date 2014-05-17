using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using CleanCity.Types;

namespace CleanCity.Models
{
    public class GarbagePoint
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public GpsLocation Location { get; set; }
        public string Description { get; set; }
        public User Author { get; set; }
        public Int16 Rate { get; set; }
    }
}