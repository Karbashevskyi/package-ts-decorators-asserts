export declare enum TypeOfErrorEnum {
    THROW = 0,
    CONSOLE = 1
}
export interface IConfig {
    count?: number;
    typeOfError?: TypeOfErrorEnum;
}
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
export declare function CheckArgumentsOfMethodDecorator(config: IConfig): any;
