# package-ts-decorators-asserts
Package with decorators in typescript language.

![NPM Latest Version](https://img.shields.io/npm/v/package-ts-decorators-asserts)
![Downloads Count](https://img.shields.io/npm/dm/package-ts-decorators-asserts.svg)
![Bundle Size](https://packagephobia.now.sh/badge?p=package-ts-decorators-asserts)
![Test Status](https://img.shields.io/travis/karbashevskyi/package-ts-decorators-asserts/main.svg)
![Last Update Date](https://img.shields.io/github/last-commit/karbashevskyi/package-ts-decorators-asserts)
![Project License](https://img.shields.io/github/license/karbashevskyi/package-ts-decorators-asserts)

## Installation

```bash
$ npm install package-ts-decorators-asserts
```

## Import
```typescript
import {ArgumentsIsNotNullOrUndefined} from "package-ts-decorators-asserts";
```

## Enum for type of showing error or ignore.
```typescript
export enum TypeOfErrorEnum {
    IGNORE,
    THROW,
    CONSOLE,
}
```

## Interface for configuration decorator
```typescript
export interface IConfig {
    count?: number;
    typeOfError?: TypeOfErrorEnum;
    itemCheckedList?: any[]; // Default is [undefined, null]
}
```

## Examples
```typescript
  class Model {

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

## My Social Network Links
[Twitter Profile](https://twitter.com/Karbashevskyi)

[LinkedIn Profile](https://www.linkedin.com/in/ivan-karbashevskyi/)

[GitHub Profile](https://github.com/Karbashevskyi)

[medium.com Profile](https://medium.com/@ivankarbashevskyi)

[Pateron Profile](https://www.patreon.com/karbash)
