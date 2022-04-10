export declare enum TypeOfErrorEnum {
    IGNORE = 0,
    THROW = 1,
    CONSOLE = 2
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
export declare type ArgumentsIsNotNullOrUndefinedReturnedType = (target: object, propertyKey: (string | symbol), descriptor: PropertyDescriptor) => PropertyDescriptor;
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
export declare const ArgumentsIsNotNullOrUndefined: (config?: IConfig | undefined) => ArgumentsIsNotNullOrUndefinedReturnedType;
