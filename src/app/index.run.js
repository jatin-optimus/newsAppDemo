(function() {
  'use strict';

  angular
    .module('innovaccerTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
