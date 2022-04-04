import { NGXMethodDecorator } from "../core";
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
export declare function ArgumentsIsNotNullOrUndefined(config?: IConfig): NGXMethodDecorator;
