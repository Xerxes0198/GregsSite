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

			//About this website
			this.aboutBlurb		= 'A small simple website for me to practice my AngularJS skills, and hopfully get familiar with BootStrap and HTML :)';
		});

		app.controller('ArticleController', function()
		{
			this.articles = articles;

			this.currentArticle = {};

			this.articleClicked = function(clickedArticle)
			{
				//Make it so I can make an article in active by clicking it again
				if(!clickedArticle.currentArticle)
				{
					this.currentArticle.currentArticle 	= false;
					this.currentArticle 				= clickedArticle;
					this.currentArticle.currentArticle 	= true;
				}
				else
				{
					//Set the current article to nothing if you meant to untick it
					this.currentArticle = {};
					clickedArticle.currentArticle = false;
				}
			}
		});

		var articles = 
		[
			{
				articleTitle:	'Another article by Greg Scott!!',
				articleContent: 'I\'ve been busy today, writing all the articles!',
				moreToRead: 	true,
				currentArticle: false,
			},
			{
				articleTitle: 	'Small Article',
				articleContent: 'A smaller article with not much else to read just so I have an excuse to hide a button uising an AngularJS directive.',
				moreToRead: 	false,
				currentArticle: false
			},			
			{
				articleTitle: 	'Artice Title Here',
				articleContent: 'There is where I add lots of data for this particular article',
				moreToRead: 	true,
				currentArticle: false
			},
			{
				articleTitle: 	'Artice Title Here',
				articleContent: 'There is where I add lots of data for this particular article',
				moreToRead: 	false,
				currentArticle: false
			},
			{
				articleTitle: 	'Artice Title Here',
				articleContent: 'There is where I add lots of data for this particular article',
				moreToRead: 	true,
				currentArticle: false
			},
		]

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
