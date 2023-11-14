using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formula1API.Models;
using System;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("api/teams")]
public class TeamsController : ControllerBase
{
    private readonly Formula1DbContext _context;

    public TeamsController(Formula1DbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Team>> GetTeams()
    {
        try
        {
            var teams = _context.Teams.ToList();
            return Ok(teams);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpGet("{id}")]
    public ActionResult<Team> GetTeamById(int id)
    {
        try
        {
            var team = _context.Teams.FirstOrDefault(t => t.Id == id);

            if (team == null)
            {
                return NotFound();
            }
            return Ok(team);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpPost]
    public ActionResult<Team> CreateTeam([FromBody] Team newTeam)
    {
        try
        {
            _context.Teams.Add(newTeam);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetTeamById), new { id = newTeam.Id }, newTeam);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpPut("{id}")]
    public ActionResult<Team> UpdateTeam(int id, [FromBody] Team updatedTeam)
    {
        try
        {
            var existingTeam = _context.Teams.FirstOrDefault(t => t.Id == id);

            if (existingTeam == null)
            {
                return NotFound();
            }

            existingTeam.Manufacturer = updatedTeam.Manufacturer;
            existingTeam.ImgCar = updatedTeam.ImgCar;
            existingTeam.Driver1 = updatedTeam.Driver1;
            existingTeam.Driver2 = updatedTeam.Driver2;

            _context.SaveChanges();

            return Ok(existingTeam);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteTeam(int id)
    {
        try
        {
            var teamToRemove = _context.Teams.FirstOrDefault(t => t.Id == id);

            if (teamToRemove == null)
            {
                return NotFound();
            }

            _context.Teams.Remove(teamToRemove);
            _context.SaveChanges();

            return NoContent();
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
}
