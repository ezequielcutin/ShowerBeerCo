// Load the JSON file and parse it
fetch('viewer-model.json')
    .then(response => response.json())
    .then(data => {
        window.viewerModel = data;

        // You can now use this data to initialize your app or perform other actions
        console.log(data);
    })
    .catch(error => console.error('Error loading viewer model:', error));

(function () {
    var noop = function noop() { };
    if ("performance" in window === false) {
        window.performance = {};
    }
    window.performance.mark = performance.mark || noop;
    window.performance.measure = performance.measure || noop;
    if ("now" in window.performance === false) {
        var nowOffset = Date.now();
        if (performance.timing && performance.timing.navigationStart) {
            nowOffset = performance.timing.navigationStart;
        }
        window.performance.now = function now() {
            return Date.now() - nowOffset;
        };
    }
})();



(function () {
    var now = Date.now()
    window.initialTimestamps = {
        initialTimestamp: now,
        initialRequestTimestamp: Math.round(performance.timeOrigin ? performance.timeOrigin : now - performance.now())
    }

    window.thunderboltTag = "QA_READY"
    window.thunderboltVersion = "1.14118.0"
})();


window.commonConfig = viewerModel.commonConfig;


!function () { "use strict"; const e = "client-session-bind", t = "tbReady", n = window.viewerModel.experiments["specs.thunderbolt.replaceDynamicModel"] ? window.viewerModel.accessTokensUrl : window.viewerModel.dynamicModelUrl; if (viewerModel.experiments["specs.thunderbolt.hardenFetchAndXHR"]) { let i = fetch; const o = document.cookie.split(";").map((e => e.trim())).filter((t => t.startsWith(e)))[0]?.split("=")[1], s = {}; function r(e) { const { logger: n } = e.detail; try { window.tb.init({ fetch: i, fetchHeaders: s }) } catch (e) { n.captureError(e, { tags: { feature: "thunderbolt-security" }, extra: { errorMessage: "TB003" } }) } finally { removeEventListener(t, r), i = fetch } } o && (s["client-binding"] = o, (() => { const t = `${e}=; max-age=0; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`; if ("undefined" != typeof location) { const e = new URL(location.href), n = e.hostname.includes("localhost") ? e.hostname : `.${e.hostname}`; document.cookie = `${t}; domain=${n}` } else document.cookie = t })()), addEventListener(t, r) } else window.fetchDynamicModel = () => window.viewerModel.siteFeaturesConfigs.sessionManager.isRunningInDifferentSiteContext ? Promise.resolve({}) : fetch(n, { credentials: "same-origin" }).then((function (e) { if (!e.ok) throw new Error(`[${e.status}]${e.statusText}`); return e.json() })), window.dynamicModelPromise = window.fetchDynamicModel() }();
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/handleAccessTokens.inline.631e363e.bundle.min.js.map


window.viewerModel = JSON.parse(document.getElementById('wix-essential-viewer-model').textContent);


fetch('viewer-model.json')
    .then(response => response.json())
    .then(data => {
        window.commonConfig = data.commonConfig;
    })
    .catch(error => console.error('Error loading viewer model:', error));


var bodyCacheable = true;

        var exclusionReason = { "shouldRender": true, "forced": false };
        var ssrInfo = { "cacheExclusionReason": "", "renderBodyTime": 984, "renderTimeStamp": 1717870361108 }