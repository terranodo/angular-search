/*eslint angular/di: [2,"array"]*/
/*eslint max-len: [2,100]*/

(function() {
    angular.module('SolrHeatmapApp')
    .factory('searchFilter', ['Map', 'HeightModule', 'DateTimeService',
    function(Map, HeightModule, DateTimeService){
        var MapService = Map;
        var service = {
            geo: '[-90,-180 TO 90,180]',
            hm: '[-90,-180 TO 90,180]',
            time: null,
            text: null,
            user: null,
            textLimit: null,
            userLimit: null,
            numOfDocs: 50,
            gap: 'P1M',
            minDate: new Date(moment('2014-08-25').format('YYYY-MM-DD')),
            maxDate: new Date(moment().format('YYYY-MM-DD'))
        };

        var emptyStringForNull = function(value) {
            return value === null ? '' : value;
        };
        service.setFilter = function(filter) {
            if(filter.time) {
                service.time = filter.time;
                service.gap = DateTimeService.getGapFromTimeString(filter.time);
            }
            if(filter.user) {
                service.user = filter.user;
            }
            if(filter.text) {
                service.text = filter.text;
            }
            if(filter.geo) {
                service.geo = filter.geo;
            }
            if (filter.hm) {
                service.hm = filter.hm;
            }
        };

        service.resetFilter = function() {
            service.time = null;
            service.text = null;
            service.user = null;
            service.geo = MapService.getCurrentExtentQuery().geo;
            service.textLimit = null;
        };

        return service;
    }]);
})();
