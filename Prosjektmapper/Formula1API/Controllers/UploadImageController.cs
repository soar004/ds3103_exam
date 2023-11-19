namespace Formula1API.Controllers;

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
public IActionResult SaveImage(IFormFile file)
{
    string webRootPath = webHostEnvironment.WebRootPath;
    string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");

    using(var fileStream = new FileStream(absolutePath, FileMode.Create))
    {
        file.CopyTo(fileStream);
    }

    return Ok();
}

}
