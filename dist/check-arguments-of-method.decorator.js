"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckArgumentsOfMethodDecorator = exports.TypeOfErrorEnum = void 0;
var TypeOfErrorEnum;
(function (TypeOfErrorEnum) {
    TypeOfErrorEnum[TypeOfErrorEnum["THROW"] = 0] = "THROW";
    TypeOfErrorEnum[TypeOfErrorEnum["CONSOLE"] = 1] = "CONSOLE";
})(TypeOfErrorEnum = exports.TypeOfErrorEnum || (exports.TypeOfErrorEnum = {}));
/**
 *
 * @param config
 * @constructor
 *
 * Example default: @CheckArgumentsOfMethodDecorator()
 * Example change count for check arguments: @CheckArgumentsOfMethodDecorator({count: 2}) // Now decorator will check only first 2 arguments from args array.
 * Example change type of error: @CheckArgumentsOfMethodDecorator({typeOfError: TypeOfError.CONSOLE}) // Now all errors will showing in console of browser.
 *
 */
function CheckArgumentsOfMethodDecorator(config) {
    var configuration = __assign({ count: 0, typeOfError: TypeOfErrorEnum.THROW }, config);
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (Array.isArray(args) && args.length > 0) {
                if ((configuration.count > 0 && configuration.count > args.length)) {
                    createErrorMessage("Count and length of args is not correct!", configuration.typeOfError);
                }
                for (var i = 0; i < args.length; i++) {
                    if (configuration.count > 0) {
                        if (configuration.count < i) {
                            break;
                        }
                    }
                    if ([undefined, null].includes(args[i])) {
                        createErrorMessage("Argument of method " + key + " is empty!", configuration.typeOfError);
                    }
                }
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
exports.CheckArgumentsOfMethodDecorator = CheckArgumentsOfMethodDecorator;
/**
 *
 * @param message
 * @param typeOfError
 */
function createErrorMessage(message, typeOfError) {
    if (message === void 0) { message = 'Error'; }
    switch (typeOfError) {
        case TypeOfErrorEnum.THROW:
            throw new Error(message);
        case TypeOfErrorEnum.CONSOLE:
            console.assert(false, message);
            break;
        default:
            console.assert(false, message);
    }
}
