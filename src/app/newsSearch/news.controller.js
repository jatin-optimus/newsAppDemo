(function() {
  'use strict';

  angular
    .module('innovaccerTest')
    .controller('NewsController', NewsController);

  /** @ngInject */

  NewsController.$inject = ['dataservice', '$log'];
  function NewsController(dataservice, $log) {
    var vm = this;
    vm.newsRenderedData = [];
    vm.turnOffSpinner = false;

    activate();

    function activate() {
        return getData().then(function() {
            $log.info('Activated newDataView View');
        });
    }

    function getData() {
        return dataservice.getData()
            .then(function(data) {
                vm.newsRenderedData = data;
                vm.turnOffSpinner = true;
                return vm.newsRenderedData;
            });
    }
  }
})();
