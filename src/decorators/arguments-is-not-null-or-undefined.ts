import { NGXMethodDecorator, NGXTypedPropertyDescriptor } from '../core';

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
export function ArgumentsIsNotNullOrUndefined(config?: IConfig): NGXMethodDecorator {
  const configuration = {
    count: 0,
    typeOfError: TypeOfErrorEnum.THROW,
    itemCheckedList: [undefined, null],
    ...config,
  };

  return (
    target: object,
    propertyKey: string | symbol,
    descriptor: NGXTypedPropertyDescriptor<any>,
  ): NGXTypedPropertyDescriptor<any> => {
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
