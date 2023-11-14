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

    // GET: api/teams
    [HttpGet]
    public ActionResult<IEnumerable<Team>> GetTeams()
    {
        try
        {
            // Retrieve all teams from the database
            var teams = _context.Teams.ToList();
            return Ok(teams);
        }
        catch (Exception ex)
        {
            // Handle internal server error
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    // GET: api/teams/{id}
    [HttpGet("{id}")]
    public ActionResult<Team> GetTeamById(int id)
    {
        try
        {
            // Retrieve a team by ID from the database
            var team = _context.Teams.FirstOrDefault(t => t.Id == id);

            if (team == null)
            {
                // Return 404 Not Found if the team is not found
                return NotFound();
            }
            return Ok(team);
        }
        catch (Exception ex)
        {
            // Handle internal server error
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    // POST: api/teams
    [HttpPost]
    public ActionResult<Team> CreateTeam([FromBody] Team newTeam)
    {
        try
        {
            // Add a new team to the database
            _context.Teams.Add(newTeam);
            _context.SaveChanges();

            // Return 201 Created with the newly created team
            return CreatedAtAction(nameof(GetTeamById), new { id = newTeam.Id }, newTeam);
        }
        catch (Exception ex)
        {
            // Handle internal server error
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    // PUT: api/teams/{id}
    [HttpPut("{id}")]
    public ActionResult<Team> UpdateTeam(int id, [FromBody] Team updatedTeam)
    {
        try
        {
            // Retrieve the existing team from the database
            var existingTeam = _context.Teams.FirstOrDefault(t => t.Id == id);

            if (existingTeam == null)
            {
                // Return 404 Not Found if the team is not found
                return NotFound();
            }

            // Update the existing team in the database
            existingTeam.Manufacturer = updatedTeam.Manufacturer;
            existingTeam.ImgCar = updatedTeam.ImgCar;
            existingTeam.Driver1 = updatedTeam.Driver1;
            existingTeam.Driver2 = updatedTeam.Driver2;

            _context.SaveChanges();

            // Return the updated team
            return Ok(existingTeam);
        }
        catch (Exception ex)
        {
            // Handle internal server error
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    // DELETE: api/teams/{id}
    [HttpDelete("{id}")]
    public IActionResult DeleteTeam(int id)
    {
        try
        {
            // Retrieve the team to be removed from the database
            var teamToRemove = _context.Teams.FirstOrDefault(t => t.Id == id);

            if (teamToRemove == null)
            {
                // Return 404 Not Found if the team is not found
                return NotFound();
            }

            // Remove the team from the database
            _context.Teams.Remove(teamToRemove);
            _context.SaveChanges();

            // Return 204 No Content after successful deletion
            return NoContent();
        }
        catch (Exception ex)
        {
            // Handle internal server error
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
}
