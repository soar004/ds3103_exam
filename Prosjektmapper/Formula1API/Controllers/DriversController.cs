namespace Formula1API.Controllers
{

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using Formula1API.Models;
    using System;
    using System.Linq;
    using Formula1API.Contexts;

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
    public async Task<ActionResult<Driver>> CreateDriver([FromBody] Driver newDriver, IFormFile image)
    {
        try
        {
            if(image != null){
                    using var memoryStream = new MemoryStream();
                    image.CopyTo(memoryStream);
                    newDriver.ImgDriver = memoryStream.ToArray();
                }
            // Add the new driver to the database
            _context.Drivers.Add(newDriver);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDriverById), new { id = newDriver.Id }, newDriver);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Driver>> UpdateDriver(int id, [FromBody] Driver updatedDriver, IFormFile image)
    {
        try
        {
            var existingDriver = _context.Drivers.FirstOrDefault(d => d.Id == id);

            if (existingDriver == null)
            {
                return NotFound();
            }
            if(image != null){
                    using var memoryStream = new MemoryStream();
                    image.CopyTo(memoryStream);
                    existingDriver.ImgDriver = memoryStream.ToArray();
                }

            // Update the existing driver in the database 
            existingDriver.FirstName = updatedDriver.FirstName;
            existingDriver.LastName = updatedDriver.LastName;
            existingDriver.DateOfBirth = updatedDriver.DateOfBirth;
            existingDriver.Nationality = updatedDriver.Nationality;

            await _context.SaveChangesAsync();

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
}