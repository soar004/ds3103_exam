namespace Formula1API.Controllers;

using Formula1API.Contexts;
using Microsoft.AspNetCore.Mvc;
using SQLitePCL;

[ApiController]
[Route("api/[controller]")]

public class ImageUploadController : ControllerBase
{
    private readonly IWebHostEnvironment webHostEnvironment;
    private readonly Formula1DbContext _context;

    public ImageUploadController(IWebHostEnvironment _webHostEnvironment, Formula1DbContext context)
    {
        webHostEnvironment = _webHostEnvironment;
        _context = context;
        
    }


[HttpGet]
public string Get()
{
        return "Hello from Get() in ImageUploadController";
}

[HttpPost]
public IActionResult SaveImage(int driverId, IFormFile formFile)
{
    try{
        var driverToUpdate = _context.Drivers.FirstOrDefault(d => d.Id == driverId);

        if(driverToUpdate == null){
            return NotFound("Driver not found");
        }

        using (var memoryStream = new MemoryStream()){
            formFile.CopyTo(memoryStream);
            driverToUpdate.ImgDriver = memoryStream.ToArray();
        }

        _context.SaveChanges();

        return Ok();
    }
    catch(Exception ex){
        return StatusCode(500, $"Internal server error: {ex.Message}");
    }
}


}
