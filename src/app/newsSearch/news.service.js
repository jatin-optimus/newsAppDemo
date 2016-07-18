angular
  .module('innovaccerTest')
  .factory('dataservice', dataservice);

dataservice.$inject = ['$http', '$log'];

function dataservice($http, $log) {
    return {
        getData: getData
    };

    function getData() {
        return $http.get('https://webhose.io/search?token=644d9a6d-6af4-43b8-ae1e-aa6feaebe1ed&format=json&q=language%3A(english)%20thread.country%3AIN&ts=1466143285922')
            .then(getDataComplete)
            .catch(getDataFailed);

        function getDataComplete(response) {
            return response.data;
        }

        function getDataFailed(error) {
            $log.error('XHR Failed for getData.' + error.data);
        }
    }
}
