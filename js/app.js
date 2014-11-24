(
	function()
	{
		var app = angular.module('angGS', ['articles', 'topMenu']);

		app.controller('HomeController', function()
		{
			this.siteName 		= 'Greg\'s Playground';
			this.siteBy 		= 'Site by Greg Scott - Bootstrap and AngularJS!';

			//Profile Links
			this.LinkedInLink 	= 'http://au.linkedin.com/pub/greg-scott/97/802/6a9/';
			this.GitHubLink		= 'http://github.com/Xerxes0198';

			//About this website
			this.aboutBlurb		= 'A small simple website for me to practice my AngularJS skills, and hopfully get familiar with BootStrap and HTML :)';
		});

		app.directive('footer', function()
		{
			var dir = {};
			dir.restrict = 'E';
			dir.templateUrl = 'views/footer.html';
			return dir;
		});


	}
)();
