namespace Formula1API.Controllers;

using Formula1API.Contexts;
using Microsoft.AspNetCore.Mvc;

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
public IActionResult PostImage(IFormFile formFile){
    string webRootPath = webHostEnvironment.WebRootPath;
    string absolutePath = Path.Combine($"{webRootPath}/images/{formFile.FileName}");

    using(var fileStream = new FileStream(absolutePath, FileMode.Create)){
        formFile.CopyTo(fileStream);
    }
    return Ok();
}




}
