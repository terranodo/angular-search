/*eslint angular/controller-as: 0*/
/*eslint angular/di: [2,"array"]*/
/*eslint max-len: [2,120]*/
/**
 * Search Directive
 */
(function() {
    angular
    .module('search_toolbarsearch_component', [])
    .directive('toolbarSearch', ['MapService', 'HeatMapSourceGenerator', '$window', 'InfoService',
        function toolbarSearch(MapService, HeatMapSourceGenerator, $window, InfoService) {
            return {
                link: toolbarSearchLink,
                restrict: 'EA',
                templateUrl: 'components/toolbarSearch/toolbarSearchField.tpl.html',
                scope: {}
            };

            function toolbarSearchLink(scope) {

                var vm = scope;
                /**
                 *
                 */
                vm.searchInput = '';

                /**
                 *
                 */
                function getKeyboardCodeFromEvent(keyEvt) {
                    return $window.event ? keyEvt.keyCode : keyEvt.which;
                }

                /**
                 *
                 */
                vm.onKeyPress = function($event) {
                    // only fire the search if Enter-key (13) is pressed
                    if (getKeyboardCodeFromEvent($event) === 13) {
                        vm.doSearch();
                    }
                };

                /**
                 *
                 */
                vm.doSearch = function() {
                    // if no input is given
                    // if (vm.searchInput.length === 0) {
                    //    return false;
                    // }
                    HeatMapSourceGenerator.search(vm.searchInput);
                };

                vm.resetSearchInput = function() {
                    vm.searchInput = '';
                    HeatMapSourceGenerator.search(vm.searchInput);

                    // Reset the map
                    MapService.resetMap();

                    // Reset the date fields
                    //ToDo: Reset date fields
                };

                vm.showtoolbarSearchInfo = function() {
                    InfoService.showInfoPopup('textsearch');
                };
            }
        }]);
})();
