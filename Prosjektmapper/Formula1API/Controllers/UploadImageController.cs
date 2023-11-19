namespace Formula1API.Controllers;

using System.Linq.Expressions;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]

public class ImageUploadController : ControllerBase
{
    private readonly IWebHostEnvironment webHostEnvironment;

    public ImageUploadController(IWebHostEnvironment _webHostEnvironment)
    {
        webHostEnvironment = _webHostEnvironment;
    }


[HttpGet]
public string Get()
{
        return "Hello from Get() in ImageUploadController";
}

[HttpPost]
public IActionResult SaveImage(IFormFile formFile)
{
    try{
        using (var memoryStream = new MemoryStream()){
            formFile.CopyTo(memoryStream);
            var imgData = memoryStream.ToArray();
        }
        /*string webRootPath = webHostEnvironment.WebRootPath;
        string absolutePath = Path.Combine($"{webRootPath}/images/{formFile.FileName}");

        using(var fileStream = new FileStream(absolutePath, FileMode.Create))
        {
            formFile.CopyTo(fileStream);
        }*/

        return Ok();
    }
    catch(Exception ex){
        return StatusCode(500, $"Internal server error: {ex.Message}");
    }
}


}
