namespace Formula1API.Models
{
    using Formula1API.Interfaces;
    using System;

    public class Driver : IDriver
    {
        public int? Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public int Age { get; set; }
        public string? Nationality { get; set; }
        public byte[]? ImgDriver { get; set; }

        
        
    }
}
