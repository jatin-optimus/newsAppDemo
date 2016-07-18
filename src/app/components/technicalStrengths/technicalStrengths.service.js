(function () {
  'use strict';

  angular
    .module('innovaccerTest')
    .service('technicalStrengths', technicalStrengths);

  /** @ngInject */
  function technicalStrengths() {
    var data = [
      {
        'title': 'AngularJS',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png',
        'animation': 'animated slideInLeft'
      },
      {
        'title': 'Angular2',
        'description': 'One framework for Mobile and desktop.',
        'logo': 'ng2.png',
        'animation': 'animated slideInUp'
      },
      {
        'title': 'Typescript',
        'description': 'JavaScript that scales.',
        'logo': 'ts.png',
        'animation': 'animated slideInRight'
      },
      {
        'title': 'Javascript',
        'description': 'JavaScript is the programming language of HTML and the Web.',
        'logo': 'js.png',
        'animation': 'animated slideInLeft'
      },
      {
        'title': 'jQuery',
        'description': 'The Write Less, Do More, JavaScript Library.',
        'logo': 'jq.gif',
        'animation': 'animated slideInUp'
      },
      {
        'title': 'Ionic',
        'description': 'Ionic makes it incredibly easy to build beautiful and interactive mobile apps using HTML5 and AngularJS.',
        'logo': 'ionic.png',
        'animation': 'animated slideInRight'
      },
      {
        'title': 'Kendo-UI',
        'description': 'The Most Complete UI Framework to Speed Up Your HTML/JS Development.',
        'logo': 'kendo.png',
        'animation': 'animated slideInLeft'
      },
      {
        'title': 'Bootstrap',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png',
        'animation': 'animated slideInUp'
      },
      {
        'title': 'C++',
        'description': 'C++ is a middle-level programming language developed by Bjarne Stroustrup starting in 1979 at Bell Labs.',
        'logo': 'c++.png',
        'animation': 'animated slideInRight'
      },
      {
        'title': 'Firebase',
        'description': 'Firebase is a cloud services provider and backend as a service company based in San Francisco, California.',
        'logo': 'firebase.png',
        'animation': 'animated slideInLeft'
      },
      {
        'title': 'HTML',
        'description': 'HTML is a markup language for describing web documents (web pages). HTML stands for Hyper Text Markup Language.',
        'logo': 'html.png',
        'animation': 'animated slideInUp'
      },
      {
        'title': 'CSS',
        'description': 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.',
        'logo': 'css.png',
        'animation': 'animated slideInRight'
      }
    ];

    this.getStrengths = getStrengths;

    function getStrengths() {
      return data;
    }
  }

})();
