export enum TypeOfErrorEnum {
    THROW,
    CONSOLE
}
export interface IConfig {
    count?: number;
    typeOfError?: TypeOfErrorEnum
}
export function CheckArgumentsOfMethodDecorator(config: IConfig): any {

    const configuration = {
        count: 0,
        typeOfError: TypeOfErrorEnum.THROW,
        ...config
    };

    return function(target: Function, key: string, descriptor: TypedPropertyDescriptor<any>): any {

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {

            if (Array.isArray(args) && args.length > 0) {
                if ((configuration.count > 0 && configuration.count > args.length)) {
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
    }
}
function createErrorMessage(message: string = 'Error', typeOfError: TypeOfErrorEnum) {
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
