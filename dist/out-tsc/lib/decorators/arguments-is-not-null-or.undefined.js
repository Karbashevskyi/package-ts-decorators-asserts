export var TypeOfErrorEnum;
(function (TypeOfErrorEnum) {
    TypeOfErrorEnum[TypeOfErrorEnum["IGNORE"] = 0] = "IGNORE";
    TypeOfErrorEnum[TypeOfErrorEnum["THROW"] = 1] = "THROW";
    TypeOfErrorEnum[TypeOfErrorEnum["CONSOLE"] = 2] = "CONSOLE";
})(TypeOfErrorEnum || (TypeOfErrorEnum = {}));
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
export function ArgumentsIsNotNullOrUndefined(config) {
    const configuration = Object.assign({ count: 0, typeOfError: TypeOfErrorEnum.THROW }, config);
    return (target, key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = (...args) => {
            if (Array.isArray(args) && args.length > 0) {
                if (configuration.count > 0 && configuration.count > args.length) {
                    createErrorMessage(`Count and length of args is not correct!`, configuration.typeOfError);
                }
                for (let i = 0; i < args.length; i++) {
                    if (configuration.count > 0) {
                        if (configuration.count < i) {
                            break;
                        }
                    }
                    if ([undefined, null].includes(args[i])) {
                        createErrorMessage(`Argument of method ${key} is empty!`, configuration.typeOfError);
                    }
                }
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
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
ArgumentsIsNotNullOrUndefined();
//# sourceMappingURL=arguments-is-not-null-or.undefined.js.map