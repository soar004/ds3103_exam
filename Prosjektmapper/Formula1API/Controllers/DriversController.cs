using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formula1API.Models;
using System;
using System.Linq;

[ApiController]
[Route("api/drivers")]
public class DriversController : ControllerBase
{
    private readonly Formula1DbContext _context;

    public DriversController(Formula1DbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Driver>> GetDrivers()
    {
        try
        {
            var drivers = _context.Drivers.ToList();
            return Ok(drivers);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpGet("{id}")]
    public ActionResult<Driver> GetDriverById(int id)
    {
        try
        {
            var driver = _context.Drivers.FirstOrDefault(d => d.Id == id);

            if (driver == null)
            {
                return NotFound();
            }

            return Ok(driver);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpPost]
    public ActionResult<Driver> CreateDriver([FromBody] Driver newDriver)
    {
        try
        {
            // Add the new driver to the database
            _context.Drivers.Add(newDriver);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetDriverById), new { id = newDriver.Id }, newDriver);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpPut("{id}")]
    public ActionResult<Driver> UpdateDriver(int id, [FromBody] Driver updatedDriver)
    {
        try
        {
            var existingDriver = _context.Drivers.FirstOrDefault(d => d.Id == id);

            if (existingDriver == null)
            {
                return NotFound();
            }

            // Update the existing driver in the database 
            existingDriver.FirstName = updatedDriver.FirstName;
            existingDriver.LastName = updatedDriver.LastName;
            existingDriver.Age = updatedDriver.Age;
            existingDriver.Nationality = updatedDriver.Nationality;
            existingDriver.ImgDriver = updatedDriver.ImgDriver;

            _context.SaveChanges();

            return Ok(existingDriver);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteDriver(int id)
    {
        try
        {
            var driverToRemove = _context.Drivers.FirstOrDefault(d => d.Id == id);

            if (driverToRemove == null)
            {
                return NotFound();
            }

            // Remove the driver from the database
            _context.Drivers.Remove(driverToRemove);
            _context.SaveChanges();

            return NoContent();
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }
}
