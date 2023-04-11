using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Net;

namespace NovatechApp.Controllers
{
	[ApiController]
	[Route("[controller]")]
	[EnableCors()]
	public class NovatechController : ControllerBase
	{

		[HttpGet]
		public string Get()
		{
			var url = "https://gorest.co.in/public/v2/users";
			WebRequest request = HttpWebRequest.Create(url);
			WebResponse response = request.GetResponse();
			StreamReader reader = new StreamReader(response.GetResponseStream());
			string responseText = reader.ReadToEnd();
			return responseText;
		}
	}
}
