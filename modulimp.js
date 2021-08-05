define(["require", "exports", "./moduletut"], function (require, exports, Emp) {
    "use strict";
    exports.__esModule = true;
    console.log(Emp.age);
    var empObj = new Emp.Employee("parshwa vora", 2);
    empObj.displayEmployee();
});
