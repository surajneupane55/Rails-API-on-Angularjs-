 angular.module("todoApp").directive("editabletask", function() {
    return {
        restrict: "E",
        template: '<div><span ng-hide="editing" ng-class="spanClass">{{text}}</span><form ng-show="editing"><input type="text" ng-class="inputClass"></form><div>',
        scope: {
            text: "=model",
            onReady: "&",
            spanClass: "@",
            inputClass: "@"
        },
        replace: !0,
        link: function(a, b) {
            function c() {
                d(), h(!0), m.focus()
            }

            function d() {
                m.bind("blur keyup", function(a) {
                    (!j(a) || i(a)) && f()
                }), l.bind("submit", function() {
                    m[0].value && e(), f()
                })
            }

            function e() {
                a.text = m[0].value, a.$apply(), a.onReady()
            }

            function f() {
                g(), h(!1)
            }

            function g() {
                m.unbind(), l.unbind()
            }

            function h(b) {
                a.editing = b, a.$apply()
            }

            function i(a) {
                return 27 == a.originalEvent.keyCode
            }

            function j(a) {
                return a && "keyup" == a.type
            }
            var k = angular.element(b.children()[0]),
                l = angular.element(b.children()[1]),
                m = angular.element(b.children()[1][0]);
            k.bind("click", function() {
                m[0].value = a.text, c()
            })
        }
    }
});