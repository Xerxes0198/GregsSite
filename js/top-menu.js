(
  function()
  {
    var app = angular.module('topMenu', function()
    {

    });

    app.directive('topMenu', function()
    {
      var dir = {};
      dir.restrict = 'E';
      dir.templateUrl = '/views/top-Menu.html';
      dir.controller = function()
      {
        this.currentMenuItem = {};
        this.menuItems = menuItems;
        this.subMenuItems = subMenuItems;

        this.menuItemClicked = function(menuItem)
        {
          alert(meunItem + ' clicked!');
        }
      };

      dir.controllerAs = 'menuCtrl';
      return dir;
    });

    var menuItems =
    [
      {
        Name:   'Home',
        Link:   '/index.html'
      },
      {
        Name:   'SQL Things',
        Link:   '/pages/sqlStuff.html'
      }
    ];

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
