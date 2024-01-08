"use strict";
/** a, b, c are callback function，
 * run doByOrder will log b, c, a
 * please modify doByOrder function to let it log
 * a, b, c
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const a = (callback) => {
    setTimeout(() => {
        callback("a");
    }, 500);
};
const b = (callback) => {
    setTimeout(() => {
        callback("b");
    }, 200);
};
const c = (callback) => {
    setTimeout(() => {
        callback("c");
    }, 300);
};
// modify this function to log "a" => "b" => "c"
const doByOrder = (callback) => {
    a(callback);
    b(callback);
    c(callback);
};
const doByOrder2 = (callback) => {
    a((resultA) => {
        callback(resultA);
        b((resultB) => {
            callback(resultB);
            c((resultC) => {
                callback(resultC);
            });
        });
    });
};
const doByOrder3 = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise((resolve) => {
        a((result) => {
            callback(result);
            resolve();
        });
    });
    yield new Promise((resolve) => {
        b((result) => {
            callback(result);
            resolve();
        });
    });
    yield new Promise((resolve) => {
        c((result) => {
            callback(result);
            resolve();
        });
    });
});
const doByOrder4 = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    const executeCallback = (func) => __awaiter(void 0, void 0, void 0, function* () {
        yield new Promise((resolve) => {
            func((result) => {
                callback(result);
                resolve();
            });
        });
    });
    yield executeCallback(a);
    yield executeCallback(b);
    yield executeCallback(c);
});
const doByOrder5 = (callback) => __awaiter(void 0, void 0, void 0, function* () {
    const callbacks = [a, b, c];
    for (const func of callbacks) {
        yield new Promise((resolve) => {
            func((result) => {
                callback(result);
                resolve();
            });
        });
    }
});
doByOrder(console.log);
