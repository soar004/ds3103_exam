namespace Formula1API.Models
{
    using Formula1API.Interfaces;
    using System;

    public class Driver : IDriver
    {
        public int? Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string? Nationality { get; set; }
        public byte[]? ImgDriver { get; set; }

        // Calculate property for age
        public int Age { get => CalculateAge(); set => throw new NotImplementedException();}
        
        private int CalculateAge()
        {
            // Calculate the driver's age based on their DOB and current date
            DateTime currentDate = DateTime.Now;
            int age = currentDate.Year - DateOfBirth.Year;
            if (currentDate.Month < DateOfBirth.Month || (currentDate.Month == DateOfBirth.Month && currentDate.Day < DateOfBirth.Day))
            {
                age--;
            }
            return age;
        }
    }
}
