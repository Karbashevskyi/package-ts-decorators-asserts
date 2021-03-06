"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentsIsNotNullOrUndefined = exports.TypeOfErrorEnum = void 0;
var TypeOfErrorEnum;
(function (TypeOfErrorEnum) {
    TypeOfErrorEnum[TypeOfErrorEnum["IGNORE"] = 0] = "IGNORE";
    TypeOfErrorEnum[TypeOfErrorEnum["THROW"] = 1] = "THROW";
    TypeOfErrorEnum[TypeOfErrorEnum["CONSOLE"] = 2] = "CONSOLE";
})(TypeOfErrorEnum = exports.TypeOfErrorEnum || (exports.TypeOfErrorEnum = {}));
/**
 *
 * @param config has interface IConfig
 *
 * Example default: @ArgumentsIsNotNullOrUndefined()
 *
 * Now decorator will check only first 2 arguments from args array.
 * Example change count for check arguments: @ArgumentsIsNotNullOrUndefined({count: 2})
 *
 * Now all errors will show in console of browser.
 * Example change type of error: @ArgumentsIsNotNullOrUndefined({typeOfError: TypeOfError.CONSOLE})
 *
 */
const ArgumentsIsNotNullOrUndefined = (config) => {
    const configuration = Object.assign({ count: 0, typeOfError: TypeOfErrorEnum.THROW, itemCheckedList: [undefined, null] }, config);
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (Array.isArray(args) && (args === null || args === void 0 ? void 0 : args.length)) {
                if ((configuration === null || configuration === void 0 ? void 0 : configuration.count) > args.length) {
                    createErrorMessage(`Count and length of args is not correct!`, configuration.typeOfError);
                }
                const argsCopy = [...args];
                if (configuration === null || configuration === void 0 ? void 0 : configuration.count) {
                    argsCopy.length = configuration.count;
                }
                if (argsCopy.some((item) => { var _a; return (_a = configuration === null || configuration === void 0 ? void 0 : configuration.itemCheckedList) === null || _a === void 0 ? void 0 : _a.includes(item); })) {
                    createErrorMessage(`Argument of method ${String(propertyKey)} is empty!`, configuration.typeOfError);
                }
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
};
exports.ArgumentsIsNotNullOrUndefined = ArgumentsIsNotNullOrUndefined;
/**
 *
 * @param message is string, write you custom message
 * @param typeOfError choice your method showing of error
 */
function createErrorMessage(message = 'Error', typeOfError) {
    if (typeOfError) {
        switch (typeOfError) {
            case TypeOfErrorEnum.THROW:
                throw new Error(message);
            case TypeOfErrorEnum.CONSOLE:
                console.assert(false, message);
                break;
        }
    }
}
