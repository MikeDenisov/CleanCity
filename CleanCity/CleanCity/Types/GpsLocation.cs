using System;
using System.Web.Query.Dynamic;
using Newtonsoft.Json;

namespace CleanCity.Types
{
    public class GpsLocation
    {
        public double Latitude { get; set; }        
        public double Longitude { get; set; }

        public GpsLocation() { }

        public GpsLocation(double lat, double lng)
        {
            Latitude = lat;
            Longitude = lng;
        }

        public override string ToString()
        {
            return String.Format("{0},{1}", Latitude, Longitude);
        }

        public static GpsLocation Parse(string gpsLocation)
        {
            var latLngArr = gpsLocation.Split(new char[] {','}, StringSplitOptions.RemoveEmptyEntries);
            double lat;
            double lng;
            if (latLngArr.Length != 2)
            {
                throw new ArgumentException("invalid gps location string");
            }
            if (!double.TryParse(latLngArr[0], out lat))
            {
                throw new ParseException("cannot parse lattitude", 0);
            }
            if (!double.TryParse(latLngArr[1], out lng))
            {
                throw new ParseException("cannot parse loongtitude", 1);
            }
            return new GpsLocation(lat, lng);
        }

        public static bool TryParse(string gpsLocation, out GpsLocation result)
        {
            var latLngArr = gpsLocation.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            double lat;
            double lng;
            if (latLngArr.Length != 2)
            {
                result = null;
                return false;
            }
            if (!double.TryParse(latLngArr[0], out lat))
            {
                result = null;
                return false;
            }
            if (!double.TryParse(latLngArr[1], out lng))
            {
                result = null;
                return false;
            }
            result = new GpsLocation(lat, lng);
            return true;
        }
    }
}