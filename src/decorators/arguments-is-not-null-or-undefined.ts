import {NGXMethodDecorator, NGXTypedPropertyDescriptor} from "../core";

export enum TypeOfErrorEnum {
    IGNORE,
    THROW,
    CONSOLE,
}

export interface IConfig {
    count?: number;
    typeOfError?: TypeOfErrorEnum;
    itemCheckedList?: any[];
}

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
export function ArgumentsIsNotNullOrUndefined(config?: IConfig): NGXMethodDecorator  { // TODO interface
    const configuration = {
        count: 0,
        typeOfError: TypeOfErrorEnum.THROW,
        itemCheckedList: [undefined, null],
        ...config,
    };

    return (target: object, propertyKey: string | symbol, descriptor: NGXTypedPropertyDescriptor<any>): NGXTypedPropertyDescriptor<any> => {
        const originalMethod = descriptor.value;

        descriptor.value = (...args: any[]) => {
            if (Array.isArray(args) && args.length > 0) {
                if (configuration.count > 0 && configuration.count > args.length) {
                    createErrorMessage(`Count and length of args is not correct!`, configuration.typeOfError);
                }

                const argsCopy = [...args];

                if (configuration.count > 0) {
                    argsCopy.length = configuration.count;
                }

                if (argsCopy.some((item: any) => configuration.itemCheckedList.includes(item))) {
                    createErrorMessage(`Argument of method ${String(propertyKey)} is empty!`, configuration.typeOfError);
                }

            }

            return originalMethod.apply(this, args); // this: "noImplicitThis": false,
        };

        return descriptor;
    };
}

/**
 *
 * @param message
 * @param typeOfError
 */
function createErrorMessage(message: string = 'Error', typeOfError: TypeOfErrorEnum) {
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
