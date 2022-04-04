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
 * @param config
 * @constructor
 *
 * Example default: @ArgumentsIsNotNullOrUndefined()
 * Example change count for check arguments: @ArgumentsIsNotNullOrUndefined({count: 2}) // Now decorator will check only first 2 arguments from args array.
 * Example change type of error: @ArgumentsIsNotNullOrUndefined({typeOfError: TypeOfError.CONSOLE}) // Now all errors will showing in console of browser.
 *
 */
function ArgumentsIsNotNullOrUndefined(config) {
    const configuration = Object.assign({ count: 0, typeOfError: TypeOfErrorEnum.THROW, itemCheckedList: [undefined, null] }, config);
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = (...args) => {
            if (Array.isArray(args) && args.length > 0) {
                if (configuration.count > 0 && configuration.count > args.length) {
                    createErrorMessage(`Count and length of args is not correct!`, configuration.typeOfError);
                }
                const argsCopy = [...args];
                if (configuration.count > 0) {
                    argsCopy.length = configuration.count;
                }
                if (argsCopy.some((item) => configuration.itemCheckedList.includes(item))) {
                    createErrorMessage(`Argument of method ${String(propertyKey)} is empty!`, configuration.typeOfError);
                }
            }
            return originalMethod.apply(this, args); // this: "noImplicitThis": false,
        };
        return descriptor;
    };
}
exports.ArgumentsIsNotNullOrUndefined = ArgumentsIsNotNullOrUndefined;
/**
 *
 * @param message
 * @param typeOfError
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
// ArgumentsIsNotNullOrUndefined();
