/*eslint angular/controller-as: 0*/
/*eslint angular/di: [2,"array"]*/
/*eslint max-len: [2,90]*/
/**
 * Export Directive
 */
(function() {
    angular
    .module('search_exportButton_component', [])
    .directive('exportButton', ['HeatMapSourceGenerator',
        function(HeatMapSourceGenerator) {
            return {
                link: ExportLink,
                restrict: 'EA',
                template: '<button class="btn btn-default" id="exportbtn" ' +
                'title="EXPORT" type="button" ng-click="startExport()">EXPORT</button>',
                scope: {}
            };

            function ExportLink(scope) {
                scope.startExport = function() {
                    HeatMapSourceGenerator.startCsvExport(100);
                };
            }
        }]);
})();