namespace Formula1API.Controllers
{



using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formula1API.Models;
using System;
using System.Linq;
using Formula1API.Contexts;
    using SQLitePCL;

    [ApiController]
[Route("api/races")]
public class RacesController : ControllerBase
{
    private readonly Formula1DbContext _context;

    public RacesController(Formula1DbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Race>>> GetRaces()
    {
        try
        {
            List<Race> races = await _context.Races.ToListAsync();
            return Ok();
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Race>> GetRaceById(int id)
    {
        try
        {
            Race? races = await _context.Races.FindAsync();
            if (races != null)
            {
                return Ok(races);
            }
            else
            {
                return NotFound();
            }
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        } 
    }

    [HttpPost]
    public ActionResult<Race> CreateRace([FromBody] Race newRace)
    {
        try
        {
            _context.Races.Add(newRace);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetRaceById), new {id = newRace.Id}, newRace);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpPut("{id}")]
    public ActionResult<Race> UpdateRace(int id,[FromBody] Race updatedRace)
    {
        try
        {
            var existingRace = _context.Races.FirstOrDefault(r => r.Id == id);

            if (existingRace == null)
            {
                return NotFound();
            }

            existingRace.Winner = updatedRace.Winner;
            existingRace.WinnerTime = updatedRace.WinnerTime;
            existingRace.RaceDurationInSeconds = updatedRace.RaceDurationInSeconds;
            existingRace.GrandPrix = updatedRace.GrandPrix;
            existingRace.NumberOfLaps = updatedRace.NumberOfLaps;

            _context.SaveChanges();

            return Ok(existingRace);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteRace(int id)
    {
        try 
        {
            var raceToRemove = _context.Races.FirstOrDefault(r => r.Id == id);

            if (raceToRemove == null)
            {
                return NotFound();
            }

            _context.Races.Remove(raceToRemove);
            _context.SaveChanges();

            return NoContent();
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }


    }
}
}