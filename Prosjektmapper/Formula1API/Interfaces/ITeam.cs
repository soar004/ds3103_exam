namespace Formula1API.Interfaces
{


public interface ITeam
{
    int? Id {get; set;}
    string? Manufacturer {get; set;}
    string? ImgCar {get; set;}
    string? Driver1 {get; set;}
    string? Driver2 {get; set;}

    int? Driver1Id {get; set;}
   int? Driver2Id {get; set;}

}
}