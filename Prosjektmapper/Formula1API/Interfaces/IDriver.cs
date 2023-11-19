namespace Formula1API.Interfaces {

    public interface IDriver
    {
        int? Id {get; set;}
        string? FirstName {get; set;}
        string? LastName {get; set;}
        int Age {get; }
        string? Nationality {get; set;}
        string? ImgDriver {get; set;}
}
}