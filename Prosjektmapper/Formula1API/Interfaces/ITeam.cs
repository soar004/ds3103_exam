namespace Formula1API.Interfaces
{


public interface ITeam
{
    int? Id {get; set;}
    string? Manufacturer {get; set;}
    string? ImgCar {get; set;}
    IDriver? Driver1 {get; set;}
    IDriver? Driver2 {get; set;}

    int? Driver1Id {get; set;}
   int? Driver2Id {get; set;}

}
}