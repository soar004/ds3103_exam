public interface ITeam
{
    int Id {get; set;}
    string Manufacturer {get; set;}
    string ImgCar {get; set;}
    IDriver Driver1 {get; set;}
    IDriver Driver2 {get; set;}
}