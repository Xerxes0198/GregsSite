(
	function()
	{
		var app = angular.module('angGS', []);

		app.controller('HomeController', function()
		{
			this.siteName 		= 'Greg\'s Playground';
			this.siteBy 		= 'Site by Greg Scott - Bootstrap and AngularJS!';
			this.MenuItem		= menuItems;
			this.subMenuItems 	= subMenuItems;

			//Profile Links
			this.LinkedInLink 	= 'http://au.linkedin.com/pub/greg-scott/97/802/6a9/';
			this.GitHubLink		= 'http://github.com/Xerxes0198';
		});

		var menuItems = 
		[		
			{
				
			},

		]

		var subMenuItems = 
		[
			{
				Name: 'Submenu Item 1',
				Link: 'http://www.google.com'
			},
			{
				Name: 'Submenu Item 2',
				Link: 'http://www.google.com'
			},
			{
				Name: 'Submenu Item 3',
				Link: 'http://www.google.com'
			},
			{
				Name: 'Submenu Item 4',
				Link: 'http://www.google.com'
			},
		]
	}
)();
