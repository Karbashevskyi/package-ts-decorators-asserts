# package-ts-decorators-asserts
Package with decorators in typescript language.

Enum for type of showing error or ignore.
```
export enum TypeOfErrorEnum {
    IGNORE,
    THROW,
    CONSOLE,
}
```

Interface for configuration decorator
```
export interface IConfig {
    count?: number;
    typeOfError?: TypeOfErrorEnum;
}
```

Example for using
```
  class TestModel {

    @ArgumentsIsNotNullOrUndefined()
    testMethod(argumentOne: string, argumentTwo: number, argumentThree: []) {
        return argumentOne;
    }

    @ArgumentsIsNotNullOrUndefined({
        count: 2 // Check only argumentOne and argumentTwo
    })
    testMethodTwo(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

    @ArgumentsIsNotNullOrUndefined({
        count: 1 // Check only argumentOne
    })
    testMethodThree(argumentOne: string, argumentTwo?: number, argumentThree?: []) {
        return argumentOne;
    }

    @ArgumentsIsNotNullOrUndefined({
        count: 1, // Check only argumentOne
        typeOfError: TypeOfErrorEnum.IGNORE // Not showing error
    })
    testMethodFour(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

    @ArgumentsIsNotNullOrUndefined({
        count: 2, // Check only argumentOne and argumentTwo
        typeOfError: TypeOfErrorEnum.CONSOLE // Showing error in console
    })
    testMethodFive(argumentOne: string, argumentTwo: number, argumentThree?: []) {
        return argumentOne;
    }

}

```
