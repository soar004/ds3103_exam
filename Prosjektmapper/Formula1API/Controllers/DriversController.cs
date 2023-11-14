using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Formula1API.Models;

[ApiController]
[Route("api/drivers")]
public class DriversController : ControllerBase
{
    private readonly Formula1DbContext _context;

    public DriversController(Formula1DbContext context)
    {
        _context = context; 
    }

    // GET: "api/drivers"
    [HttpGet]
    public IActionResult GetDrivers()
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

    // GET: "api/drivers/{id}"
    [HttpGet("{id}")]
    public IActionResult GetDriverById(int id)
    {
        try 
        {
            var driver = _context.Drivers.FirstOrDefault(d => d.Id == id);

            if (driver == null)
            {
                return NotFound();   
            }
            else
            {
                return Ok(driver);
            } 
        }
        catch (Exception ex) 
        { 
            return StatusCode(500, $"Internal server error: {ex.Message}");
        }
    }

    // POST: "api/drivers"
    [HttpPost]
    public IActionResult CreateDriver([FromBody] Driver newDriver)
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

    // PUT: "api/drivers/{id}"
    [HttpPut("{id}")]
    public IActionResult UpdateDriver(int id, [FromBody] Driver updatedDriver)
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

    // DELETE: api/drivers/{id}
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
