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

export interface IConfigStrict {
    count: number;
    typeOfError: TypeOfErrorEnum;
    itemCheckedList: any[];
}

export type ArgumentsIsNotNullOrUndefinedReturnedType = (
    target: object,
    propertyKey: (string | symbol),
    descriptor: PropertyDescriptor
) => PropertyDescriptor

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
export const ArgumentsIsNotNullOrUndefined = (config?: IConfig): ArgumentsIsNotNullOrUndefinedReturnedType => {
    const configuration: IConfigStrict = {
        count: 0,
        typeOfError: TypeOfErrorEnum.THROW,
        itemCheckedList: [undefined, null],
        ...config,
    };

    return (
        target: object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor,
    ): PropertyDescriptor => {
        const originalMethod: any = descriptor.value;

        descriptor.value = function (...args: any[]) {

            if (Array.isArray(args) && args.length > 0) {
                if (configuration.count > 0 && configuration.count > args.length) {
                    createErrorMessage(`Count and length of args is not correct!`, configuration.typeOfError);
                }

                const argsCopy = [...args];

                if (configuration?.count > 0) {
                    argsCopy.length = configuration.count;
                }

                if (argsCopy.some((item: any) => configuration.itemCheckedList.includes(item))) {
                    createErrorMessage(`Argument of method ${String(propertyKey)} is empty!`, configuration.typeOfError);
                }
            }

            return originalMethod.apply(this, args);
        };

        return descriptor;
    };
}

/**
 *
 * @param message is string, write you custom message
 * @param typeOfError choice your method showing of error
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
