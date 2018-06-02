define(["require", "exports", "@angular/core/testing", "@angular/platform-browser-dynamic/testing", "zone.js/dist/long-stack-trace-zone", "zone.js/dist/proxy.js", "zone.js/dist/sync-test", "zone.js/dist/jasmine-patch", "zone.js/dist/async-test", "zone.js/dist/fake-async-test"], function (require, exports, testing_1, testing_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __karma__.loaded = function () { };
    testing_1.getTestBed().initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
    const context = require.context('./', true, /\.spec\.ts$/);
    context.keys().map(context);
    __karma__.start();
});
//# sourceMappingURL=test.js.map