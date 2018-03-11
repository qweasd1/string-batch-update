"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var editInfoSorter = function (x, y) { return x.start - y.start; };
function stringBatchReplace(originText, editInfos) {
    editInfos = editInfos.sort(editInfoSorter);
    var newTextCache = [];
    var cursor = 0;
    for (var _i = 0, editInfos_1 = editInfos; _i < editInfos_1.length; _i++) {
        var edit = editInfos_1[_i];
        newTextCache.push(originText.substring(cursor, edit.start));
        newTextCache.push(edit.text);
        switch (edit.type) {
            case EDIT_TYPE.insert:
                cursor = edit.start;
                break;
            case EDIT_TYPE.replace:
                cursor = edit.end;
                break;
        }
    }
    newTextCache.push(originText.substr(cursor));
    return newTextCache.join("");
}
exports.stringBatchReplace = stringBatchReplace;
var EDIT_TYPE;
(function (EDIT_TYPE) {
    EDIT_TYPE[EDIT_TYPE["replace"] = 0] = "replace";
    EDIT_TYPE[EDIT_TYPE["insert"] = 1] = "insert";
})(EDIT_TYPE = exports.EDIT_TYPE || (exports.EDIT_TYPE = {}));
//# sourceMappingURL=stringBatchReplace.js.map