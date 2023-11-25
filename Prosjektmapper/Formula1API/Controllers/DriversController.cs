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

    // GET: api/drivers
    [HttpGet]
    public async Task<ActionResult<List<Driver>>> GetDrivers()
    {
        try
        {
            // Retrieve all teams from the database
            List<Driver> drivers = await _context.Drivers.ToListAsync();
            if(drivers != null){
                return Ok(drivers);
            }
            else{
                return NotFound();
            }
        }
        catch (Exception ex)
        {
            // Handle internal server error
            return StatusCode(500, $"Internal server error by getting drivers: {ex.Message}");
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Driver>> GetDriverById(int id)
    {
        try
        {
            Driver? driver = await _context.Drivers.FindAsync(id);

            if (driver != null )
            {
                return Ok(driver);
            }
            else{
                return NotFound();
            }
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error by getting drivers by id: {ex.Message}");
        }
    }
    [HttpGet("byname/{name}")]
    public ActionResult<IEnumerable<Driver>> GetDriverByName(string name) {
        try 
        {
            var drivers = _context.Drivers
                .AsEnumerable()
                .Where(d => (d.FirstName + " " + d.LastName).Contains(name, StringComparison.OrdinalIgnoreCase))
                .ToList();

            return Ok(drivers);  
        }
        catch(Exception ex)
        {
            return StatusCode(500, $"Internal server error by getting drivers by name: {ex.Message}");
        }
    }

    [HttpPost]
    public IActionResult PostDriver(Driver newDriver)
    {
        try{
            _context.Drivers.Add(newDriver);
            _context.SaveChanges();
            return Ok();//CreatedAtAction(nameof(GetDriverById), new{id = newDriver.Id }, newDriver); //204

        }
        catch (Exception ex){
            return StatusCode(500, $"Internal server error by creating a driver. {ex.Message}");
        }
    }

    /*[HttpPut("{id}")]
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

            // Update the existing driver in the database 
            existingDriver.FirstName = updatedDriver.FirstName;
            existingDriver.LastName = updatedDriver.LastName;
            existingDriver.Age = updatedDriver.Age;
            existingDriver.Nationality = updatedDriver.Nationality;

            await _context.SaveChangesAsync();

            return Ok(existingDriver);
            }
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal server error by updating a driver: {ex.Message}");
        }
    }*/

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
            return StatusCode(500, $"Internal server error by deleting a driver: {ex.Message}");
        }
    }
}
}