namespace Formula1API.Models;
using Formula1API.Interfaces;

public class Team : ITeam
{
    public int Id {get; set;}
    public string Winner {get; set;}
    public TimeSpan WinnerTime {get; set;}
    public double RaceDurationInSeconds {get; set;}
    public string GrandPrix {get; set;}
    public int NumberOfLaps {get; set;}
}