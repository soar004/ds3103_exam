public interface IRace
{
    int Id {get; set;}
    string Winner {get; set;}
    TimeSpan WinnerTime {get; set;}
    double RaceDurationInSeconds {get; set;}
    string GrandPrix {get; set;}
    int NumberOfLaps {get; set;}
}